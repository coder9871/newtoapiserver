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
import { ClipboardList } from 'lucide-react';
import CompactModeToggle from '../../common/ui/CompactModeToggle';
import AdminPageHeader from '../../common/ui/AdminPageHeader';

const TaskLogsDescription = ({ compactMode, setCompactMode, t }) => {
  return (
    <AdminPageHeader
      eyebrow={t('控制台')}
      icon={<ClipboardList size={16} />}
      title={t('任务日志')}
      subtitle={t('集中查看异步任务处理状态、结果预览与排查线索。')}
      trailing={
        <CompactModeToggle
          compactMode={compactMode}
          setCompactMode={setCompactMode}
          t={t}
        />
      }
    />
  );
};

export default TaskLogsDescription;
