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
import { Button } from '@douyinfe/semi-ui';
import { RefreshCw, Search } from 'lucide-react';

const DashboardHeader = ({
  getGreeting,
  greetingVisible,
  showSearchModal,
  refresh,
  loading,
  t,
}) => {
  const ICON_BUTTON_CLASS =
    '!rounded-full !w-9 !h-9 text-semi-color-text-1 hover:!bg-semi-color-fill-0';

  return (
    <div className='dashboard-hero mb-7'>
      <div className='dashboard-hero-copy'>
        <div className='dashboard-hero-kicker'>{t('数据看板')}</div>
        <h2
          className='dashboard-hero-title text-[28px] leading-tight font-semibold tracking-tight text-semi-color-text-0 transition-opacity duration-1000 ease-in-out'
          style={{ opacity: greetingVisible ? 1 : 0 }}
        >
          {getGreeting}
        </h2>
        <p className='dashboard-hero-subtitle'>{t('快速开始')} · {t('使用日志')} · {t('模型与价格')}</p>
      </div>
      <div className='dashboard-hero-actions flex gap-1.5'>
        <Button
          type='tertiary'
          theme='borderless'
          icon={<Search size={18} />}
          onClick={showSearchModal}
          className={ICON_BUTTON_CLASS}
        />
        <Button
          type='tertiary'
          theme='borderless'
          icon={<RefreshCw size={18} />}
          onClick={refresh}
          loading={loading}
          className={ICON_BUTTON_CLASS}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
