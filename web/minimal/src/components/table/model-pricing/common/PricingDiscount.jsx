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

import React, { memo } from 'react';
import { Tag, Tooltip } from '@douyinfe/semi-ui';

const normalizeRatio = (value) => {
  const ratio = Number(value);
  if (!Number.isFinite(ratio) || ratio < 0 || ratio >= 1) return null;
  return ratio;
};

export const getPricingDiscountMeta = (ratioValue, t) => {
  const ratio = normalizeRatio(ratioValue);
  if (ratio === null) return null;

  const percent = Math.max(0, Math.round((1 - ratio) * 100));
  const foldWord = t('折');
  const foldValue = Number((ratio * 10).toFixed(2)).toString();
  const label =
    foldWord === '折'
      ? `${foldValue}${foldWord}`
      : foldWord.startsWith('%')
        ? `${percent}${foldWord}`
        : `${percent}% ${foldWord}`;

  return {
    ratio,
    percent,
    label,
  };
};

export const getModelDiscountRatio = ({
  record,
  selectedGroup = 'all',
  groupRatio = {},
}) => {
  if (!record) return null;

  if (selectedGroup !== 'all') {
    const selectedRatio = groupRatio?.[selectedGroup];
    return normalizeRatio(selectedRatio);
  }

  const enableGroups = Array.isArray(record.enable_groups)
    ? record.enable_groups
    : [];
  let minRatio = Number.POSITIVE_INFINITY;

  enableGroups.forEach((group) => {
    const ratio = Number(groupRatio?.[group]);
    if (Number.isFinite(ratio) && ratio >= 0 && ratio < minRatio) {
      minRatio = ratio;
    }
  });

  if (minRatio === Number.POSITIVE_INFINITY) return null;
  return normalizeRatio(minRatio);
};

const PricingDiscountTag = memo(({ ratio, t, size = 'small' }) => {
  const meta = getPricingDiscountMeta(ratio, t);
  if (!meta) return null;

  return (
    <Tooltip
      content={`${t('基于当前分组倍率计算，不包含充值优惠')} · x${meta.ratio}`}
      position='top'
    >
      <Tag color='green' shape='circle' size={size} className='pricing-discount-tag'>
        {meta.label}
      </Tag>
    </Tooltip>
  );
});

PricingDiscountTag.displayName = 'PricingDiscountTag';

export default PricingDiscountTag;
