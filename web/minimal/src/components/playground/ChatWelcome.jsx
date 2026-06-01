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
import { TextArea, Button, Select } from '@douyinfe/semi-ui';
import { Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**
 * 对话欢迎页 —— 未开始对话时展示，风格与首页一致：
 * 居中标题 + 模型选择 + 输入框（发送图标同行）。发送后由父组件切换为对话气泡布局。
 */
const ChatWelcome = ({ models = [], model, onModelChange, onSend }) => {
  const { t } = useTranslation();
  const [prompt, setPrompt] = useState('');

  const handleSend = useCallback(() => {
    const text = (prompt || '').trim();
    if (!text) return;
    onSend?.(text);
    setPrompt('');
  }, [prompt, onSend]);

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
    <div className='flex h-full flex-col items-center justify-center px-4'>
      <div className='flex w-full max-w-2xl flex-col items-center'>
        {/* 模型选择 */}
        <div className='mb-4'>
          <Select
            placeholder={t('请选择模型')}
            value={model}
            onChange={onModelChange}
            optionList={models}
            filter
            className='!rounded-full'
            style={{ minWidth: 200 }}
          />
        </div>

        {/* 输入框 + 发送（同一行） */}
        <div className='home-search-box flex w-full items-end gap-2 rounded-full border border-semi-color-border bg-semi-color-bg-1 py-2 pl-5 pr-2 shadow-sm transition-all duration-200 focus-within:border-semi-color-text-2 focus-within:shadow-md'>
          <TextArea
            value={prompt}
            onChange={setPrompt}
            onKeyDown={handleKeyDown}
            placeholder={t('请输入您的问题...')}
            rows={1}
            autosize
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
            onClick={handleSend}
            disabled={!prompt.trim()}
            className='!h-9 !w-9 !rounded-full shrink-0'
          />
        </div>
      </div>
    </div>
  );
};

export default ChatWelcome;
