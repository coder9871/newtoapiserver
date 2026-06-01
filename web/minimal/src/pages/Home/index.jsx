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
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, TextArea } from '@douyinfe/semi-ui';
import { Send } from 'lucide-react';

import { getSystemName } from '../../helpers';
import './home.css';

const PENDING_PROMPT_KEY = 'minimal_pending_prompt';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const systemName = getSystemName();

  const [prompt, setPrompt] = useState('');

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
      <section className='minimal-home__stage' aria-label={systemName}>
        <div className='minimal-home__content'>
          <h1 className='minimal-home__title'>{systemName}</h1>

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
