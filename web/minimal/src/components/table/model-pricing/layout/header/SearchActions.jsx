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
import { Input, Button, Divider, Select } from '@douyinfe/semi-ui';
import { IconSearch } from '@douyinfe/semi-icons';
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
    t,
  }) => {
    const handleViewModeToggle = useCallback(() => {
      setViewMode?.(viewMode === 'table' ? 'card' : 'table');
    }, [viewMode, setViewMode]);

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
      <div className='flex items-center gap-2 w-full'>
        <div className='flex-1 min-w-0'>
          <Input
            prefix={<IconSearch />}
            placeholder={t('模糊搜索模型名称')}
            value={searchValue}
            onCompositionStart={handleCompositionStart}
            onCompositionEnd={handleCompositionEnd}
            onChange={handleChange}
            showClear
          />
        </div>

        {/* 供应商下拉筛选 —— 与搜索并列 */}
        <Select
          value={filterVendor}
          onChange={setFilterVendor}
          optionList={vendorOptions}
          insetLabel={t('供应商')}
          className='shrink-0'
          style={{ width: isMobile ? 130 : 190 }}
        />

        {!isMobile && (
          <>
            <Divider layout='vertical' margin='8px' />

            {/* 视图模式切换按钮 */}
            <Button
              theme={viewMode === 'table' ? 'solid' : 'outline'}
              type={viewMode === 'table' ? 'primary' : 'tertiary'}
              onClick={handleViewModeToggle}
            >
              {t('表格视图')}
            </Button>

            {/* Token单位切换按钮 */}
            <Button
              theme={tokenUnit === 'K' ? 'solid' : 'outline'}
              type={tokenUnit === 'K' ? 'primary' : 'tertiary'}
              onClick={handleTokenUnitToggle}
            >
              {tokenUnit}
            </Button>
          </>
        )}
      </div>
    );
  },
);

SearchActions.displayName = 'SearchActions';

export default SearchActions;
