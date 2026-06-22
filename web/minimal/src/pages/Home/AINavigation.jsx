/*
Copyright (C) 2025 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/

import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Grid2X2,
  Search,
  Sparkles,
  X,
} from 'lucide-react';

import {
  aiNavigationCollections,
  getNavigationStats,
} from './aiNavigation.data';

const PREVIEW_LIMIT = 8;

const normalizeText = (value) => (value || '').toLowerCase();

const DEFAULT_COLLECTION_ID = 'apps';

const AINavigation = ({ preview = false, showBackLink = true }) => {
  const { t } = useTranslation();
  const [activeCollectionId, setActiveCollectionId] = useState(
    DEFAULT_COLLECTION_ID,
  );
  const [activeCategoryId, setActiveCategoryId] = useState('all');
  const [query, setQuery] = useState('');

  const activeCollection = useMemo(
    () =>
      aiNavigationCollections.find(
        (collection) => collection.id === activeCollectionId,
      ) || aiNavigationCollections[0],
    [activeCollectionId],
  );

  const stats = useMemo(
    () => getNavigationStats(activeCollection),
    [activeCollection],
  );

  const flattenedItems = useMemo(() => {
    const sourceCategories =
      activeCategoryId === 'all'
        ? activeCollection.categories
        : activeCollection.categories.filter(
            (category) => category.id === activeCategoryId,
          );

    return sourceCategories.flatMap((category) =>
      category.items.map((item) => ({
        ...item,
        categoryId: category.id,
        categoryName: category.name,
      })),
    );
  }, [activeCategoryId, activeCollection]);

  const visibleItems = useMemo(() => {
    const keyword = normalizeText(query.trim());
    const filteredItems = keyword
      ? flattenedItems.filter((item) => {
          const content = normalizeText(
            `${item.name} ${item.description} ${item.categoryName}`,
          );
          return content.includes(keyword);
        })
      : flattenedItems;

    return preview ? filteredItems.slice(0, PREVIEW_LIMIT) : filteredItems;
  }, [flattenedItems, preview, query]);

  const handleCollectionChange = (collectionId) => {
    setActiveCollectionId(collectionId);
    setActiveCategoryId('all');
    setQuery('');
  };

  return (
    <section
      className={`ai-navigation ${preview ? 'ai-navigation--preview' : 'ai-navigation--full'}`}
      aria-label={t('AI导航')}
    >
      <div className='ai-navigation__header'>
        <div className='ai-navigation__title-group'>
          <div className='ai-navigation__eyebrow'>
            <Sparkles size={15} />
            <span>{t('AI导航')}</span>
          </div>
          <h2>{preview ? t('精选推荐') : t('智能体与工具导航')}</h2>
          {!preview && (
            <p>
              {t(
                '按 AI 工具集和 AI 应用集整理的入口，优先展示智能体、创作、办公、编程和移动应用场景。',
              )}
            </p>
          )}
        </div>

        {(preview || showBackLink) && (
          <div className='ai-navigation__actions'>
            {preview ? (
              <Link className='ai-navigation__more' to='/ai-navigation'>
                <span>{t('查看完整导航')}</span>
                <ArrowRight size={16} />
              </Link>
            ) : (
              <Link className='ai-navigation__more' to='/'>
                <ArrowLeft size={16} />
                <span>{t('返回首页')}</span>
              </Link>
            )}
          </div>
        )}
      </div>

      <div className='ai-navigation__toolbar'>
        <div className='ai-navigation__segments' role='tablist'>
          {aiNavigationCollections.map((collection) => {
            const collectionStats = getNavigationStats(collection);
            const active = collection.id === activeCollection.id;
            return (
              <button
                key={collection.id}
                className={`ai-navigation__segment ${active ? 'is-active' : ''}`}
                type='button'
                role='tab'
                aria-selected={active}
                onClick={() => handleCollectionChange(collection.id)}
              >
                <span>{t(collection.title)}</span>
                <small>
                  {t('已收录 {{count}} 个条目', {
                    count: collectionStats.itemCount,
                  })}
                </small>
              </button>
            );
          })}
        </div>

        {!preview && (
          <label className='ai-navigation__search'>
            <Search size={16} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t('搜索工具、应用或场景')}
            />
            {query && (
              <button
                type='button'
                aria-label={t('清空筛选')}
                onClick={() => setQuery('')}
              >
                <X size={15} />
              </button>
            )}
          </label>
        )}
      </div>

      <div className='ai-navigation__meta'>
        <span>
          <Grid2X2 size={14} />
          {t('共 {{count}} 个分类', { count: stats.categoryCount })}
        </span>
        <a href={activeCollection.sourceUrl} target='_blank' rel='noreferrer'>
          {t('来源')}：{t(activeCollection.title)}
        </a>
      </div>

      <div className='ai-navigation__categories' aria-label={t('分类')}>
        <button
          type='button'
          className={activeCategoryId === 'all' ? 'is-active' : ''}
          onClick={() => setActiveCategoryId('all')}
        >
          {t('全部')}
        </button>
        {activeCollection.categories.map((category) => (
          <button
            key={category.id}
            type='button'
            className={activeCategoryId === category.id ? 'is-active' : ''}
            onClick={() => setActiveCategoryId(category.id)}
          >
            {t(category.name)}
          </button>
        ))}
      </div>

      {visibleItems.length > 0 ? (
        <div className='ai-navigation__grid'>
          {visibleItems.map((item) => (
            <a
              key={`${activeCollection.id}-${item.categoryId}-${item.name}`}
              className='ai-navigation__card'
              href={item.url}
              target='_blank'
              rel='noreferrer'
            >
              <span className='ai-navigation__avatar' aria-hidden='true'>
                {item.name.slice(0, 1).toUpperCase()}
              </span>
              <span className='ai-navigation__card-body'>
                <span className='ai-navigation__card-title'>
                  <strong>{item.name}</strong>
                  <ExternalLink size={14} />
                </span>
                <span className='ai-navigation__card-desc'>
                  {item.description}
                </span>
                <span className='ai-navigation__tag'>
                  {t(item.categoryName)}
                </span>
              </span>
            </a>
          ))}
        </div>
      ) : (
        <div className='ai-navigation__empty'>
          <p>{t('没有找到匹配的导航项')}</p>
          <button type='button' onClick={() => setQuery('')}>
            {t('清空筛选')}
          </button>
        </div>
      )}
    </section>
  );
};

export default AINavigation;
