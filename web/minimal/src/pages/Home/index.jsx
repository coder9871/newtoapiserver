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

import React, { useEffect } from 'react';

import AINavigation from './AINavigation';
import './home.css';

const Home = () => {
  // 首页：让头部与内容区视觉融为一体（去掉头部与背景之间的横向接缝）
  // 逻辑上头部与首页仍是分开的组件，这里仅通过路由标记类让头部背景透明、
  // 首页背景上移铺到头部之后，形成贯穿顶部的一整片渐变。
  useEffect(() => {
    document.body.classList.add('minimal-home-route');
    return () => {
      document.body.classList.remove('minimal-home-route');
    };
  }, []);

  return (
    <main className='minimal-home minimal-home--navigation-page'>
      <AINavigation />
    </main>
  );
};

export default Home;
