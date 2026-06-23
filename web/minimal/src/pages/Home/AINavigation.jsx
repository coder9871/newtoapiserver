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

// 顶部分类 tab 的展示顺序（与数据定义顺序解耦）
const COLLECTION_DISPLAY_ORDER = ['apps', 'tools'];

const NavigationIcon = ({ item }) => {
  const [failed, setFailed] = useState(false);

  return (
    <span className='ai-navigation__avatar' aria-hidden='true'>
      {item.icon && !failed ? (
        <img
          src={item.icon}
          alt=''
          loading='lazy'
          onError={() => setFailed(true)}
        />
      ) : (
        item.name.slice(0, 1).toUpperCase()
      )}
    </span>
  );
};

const AINavigation = ({ preview = false }) => {
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

  // 按展示顺序排序的分类集合，仅用于顶部 tab 渲染
  const orderedCollections = useMemo(
    () =>
      [...aiNavigationCollections].sort(
        (a, b) =>
          COLLECTION_DISPLAY_ORDER.indexOf(a.id) -
          COLLECTION_DISPLAY_ORDER.indexOf(b.id),
      ),
    [],
  );

  const stats = useMemo(
    () => getNavigationStats(activeCollection),
    [activeCollection],
  );

  const visibleCategories = useMemo(
    () =>
      activeCategoryId === 'all'
        ? activeCollection.categories
        : activeCollection.categories.filter(
            (category) => category.id === activeCategoryId,
          ),
    [activeCategoryId, activeCollection],
  );

  const flattenedItems = useMemo(() => {
    return visibleCategories.flatMap((category) =>
      category.items.map((item) => ({
        ...item,
        categoryId: category.id,
        categoryName: category.name,
      })),
    );
  }, [visibleCategories]);

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

  const currentListTitle = query.trim()
    ? t('搜索结果')
    : t(
        activeCategoryId === 'all'
          ? activeCollection.title
          : visibleCategories[0]?.name || activeCollection.title,
      );

  return (
    <section
      className={`ai-navigation ${preview ? 'ai-navigation--preview' : 'ai-navigation--full'}`}
      aria-label={t('AI导航')}
    >
      {preview && (
        <div className='ai-navigation__header'>
          <div className='ai-navigation__title-group'>
            <div className='ai-navigation__eyebrow'>
              <Sparkles size={15} />
              <span>{t('AI导航')}</span>
            </div>
            <h2>{t('精选推荐')}</h2>
          </div>

          <div className='ai-navigation__actions'>
            <Link className='ai-navigation__more' to='/ai-navigation'>
              <span>{t('查看完整导航')}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}

      <div className='ai-navigation__toolbar'>
        <div className='ai-navigation__segments' role='tablist'>
          {orderedCollections.map((collection) => {
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

      {preview ? (
        visibleItems.length > 0 ? (
          <div className='ai-navigation__grid'>
            {visibleItems.map((item) => (
              <a
                key={`${activeCollection.id}-${item.categoryId}-${item.name}`}
                className='ai-navigation__card'
                href={item.url}
                target='_blank'
                rel='noreferrer'
              >
                <NavigationIcon item={item} />
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
          </div>
        )
      ) : visibleItems.length > 0 ? (
        <div className='ai-navigation__results'>
          <div className='ai-navigation__section-heading'>
            <strong>{currentListTitle}</strong>
            <span>{t('{{count}} 个工具', { count: visibleItems.length })}</span>
          </div>
          <div className='ai-navigation__grid ai-navigation__grid--apps'>
            {visibleItems.map((item) => (
              <a
                key={`${activeCollection.id}-${item.categoryId}-${item.name}`}
                className='ai-navigation__card ai-navigation__card--app'
                href={item.url}
                target='_blank'
                rel='noreferrer'
              >
                <NavigationIcon item={item} />
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
        </div>
      ) : query.trim() ? (
        <div className='ai-navigation__empty'>
          <p>{t('没有找到匹配的导航项')}</p>
          <button type='button' onClick={() => setQuery('')}>
            {t('清空筛选')}
          </button>
        </div>
      ) : (
        <div className='ai-navigation__empty'>
          <p>{t('没有找到匹配的导航项')}</p>
          <button type='button' onClick={() => setActiveCategoryId('all')}>
            {t('清空筛选')}
          </button>
        </div>
      )}
    </section>
  );
};

export default AINavigation;
