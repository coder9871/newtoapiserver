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

import React, { memo, useCallback, useMemo } from 'react';
import { Input, Button, Select } from '@douyinfe/semi-ui';
import { IconSearch } from '@douyinfe/semi-icons';
import { BadgePercent, Boxes, Grid2X2, Table2 } from 'lucide-react';
import { getLobeHubIcon } from '../../../../../helpers';

const SearchActions = memo(
  ({
    handleChange,
    handleCompositionStart,
    handleCompositionEnd,
    isMobile = false,
    searchValue = '',
    filterVendor = 'all',
    setFilterVendor,
    models = [],
    viewMode,
    setViewMode,
    tokenUnit,
    setTokenUnit,
    stats,
    t,
  }) => {
    const handleCardView = useCallback(() => {
      setViewMode?.('card');
    }, [setViewMode]);

    const handleTableView = useCallback(() => {
      setViewMode?.('table');
    }, [setViewMode]);

    const handleTokenUnitToggle = useCallback(() => {
      setTokenUnit?.(tokenUnit === 'K' ? 'M' : 'K');
    }, [tokenUnit, setTokenUnit]);

    // 由模型列表归纳出供应商下拉选项（含图标）
    const vendorOptions = useMemo(() => {
      const icons = new Map();
      const vendors = new Set();
      let hasUnknown = false;
      (models || []).forEach((m) => {
        if (m.vendor_name) {
          vendors.add(m.vendor_name);
          if (m.vendor_icon && !icons.has(m.vendor_name)) {
            icons.set(m.vendor_name, m.vendor_icon);
          }
        } else {
          hasUnknown = true;
        }
      });

      const withIcon = (node, label) => (
        <span className='flex items-center gap-2'>
          {node}
          <span className='truncate'>{label}</span>
        </span>
      );

      const opts = [{ value: 'all', label: t('全部供应商') }];
      Array.from(vendors)
        .sort()
        .forEach((name) => {
          const icon = icons.get(name);
          opts.push({
            value: name,
            label: icon ? withIcon(getLobeHubIcon(icon, 16), name) : name,
          });
        });
      if (hasUnknown) opts.push({ value: 'unknown', label: t('未知供应商') });
      return opts;
    }, [models, t]);

    return (
      <div className='pricing-toolbar'>
        <div className='pricing-toolbar-search'>
          <Input
            prefix={<IconSearch />}
            placeholder={t('按模型、供应商、端点或标签搜索')}
            value={searchValue}
            onCompositionStart={handleCompositionStart}
            onCompositionEnd={handleCompositionEnd}
            onChange={handleChange}
            showClear
          />
        </div>

        <div className='pricing-toolbar-controls'>
          <div className='pricing-inline-metrics'>
            <div className='pricing-inline-metric'>
              <Boxes size={13} strokeWidth={2} className='pricing-inline-metric-icon' />
              <span className='pricing-inline-metric-value'>
                {stats?.modelCount?.toLocaleString?.() ?? '0'}
              </span>
              <span className='pricing-inline-metric-label'>{t('总模型数')}</span>
            </div>
            <div className='pricing-inline-metric pricing-inline-metric-accent'>
              <BadgePercent
                size={13}
                strokeWidth={2}
                className='pricing-inline-metric-icon'
              />
              <span className='pricing-inline-metric-value'>
                {stats?.discountedModels?.toLocaleString?.() ?? '0'}
              </span>
              <span className='pricing-inline-metric-label'>{t('折扣模型')}</span>
            </div>
          </div>

          <Select
            value={filterVendor}
            onChange={setFilterVendor}
            optionList={vendorOptions}
            insetLabel={t('供应商')}
            className='pricing-vendor-select'
            style={{ width: isMobile ? 132 : 168 }}
          />

          <div className='pricing-toggle-group'>
            <Button
              className='pricing-toggle-button'
              theme={viewMode === 'card' ? 'solid' : 'outline'}
              type={viewMode === 'card' ? 'primary' : 'tertiary'}
              icon={<Grid2X2 size={14} />}
              onClick={handleCardView}
            />
            <Button
              className='pricing-toggle-button'
              theme={viewMode === 'table' ? 'solid' : 'outline'}
              type={viewMode === 'table' ? 'primary' : 'tertiary'}
              icon={<Table2 size={14} />}
              onClick={handleTableView}
            >
              {!isMobile ? t('表格视图') : null}
            </Button>
            <Button
              className='pricing-toggle-button pricing-unit-button'
              theme={tokenUnit === 'K' ? 'solid' : 'outline'}
              type={tokenUnit === 'K' ? 'primary' : 'tertiary'}
              onClick={handleTokenUnitToggle}
            >
              {tokenUnit}
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

SearchActions.displayName = 'SearchActions';

export default SearchActions;
