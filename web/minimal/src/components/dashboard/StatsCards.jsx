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

import React from 'react';
import { Button, Skeleton } from '@douyinfe/semi-ui';
import { VChart } from '@visactor/react-vchart';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// 单色趋势线 —— 摒弃彩虹色，保持 b.ai 的克制
const TREND_COLOR = '#9a978d';

const StatsCards = ({
  groupedStatsData,
  loading,
  getTrendSpec,
  CHART_CONFIG,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className='mb-8'>
      <div className='dashboard-stats-panel'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
          {groupedStatsData.map((group, idx) => (
            <div key={idx} className='dashboard-stats-group'>
              <div className='dashboard-stats-grouptitle'>{group.title}</div>

              <div className='space-y-6'>
                {group.items.map((item, itemIdx) => {
                  const isBalance = item.title === t('当前余额');
                  const hasMeaningfulTrend =
                    Array.isArray(item.trendData) &&
                    item.trendData.length > 1 &&
                    item.trendData.some((v) => Number(v) > 0);
                  const hasTrend = !isBalance && !loading && hasMeaningfulTrend;

                  return (
                    <div
                      key={itemIdx}
                      className={`flex items-end justify-between gap-2 ${
                        item.onClick ? 'cursor-pointer' : ''
                      }`}
                      onClick={item.onClick}
                    >
                      <div className='min-w-0'>
                        <div className='text-xs text-semi-color-text-2 mb-1 truncate'>
                          {item.title}
                        </div>
                        <Skeleton
                          loading={loading}
                          active
                          placeholder={
                            <Skeleton.Paragraph
                              active
                              rows={1}
                              style={{ width: '72px', height: '28px' }}
                            />
                          }
                        >
                          <div className='text-[26px] leading-none font-semibold tracking-tight text-semi-color-text-0 tabular-nums'>
                            {item.value}
                          </div>
                        </Skeleton>
                      </div>

                      {isBalance ? (
                        <Button
                          size='small'
                          theme='solid'
                          type='primary'
                          className='!rounded-full !h-7 !px-3.5 shrink-0'
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate('/console/topup');
                          }}
                        >
                          {t('充值')}
                        </Button>
                      ) : (
                        hasTrend && (
                          <div className='w-20 h-8 shrink-0 opacity-80'>
                            <VChart
                              spec={getTrendSpec(item.trendData, TREND_COLOR)}
                              option={CHART_CONFIG}
                            />
                          </div>
                        )
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
