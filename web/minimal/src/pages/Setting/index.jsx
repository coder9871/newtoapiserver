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

import React, { useEffect, useMemo, useState } from 'react';
import { Tag, Space } from '@douyinfe/semi-ui';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Settings,
  Calculator,
  Gauge,
  Shapes,
  Cog,
  MoreHorizontal,
  LayoutDashboard,
  MessageSquare,
  Palette,
  CreditCard,
  Server,
  Activity,
  Shield,
} from 'lucide-react';
import AdminPageHeader from '../../components/common/ui/AdminPageHeader';

import SystemSetting from '../../components/settings/SystemSetting';
import { isRoot } from '../../helpers';
import OtherSetting from '../../components/settings/OtherSetting';
import OperationSetting from '../../components/settings/OperationSetting';
import RateLimitSetting from '../../components/settings/RateLimitSetting';
import ModelSetting from '../../components/settings/ModelSetting';
import DashboardSetting from '../../components/settings/DashboardSetting';
import RatioSetting from '../../components/settings/RatioSetting';
import ChatsSetting from '../../components/settings/ChatsSetting';
import DrawingSetting from '../../components/settings/DrawingSetting';
import PaymentSetting from '../../components/settings/PaymentSetting';
import ModelDeploymentSetting from '../../components/settings/ModelDeploymentSetting';
import PerformanceSetting from '../../components/settings/PerformanceSetting';

const Setting = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [tabActiveKey, setTabActiveKey] = useState('operation');

  const panes = useMemo(() => {
    if (!isRoot()) return [];

    return [
      {
        label: t('运营设置'),
        icon: <Settings size={18} />,
        content: <OperationSetting />,
        itemKey: 'operation',
      },
      {
        label: t('仪表盘设置'),
        icon: <LayoutDashboard size={18} />,
        content: <DashboardSetting />,
        itemKey: 'dashboard',
      },
      {
        label: t('聊天设置'),
        icon: <MessageSquare size={18} />,
        content: <ChatsSetting />,
        itemKey: 'chats',
      },
      {
        label: t('绘图设置'),
        icon: <Palette size={18} />,
        content: <DrawingSetting />,
        itemKey: 'drawing',
      },
      {
        label: t('支付设置'),
        icon: <CreditCard size={18} />,
        content: <PaymentSetting />,
        itemKey: 'payment',
      },
      {
        label: t('分组与模型定价设置'),
        icon: <Calculator size={18} />,
        content: <RatioSetting />,
        itemKey: 'ratio',
      },
      {
        label: t('速率限制设置'),
        icon: <Gauge size={18} />,
        content: <RateLimitSetting />,
        itemKey: 'ratelimit',
      },
      {
        label: t('模型相关设置'),
        icon: <Shapes size={18} />,
        content: <ModelSetting />,
        itemKey: 'models',
      },
      {
        label: t('模型部署设置'),
        icon: <Server size={18} />,
        content: <ModelDeploymentSetting />,
        itemKey: 'model-deployment',
      },
      {
        label: t('性能设置'),
        icon: <Activity size={18} />,
        content: <PerformanceSetting />,
        itemKey: 'performance',
      },
      {
        label: t('系统设置'),
        icon: <Cog size={18} />,
        content: <SystemSetting />,
        itemKey: 'system',
      },
      {
        label: t('其他设置'),
        icon: <MoreHorizontal size={18} />,
        content: <OtherSetting />,
        itemKey: 'other',
      },
    ];
  }, [t]);

  const onChangeTab = (key) => {
    setTabActiveKey(key);
    navigate(`?tab=${key}`);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get('tab');
    if (tab) {
      setTabActiveKey(tab);
      return;
    }
    if (panes[0]) {
      onChangeTab(panes[0].itemKey);
    }
  }, [location.search, panes]);

  const activePane =
    panes.find((pane) => pane.itemKey === tabActiveKey) || panes[0] || null;
  const activePaneIndex = activePane
    ? panes.findIndex((pane) => pane.itemKey === activePane.itemKey) + 1
    : 0;

  return (
    <div className='settings-page-shell'>
      <AdminPageHeader
        className='settings-page-header'
        eyebrow={t('控制台')}
        icon={<Shield size={16} />}
        title={t('配置中心')}
        subtitle={
          activePane
            ? t('当前正在编辑：{{section}}', {
                section: activePane.label,
              })
            : t('集中管理系统行为、产品策略与模型配置。')
        }
        trailing={
          <Space wrap>
            <Tag color='grey' className='settings-page-tag'>
              {t('共 {{count}} 个配置分区', { count: panes.length })}
            </Tag>
            {activePane ? (
              <Tag color='grey' className='settings-page-tag'>
                {activePane.label}
              </Tag>
            ) : null}
          </Space>
        }
      />

      <div className='settings-page-overview'>
        <div className='settings-page-overview-copy'>
          <div className='editorial-label'>{t('配置导航')}</div>
          <div className='settings-page-overview-title'>
            {activePane ? activePane.label : t('配置中心')}
          </div>
          <div className='settings-page-overview-meta'>
            {activePane
              ? t('第 {{index}} / {{count}} 个分区', {
                  index: activePaneIndex,
                  count: panes.length,
                })
              : t('集中管理系统行为、产品策略与模型配置。')}
          </div>
        </div>
        <div className='settings-page-quicknav' role='tablist'>
          {panes.map((pane) => {
            const isActive = pane.itemKey === tabActiveKey;
            return (
              <button
                key={pane.itemKey}
                type='button'
                role='tab'
                aria-selected={isActive}
                className={`settings-page-quicknav-item ${isActive ? 'is-active' : ''}`}
                onClick={() => onChangeTab(pane.itemKey)}
              >
                <span className='settings-page-quicknav-icon'>{pane.icon}</span>
                <span className='settings-page-quicknav-label'>{pane.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className='settings-page-content'>
        <div className='settings-page-panel'>
          <div className='settings-page-panel-head'>
            <div className='settings-page-panel-title'>
              {activePane ? activePane.label : t('配置中心')}
            </div>
            <div className='settings-page-panel-meta'>
              {activePane
                ? t('正在编辑此分区的全部配置项。')
                : t('请选择一个配置分区继续。')}
            </div>
          </div>
          <div className='settings-page-panel-body'>
            {activePane ? activePane.content : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
