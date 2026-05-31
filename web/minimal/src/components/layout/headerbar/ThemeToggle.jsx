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
import { Sun, Moon } from 'lucide-react';
import { useActualTheme } from '../../../context/Theme';

const ThemeToggle = ({ onThemeToggle, t }) => {
  const actualTheme = useActualTheme();
  const isDark = actualTheme === 'dark';

  // 显示当前主题图标，点击在浅色 / 深色之间切换
  return (
    <Button
      icon={isDark ? <Moon size={18} /> : <Sun size={18} />}
      aria-label={t('切换主题')}
      onClick={() => onThemeToggle(isDark ? 'light' : 'dark')}
      theme='borderless'
      type='tertiary'
      className='!w-9 !h-9 !p-0 inline-flex items-center justify-center !rounded-full !bg-transparent !text-semi-color-text-2 hover:!bg-semi-color-fill-0 hover:!text-semi-color-text-0 focus:!bg-semi-color-fill-0 transition-colors duration-200'
    />
  );
};

export default ThemeToggle;
