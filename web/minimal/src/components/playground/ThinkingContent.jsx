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

import React, { useEffect, useRef } from 'react';
import MarkdownRenderer from '../common/markdown/MarkdownRenderer';
import { ChevronRight, ChevronUp, Brain, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ThinkingContent = ({
  message,
  finalExtractedThinkingContent,
  thinkingSource,
  styleState,
  onToggleReasoningExpansion,
}) => {
  const { t } = useTranslation();
  const scrollRef = useRef(null);
  const lastContentRef = useRef('');

  const isThinkingStatus =
    message.status === 'loading' || message.status === 'incomplete';
  const headerText =
    isThinkingStatus && !message.isThinkingComplete
      ? t('思考中...')
      : t('思考过程');

  useEffect(() => {
    if (
      scrollRef.current &&
      finalExtractedThinkingContent &&
      message.isReasoningExpanded
    ) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [finalExtractedThinkingContent, message.isReasoningExpanded]);

  useEffect(() => {
    if (!isThinkingStatus) {
      lastContentRef.current = '';
    }
  }, [isThinkingStatus]);

  if (!finalExtractedThinkingContent) return null;

  let prevLength = 0;
  if (isThinkingStatus && lastContentRef.current) {
    if (finalExtractedThinkingContent.startsWith(lastContentRef.current)) {
      prevLength = lastContentRef.current.length;
    }
  }

  if (isThinkingStatus) {
    lastContentRef.current = finalExtractedThinkingContent;
  }

  return (
    <div className='mb-2 sm:mb-3'>
      {/* 折叠头：低调灰色小条，不喧宾夺主 */}
      <div
        className='inline-flex items-center gap-1.5 cursor-pointer select-none text-semi-color-text-2 hover:text-semi-color-text-1 transition-colors'
        onClick={() => onToggleReasoningExpansion(message.id)}
      >
        {isThinkingStatus && !message.isThinkingComplete ? (
          <Loader2 size={14} className='animate-spin' />
        ) : (
          <Brain size={14} />
        )}
        <span className='text-xs sm:text-sm'>{headerText}</span>
        {(!isThinkingStatus || message.isThinkingComplete) &&
          (message.isReasoningExpanded ? (
            <ChevronUp size={14} />
          ) : (
            <ChevronRight size={14} />
          ))}
      </div>

      {/* 内容：小字灰色 + 左侧细线缩进 */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          message.isReasoningExpanded
            ? 'mt-2 max-h-96 opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        {message.isReasoningExpanded && (
          <div
            ref={scrollRef}
            className='thinking-content-scroll overflow-y-auto border-l-2 border-semi-color-border pl-3'
            style={{ maxHeight: '200px' }}
          >
            <div className='prose prose-xs sm:prose-sm max-w-none text-xs text-semi-color-text-2 sm:text-sm'>
              <MarkdownRenderer
                content={finalExtractedThinkingContent}
                className=''
                animated={isThinkingStatus}
                previousContentLength={prevLength}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThinkingContent;
