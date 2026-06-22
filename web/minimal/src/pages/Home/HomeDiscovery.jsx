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
  Bot,
  Boxes,
  Code2,
  ExternalLink,
  FileText,
  Grid2X2,
  MonitorSmartphone,
  Palette,
  Presentation,
  Search,
  Sparkles,
  Video,
  WandSparkles,
  X,
} from 'lucide-react';

import {
  aiNavigationCollections,
  getNavigationStats,
} from './aiNavigation.data';

const FEATURED_NAMES = [
  'ChatGPT APP',
  'DeepSeek APP',
  'Sora APP',
  'Cursor',
  'AiPPT',
  '秘塔AI搜索',
  '蛙蛙写作',
  '即梦AI APP',
];

const VISUAL_NAMES = [
  'ChatGPT APP',
  'DeepSeek APP',
  '豆包APP',
  'Sora APP',
  '即梦AI APP',
  'Cursor',
  'Windsurf',
  'AiPPT',
  '秘塔AI搜索',
  '蛙蛙写作',
  'LibTV',
  '扣子APP',
];

const scenarioItems = [
  { label: '写论文', query: '写作', icon: FileText },
  { label: '做 PPT', query: 'PPT', icon: Presentation },
  { label: '剪视频', query: '视频', icon: Video },
  { label: '写代码', query: '编程', icon: Code2 },
  { label: '查资料', query: '搜索', icon: Search },
  { label: '做电商图', query: '图像', icon: Palette },
  { label: '生成应用', query: '应用', icon: Boxes },
];

const collectionIcons = {
  tools: WandSparkles,
  apps: MonitorSmartphone,
};

const normalizeText = (value) => (value || '').toLowerCase();

const flattenNavigationItems = () =>
  aiNavigationCollections.flatMap((collection) =>
    collection.categories.flatMap((category) =>
      category.items.map((item) => ({
        ...item,
        collectionId: collection.id,
        collectionTitle: collection.title,
        categoryId: category.id,
        categoryName: category.name,
      })),
    ),
  );

const pickByNames = (items, names) =>
  names.map((name) => items.find((item) => item.name === name)).filter(Boolean);

const ToolIcon = ({ item, size = 'md' }) => {
  const [failed, setFailed] = useState(false);

  return (
    <span className={`minimal-home-icon minimal-home-icon--${size}`}>
      {item.icon && !failed ? (
        <img
          src={item.icon}
          alt=''
          loading='lazy'
          onError={() => setFailed(true)}
        />
      ) : (
        <span>{item.name.slice(0, 1).toUpperCase()}</span>
      )}
    </span>
  );
};

const HomeDiscovery = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');

  const allItems = useMemo(() => flattenNavigationItems(), []);
  const featuredItems = useMemo(
    () => pickByNames(allItems, FEATURED_NAMES),
    [allItems],
  );
  const visualItems = useMemo(
    () => pickByNames(allItems, VISUAL_NAMES),
    [allItems],
  );
  const collectionGroups = useMemo(
    () =>
      aiNavigationCollections.map((collection) => ({
        ...collection,
        stats: getNavigationStats(collection),
        categories: collection.categories.map((category) => ({
          ...category,
          count: category.items.length,
          topItems: category.items.slice(0, 4),
        })),
      })),
    [],
  );

  const collectionStats = useMemo(
    () =>
      aiNavigationCollections.reduce(
        (stats, collection) => {
          const collectionStats = getNavigationStats(collection);
          return {
            categoryCount: stats.categoryCount + collectionStats.categoryCount,
            itemCount: stats.itemCount + collectionStats.itemCount,
          };
        },
        { categoryCount: 0, itemCount: 0 },
      ),
    [],
  );

  const visibleItems = useMemo(() => {
    const keyword = normalizeText(query.trim());
    if (!keyword) return featuredItems;

    return allItems
      .filter((item) => {
        const content = normalizeText(
          `${item.name} ${item.description} ${item.categoryName} ${item.collectionTitle}`,
        );
        return content.includes(keyword);
      })
      .slice(0, 8);
  }, [allItems, featuredItems, query]);

  const showcaseTitle = query.trim() ? '搜索结果' : '热门工具';

  return (
    <>
      <section className='minimal-home-discovery__hero'>
        <div className='minimal-home-discovery__copy'>
          <div className='minimal-home-discovery__eyebrow'>
            <Sparkles size={16} />
            <span>{t('AI导航入口')}</span>
          </div>

          <h1>
            <span>{t('AI 工具导航')}</span>
            <span>{t('一站式入口')}</span>
          </h1>
          <p>
            {t(
              '像门户一样集中展示 AI 工具、应用和场景分类，方便用户把这里当作 AI 导航首页。',
            )}
          </p>

          <label className='minimal-home-discovery__search'>
            <Search size={18} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t('搜索 AI 工具、App 或使用场景')}
            />
            {query && (
              <button
                type='button'
                aria-label={t('清空筛选')}
                onClick={() => setQuery('')}
              >
                <X size={16} />
              </button>
            )}
          </label>

          <div
            className='minimal-home-discovery__scenarios'
            aria-label={t('按场景筛选')}
          >
            {scenarioItems.map((scenario) => {
              const Icon = scenario.icon;
              return (
                <button
                  key={scenario.label}
                  type='button'
                  onClick={() => setQuery(scenario.query)}
                >
                  <Icon size={15} />
                  <span>{t(scenario.label)}</span>
                </button>
              );
            })}
          </div>

          <div className='minimal-home-discovery__actions'>
            <Link
              className='minimal-home-discovery__primary'
              to='/ai-navigation'
            >
              <span>{t('浏览全部工具')}</span>
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className='minimal-home-discovery__stats'>
            <span>
              <strong>{collectionStats.itemCount}</strong>
              {t('工具条目')}
            </span>
            <span>
              <strong>{collectionStats.categoryCount}</strong>
              {t('分类')}
            </span>
            <span>
              <strong>{aiNavigationCollections.length}</strong>
              {t('工具集')}
            </span>
          </div>
        </div>

        <div className='minimal-home-discovery__visual'>
          <div className='minimal-home-discovery__visual-header'>
            <span>
              <Bot size={16} />
              {t('热门工具')}
            </span>
            <small>{t('导航入口')}</small>
          </div>
          <div className='minimal-home-discovery__logo-grid'>
            {visualItems.map((item) => (
              <a
                key={`${item.collectionId}-${item.categoryId}-${item.name}`}
                href={item.url}
                target='_blank'
                rel='noreferrer'
              >
                <ToolIcon item={item} size='lg' />
                <span>{item.name.replace(' APP', '')}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className='minimal-home-discovery__collections'>
        <div className='minimal-home-discovery__section-header'>
          <div>
            <span>
              <Grid2X2 size={16} />
              {t('分类入口')}
            </span>
            <p>{t('按工具集和应用集快速进入常用分类。')}</p>
          </div>
          <Link to='/ai-navigation'>
            {t('查看完整导航')}
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className='minimal-home-discovery__collection-grid'>
          {collectionGroups.map((collection) => {
            const Icon = collectionIcons[collection.id] || Grid2X2;
            return (
              <article
                key={collection.id}
                className='minimal-home-discovery__collection-card'
              >
                <div className='minimal-home-discovery__collection-head'>
                  <span>
                    <Icon size={18} />
                    {t(collection.title)}
                  </span>
                  <small>
                    {t('已收录 {{count}} 个条目', {
                      count: collection.stats.itemCount,
                    })}
                  </small>
                </div>
                <div className='minimal-home-discovery__collection-tags'>
                  {collection.categories.slice(0, 10).map((category) => (
                    <button
                      key={category.id}
                      type='button'
                      onClick={() => setQuery(category.name)}
                    >
                      {t(category.name)}
                    </button>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className='minimal-home-discovery__directory'>
        <div className='minimal-home-discovery__section-header'>
          <div>
            <span>
              <WandSparkles size={16} />
              {t('分类导航')}
            </span>
            <p>
              {t('每个分类展示代表工具，适合像门户站一样快速扫一眼再直达。')}
            </p>
          </div>
        </div>

        {collectionGroups.map((collection) => {
          const Icon = collectionIcons[collection.id] || Grid2X2;
          return (
            <div
              key={collection.id}
              className='minimal-home-discovery__directory-group'
            >
              <div className='minimal-home-discovery__directory-title'>
                <span>
                  <Icon size={17} />
                  {t(collection.title)}
                </span>
                <a href={collection.sourceUrl} target='_blank' rel='noreferrer'>
                  {t('查看来源')}
                  <ExternalLink size={14} />
                </a>
              </div>

              <div className='minimal-home-discovery__directory-grid'>
                {collection.categories.map((category) => (
                  <article
                    key={category.id}
                    className='minimal-home-discovery__directory-card'
                  >
                    <a
                      className='minimal-home-discovery__directory-category'
                      href={category.href}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {t(category.name)}
                    </a>
                    <div className='minimal-home-discovery__directory-links'>
                      {category.topItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.url}
                          target='_blank'
                          rel='noreferrer'
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className='minimal-home-discovery__section'>
        <div className='minimal-home-discovery__section-header'>
          <div>
            <span>
              <Grid2X2 size={16} />
              {t(showcaseTitle)}
            </span>
            <p>{t('来自 AI 应用商店和工具导航的高频入口。')}</p>
          </div>
          <Link to='/ai-navigation'>
            {t('查看完整导航')}
            <ArrowRight size={16} />
          </Link>
        </div>

        {visibleItems.length > 0 ? (
          <div className='minimal-home-discovery__cards'>
            {visibleItems.map((item) => (
              <a
                key={`${item.collectionId}-${item.categoryId}-${item.name}`}
                className='minimal-home-discovery__card'
                href={item.url}
                target='_blank'
                rel='noreferrer'
              >
                <ToolIcon item={item} />
                <span className='minimal-home-discovery__card-body'>
                  <span className='minimal-home-discovery__card-title'>
                    <strong>{item.name}</strong>
                    <ExternalLink size={14} />
                  </span>
                  <span className='minimal-home-discovery__card-desc'>
                    {item.description}
                  </span>
                  <span className='minimal-home-discovery__card-meta'>
                    <span>{t(item.categoryName)}</span>
                    <span>{t(item.collectionTitle)}</span>
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
    </>
  );
};

export default HomeDiscovery;
