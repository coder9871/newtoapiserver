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

import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, TextArea } from '@douyinfe/semi-ui';
import { Send } from 'lucide-react';

import './home.css';

const PENDING_PROMPT_KEY = 'minimal_pending_prompt';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [prompt, setPrompt] = useState('');

  // 首页：让头部与内容区视觉融为一体（去掉头部与背景之间的横向接缝）
  // 逻辑上头部与首页仍是分开的组件，这里仅通过路由标记类让头部背景透明、
  // 首页背景上移铺到头部之后，形成贯穿顶部的一整片渐变。
  useEffect(() => {
    document.body.classList.add('minimal-home-route');
    return () => {
      document.body.classList.remove('minimal-home-route');
    };
  }, []);

  // 发送：把问题带到操练场（未登录会被 PrivateRoute 引导登录后回到操练场再自动发送）
  const handleSend = useCallback(() => {
    const text = (prompt || '').trim();
    if (!text) return;
    try {
      sessionStorage.setItem(PENDING_PROMPT_KEY, text);
    } catch (error) {
      // 忽略存储异常
    }
    navigate('/console/playground');
  }, [prompt, navigate]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend],
  );

  return (
    <main className='minimal-home'>
      <section
        className='minimal-home__stage'
        aria-label={t('请输入您的问题...')}
      >
        <div className='minimal-home__content'>
          <div className='home-search-box minimal-home__prompt'>
            <TextArea
              className='minimal-home__textarea'
              value={prompt}
              onChange={setPrompt}
              onKeyDown={handleKeyDown}
              placeholder={t('请输入您的问题...')}
              aria-label={t('请输入您的问题...')}
              rows={1}
              autosize={{ minRows: 1, maxRows: 4 }}
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
              icon={<Send size={18} />}
              onClick={handleSend}
              disabled={!prompt.trim()}
              className='minimal-home__send'
              aria-label={t('操练场')}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
