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
import ModelPricingPage from '../../components/table/model-pricing/layout/PricingPage';

// 顶部标题与实时统计已下沉到 ModelPricingPage 的命令面板（粘性目录头），
// 这里只保留页面外壳与上边距，避免与命令面板的标题/搜索重复。
const Pricing = () => (
  <div className='pricing-page-shell'>
    <ModelPricingPage />
  </div>
);

export default Pricing;
