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
import { Skeleton, Typography } from '@douyinfe/semi-ui';
import { useMinimumLoadingTime } from '../../../hooks/common/useMinimumLoadingTime';
import { IconEyeOpened } from '@douyinfe/semi-icons';

const { Text } = Typography;

const MjLogsActions = ({
  loading,
  showBanner,
  isAdminUser,
  t,
}) => {
  const showSkeleton = useMinimumLoadingTime(loading);

  const placeholder = (
    <div className='flex items-center mb-2 md:mb-0'>
      <IconEyeOpened className='mr-2' />
      <Skeleton.Title style={{ width: 300, height: 21, borderRadius: 6 }} />
    </div>
  );

  return (
    <div className='flex w-full items-start'>
      <Skeleton loading={showSkeleton} active placeholder={placeholder}>
        <div className='flex items-center gap-2 text-semi-color-text-1'>
          <IconEyeOpened className='mr-2' />
          <Text className='!text-inherit'>
            {isAdminUser && showBanner
              ? t(
                  '当前未开启Midjourney回调，部分项目可能无法获得绘图结果，可在运营设置中开启。',
                )
              : t('Midjourney 任务记录')}
          </Text>
        </div>
      </Skeleton>
    </div>
  );
};

export default MjLogsActions;
