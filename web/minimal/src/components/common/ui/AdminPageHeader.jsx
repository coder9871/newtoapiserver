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
import PropTypes from 'prop-types';

const AdminPageHeader = ({
  eyebrow,
  icon,
  title,
  subtitle,
  trailing,
  className = '',
}) => {
  return (
    <div className={`admin-page-head ${className}`.trim()}>
      <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
        <div className='min-w-0'>
          {eyebrow ? <div className='editorial-label'>{eyebrow}</div> : null}
          <div className='mt-1 flex items-center gap-2.5 text-semi-color-text-0'>
            {icon ? (
              <span className='flex h-8 w-8 items-center justify-center rounded-xl border border-[var(--semi-color-border)] bg-[var(--semi-color-bg-1)] shadow-[0_8px_20px_rgba(24,24,27,0.04)]'>
                {icon}
              </span>
            ) : null}
            <div className='min-w-0'>
              <div className='admin-page-head-title'>{title}</div>
              {subtitle ? (
                <div className='admin-page-head-subtitle'>{subtitle}</div>
              ) : null}
            </div>
          </div>
        </div>
        {trailing ? (
          <div className='w-full md:w-auto md:pl-3 md:self-center'>{trailing}</div>
        ) : null}
      </div>
    </div>
  );
};

AdminPageHeader.propTypes = {
  eyebrow: PropTypes.node,
  icon: PropTypes.node,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  trailing: PropTypes.node,
  className: PropTypes.string,
};

export default AdminPageHeader;
