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
import { Button, TextArea, Typography } from '@douyinfe/semi-ui';
import { Send } from 'lucide-react';

import { getSystemName } from '../../helpers';

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
    <div
      className='flex flex-col items-center justify-center px-4'
      style={{ minHeight: 'calc(100vh - 64px)', paddingTop: 64 }}
    >
      <div className='flex w-full max-w-2xl flex-col items-center'>
        <Typography.Title heading={2} className='!mb-2 text-center'>
          {systemName || t('开始对话')}
        </Typography.Title>
        <Typography.Text type='tertiary' className='!mb-6 text-center'>
          {t('输入你的问题，开始对话')}
        </Typography.Text>

        <div className='w-full rounded-2xl border border-semi-color-border bg-semi-color-bg-1 p-3 shadow-sm transition-shadow hover:shadow-md'>
          <TextArea
            value={prompt}
            onChange={setPrompt}
            onKeyDown={handleKeyDown}
            placeholder={t('请输入您的问题...')}
            autosize={{ minRows: 2, maxRows: 8 }}
            style={{ border: 'none', boxShadow: 'none', resize: 'none' }}
          />

          <div className='mt-2 flex items-center justify-end'>
            <Button
              theme='solid'
              type='primary'
              icon={<Send size={16} />}
              onClick={handleSend}
              disabled={!prompt.trim()}
              className='!rounded-full'
            >
              {t('发送')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
