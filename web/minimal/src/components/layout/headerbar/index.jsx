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

import React, { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, TextArea } from '@douyinfe/semi-ui';
import { Send, Sparkles } from 'lucide-react';
import { useHeaderBar } from '../../../hooks/common/useHeaderBar';
import { useNotifications } from '../../../hooks/common/useNotifications';
import { useNavigation } from '../../../hooks/common/useNavigation';
import NoticeModal from '../NoticeModal';
import MobileMenuButton from './MobileMenuButton';
import HeaderLogo from './HeaderLogo';
import Navigation from './Navigation';
import ActionButtons from './ActionButtons';

const PENDING_PROMPT_KEY = 'minimal_pending_prompt';
const MINIMAL_HOME_ROUTES = new Set(['/', '/ai-navigation']);

const HeaderBar = ({ onMobileMenuToggle, drawerOpen }) => {
  const location = useLocation();
  const [quickPrompt, setQuickPrompt] = useState('');
  const {
    userState,
    statusState,
    isMobile,
    collapsed,
    logoLoaded,
    currentLang,
    isLoading,
    systemName,
    logo,
    isNewYear,
    isSelfUseMode,
    docsLink,
    isDemoSiteMode,
    isConsoleRoute,
    theme,
    headerNavModules,
    pricingRequireAuth,
    logout,
    handleLanguageChange,
    handleThemeToggle,
    handleMobileMenuToggle,
    navigate,
    t,
  } = useHeaderBar({ onMobileMenuToggle, drawerOpen });

  const {
    noticeVisible,
    unreadCount,
    handleNoticeOpen,
    handleNoticeClose,
    getUnreadKeys,
  } = useNotifications(statusState);

  const { mainNavLinks } = useNavigation(t, docsLink, headerNavModules);
  const isMinimalHomeRoute = MINIMAL_HOME_ROUTES.has(location.pathname);

  const handleAskAi = useCallback(() => {
    const text = quickPrompt.trim();
    if (!text) return;

    try {
      sessionStorage.setItem(PENDING_PROMPT_KEY, text);
    } catch (error) {
      // ignore storage failures
    }

    setQuickPrompt('');
    navigate('/console/playground');
  }, [navigate, quickPrompt]);

  const handleAskKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        handleAskAi();
      }
    },
    [handleAskAi],
  );

  return (
    <header className='app-topbar text-semi-color-text-0 sticky top-0 z-50 transition-colors duration-300'>
      <NoticeModal
        visible={noticeVisible}
        onClose={handleNoticeClose}
        isMobile={isMobile}
        defaultTab={unreadCount > 0 ? 'system' : 'inApp'}
        unreadKeys={getUnreadKeys()}
      />

      <div className='app-topbar-shell w-full px-3 md:px-5'>
        <div className='app-topbar-panel flex items-center justify-between min-h-[68px] px-3 md:px-5'>
          <div className='flex items-center min-w-0 gap-2 md:gap-3'>
            <MobileMenuButton
              isConsoleRoute={isConsoleRoute}
              isMobile={isMobile}
              drawerOpen={drawerOpen}
              collapsed={collapsed}
              onToggle={handleMobileMenuToggle}
              t={t}
            />

            <HeaderLogo
              isMobile={isMobile}
              isConsoleRoute={isConsoleRoute}
              logo={logo}
              logoLoaded={logoLoaded}
              isLoading={isLoading}
              systemName={systemName}
              isSelfUseMode={isSelfUseMode}
              isDemoSiteMode={isDemoSiteMode}
              t={t}
            />
          </div>

          {isMinimalHomeRoute && (
            <div className='app-topbar-tagline'>
              {t('汇聚全球大模型，导航海量智能体')}
            </div>
          )}

          {isMinimalHomeRoute ? (
            <div className='app-topbar-ask' aria-label={t('问AI')}>
              <span className='app-topbar-ask-label'>
                <Sparkles size={15} />
                <span>{t('问AI')}</span>
              </span>
              <TextArea
                className='app-topbar-ask-textarea'
                value={quickPrompt}
                onChange={setQuickPrompt}
                onKeyDown={handleAskKeyDown}
                placeholder={t('请输入您的问题...')}
                aria-label={t('请输入您的问题...')}
                rows={1}
                autosize={{ minRows: 1, maxRows: 2 }}
                style={{
                  border: 'none',
                  boxShadow: 'none',
                  resize: 'none',
                  background: 'transparent',
                }}
              />
              <Button
                theme='solid'
                type='primary'
                icon={<Send size={16} />}
                onClick={handleAskAi}
                disabled={!quickPrompt.trim()}
                className='app-topbar-ask-send'
                aria-label={t('操练场')}
              />
            </div>
          ) : (
            <Navigation
              mainNavLinks={mainNavLinks}
              isMobile={isMobile}
              isLoading={isLoading}
              userState={userState}
              pricingRequireAuth={pricingRequireAuth}
            />
          )}

          <div className='app-topbar-actions'>
            <ActionButtons
              isNewYear={isNewYear}
              unreadCount={unreadCount}
              onNoticeOpen={handleNoticeOpen}
              theme={theme}
              onThemeToggle={handleThemeToggle}
              currentLang={currentLang}
              onLanguageChange={handleLanguageChange}
              userState={userState}
              isLoading={isLoading}
              isMobile={isMobile}
              isSelfUseMode={isSelfUseMode}
              accountOnly={isMinimalHomeRoute && isMobile}
              docsLink={docsLink}
              pricingRequireAuth={pricingRequireAuth}
              logout={logout}
              navigate={navigate}
              t={t}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
