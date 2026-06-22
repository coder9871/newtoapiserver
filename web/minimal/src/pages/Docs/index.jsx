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

import * as e from 'react/jsx-runtime';
import * as y from 'react';
import { useNavigate as B, useParams as F } from 'react-router-dom';
import { useTranslation as I } from 'react-i18next';
import { StatusContext } from '../../context/Status';
import './docs.css';

const D = (languageDefinition) => languageDefinition;
const K = {};
const z = {};
const W = {};
const A = ({ children, customStyle, language }) =>
  e.jsx('pre', {
    className: `docs-code-block language-${language || 'text'}`,
    style: customStyle,
    children: e.jsx('code', { children }),
  });
A.registerLanguage = () => {};

function H(s) {
  const n = { literal: 'true false null' },
    t = [s.C_LINE_COMMENT_MODE, s.C_BLOCK_COMMENT_MODE],
    o = [s.QUOTE_STRING_MODE, s.C_NUMBER_MODE],
    i = {
      end: ',',
      endsWithParent: !0,
      excludeEnd: !0,
      contains: o,
      keywords: n,
    },
    l = {
      begin: /\{/,
      end: /\}/,
      contains: [
        {
          className: 'attr',
          begin: /"/,
          end: /"/,
          contains: [s.BACKSLASH_ESCAPE],
          illegal: '\\n',
        },
        s.inherit(i, { begin: /:/ }),
      ].concat(t),
      illegal: '\\S',
    },
    d = { begin: '\\[', end: '\\]', contains: [s.inherit(i)], illegal: '\\S' };
  return (
    o.push(l, d),
    t.forEach(function (m) {
      o.push(m);
    }),
    { name: 'JSON', contains: o, keywords: n, illegal: '\\S' }
  );
}
var V = H;
const J = D(V);
A.registerLanguage('json', J);
A.registerLanguage('javascript', K);
A.registerLanguage('bash', z);
A.registerLanguage('python', W);
const $ = () =>
    e.jsx('svg', {
      className: 'w-4 h-4',
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24',
      children: e.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M19 9l-7 7-7-7',
      }),
    }),
  Q = () =>
    e.jsx('svg', {
      className: 'w-4 h-4',
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24',
      children: e.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M9 5l7 7-7 7',
      }),
    }),
  X = () =>
    e.jsx('svg', {
      className: 'w-6 h-6',
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24',
      children: e.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M4 6h16M4 12h16M4 18h16',
      }),
    }),
  Z = () =>
    e.jsx('svg', {
      className: 'w-4 h-4',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      children: e.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M13 10V3L4 14h7v7l9-11h-7z',
      }),
    }),
  ee = () =>
    e.jsx('svg', {
      className: 'w-4 h-4',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      children: e.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
      }),
    }),
  te = () =>
    e.jsx('svg', {
      className: 'w-4 h-4',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      children: e.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
      }),
    }),
  O = () =>
    e.jsx('svg', {
      className: 'w-4 h-4',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      children: e.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      }),
    }),
  C = () =>
    e.jsx('svg', {
      className: 'w-4 h-4',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      children: e.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
      }),
    }),
  _ = () =>
    e.jsx('svg', {
      className: 'w-4 h-4',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      children: e.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
      }),
    }),
  T = () =>
    e.jsx('svg', {
      className: 'w-4 h-4',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      children: e.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      }),
    }),
  q = () =>
    e.jsx('svg', {
      className: 'w-4 h-4',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      children: e.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
      }),
    }),
  j = () =>
    e.jsx('svg', {
      className: 'w-4 h-4',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      children: e.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      }),
    }),
  R = () =>
    e.jsx('svg', {
      className: 'w-4 h-4',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      children: e.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
      }),
    }),
  E = () =>
    e.jsx('svg', {
      className: 'w-4 h-4',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      children: e.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      }),
    }),
  se = () =>
    e.jsx('svg', {
      className: 'w-4 h-4',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      children: e.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
      }),
    }),
  ae = () =>
    e.jsx('svg', {
      className: 'w-4 h-4',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      children: e.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M4 6h16M4 12h16m-7 6h7',
      }),
    }),
  M = () =>
    e.jsx('svg', {
      className: 'w-4 h-4',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      children: e.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z',
      }),
    }),
  re = () =>
    e.jsx('svg', {
      className: 'w-4 h-4',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      children: e.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      }),
    }),
  oe = () =>
    e.jsx('svg', {
      className: 'w-4 h-4',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      children: e.jsx('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      }),
    }),
  ne = () =>
    e.jsxs('svg', {
      className: 'w-4 h-4',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      children: [
        e.jsx('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
          d: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
        }),
        e.jsx('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
          d: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14',
        }),
      ],
    }),
  a = (s, n, t) => (s ? n : t),
  DOCS_BASE_URL_PLACEHOLDER = '__DOCS_BASE_URL__',
  DOCS_PROJECT_NAME_PLACEHOLDER = '__DOCS_PROJECT_NAME__',
  DOCS_PROJECT_KEY_PLACEHOLDER = '__DOCS_PROJECT_KEY__',
  getDocsBaseUrl = () =>
    typeof window > 'u' || !window.location || !window.location.origin
      ? ''
      : window.location.origin,
  getStoredDocsProjectName = () => {
    if (typeof window > 'u' || !window.localStorage) return 'New API';
    const s = window.localStorage.getItem('system_name');
    return typeof s == 'string' && s.trim() ? s.trim() : 'New API';
  },
  getDocsProjectName = (s) => {
    const n = s == null ? void 0 : s.system_name;
    return typeof n == 'string' && n.trim()
      ? n.trim()
      : getStoredDocsProjectName();
  },
  getDocsProjectKey = (s) => {
    const n = String(s || getStoredDocsProjectName())
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '');
    return n || 'new_api';
  },
  resolveDocsBaseUrl = (s) =>
    typeof s == 'string'
      ? s.split(DOCS_BASE_URL_PLACEHOLDER).join(getDocsBaseUrl())
      : s,
  resolveDocsProjectName = (s, n = getStoredDocsProjectName()) =>
    typeof s == 'string' ? s.split(DOCS_PROJECT_NAME_PLACEHOLDER).join(n) : s,
  resolveDocsProjectKey = (s, n = getStoredDocsProjectName()) =>
    typeof s == 'string'
      ? s.split(DOCS_PROJECT_KEY_PLACEHOLDER).join(getDocsProjectKey(n))
      : s,
  resolveDocsRuntimeValues = (s, n = getStoredDocsProjectName()) =>
    resolveDocsProjectKey(resolveDocsProjectName(resolveDocsBaseUrl(s), n), n),
  L = () => {
    const [s, n] = y.useState(!1);
    return (
      y.useEffect(() => {
        if (typeof window > 'u') return;
        const t = window.matchMedia('(prefers-color-scheme: dark)'),
          o = (i) => {
            n(i.matches);
          };
        return (
          o(t),
          t.addEventListener('change', o),
          () => t.removeEventListener('change', o)
        );
      }, []),
      s
    );
  },
  U = {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: '#1e1e1e',
      color: '#d4d4d4',
    },
    'hljs-keyword': { color: '#569cd6' },
    'hljs-literal': { color: '#569cd6' },
    'hljs-symbol': { color: '#569cd6' },
    'hljs-name': { color: '#569cd6' },
    'hljs-link': { color: '#569cd6', textDecoration: 'underline' },
    'hljs-built_in': { color: '#4ec9b0' },
    'hljs-type': { color: '#4ec9b0' },
    'hljs-number': { color: '#b5cea8' },
    'hljs-class': { color: '#4ec9b0' },
    'hljs-string': { color: '#ce9178' },
    'hljs-meta-string': { color: '#ce9178' },
    'hljs-regexp': { color: '#d16969' },
    'hljs-template-tag': { color: '#d16969' },
    'hljs-subst': { color: '#d4d4d4' },
    'hljs-function': { color: '#dcdcaa' },
    'hljs-title': { color: '#dcdcaa' },
    'hljs-params': { color: '#9cdcfe' },
    'hljs-formula': { color: '#d4d4d4' },
    'hljs-comment': { color: '#6a9955', fontStyle: 'italic' },
    'hljs-quote': { color: '#6a9955', fontStyle: 'italic' },
    'hljs-doctag': { color: '#608b4e' },
    'hljs-meta': { color: '#9b9b9b' },
    'hljs-meta-keyword': { color: '#9b9b9b' },
    'hljs-tag': { color: '#569cd6' },
    'hljs-variable': { color: '#9cdcfe' },
    'hljs-template-variable': { color: '#9cdcfe' },
    'hljs-attr': { color: '#9cdcfe' },
    'hljs-attribute': { color: '#9cdcfe' },
    'hljs-builtin-name': { color: '#c586c0' },
    'hljs-section': { color: '#ffd700' },
    'hljs-emphasis': { fontStyle: 'italic' },
    'hljs-strong': { fontWeight: 'bold' },
    'hljs-bullet': { color: '#d7ba7d' },
    'hljs-selector-tag': { color: '#d7ba7d' },
    'hljs-selector-id': { color: '#d7ba7d' },
    'hljs-selector-class': { color: '#d7ba7d' },
    'hljs-selector-attr': { color: '#d7ba7d' },
    'hljs-selector-pseudo': { color: '#d7ba7d' },
    'hljs-addition': {
      backgroundColor: '#144212',
      display: 'inline-block',
      width: '100%',
    },
    'hljs-deletion': {
      backgroundColor: '#600',
      display: 'inline-block',
      width: '100%',
    },
  },
  G = {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: '#ffffff',
      color: '#000000',
    },
    'hljs-keyword': { color: '#0000ff' },
    'hljs-literal': { color: '#0000ff' },
    'hljs-symbol': { color: '#0000ff' },
    'hljs-name': { color: '#0000ff' },
    'hljs-link': { color: '#0000ff', textDecoration: 'underline' },
    'hljs-built_in': { color: '#267f99' },
    'hljs-type': { color: '#267f99' },
    'hljs-number': { color: '#098658' },
    'hljs-class': { color: '#267f99' },
    'hljs-string': { color: '#a31515' },
    'hljs-meta-string': { color: '#a31515' },
    'hljs-regexp': { color: '#811f3f' },
    'hljs-template-tag': { color: '#811f3f' },
    'hljs-subst': { color: '#000000' },
    'hljs-function': { color: '#795e26' },
    'hljs-title': { color: '#795e26' },
    'hljs-params': { color: '#001080' },
    'hljs-formula': { color: '#000000' },
    'hljs-comment': { color: '#008000', fontStyle: 'italic' },
    'hljs-quote': { color: '#008000', fontStyle: 'italic' },
    'hljs-doctag': { color: '#008000' },
    'hljs-meta': { color: '#646464' },
    'hljs-meta-keyword': { color: '#646464' },
    'hljs-tag': { color: '#800000' },
    'hljs-variable': { color: '#001080' },
    'hljs-template-variable': { color: '#001080' },
    'hljs-attr': { color: '#001080' },
    'hljs-attribute': { color: '#001080' },
    'hljs-builtin-name': { color: '#267f99' },
    'hljs-section': { color: '#795e26' },
    'hljs-emphasis': { fontStyle: 'italic' },
    'hljs-strong': { fontWeight: 'bold' },
    'hljs-bullet': { color: '#000000' },
    'hljs-selector-tag': { color: '#800000' },
    'hljs-selector-id': { color: '#800000' },
    'hljs-selector-class': { color: '#800000' },
    'hljs-selector-attr': { color: '#800000' },
    'hljs-selector-pseudo': { color: '#800000' },
    'hljs-addition': {
      backgroundColor: '#e6ffed',
      display: 'inline-block',
      width: '100%',
    },
    'hljs-deletion': {
      backgroundColor: '#ffeef0',
      display: 'inline-block',
      width: '100%',
    },
  },
  ie = (s) => ({
    main: [
      {
        id: 'overview',
        title: a(s, '概览', 'Overview'),
        type: 'doc',
        children: [
          {
            id: 'quickstart',
            title: a(s, '快速开始', 'Quickstart'),
            type: 'doc',
            icon: e.jsx(Z, {}),
          },
        ],
      },
      {
        id: 'api-reference',
        title: a(s, 'API 参考', 'API Reference'),
        type: 'doc',
        children: [
          {
            id: 'chat-interface',
            title: a(s, '对话接口', 'Chat Interface'),
            type: 'doc',
            icon: e.jsx(C, {}),
            children: [
              {
                id: 'openai-chat',
                title: a(s, 'OpenAI 对话', 'OpenAI Chat'),
                type: 'api',
                method: 'POST',
              },
              {
                id: 'openai-responses',
                title: a(s, 'OpenAI Responses', 'OpenAI Responses'),
                type: 'api',
                method: 'POST',
              },
              {
                id: 'anthropic',
                title: a(s, 'Anthropic 对话', 'Anthropic'),
                type: 'api',
                method: 'POST',
              },
              {
                id: 'google',
                title: a(s, 'Google 对话', 'Google'),
                type: 'api',
                method: 'POST',
              },
            ],
          },
          {
            id: 'image-interface',
            title: a(s, '图像生成', 'Image Generation'),
            type: 'doc',
            icon: e.jsx(_, {}),
            children: [
              {
                id: 'openai-image-gen',
                title: a(s, 'OpenAI 图像', 'OpenAI Images'),
                type: 'api',
                method: 'POST',
              },
            ],
          },
        ],
      },
      {
        id: 'agent-integration',
        title: a(s, 'Agent 集成', 'Agent Integration'),
        type: 'doc',
        children: [
          {
            id: 'opencode',
            title: a(s, 'OpenCode', 'OpenCode'),
            type: 'doc',
            icon: e.jsx(j, {}),
          },
          {
            id: 'claude-code',
            title: a(s, 'Claude Code', 'Claude Code'),
            type: 'doc',
            icon: e.jsx(j, {}),
          },
          {
            id: 'openclaw',
            title: a(s, 'OpenClaw / Clawdbot', 'OpenClaw / Clawdbot'),
            type: 'doc',
            icon: e.jsx(j, {}),
          },
          {
            id: 'codex',
            title: a(s, 'Codex', 'Codex'),
            type: 'doc',
            icon: e.jsx(j, {}),
          },
          {
            id: 'librechat',
            title: a(s, 'LibreChat', 'LibreChat'),
            type: 'doc',
            icon: e.jsx(j, {}),
          },
        ],
      },
      {
        id: 'advanced',
        title: a(s, '高级用法', 'Advanced Usage'),
        type: 'doc',
        children: [
          {
            id: 'tools-calling',
            title: a(s, '工具调用', 'Tools Calling'),
            type: 'doc',
            icon: e.jsx(R, {}),
          },
          {
            id: 'mcp',
            title: a(s, 'MCP', 'MCP'),
            type: 'doc',
            icon: e.jsx(E, {}),
          },
          {
            id: 'web-search',
            title: a(s, 'Web 搜索', 'Web Search'),
            type: 'doc',
            icon: e.jsx(se, {}),
          },
          {
            id: 'structured-outputs',
            title: a(s, '结构化输出', 'Structured Outputs'),
            type: 'doc',
            icon: e.jsx(ae, {}),
          },
          {
            id: 'thinking-mode',
            title: a(s, '思考模式', 'Thinking Mode'),
            type: 'doc',
            icon: e.jsx(oe, {}),
          },
          {
            id: 'multimodal-input',
            title: a(s, '多模态输入', 'Multimodal Input'),
            type: 'doc',
            icon: e.jsx(ne, {}),
          },
        ],
      },
      {
        id: 'legal',
        title: a(s, '隐私与数据', 'Legal'),
        type: 'doc',
        children: [
          {
            id: 'privacy',
            title: a(s, '隐私与数据', 'Privacy & Data'),
            type: 'doc',
            icon: e.jsx(re, {}),
          },
        ],
      },
    ],
  }),
  le = (s) => {
    const n = new Set(),
      t = (o) => {
        o.forEach((i) => {
          n.add(i.id), i.children && i.children.length > 0 && t(i.children);
        });
      };
    return t(s), n;
  },
  S = (s, n) => {
    var x, f;
    const t =
        (x = s.headerParameters) == null
          ? void 0
          : x.some((p) => p.name === 'x-api-key'),
      o =
        (f = s.headerParameters) == null
          ? void 0
          : f.some((p) => p.name === 'x-goog-api-key'),
      i = s.endpoint.includes('/v1/audio/speech');
    if (s.multipart) {
      const p = Object.entries(s.requestExample);
      if (n === 'curl') {
        let N = 'Authorization: Bearer YOUR_API_KEY';
        t
          ? (N = 'x-api-key: YOUR_API_KEY')
          : o && (N = 'x-goog-api-key: YOUR_API_KEY');
        const P = p.map(([h, v]) => `  -F '${h}=${String(v)}'`).join(` \\
`);
        return `curl -X ${s.method} "__DOCS_BASE_URL__${s.endpoint}" \\
  -H "${N}" \\
${P}`;
      }
      let g = '';
      t
        ? (g = 'headers = {"x-api-key": "YOUR_API_KEY"}')
        : o
          ? (g = 'headers = {"x-goog-api-key": "YOUR_API_KEY"}')
          : (g = 'headers = {"Authorization": "Bearer YOUR_API_KEY"}');
      const k = p.map(
        ([N, P]) => `    "${N}": (None, ${JSON.stringify(String(P))})`,
      ).join(`,
`);
      return `import requests

url = "__DOCS_BASE_URL__${s.endpoint}"

${g}

data = {
${k}
}

response = requests.${s.method.toLowerCase()}(url, headers=headers, files=data)
print(response.json())`;
    }
    const l = JSON.stringify(s.requestExample, null, 2);
    if (n === 'curl') {
      let p = 'Authorization: Bearer YOUR_API_KEY';
      t
        ? (p = 'x-api-key: YOUR_API_KEY')
        : o && (p = 'x-goog-api-key: YOUR_API_KEY');
      const g = i ? ' --output speech.mp3' : '';
      return `curl -X ${s.method} "__DOCS_BASE_URL__${s.endpoint}" \\
  -H "Content-Type: application/json" \\
  -H "${p}" \\
  -d '${l.replace(/'/g, "'\\''")}'${g}`;
    }
    let d = '';
    t
      ? (d = `headers = {
    "Content-Type": "application/json",
    "x-api-key": "YOUR_API_KEY"
}`)
      : o
        ? (d = `headers = {
    "Content-Type": "application/json",
    "x-goog-api-key": "YOUR_API_KEY"
}`)
        : (d = `headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
}`);
    const m = l
      .replace(/: true/g, ': True')
      .replace(/: false/g, ': False')
      .split(
        `
`,
      )
      .map((p, g) => (g === 0 ? p : '    ' + p)).join(`
`);
    return i
      ? `import requests

url = "__DOCS_BASE_URL__${s.endpoint}"

${d}

payload = ${m}

response = requests.${s.method.toLowerCase()}(url, headers=headers, json=payload)

# Save the audio file
with open('speech.mp3', 'wb') as f:
    f.write(response.content)
print("Audio saved to speech.mp3")`
      : `import requests

url = "__DOCS_BASE_URL__${s.endpoint}"

${d}

payload = ${m}

response = requests.${s.method.toLowerCase()}(url, headers=headers, json=payload)
print(response.json())`;
  },
  de = ({ method: s }) => {
    const n = {
      GET: 'bg-blue-100 text-blue-700 border-blue-200',
      POST: 'bg-green-100 text-green-700 border-green-200',
      PUT: 'bg-orange-100 text-orange-700 border-orange-200',
      DELETE: 'bg-red-100 text-red-700 border-red-200',
    };
    return e.jsx('span', {
      className: `text-[10px] font-bold px-2 py-0.5 rounded border ${n[s] || 'bg-gray-100 text-gray-600'}`,
      children: s,
    });
  },
  r = ({ code: s, language: n = 'json' }) => {
    const { i18n: t } = I(),
      o = t.language && t.language.startsWith('zh'),
      [projectStatusState] = y.useContext(StatusContext),
      projectName = getDocsProjectName(
        projectStatusState == null ? void 0 : projectStatusState.status,
      ),
      i = L(),
      l = resolveDocsRuntimeValues(
        typeof s == 'object' ? JSON.stringify(s, null, 2) : s,
        projectName,
      ),
      [d, m] = y.useState(!1),
      x = () => {
        navigator.clipboard.writeText(l), m(!0), setTimeout(() => m(!1), 2e3);
      };
    return e.jsxs('div', {
      className: 'relative group',
      children: [
        e.jsx('div', {
          className:
            'absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10',
          children: e.jsx('button', {
            onClick: x,
            className: `${d ? 'bg-green-600' : 'bg-gray-700'} text-white text-xs px-2 py-1 rounded hover:bg-gray-600 transition-colors`,
            children: d ? a(o, '已复制！', 'Copied!') : a(o, '复制', 'Copy'),
          }),
        }),
        e.jsx(A, {
          language: n,
          style: i ? U : G,
          customStyle: {
            margin: 0,
            padding: '1rem',
            fontSize: '0.875rem',
            lineHeight: '1.75',
            background: i ? '#1e1e1e' : '#ffffff',
            borderRadius: '0.5rem',
          },
          wrapLongLines: !1,
          children: l,
        }),
      ],
    });
  },
  b = ({ samples: s, defaultLanguage: n }) => {
    if (!s || s.length === 0) return null;
    const [t, o] = y.useState(
      n && s.some((l) => l.language === n) ? n : s[0].language,
    );
    y.useEffect(() => {
      s.some((l) => l.language === t) || o(s[0].language);
    }, [t, s]);
    const i = s.find((l) => l.language === t) ?? s[0];
    return e.jsxs('div', {
      children: [
        e.jsx('div', {
          className: 'flex gap-1 mb-2',
          children: s.map((l) =>
            e.jsx(
              'button',
              {
                onClick: () => o(l.language),
                className: `px-3 py-1 text-xs font-medium rounded transition-colors ${l.language === t ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`,
                children: l.label,
              },
              l.language,
            ),
          ),
        }),
        e.jsx(r, { language: i.language, code: i.code }),
      ],
    });
  },
  ce = ({ data: s }) => {
    const { i18n: n } = I(),
      t = n.language && n.language.startsWith('zh'),
      [projectStatusState] = y.useContext(StatusContext),
      projectName = getDocsProjectName(
        projectStatusState == null ? void 0 : projectStatusState.status,
      ),
      o = L(),
      [i, l] = y.useState('curl'),
      [d, m] = y.useState(!1),
      x = resolveDocsRuntimeValues(S(s, 'curl'), projectName),
      f = resolveDocsRuntimeValues(S(s, 'python'), projectName),
      p = i === 'curl' ? x : f,
      g = i === 'curl' ? 'bash' : 'python',
      k = () => {
        navigator.clipboard.writeText(p), m(!0), setTimeout(() => m(!1), 2e3);
      };
    return e.jsxs('div', {
      children: [
        e.jsxs('div', {
          className: 'flex gap-1 mb-2',
          children: [
            e.jsx('button', {
              onClick: () => l('curl'),
              className: `px-3 py-1 text-xs font-medium rounded transition-colors ${i === 'curl' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`,
              children: a(t, 'cURL', 'cURL'),
            }),
            e.jsx('button', {
              onClick: () => l('python'),
              className: `px-3 py-1 text-xs font-medium rounded transition-colors ${i === 'python' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`,
              children: a(t, 'Python', 'Python'),
            }),
          ],
        }),
        e.jsxs('div', {
          className: 'relative group',
          children: [
            e.jsx('div', {
              className:
                'absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10',
              children: e.jsx('button', {
                onClick: k,
                className: `${d ? 'bg-green-600' : 'bg-gray-700'} text-white text-xs px-2 py-1 rounded hover:bg-gray-600 transition-colors`,
                children: d
                  ? a(t, '已复制！', 'Copied!')
                  : a(t, '复制', 'Copy'),
              }),
            }),
            e.jsx(A, {
              language: g,
              style: o ? U : G,
              customStyle: {
                margin: 0,
                padding: '1rem',
                fontSize: '0.875rem',
                lineHeight: '1.75',
                background: o ? '#1e1e1e' : '#ffffff',
                borderRadius: '0.5rem',
              },
              wrapLongLines: !1,
              children: p,
            }),
          ],
        }),
      ],
    });
  },
  c = ({ data: s }) => {
    const { i18n: n } = I(),
      t = n.language && n.language.startsWith('zh'),
      o = (i, l) =>
        e.jsxs('div', {
          className: 'mb-8',
          children: [
            e.jsx('h3', {
              className:
                'text-lg font-semibold text-gray-900 mb-4 border-b pb-2',
              children: i,
            }),
            e.jsx('div', {
              className: 'space-y-4',
              children: l.map((d, m) =>
                e.jsxs(
                  'div',
                  {
                    className:
                      'border-b border-gray-100 last:border-0 pb-4 last:pb-0',
                    children: [
                      e.jsxs('div', {
                        className: 'flex items-baseline gap-2 mb-1',
                        children: [
                          e.jsx('span', {
                            className:
                              'font-mono text-sm font-semibold text-primary',
                            children: d.name,
                          }),
                          e.jsx('span', {
                            className: 'text-xs text-gray-500 font-mono',
                            children: d.type,
                          }),
                          d.required &&
                            e.jsx('span', {
                              className:
                                'text-[10px] text-red-600 font-medium uppercase tracking-wider',
                              children: a(t, '必填', 'Required'),
                            }),
                        ],
                      }),
                      e.jsx('p', {
                        className: 'text-sm text-gray-600 leading-normal',
                        children: d.description,
                      }),
                    ],
                  },
                  m,
                ),
              ),
            }),
          ],
        });
    return e.jsxs('div', {
      className:
        'flex flex-col xl:flex-row gap-8 w-full animate-fadeIn md:h-full md:overflow-hidden md:min-h-0',
      children: [
        e.jsxs('div', {
          className:
            'flex-1 min-w-0 md:h-full md:min-h-0 md:overflow-y-auto md:pr-4',
          children: [
            e.jsx('h1', {
              className: 'text-3xl font-bold text-gray-900 mb-2',
              children: s.title,
            }),
            e.jsxs('div', {
              className:
                'flex items-center gap-3 mb-6 font-mono text-sm bg-gray-50 p-3 rounded border border-gray-200',
              children: [
                e.jsx(de, { method: s.method }),
                e.jsx('span', {
                  className: 'text-gray-700 select-all',
                  children: s.endpoint,
                }),
              ],
            }),
            e.jsx('p', {
              className: 'text-gray-600 mb-8 leading-relaxed',
              children: s.description,
            }),
            s.headerParameters &&
              s.headerParameters.length > 0 &&
              o(a(t, '请求头参数', 'Header Parameters'), s.headerParameters),
            s.bodyParameters &&
              s.bodyParameters.length > 0 &&
              o(a(t, '请求体参数', 'Body Parameters'), s.bodyParameters),
            s.parameters &&
              s.parameters.length > 0 &&
              !s.bodyParameters &&
              !s.headerParameters &&
              o(a(t, '参数', 'Parameters'), s.parameters),
          ],
        }),
        e.jsx('div', {
          className: 'w-full xl:w-[45%] flex-shrink-0 md:h-full md:min-h-0',
          children: e.jsxs('div', {
            className: 'space-y-6 md:h-full md:overflow-y-auto md:pr-2',
            children: [
              e.jsxs('div', {
                children: [
                  e.jsx('div', {
                    className: 'flex items-center justify-between mb-2',
                    children: e.jsx('span', {
                      className:
                        'text-xs font-semibold uppercase text-gray-500 tracking-wider',
                      children: a(t, '请求示例', 'Request Example'),
                    }),
                  }),
                  e.jsx(ce, {
                    data: {
                      method: s.method,
                      endpoint: s.endpoint,
                      headerParameters: s.headerParameters,
                      requestExample: s.requestExample,
                      multipart: s.multipart,
                    },
                  }),
                ],
              }),
              e.jsxs('div', {
                children: [
                  e.jsx('div', {
                    className: 'flex items-center justify-between mb-2',
                    children: e.jsx('span', {
                      className:
                        'text-xs font-semibold uppercase text-gray-500 tracking-wider',
                      children: a(t, '响应示例', 'Response Example'),
                    }),
                  }),
                  e.jsx(r, { code: s.responseExample }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  u = ({ title: s, content: n }) =>
    e.jsxs('div', {
      className:
        'max-w-4xl mx-auto w-full animate-fadeIn md:h-full md:min-h-0 md:overflow-y-auto md:pr-2',
      children: [
        e.jsx('h1', {
          className: 'text-4xl font-bold text-gray-900 mb-6 tracking-tight',
          children: s,
        }),
        e.jsx('div', {
          className:
            'prose prose-slate max-w-none prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-blue-600 pb-12',
          children: n,
        }),
      ],
    }),
  me = (s, n, projectName) => {
    const projectLabel = (o) => resolveDocsRuntimeValues(o, projectName),
      t = (o, i) => projectLabel(a(s, o, i)),
      baseUrl = getDocsBaseUrl();
    switch (n) {
      case 'quickstart':
        return e.jsx(u, {
          title: t('快速开始', 'Quickstart'),
          content: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', {
                className: 'lead text-xl text-gray-600 mb-8',
                children: t(
                  '按照这三个简单步骤，开始使用市面上最全面的 AI 聚合平台。',
                  'Follow these three simple steps to start using the most comprehensive AI aggregator on the market.',
                ),
              }),
              e.jsxs('div', {
                className: 'space-y-8 mt-8',
                children: [
                  e.jsxs('div', {
                    className: 'flex gap-4',
                    children: [
                      e.jsx('div', {
                        className:
                          'flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold',
                        children: '1',
                      }),
                      e.jsxs('div', {
                        children: [
                          e.jsx('h3', {
                            className: 'text-lg font-bold text-gray-900 mt-0',
                            children: t('选择模型', 'Find a Model'),
                          }),
                          e.jsx('p', {
                            children: t(
                              '进入模型页浏览完整库，选择最适合你的模型 ID（如 gpt-5.5或开源模型）。',
                              'Navigate to the Models page to explore our extensive library. Choose the ID of the model that best fits your needs (e.g., gpt-5.5 or open-source variants).',
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    className: 'flex gap-4',
                    children: [
                      e.jsx('div', {
                        className:
                          'flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold',
                        children: '2',
                      }),
                      e.jsxs('div', {
                        children: [
                          e.jsx('h3', {
                            className: 'text-lg font-bold text-gray-900 mt-0',
                            children: t('创建 API Key', 'Create an API Key'),
                          }),
                          e.jsx('p', {
                            children: t(
                              '登录控制台生成新的 API Key，建议开发与生产环境分别创建。',
                              'Log in to your dashboard and generate a new API key. We recommend creating separate keys for development and production environments.',
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    className: 'flex gap-4',
                    children: [
                      e.jsx('div', {
                        className:
                          'flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold',
                        children: '3',
                      }),
                      e.jsxs('div', {
                        children: [
                          e.jsx('h3', {
                            className: 'text-lg font-bold text-gray-900 mt-0',
                            children: t('调用 API', 'Call the API'),
                          }),
                          e.jsx('p', {
                            children: t(
                              '使用兼容 OpenAI 的客户端或直接发起 HTTP 请求，只需将 baseURL 指向我们的端点并使用你的 API Key。',
                              'Use any standard OpenAI-compatible client or make a raw HTTP request. Simply set your baseURL to our endpoint and use your new API Key.',
                            ),
                          }),
                          e.jsx(r, {
                            language: 'javascript',
                            code: `import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: '__DOCS_BASE_URL__/v1',
  apiKey: 'YOUR_API_KEY',
});

async function main() {
  const completion = await client.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-5.5',
  });

  console.log(completion.choices);
}

main();`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      case 'principles':
        return e.jsx(u, {
          title: t('核心原则', 'Principles'),
          content: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', {
                className: 'lead text-xl text-gray-600 mb-6',
                children: t(
                  '我们的使命是把主流 API 提供方聚合成一个统一接口，提供更好的性能、价格与稳定性。',
                  'Our mission is to aggregate all major API providers into a single, unified interface that offers the best performance, price, and stability.',
                ),
              }),
              e.jsxs('div', {
                className: 'grid grid-cols-1 md:grid-cols-2 gap-6 mt-8',
                children: [
                  e.jsxs('div', {
                    className:
                      'p-6 bg-gray-50 rounded-xl border border-gray-100',
                    children: [
                      e.jsx('h3', {
                        className: 'text-lg font-bold text-gray-900 mt-0 mb-2',
                        children: t('更低价格保证', 'Guaranteed Lower Price'),
                      }),
                      e.jsx('p', {
                        className: 'text-sm text-gray-600',
                        children: t(
                          '智能路由到最经济的提供方，确保你获得更优的市场价格。',
                          'We intelligently route your requests to the most affordable provider for any given model, ensuring you always get the best market rate.',
                        ),
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    className:
                      'p-6 bg-gray-50 rounded-xl border border-gray-100',
                    children: [
                      e.jsx('h3', {
                        className: 'text-lg font-bold text-gray-900 mt-0 mb-2',
                        children: t('零额外延迟', 'Zero Latency Overhead'),
                      }),
                      e.jsx('p', {
                        className: 'text-sm text-gray-600',
                        children: t(
                          '高性能边缘基础设施以微秒级处理请求，相比直连几乎无额外延迟。',
                          'Our high-performance edge infrastructure processes requests in microseconds, adding virtually no latency compared to direct provider calls.',
                        ),
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    className:
                      'p-6 bg-gray-50 rounded-xl border border-gray-100',
                    children: [
                      e.jsx('h3', {
                        className: 'text-lg font-bold text-gray-900 mt-0 mb-2',
                        children: t('稳定可靠', 'Unwavering Stability'),
                      }),
                      e.jsx('p', {
                        className: 'text-sm text-gray-600',
                        children: t(
                          '实时监控提供方状态，一旦故障立即切换，保证 99.99% 可用性。',
                          'We monitor provider status in real-time. If one provider goes down, we instantly switch to another, guaranteeing 99.99% uptime.',
                        ),
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    className:
                      'p-6 bg-gray-50 rounded-xl border border-gray-100',
                    children: [
                      e.jsx('h3', {
                        className: 'text-lg font-bold text-gray-900 mt-0 mb-2',
                        children: t('海量模型库', 'Massive Model Library'),
                      }),
                      e.jsx('p', {
                        className: 'text-sm text-gray-600',
                        children: t(
                          '一站式访问最全的闭源与开源模型，新增模型会在发布后第一时间接入。',
                          'Access the most comprehensive collection of closed and open-source models in one place. New models are added immediately upon release.',
                        ),
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    className:
                      'p-6 bg-gray-50 rounded-xl border border-gray-100',
                    children: [
                      e.jsx('h3', {
                        className: 'text-lg font-bold text-gray-900 mt-0 mb-2',
                        children: t('极致隐私', 'Absolute Privacy'),
                      }),
                      e.jsx('p', {
                        className: 'text-sm text-gray-600',
                        children: t(
                          '不记录、不存储、不用于训练你的输入/输出数据，所有数据即时流转，你完全掌控。',
                          'We do not log, store, or train on your inputs or outputs. Your data passes through our pipes ephemerally. You are in total control.',
                        ),
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    className:
                      'p-6 bg-gray-50 rounded-xl border border-gray-100',
                    children: [
                      e.jsx('h3', {
                        className: 'text-lg font-bold text-gray-900 mt-0 mb-2',
                        children: t('无人工限速', 'No Artificial Rate Limits'),
                      }),
                      e.jsx('p', {
                        className: 'text-sm text-gray-600',
                        children: t(
                          '轻松扩展，无人为限速，让业务随用户增长而增长。',
                          "Scale without ceilings. We don't impose arbitrary rate limits, allowing your application to grow as fast as your user base.",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      case 'models':
        return e.jsx(u, {
          title: t('模型覆盖', 'Model Coverage'),
          content: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', {
                className: 'lead text-xl text-gray-600 mb-8',
                children: t(
                  '访问业内最全面的 AI 模型库。覆盖文本、图像、视频、音频等 100+ 前沿模型，确保你始终使用最新、最强的 AI 能力。',
                  'Access the most comprehensive AI model library in the industry. With 100+ cutting-edge models across all modalities, we ensure you always have access to the latest and most powerful AI capabilities.',
                ),
              }),
              e.jsxs('div', {
                className: 'grid grid-cols-1 md:grid-cols-3 gap-6 mb-12',
                children: [
                  e.jsxs('div', {
                    className:
                      'text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200',
                    children: [
                      e.jsx('div', {
                        className: 'text-4xl font-bold text-blue-600 mb-2',
                        children: '100+',
                      }),
                      e.jsx('div', {
                        className: 'text-sm font-medium text-blue-900',
                        children: t('AI 模型', 'AI Models'),
                      }),
                      e.jsx('div', {
                        className: 'text-xs text-blue-700 mt-1',
                        children: t('持续扩展中', 'Continuously expanding'),
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    className:
                      'text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200',
                    children: [
                      e.jsx('div', {
                        className: 'text-4xl font-bold text-purple-600 mb-2',
                        children: '6',
                      }),
                      e.jsx('div', {
                        className: 'text-sm font-medium text-purple-900',
                        children: t('模型类别', 'Model Categories'),
                      }),
                      e.jsx('div', {
                        className: 'text-xs text-purple-700 mt-1',
                        children: t('全模态覆盖', 'All modalities covered'),
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    className:
                      'text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200',
                    children: [
                      e.jsx('div', {
                        className: 'text-4xl font-bold text-green-600 mb-2',
                        children: '24h',
                      }),
                      e.jsx('div', {
                        className: 'text-sm font-medium text-green-900',
                        children: t('更新窗口', 'Update Window'),
                      }),
                      e.jsx('div', {
                        className: 'text-xs text-green-700 mt-1',
                        children: t(
                          '新模型当天接入',
                          'Same-day new model access',
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs('section', {
                className: 'mb-12',
                children: [
                  e.jsx('h2', {
                    className: 'text-2xl font-bold text-gray-900 mb-4',
                    children: t(
                      '主流提供方接入',
                      'Leading AI Provider Integration',
                    ),
                  }),
                  e.jsx('p', {
                    className: 'text-gray-700 mb-6',
                    children: t(
                      '我们接入主流与新兴 AI 提供方，统一访问整个 AI 生态。',
                      'We integrate with all major AI providers and emerging model developers, giving you unified access to the entire AI ecosystem.',
                    ),
                  }),
                  e.jsxs('div', {
                    className: 'grid grid-cols-1 md:grid-cols-2 gap-4',
                    children: [
                      e.jsxs('div', {
                        className:
                          'flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm',
                        children: [
                          e.jsx('div', {
                            className:
                              'flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center',
                            children: e.jsx('svg', {
                              className: 'w-5 h-5 text-emerald-600',
                              fill: 'none',
                              viewBox: '0 0 24 24',
                              stroke: 'currentColor',
                              children: e.jsx('path', {
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: 2,
                                d: 'M5 13l4 4L19 7',
                              }),
                            }),
                          }),
                          e.jsxs('div', {
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-1',
                                children: 'OpenAI',
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '完整 GPT 系列：GPT‑4、GPT‑4 Turbo、GPT‑4o 等专用模型',
                                  'Complete GPT series including GPT-4, GPT-4 Turbo, GPT-4o, and specialized models',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs('div', {
                        className:
                          'flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm',
                        children: [
                          e.jsx('div', {
                            className:
                              'flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center',
                            children: e.jsx('svg', {
                              className: 'w-5 h-5 text-emerald-600',
                              fill: 'none',
                              viewBox: '0 0 24 24',
                              stroke: 'currentColor',
                              children: e.jsx('path', {
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: 2,
                                d: 'M5 13l4 4L19 7',
                              }),
                            }),
                          }),
                          e.jsxs('div', {
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-1',
                                children: 'Anthropic',
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '完整 Claude 家族：Claude 3.5 Sonnet、Claude 3.7 等推理模型',
                                  'Full Claude family including Claude 3.5 Sonnet, Claude 3.7, and reasoning models',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs('div', {
                        className:
                          'flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm',
                        children: [
                          e.jsx('div', {
                            className:
                              'flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center',
                            children: e.jsx('svg', {
                              className: 'w-5 h-5 text-emerald-600',
                              fill: 'none',
                              viewBox: '0 0 24 24',
                              stroke: 'currentColor',
                              children: e.jsx('path', {
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: 2,
                                d: 'M5 13l4 4L19 7',
                              }),
                            }),
                          }),
                          e.jsxs('div', {
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-1',
                                children: 'Google',
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  'Gemini Pro、Flash 与长上下文实验模型',
                                  'Gemini Pro, Flash, and experimental models with extended context windows',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs('div', {
                        className:
                          'flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm',
                        children: [
                          e.jsx('div', {
                            className:
                              'flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center',
                            children: e.jsx('svg', {
                              className: 'w-5 h-5 text-emerald-600',
                              fill: 'none',
                              viewBox: '0 0 24 24',
                              stroke: 'currentColor',
                              children: e.jsx('path', {
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: 2,
                                d: 'M5 13l4 4L19 7',
                              }),
                            }),
                          }),
                          e.jsxs('div', {
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-1',
                                children: t('新兴提供方', 'Emerging Providers'),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  'xAI Grok、Meta Llama 及众多专用模型提供方',
                                  'xAI Grok, Meta Llama, and dozens of specialized model providers',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs('section', {
                className: 'mb-12',
                children: [
                  e.jsx('h2', {
                    className: 'text-2xl font-bold text-gray-900 mb-4',
                    children: t('全模态覆盖', 'Complete Modality Coverage'),
                  }),
                  e.jsx('p', {
                    className: 'text-gray-700 mb-6',
                    children: t(
                      '从文本生成到音乐创作，覆盖所有主流模态的一站式模型访问。',
                      'From text generation to music composition, we provide unified access to AI models across every major modality.',
                    ),
                  }),
                  e.jsxs('div', {
                    className: 'space-y-3',
                    children: [
                      e.jsxs('div', {
                        className:
                          'flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-lg border-l-4 border-blue-500',
                        children: [
                          e.jsx(C, {}),
                          e.jsxs('div', {
                            className: 'flex-1',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900',
                                children: t('文本生成', 'Text Generation'),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '对话、指令跟随、推理与创意写作模型',
                                  'Chat completion, instruction following, reasoning, and creative writing models',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs('div', {
                        className:
                          'flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-transparent rounded-lg border-l-4 border-purple-500',
                        children: [
                          e.jsx(_, {}),
                          e.jsxs('div', {
                            className: 'flex-1',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900',
                                children: t('图像生成', 'Image Generation'),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  'DALL·E、Nano Banana、Seedream 等图像模型',
                                  'DALL-E, Nano Banana, Seedream, and specialized image models',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs('div', {
                        className:
                          'flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-transparent rounded-lg border-l-4 border-pink-500',
                        children: [
                          e.jsx(T, {}),
                          e.jsxs('div', {
                            className: 'flex-1',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900',
                                children: t('视频生成', 'Video Generation'),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '文生视频、视频编辑与动画生成模型',
                                  'Text-to-video, video editing, and animation generation models',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs('div', {
                        className:
                          'flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-transparent rounded-lg border-l-4 border-orange-500',
                        children: [
                          e.jsx(M, {}),
                          e.jsxs('div', {
                            className: 'flex-1',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900',
                                children: t('语音与音频', 'Speech & Audio'),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '文本转语音、语音识别、音色克隆与音频生成',
                                  'Text-to-speech, speech-to-text, voice cloning, and audio generation',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs('div', {
                        className:
                          'flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-transparent rounded-lg border-l-4 border-green-500',
                        children: [
                          e.jsx(q, {}),
                          e.jsxs('div', {
                            className: 'flex-1',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900',
                                children: t('音乐生成', 'Music Generation'),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  'AI 作曲、歌词生成与伴奏创作',
                                  'AI-powered music composition, lyrics generation, and instrumental creation',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs('div', {
                        className:
                          'flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-50 to-transparent rounded-lg border-l-4 border-indigo-500',
                        children: [
                          e.jsx(j, {}),
                          e.jsxs('div', {
                            className: 'flex-1',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900',
                                children: t('向量嵌入', 'Embeddings'),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '文本/多模态向量，用于语义检索与 RAG 应用',
                                  'Text embeddings, multimodal embeddings for semantic search and RAG applications',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs('section', {
                className: 'mb-12',
                children: [
                  e.jsx('h2', {
                    className: 'text-2xl font-bold text-gray-900 mb-4',
                    children: t(
                      '持续更新的模型库',
                      'Always Up-to-Date Model Library',
                    ),
                  }),
                  e.jsx('div', {
                    className:
                      'bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white',
                    children: e.jsxs('div', {
                      className: 'flex items-start gap-6',
                      children: [
                        e.jsx('div', {
                          className: 'flex-shrink-0',
                          children: e.jsx('div', {
                            className:
                              'w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm',
                            children: e.jsx('svg', {
                              className: 'w-8 h-8',
                              fill: 'none',
                              viewBox: '0 0 24 24',
                              stroke: 'currentColor',
                              children: e.jsx('path', {
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: 2,
                                d: 'M13 10V3L4 14h7v7l9-11h-7z',
                              }),
                            }),
                          }),
                        }),
                        e.jsxs('div', {
                          className: 'flex-1',
                          children: [
                            e.jsx('h3', {
                              className: 'text-2xl font-bold mb-3',
                              children: t(
                                '实时模型接入',
                                'Real-Time Model Integration',
                              ),
                            }),
                            e.jsx('p', {
                              className: 'text-blue-50 mb-4 leading-relaxed',
                              children: t(
                                '7×24 小时监控发布动态，新模型通常在公告后数小时内接入；OpenAI、Anthropic、Google 新模型可实现当天接入。',
                                'We monitor AI provider releases 24/7 and integrate new models typically within hours of their public announcement. When OpenAI, Anthropic, or Google releases a new model, you get access on the same day.',
                              ),
                            }),
                            e.jsxs('div', {
                              className:
                                'grid grid-cols-1 md:grid-cols-3 gap-4 mt-6',
                              children: [
                                e.jsxs('div', {
                                  className:
                                    'bg-white/10 rounded-lg p-4 backdrop-blur-sm',
                                  children: [
                                    e.jsxs('div', {
                                      className: 'text-3xl font-bold mb-1',
                                      children: [
                                        e.jsx('span', {
                                          className:
                                            'inline-block w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse',
                                        }),
                                        t('实时', 'Live'),
                                      ],
                                    }),
                                    e.jsx('div', {
                                      className: 'text-sm text-blue-100',
                                      children: t(
                                        '自动监控',
                                        'Automated monitoring',
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsxs('div', {
                                  className:
                                    'bg-white/10 rounded-lg p-4 backdrop-blur-sm',
                                  children: [
                                    e.jsx('div', {
                                      className: 'text-3xl font-bold mb-1',
                                      children: '< 24h',
                                    }),
                                    e.jsx('div', {
                                      className: 'text-sm text-blue-100',
                                      children: t(
                                        '接入时效',
                                        'Integration time',
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsxs('div', {
                                  className:
                                    'bg-white/10 rounded-lg p-4 backdrop-blur-sm',
                                  children: [
                                    e.jsx('div', {
                                      className: 'text-3xl font-bold mb-1',
                                      children: '100%',
                                    }),
                                    e.jsx('div', {
                                      className: 'text-sm text-blue-100',
                                      children: t(
                                        '覆盖保证',
                                        'Coverage guarantee',
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              e.jsxs('section', {
                children: [
                  e.jsx('h2', {
                    className: 'text-2xl font-bold text-gray-900 mb-4',
                    children: t(
                      '为什么需要全面的模型访问',
                      'Why Comprehensive Model Access Matters',
                    ),
                  }),
                  e.jsxs('div', {
                    className: 'space-y-4',
                    children: [
                      e.jsxs('div', {
                        className:
                          'p-5 bg-gray-50 rounded-lg border border-gray-200',
                        children: [
                          e.jsx('h4', {
                            className: 'font-bold text-gray-900 mb-2',
                            children: t(
                              '为场景选择最佳模型',
                              'Choose the Right Tool for the Job',
                            ),
                          }),
                          e.jsx('p', {
                            className: 'text-sm text-gray-600',
                            children: t(
                              '不同模型擅长不同任务。100+ 模型让你为每个场景匹配最优模型，兼顾质量与成本。',
                              'Different models excel at different tasks. With 100+ models, you can match each use case to the optimal model, maximizing quality while minimizing costs.',
                            ),
                          }),
                        ],
                      }),
                      e.jsxs('div', {
                        className:
                          'p-5 bg-gray-50 rounded-lg border border-gray-200',
                        children: [
                          e.jsx('h4', {
                            className: 'font-bold text-gray-900 mb-2',
                            children: t(
                              '保持技术领先',
                              'Stay Ahead of the Curve',
                            ),
                          }),
                          e.jsx('p', {
                            className: 'text-sm text-gray-600',
                            children: t(
                              'AI 发展迅猛，新模型当天接入意味着你的应用无需等待人工集成即可获得最新突破。',
                              'AI is evolving rapidly. Same-day access to new model releases means your applications benefit from the latest breakthroughs immediately, without waiting for manual integration.',
                            ),
                          }),
                        ],
                      }),
                      e.jsxs('div', {
                        className:
                          'p-5 bg-gray-50 rounded-lg border border-gray-200',
                        children: [
                          e.jsx('h4', {
                            className: 'font-bold text-gray-900 mb-2',
                            children: t(
                              '面向未来的架构',
                              'Future-Proof Architecture',
                            ),
                          }),
                          e.jsx('p', {
                            className: 'text-sm text-gray-600',
                            children: t(
                              '新提供方不断出现、旧提供方持续演进，统一 API 让你无需重写集成代码，只需切换模型 ID 即可获取新能力。',
                              'As new AI providers emerge and existing ones evolve, our unified API means you never need to rewrite your integration code. Simply switch model IDs to access new capabilities.',
                            ),
                          }),
                        ],
                      }),
                      e.jsxs('div', {
                        className:
                          'p-5 bg-gray-50 rounded-lg border border-gray-200',
                        children: [
                          e.jsx('h4', {
                            className: 'font-bold text-gray-900 mb-2',
                            children: t(
                              '自动成本优化',
                              'Automatic Cost Optimization',
                            ),
                          }),
                          e.jsx('p', {
                            className: 'text-sm text-gray-600',
                            children: t(
                              '在多家提供方之间自动选择最具性价比的方案，满足质量要求的同时降低成本。',
                              'With access to dozens of providers for similar capabilities, our routing can automatically select the most cost-effective option that meets your quality requirements.',
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx('div', {
                className:
                  'docs-accent mt-10 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg',
                children: e.jsxs('p', {
                  className: 'text-sm text-blue-900',
                  children: [
                    e.jsx('strong', {
                      children: t(
                        '想看更具体的模型信息？',
                        'Looking for specific model details?',
                      ),
                    }),
                    ' ',
                    t(
                      '前往控制台查看完整模型目录，实时可用性、价格与能力信息一应俱全，并随新模型发布持续更新。',
                      'Visit your dashboard to browse our complete model catalog with real-time availability, pricing, and capability information. The catalog is updated continuously as new models are added.',
                    ),
                  ],
                }),
              }),
            ],
          }),
        });
      case 'faq':
        return e.jsx(u, {
          title: t('常见问题', 'Frequently Asked Questions'),
          content: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', {
                className: 'lead text-xl text-gray-600 mb-8',
                children: t(
                  '关于平台、价格与功能的常见问题解答。如果没有找到答案，请联系我们的支持团队。',
                  "Find answers to common questions about our platform, pricing, and features. Can't find what you're looking for? Reach out to our support team.",
                ),
              }),
              e.jsxs('div', {
                className: 'space-y-4',
                children: [
                  e.jsxs('details', {
                    className:
                      'group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-200',
                    children: [
                      e.jsxs('summary', {
                        className:
                          'flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors',
                        children: [
                          e.jsx('span', {
                            className:
                              'font-semibold text-lg text-gray-900 group-open:text-blue-600 pr-4',
                            children: t(
                              '什么是“智能路由”？',
                              "What is the 'Smart Router'?",
                            ),
                          }),
                          e.jsx('span', {
                            className:
                              'flex-shrink-0 text-gray-400 group-open:text-blue-600 group-open:rotate-45 transition-transform',
                            children: e.jsx('svg', {
                              className: 'w-5 h-5',
                              fill: 'none',
                              viewBox: '0 0 24 24',
                              stroke: 'currentColor',
                              children: e.jsx('path', {
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: 2,
                                d: 'M12 4v16m8-8H4',
                              }),
                            }),
                          }),
                        ],
                      }),
                      e.jsx('div', {
                        className:
                          'px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100',
                        children: t(
                          '智能路由会实时分析 50+ 底层 GPU 提供方的状态。对 Pro 用户而言，它会自动把请求路由到当前更低价或更快的提供方，较直连节省最高可达 40%。',
                          'Our Smart Router dynamically analyzes the status of over 50+ underlying GPU providers in real-time. For Pro users, it automatically routes your request to the provider that currently offers much lower price or faster response time for your specific model, saving you up to 40% compared to direct API usage.',
                        ),
                      }),
                    ],
                  }),
                  e.jsxs('details', {
                    className:
                      'group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-200',
                    children: [
                      e.jsxs('summary', {
                        className:
                          'flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors',
                        children: [
                          e.jsx('span', {
                            className:
                              'font-semibold text-lg text-gray-900 group-open:text-blue-600 pr-4',
                            children: t(
                              '什么是价格分组？',
                              'What is a price group?',
                            ),
                          }),
                          e.jsx('span', {
                            className:
                              'flex-shrink-0 text-gray-400 group-open:text-blue-600 group-open:rotate-45 transition-transform',
                            children: e.jsx('svg', {
                              className: 'w-5 h-5',
                              fill: 'none',
                              viewBox: '0 0 24 24',
                              stroke: 'currentColor',
                              children: e.jsx('path', {
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: 2,
                                d: 'M12 4v16m8-8H4',
                              }),
                            }),
                          }),
                        ],
                      }),
                      e.jsx('div', {
                        className:
                          'px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100',
                        children: t(
                          '价格分组是同一模型的不同价格档位。目前有 default 与 plus 两组。plus 价格约为默认组的 1.5 倍，但使用更稳定的实时通道（默认组也很稳定）。两组价格都明显低于市场平均水平。',
                          'A price group is a pricing tier for the same model. We currently offer two groups: default and plus. Plus is priced at 1.5x the default group but uses more stable real-time channels for routing (the default group is also very stable). Both groups are priced significantly lower than typical market rates.',
                        ),
                      }),
                    ],
                  }),
                  e.jsxs('details', {
                    className:
                      'group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-200',
                    children: [
                      e.jsxs('summary', {
                        className:
                          'flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors',
                        children: [
                          e.jsx('span', {
                            className:
                              'font-semibold text-lg text-gray-900 group-open:text-blue-600 pr-4',
                            children: t(
                              '0.1 美元免费额度如何使用？',
                              'How does the $0.1 free credit work?',
                            ),
                          }),
                          e.jsx('span', {
                            className:
                              'flex-shrink-0 text-gray-400 group-open:text-blue-600 group-open:rotate-45 transition-transform',
                            children: e.jsx('svg', {
                              className: 'w-5 h-5',
                              fill: 'none',
                              viewBox: '0 0 24 24',
                              stroke: 'currentColor',
                              children: e.jsx('path', {
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: 2,
                                d: 'M12 4v16m8-8H4',
                              }),
                            }),
                          }),
                        ],
                      }),
                      e.jsx('div', {
                        className:
                          'px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100',
                        children: t(
                          '注册后会赠送 0.1 美元额度用于测试，可调用如 Llama‑3‑8b 等小模型数千次。用完后需添加支付方式继续使用。',
                          "When you sign up, we give you $0.1 in credits to test our infrastructure. This allows you to make thousands of calls to smaller models like Llama-3-8b. Once exhausted, you'll need to add a payment method to continue.",
                        ),
                      }),
                    ],
                  }),
                  e.jsxs('details', {
                    className:
                      'group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-200',
                    children: [
                      e.jsxs('summary', {
                        className:
                          'flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors',
                        children: [
                          e.jsx('span', {
                            className:
                              'font-semibold text-lg text-gray-900 group-open:text-blue-600 pr-4',
                            children: t(
                              '企业用户支持开票吗？',
                              'Do you offer invoices for Enterprise?',
                            ),
                          }),
                          e.jsx('span', {
                            className:
                              'flex-shrink-0 text-gray-400 group-open:text-blue-600 group-open:rotate-45 transition-transform',
                            children: e.jsx('svg', {
                              className: 'w-5 h-5',
                              fill: 'none',
                              viewBox: '0 0 24 24',
                              stroke: 'currentColor',
                              children: e.jsx('path', {
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: 2,
                                d: 'M12 4v16m8-8H4',
                              }),
                            }),
                          }),
                        ],
                      }),
                      e.jsx('div', {
                        className:
                          'px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100',
                        children: t(
                          '支持。企业计划可提供 Net‑30 账期、采购订单与定制账务对接。',
                          'Yes, for Enterprise plans we support net-30 invoicing, purchase orders, and custom billing integration.',
                        ),
                      }),
                    ],
                  }),
                  e.jsxs('details', {
                    className:
                      'group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-200',
                    children: [
                      e.jsxs('summary', {
                        className:
                          'flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors',
                        children: [
                          e.jsx('span', {
                            className:
                              'font-semibold text-lg text-gray-900 group-open:text-blue-600 pr-4',
                            children: t(
                              '如何处理数据隐私？',
                              'How do you handle data privacy?',
                            ),
                          }),
                          e.jsx('span', {
                            className:
                              'flex-shrink-0 text-gray-400 group-open:text-blue-600 group-open:rotate-45 transition-transform',
                            children: e.jsx('svg', {
                              className: 'w-5 h-5',
                              fill: 'none',
                              viewBox: '0 0 24 24',
                              stroke: 'currentColor',
                              children: e.jsx('path', {
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: 2,
                                d: 'M12 4v16m8-8H4',
                              }),
                            }),
                          }),
                        ],
                      }),
                      e.jsx('div', {
                        className:
                          'px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100',
                        children: t(
                          '默认不存储或保留请求与响应数据，所有请求在内存中处理并完成即丢弃。企业用户可开启零留存模式以增强隐私保证。',
                          'We do not store or retain any request or response data by default. All requests are processed in-memory and discarded immediately after completion. Enterprise users may enable a zero-retention mode for enhanced privacy guarantees.',
                        ),
                      }),
                    ],
                  }),
                  e.jsxs('details', {
                    className:
                      'group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-200',
                    children: [
                      e.jsxs('summary', {
                        className:
                          'flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors',
                        children: [
                          e.jsx('span', {
                            className:
                              'font-semibold text-lg text-gray-900 group-open:text-blue-600 pr-4',
                            children: t(
                              '支持哪些模型？',
                              'Which models do you support?',
                            ),
                          }),
                          e.jsx('span', {
                            className:
                              'flex-shrink-0 text-gray-400 group-open:text-blue-600 group-open:rotate-45 transition-transform',
                            children: e.jsx('svg', {
                              className: 'w-5 h-5',
                              fill: 'none',
                              viewBox: '0 0 24 24',
                              stroke: 'currentColor',
                              children: e.jsx('path', {
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: 2,
                                d: 'M12 4v16m8-8H4',
                              }),
                            }),
                          }),
                        ],
                      }),
                      e.jsx('div', {
                        className:
                          'px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100',
                        children: t(
                          '已聚合 OpenAI、Anthropic、Google、Meta、DeepSeek 等主流提供方的 100+ 模型。新模型持续接入，并通过智能路由自动可用。',
                          'We aggregate over 100+ models from major providers including OpenAI, Anthropic, Google, Meta, DeepSeek, and more. New models are added continuously and become available automatically through the Smart Router.',
                        ),
                      }),
                    ],
                  }),
                  e.jsxs('details', {
                    className:
                      'group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-200',
                    children: [
                      e.jsxs('summary', {
                        className:
                          'flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors',
                        children: [
                          e.jsx('span', {
                            className:
                              'font-semibold text-lg text-gray-900 group-open:text-blue-600 pr-4',
                            children: t(
                              '是否有速率或并发限制？',
                              'Is there a rate limit or concurrency limit?',
                            ),
                          }),
                          e.jsx('span', {
                            className:
                              'flex-shrink-0 text-gray-400 group-open:text-blue-600 group-open:rotate-45 transition-transform',
                            children: e.jsx('svg', {
                              className: 'w-5 h-5',
                              fill: 'none',
                              viewBox: '0 0 24 24',
                              stroke: 'currentColor',
                              children: e.jsx('path', {
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: 2,
                                d: 'M12 4v16m8-8H4',
                              }),
                            }),
                          }),
                        ],
                      }),
                      e.jsx('div', {
                        className:
                          'px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100',
                        children: t(
                          '免费用户有基础限速，Pro 用户可获得更高吞吐。企业计划提供可调限速、专用带宽与优先通道，适配关键业务。',
                          'Free users have basic rate limits, while Pro users receive significantly higher throughput. Enterprise plans include adjustable rate limits, dedicated bandwidth, and priority traffic lanes for mission-critical workloads.',
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx('div', {
                className:
                  'mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100',
                children: e.jsxs('div', {
                  className: 'text-center',
                  children: [
                    e.jsx('h3', {
                      className: 'text-2xl font-bold text-gray-900 mb-3',
                      children: t('还有疑问？', 'Still have questions?'),
                    }),
                    e.jsx('p', {
                      className: 'text-gray-600 mb-6',
                      children: t(
                        '我们的支持团队随时待命，联系我们，24 小时内回复。',
                        "Our support team is here to help. Reach out and we'll get back to you within 24 hours.",
                      ),
                    }),
                    e.jsxs('div', {
                      className:
                        'flex flex-col sm:flex-row gap-4 justify-center items-center',
                      children: [
                        e.jsxs('a', {
                          href: 'mailto:ai.open6666@gmail.com',
                          className:
                            'inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors',
                          children: [
                            e.jsx('svg', {
                              className: 'w-5 h-5',
                              fill: 'none',
                              viewBox: '0 0 24 24',
                              stroke: 'currentColor',
                              children: e.jsx('path', {
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: 2,
                                d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                              }),
                            }),
                            t('邮件支持', 'Email Support'),
                          ],
                        }),
                        e.jsxs('a', {
                          href: '/sale',
                          className:
                            'inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors border border-gray-200',
                          children: [
                            e.jsx('svg', {
                              className: 'w-5 h-5',
                              fill: 'none',
                              viewBox: '0 0 24 24',
                              stroke: 'currentColor',
                              children: e.jsx('path', {
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: 2,
                                d: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z',
                              }),
                            }),
                            t('加入社区', 'Join Discord'),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      case 'privacy':
        return e.jsx(u, {
          title: t('隐私与数据收集', 'Privacy & Data Collection'),
          content: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', {
                className: 'lead text-xl text-gray-600 mb-8',
                children: t(
                  '你的隐私是我们的首要关注。我们对请求内容实行严格的零留存策略。',
                  'Your privacy is our paramount concern. We operate with a strict zero-retention policy for payload data.',
                ),
              }),
              e.jsxs('div', {
                className: 'space-y-8',
                children: [
                  e.jsxs('div', {
                    children: [
                      e.jsx('h3', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('我们收集哪些数据', 'What Data We Collect'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700',
                        children: t(
                          '使用 API 时，数据通过安全通道传输，我们将系统设计为尽可能减少数据足迹。',
                          'When using our API, your data flows through secure channels. We have designed our system to minimize data footprint.',
                        ),
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    className:
                      'docs-privacy-card bg-white p-6 rounded-lg border border-gray-200 shadow-sm',
                    children: [
                      e.jsx('h4', {
                        className: 'text-lg font-bold text-gray-900 mb-2',
                        children: t('平台内', 'Within Our Platform'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-600 mb-4',
                        children: t(
                          '不存储你的提示词、上传文件或生成内容。',
                          'We do not store your prompts, uploaded files, or generated responses.',
                        ),
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    className:
                      'docs-privacy-card bg-white p-6 rounded-lg border border-gray-200 shadow-sm',
                    children: [
                      e.jsx('h4', {
                        className: 'text-lg font-bold text-gray-900 mb-2',
                        children: t('元数据收集', 'Metadata Collection'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-600 mb-4',
                        children: t(
                          '为提供账单与用量分析，我们会为每次请求保存元数据，包括：',
                          'We do store metadata for every request to generate your invoices and provide usage analytics. This includes:',
                        ),
                      }),
                      e.jsxs('ul', {
                        className: 'list-disc pl-5 space-y-1 text-gray-600',
                        children: [
                          e.jsx('li', {
                            children: t(
                              '提示与补全 token 数',
                              'Number of prompt and completion tokens',
                            ),
                          }),
                          e.jsx('li', {
                            children: t('使用的模型 ID', 'Model ID used'),
                          }),
                          e.jsx('li', {
                            children: t(
                              '请求时间戳与耗时',
                              'Timestamp and duration of the request',
                            ),
                          }),
                          e.jsx('li', {
                            children: t('HTTP 状态码', 'HTTP Status code'),
                          }),
                        ],
                      }),
                      e.jsx('p', {
                        className: 'text-gray-600 mt-4 text-sm italic',
                        children: t(
                          '这些元数据不包含任何请求内容。',
                          'This metadata does not include any content from your request body.',
                        ),
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    className:
                      'docs-privacy-card bg-white p-6 rounded-lg border border-gray-200 shadow-sm',
                    children: [
                      e.jsx('h4', {
                        className: 'text-lg font-bold text-gray-900 mb-2',
                        children: t('第三方提供方', 'Third-Party Providers'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-600',
                        children: t(
                          '请求数据会安全传输到对应模型提供方（如 OpenAI、Anthropic）进行生成。这些提供方遵循各自隐私政策，通常声明 API 数据不用于模型训练。',
                          'Your request data is securely transmitted to the underlying model provider (e.g., OpenAI, Anthropic) for generation. These providers are bound by their own privacy policies, which generally state that API data is not used for model training.',
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      case 'openai-chat':
        return e.jsx(c, {
          data: {
            title: t('OpenAI 对话补全', 'OpenAI Chat Completions'),
            method: 'POST',
            endpoint: '/v1/chat/completions',
            description: t(
              '为给定对话创建模型回复。完全兼容 OpenAI 客户端库，支持流式响应与多种生成参数配置。',
              "Creates a model response for the given chat conversation. Fully compatible with OpenAI's client libraries. Supports streaming responses and various configuration options for controlling generation behavior.",
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !0,
                description: t(
                  '用于认证的 Bearer token。格式："Bearer YOUR_API_KEY"，需放在请求头中。',
                  'Bearer token for authentication. Format: "Bearer YOUR_API_KEY". Include this in the request headers to authenticate your API calls.',
                ),
              },
              {
                name: 'Content-Type',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"，用于声明请求体格式。',
                  'Must be set to "application/json" to indicate the request body format.',
                ),
              },
              {
                name: 'Accept',
                type: 'string',
                required: !1,
                description: t(
                  '期望的响应格式，通常为 "application/json"，可选但建议设置。',
                  'Specifies the expected response format. Typically "application/json". Optional but recommended.',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'model',
                type: 'string',
                required: !0,
                description: t(
                  '要使用的模型 ID，可选如 "gpt-4o"、"gpt-4o-mini"、"claude-3-5-sonnet" 等。',
                  'ID of the model to use. You can use models like "gpt-4o", "gpt-4o-mini", "claude-3-5-sonnet", or other supported models from our model library.',
                ),
              },
              {
                name: 'messages',
                type: 'array',
                required: !0,
                description: t(
                  '对话消息列表。每条消息包含 "role"（system/user/assistant）与 "content"（文本）。',
                  'A list of messages comprising the conversation so far. Each message should have a "role" (system, user, or assistant) and "content" (the message text).',
                ),
              },
              {
                name: 'max_tokens',
                type: 'integer',
                required: !1,
                description: t(
                  '模型本次最多生成的 token 数，用于限制回复长度。',
                  "Maximum number of tokens the model may generate for this response. Use this to explicitly bound completion length within the model's context window.",
                ),
              },
              {
                name: 'temperature',
                type: 'number',
                required: !1,
                description: t(
                  '采样温度 0~2。值越高越随机，越低越确定，默认 1。',
                  'Sampling temperature between 0 and 2. Higher values like 0.8 make output more random, while lower values like 0.2 make it more focused and deterministic. Defaults to 1.',
                ),
              },
              {
                name: 'stream',
                type: 'boolean',
                required: !1,
                description: t(
                  '为 true 时按 SSE 规范流式返回增量内容。',
                  'If set to true, partial message deltas will be sent as data-only server-sent events as they become available, following the Server-Sent Events (SSE) standard.',
                ),
              },
              {
                name: 'top_p',
                type: 'number',
                required: !1,
                description: t(
                  '核采样参数，替代温度采样。top_p=0.1 表示仅考虑累计概率前 10% 的 token。',
                  'An alternative to sampling with temperature. Nucleus sampling, where the model considers the results of the tokens with top_p probability mass. For example, 0.1 means only tokens comprising the top 10% probability mass are considered.',
                ),
              },
              {
                name: 'n',
                type: 'integer',
                required: !1,
                description: t(
                  '每条输入生成的候选数，默认 1。',
                  'How many chat completion choices to generate for each input message. Defaults to 1.',
                ),
              },
              {
                name: 'stop',
                type: 'string or array',
                required: !1,
                description: t(
                  '最多 4 个停止序列，遇到后停止生成，返回文本不包含停止序列。',
                  'Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.',
                ),
              },
              {
                name: 'presence_penalty',
                type: 'number',
                required: !1,
                description: t(
                  '范围 -2.0~2.0。正值会惩罚已出现过的话题，引导模型讨论新内容。',
                  "Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.",
                ),
              },
              {
                name: 'frequency_penalty',
                type: 'number',
                required: !1,
                description: t(
                  '范围 -2.0~2.0。正值会惩罚高频 token，降低重复。',
                  "Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.",
                ),
              },
            ],
            requestExample: {
              model: 'gpt-4o-mini',
              messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: 'Hello' },
              ],
            },
            responseExample: {
              id: 'chatcmpl-abc123def456',
              object: 'chat.completion',
              created: 1677652288,
              model: 'gpt-4o-mini',
              choices: [
                {
                  index: 0,
                  message: {
                    role: 'assistant',
                    content: 'Hi, how can I assist you today?',
                  },
                  finish_reason: 'stop',
                },
              ],
              usage: {
                prompt_tokens: 20,
                completion_tokens: 15,
                total_tokens: 35,
              },
            },
          },
        });
      case 'openai-responses':
        return e.jsx(c, {
          data: {
            title: t('OpenAI Responses', 'OpenAI Responses'),
            method: 'POST',
            endpoint: '/v1/responses',
            description: t(
              '使用 responses 格式创建模型回复。部分 OpenAI 模型（如 o3-pro）仅支持该格式。本接口用 "input" 替代 "messages" 作为对话结构。',
              "Creates a model response using the responses format. Some OpenAI models like o3-pro only support this format. This endpoint uses 'input' instead of 'messages' for the conversation structure.",
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !0,
                description: t(
                  '用于认证的 Bearer token。格式："Bearer YOUR_API_KEY"，需放在请求头中。',
                  'Bearer token for authentication. Format: "Bearer YOUR_API_KEY". Include this in the request headers to authenticate your API calls.',
                ),
              },
              {
                name: 'Content-Type',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"，用于声明请求体格式。',
                  'Must be set to "application/json" to indicate the request body format.',
                ),
              },
              {
                name: 'Accept',
                type: 'string',
                required: !1,
                description: t(
                  '期望的响应格式，通常为 "application/json"，可选但建议设置。',
                  'Specifies the expected response format. Typically "application/json". Optional but recommended.',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'model',
                type: 'string',
                required: !0,
                description: t(
                  '要使用的模型 ID。该接口适用于需要 responses 格式的模型，如 "o3-pro"。',
                  'ID of the model to use. This endpoint is particularly designed for models like "o3-pro" and other specialized models that require the responses format.',
                ),
              },
              {
                name: 'input',
                type: 'array',
                required: !0,
                description: t(
                  '对话消息数组。每条消息包含 "role"（system/user/assistant）与 "content"（文本）。',
                  'An array of message objects comprising the conversation. Each message should have a "role" (system, user, or assistant) and "content" (the message text).',
                ),
              },
              {
                name: 'max_tokens',
                type: 'integer',
                required: !1,
                description: t(
                  '本次最多生成的 token 数，受模型上下文窗口限制。',
                  "The maximum number of tokens to generate in the response. The total length of input tokens and generated tokens is limited by the model's context window.",
                ),
              },
              {
                name: 'temperature',
                type: 'number',
                required: !1,
                description: t(
                  '采样温度 0~2，越高越随机，越低越确定。',
                  'Sampling temperature between 0 and 2. Higher values make output more random, while lower values make it more focused and deterministic.',
                ),
              },
              {
                name: 'top_p',
                type: 'number',
                required: !1,
                description: t(
                  '核采样参数，替代温度采样。',
                  'An alternative to sampling with temperature. Nucleus sampling considers the results of tokens with top_p probability mass.',
                ),
              },
              {
                name: 'stream',
                type: 'boolean',
                required: !1,
                description: t(
                  '为 true 时按 SSE 流式返回增量内容。',
                  'If set to true, partial message deltas will be sent as server-sent events as they become available.',
                ),
              },
            ],
            requestExample: {
              model: 'gpt-5.1',
              input: [
                {
                  role: 'user',
                  content:
                    'Write a one-sentence bedtime story about a unicorn.',
                },
              ],
            },
            responseExample: {
              id: 'resp-abc123def456',
              object: 'response',
              created: 1677652288,
              model: 'gpt-5.1',
              choices: [
                {
                  index: 0,
                  message: {
                    role: 'assistant',
                    content:
                      'In a moonlit meadow, a gentle unicorn with a shimmering silver horn hummed a lullaby to the stars before drifting into dreams.',
                  },
                  finish_reason: 'stop',
                },
              ],
              usage: {
                prompt_tokens: 18,
                completion_tokens: 28,
                total_tokens: 46,
              },
            },
          },
        });
      case 'anthropic':
        return e.jsx(c, {
          data: {
            title: t('Anthropic Messages', 'Anthropic Messages'),
            method: 'POST',
            endpoint: '/v1/messages',
            description: t(
              '使用 Anthropic Claude 的原生格式创建对话补全。支持顶层 system 提示与流式响应，认证使用 "x-api-key" 请求头。',
              "Creates a chat completion using Anthropic Claude models in their native format. Supports system prompts as a top-level parameter and streaming responses. Use the 'x-api-key' header for authentication.",
            ),
            headerParameters: [
              {
                name: 'x-api-key',
                type: 'string',
                required: !0,
                description: t(
                  '用于认证的 API Key。Anthropic 使用 "x-api-key" 而非 Authorization。格式："YOUR_API_KEY"（无 Bearer 前缀）。',
                  'API key for authentication. Anthropic uses "x-api-key" header instead of the standard Authorization header. Format: "YOUR_API_KEY" (without Bearer prefix).',
                ),
              },
              {
                name: 'Content-Type',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"，用于声明请求体格式。',
                  'Must be set to "application/json" to indicate the request body format.',
                ),
              },
              {
                name: 'Accept',
                type: 'string',
                required: !1,
                description: t(
                  '期望的响应格式，通常为 "application/json"，可选但建议设置。',
                  'Specifies the expected response format. Typically "application/json". Optional but recommended.',
                ),
              },
              {
                name: 'anthropic-version',
                type: 'string',
                required: !1,
                description: t(
                  'Anthropic API 版本，如 "2023-06-01"，用于确保兼容性。',
                  'The version of the Anthropic API to use. Example: "2023-06-01". Helps ensure compatibility with specific API versions.',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'model',
                type: 'string',
                required: !0,
                description: t(
                  '要使用的 Claude 模型，如 "claude-sonnet-4-20250514"、"claude-3-5-sonnet-20240620" 等。',
                  'The Claude model that will complete your prompt. Examples include "claude-sonnet-4-20250514", "claude-3-5-sonnet-20240620", and other Claude model variants.',
                ),
              },
              {
                name: 'messages',
                type: 'array',
                required: !0,
                description: t(
                  '对话消息数组。每条消息包含 "role"（user/assistant）与 "content"（文本）。',
                  'An array of input messages comprising the conversation. Each message should have a "role" (user or assistant) and "content" (the message text).',
                ),
              },
              {
                name: 'max_tokens',
                type: 'integer',
                required: !0,
                description: t(
                  '最多生成 token 数，Claude 需要显式设置。',
                  'The maximum number of tokens to generate before stopping. Claude models require this parameter to be explicitly set.',
                ),
              },
              {
                name: 'temperature',
                type: 'number',
                required: !1,
                description: t(
                  '随机性 0.0~2.0，默认 1.0。靠近 0 适合严谨/选择题，靠近 1 更具创造力。',
                  'Amount of randomness injected into the response. Ranges from 0.0 to 2.0. Defaults to 1.0. Use temperature closer to 0.0 for analytical/multiple choice, and closer to 1.0 for creative tasks.',
                ),
              },
              {
                name: 'stream',
                type: 'boolean',
                required: !1,
                description: t(
                  '是否以 SSE 方式增量流式返回。开启后会持续返回增量内容。',
                  'Whether to incrementally stream the response using server-sent events (SSE). When enabled, the API will send partial message deltas as they become available.',
                ),
              },
              {
                name: 'top_p',
                type: 'number',
                required: !1,
                description: t(
                  '核采样参数，按累计概率截断采样。',
                  'Use nucleus sampling. In nucleus sampling, we compute the cumulative distribution over all the options for each token and cut it off once it reaches a particular probability.',
                ),
              },
              {
                name: 'top_k',
                type: 'integer',
                required: !1,
                description: t(
                  '仅从概率最高的 K 个候选中采样，用于去除长尾低概率结果。',
                  'Only sample from the top K options for each subsequent token. Used to remove "long tail" low probability responses.',
                ),
              },
              {
                name: 'presence_penalty',
                type: 'number',
                required: !1,
                description: t(
                  '范围 -2.0~2.0。正值通过惩罚已出现 token 来引导新话题。',
                  'Number between -2.0 and 2.0. Positive values encourage the model to introduce new topics by penalizing tokens that already appeared in the conversation.',
                ),
              },
              {
                name: 'frequency_penalty',
                type: 'number',
                required: !1,
                description: t(
                  '范围 -2.0~2.0。正值通过惩罚高频 token 降低重复。',
                  'Number between -2.0 and 2.0. Positive values reduce the chance of the model repeating the same lines verbatim by penalizing frequent tokens.',
                ),
              },
            ],
            requestExample: {
              model: 'claude-sonnet-4-20250514',
              messages: [{ role: 'user', content: 'Who are you?!' }],
            },
            responseExample: {
              id: 'msg_01XFDUDYJgAACzvnptvVbrYL',
              object: 'chat.completion',
              created: 1677652288,
              model: 'claude-sonnet-4-20250514',
              choices: [
                {
                  index: 0,
                  message: {
                    role: 'assistant',
                    content:
                      "I am XiaoWang, an intelligent AI assistant. I'm here to help answer your questions and assist you with various tasks. How may I help you today?",
                  },
                  finish_reason: 'stop',
                },
              ],
              usage: {
                prompt_tokens: 25,
                completion_tokens: 32,
                total_tokens: 57,
              },
            },
          },
        });
      case 'google':
        return e.jsx(c, {
          data: {
            title: t('Google Gemini', 'Google Gemini'),
            method: 'POST',
            endpoint: '/v1/models/gemini-2.0-flash:generateContent',
            description: t(
              '使用 Google Gemini 模型生成内容。支持多模态输入（文本/图片/音频/视频）以及函数调用、系统指令与安全设置等高级能力，配置灵活。',
              "Generate content using Google's Gemini models. Supports multimodal inputs (text, images, audio, video) and advanced features like function calling, system instructions, and safety settings. The Gemini API provides powerful AI capabilities with flexible configuration options.",
            ),
            headerParameters: [
              {
                name: 'x-goog-api-key',
                type: 'string',
                required: !0,
                description: t(
                  '用于认证的 Google API Key。Gemini 使用 "x-goog-api-key" 而非 Authorization。格式："YOUR_API_KEY"（无 Bearer 前缀），此方式可减少日志泄露风险。',
                  'Google API key for authentication. Unlike other APIs, Gemini uses "x-goog-api-key" header instead of the standard Authorization header. Format: "YOUR_API_KEY" (without Bearer prefix). This header-based approach prevents accidental key exposure in server logs.',
                ),
              },
              {
                name: 'Content-Type',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"，用于声明请求体格式。',
                  'Must be set to "application/json" to indicate the request body format.',
                ),
              },
              {
                name: 'Accept',
                type: 'string',
                required: !1,
                description: t(
                  '期望的响应格式，通常为 "application/json"，可选但建议设置。',
                  'Specifies the expected response format. Typically "application/json". Optional but recommended.',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'contents',
                type: 'array',
                required: !0,
                description: t(
                  '当前对话内容。单轮为单条，多轮为历史列表。每个部分可包含文本、图片等多模态内容。',
                  'The content of the current conversation with the model. For single-turn queries, this is a single instance; for multi-turn queries like chat, this is a repeated field containing the conversation history. Each content part can contain text, images, or other modalities.',
                ),
              },
              {
                name: 'generationConfig',
                type: 'object',
                required: !1,
                description: t(
                  '生成配置，控制 temperature、max_output_tokens、top_p、top_k、stop_sequences、candidate_count、presence_penalty、frequency_penalty 等参数。',
                  'Configuration options for model generation and output. Controls parameters like temperature, max_output_tokens, top_p, top_k, stop_sequences, candidate_count, presence_penalty, and frequency_penalty.',
                ),
              },
              {
                name: 'safetySettings',
                type: 'array',
                required: !1,
                description: t(
                  '安全设置列表，用于拦截不安全内容。包含 HARM_CATEGORY_HATE_SPEECH、SEXUALLY_EXPLICIT、DANGEROUS_CONTENT、HARASSMENT、CIVIC_INTEGRITY 等类别及阈值。',
                  'A list of unique SafetySetting instances for blocking unsafe content. Categories include HARM_CATEGORY_HATE_SPEECH, HARM_CATEGORY_SEXUALLY_EXPLICIT, HARM_CATEGORY_DANGEROUS_CONTENT, HARM_CATEGORY_HARASSMENT, and HARM_CATEGORY_CIVIC_INTEGRITY. Each setting has a threshold like BLOCK_MEDIUM_AND_ABOVE.',
                ),
              },
              {
                name: 'systemInstruction',
                type: 'object',
                required: !1,
                description: t(
                  '开发者设置的系统指令，仅支持文本。用于定义模型角色、语气与限制。',
                  "Developer-set system instructions to guide the model's behavior. Currently only supports text content. Helps define the model's role, tone, and constraints.",
                ),
              },
              {
                name: 'tools',
                type: 'array',
                required: !1,
                description: t(
                  '模型可使用的工具列表，支持函数调用与代码执行，以便与外部 API/系统交互。',
                  'A list of Tools the model may use to generate responses. Supports function calling and code execution, enabling the model to interact with external APIs and systems.',
                ),
              },
              {
                name: 'toolConfig',
                type: 'object',
                required: !1,
                description: t(
                  '函数调用工具配置，定义模型如何使用可用工具。',
                  'Tool configuration for function calling mode. Defines how the model should use the available tools.',
                ),
              },
            ],
            requestExample: {
              contents: [
                {
                  role: 'user',
                  parts: [
                    {
                      text: 'Write a creative story about a magic backpack that can hold infinite items.',
                    },
                  ],
                },
              ],
              generationConfig: { temperature: 0.9, top_p: 0.95 },
              systemInstruction: {
                role: 'system',
                parts: [
                  {
                    text: 'You are an enthusiastic creative writing tutor who always gives positive feedback before answering.',
                  },
                ],
              },
            },
            responseExample: {
              candidates: [
                {
                  content: {
                    parts: [
                      {
                        text: 'Once upon a time, in a bustling city filled with wonder, there lived a young explorer named Maya who discovered an extraordinary magic backpack...',
                      },
                    ],
                    role: 'model',
                  },
                  finishReason: 'STOP',
                  index: 0,
                  safetyRatings: [
                    {
                      category: 'HARM_CATEGORY_HARASSMENT',
                      probability: 'NEGLIGIBLE',
                    },
                    {
                      category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
                      probability: 'NEGLIGIBLE',
                    },
                  ],
                },
              ],
              usageMetadata: {
                promptTokenCount: 18,
                candidatesTokenCount: 156,
                totalTokenCount: 174,
              },
              modelVersion: 'gemini-2.0-flash',
            },
          },
        });
      case 'openai-image-gen':
        return e.jsx(c, {
          data: {
            title: t('OpenAI 图像生成', 'OpenAI Image Generation'),
            method: 'POST',
            endpoint: '/v1/images/generations',
            description: t(
              '根据文本提示生成图像。支持新一代 gpt-image 系列（gpt-image-2、gpt-image-1.5、gpt-image-1、gpt-image-1-mini）以及 DALL·E 3 / DALL·E 2。gpt-image-2 为 2026 年发布的旗舰模型，内置推理（thinking）能力，文本与细节渲染更精准，并可一次生成多张图像；gpt-image 系列还支持透明背景、输出格式与压缩等高级选项。',
              'Creates an image given a text prompt. Supports the new gpt-image family (gpt-image-2, gpt-image-1.5, gpt-image-1, gpt-image-1-mini) as well as DALL-E 3 / DALL-E 2. gpt-image-2 is the 2026 flagship model with built-in reasoning (thinking), more accurate text and detail rendering, and the ability to produce multiple images at once; the gpt-image family also supports transparent backgrounds, output format and compression options.',
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !0,
                description: t(
                  '用于认证的 Bearer token。格式："Bearer YOUR_API_KEY"，需放在请求头中。',
                  'Bearer token for authentication. Format: "Bearer YOUR_API_KEY". Include this in the request headers to authenticate your API calls.',
                ),
              },
              {
                name: 'Content-Type',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"，用于声明请求体格式。',
                  'Must be set to "application/json" to indicate the request body format.',
                ),
              },
              {
                name: 'Accept',
                type: 'string',
                required: !1,
                description: t(
                  '期望的响应格式，通常为 "application/json"，可选但建议设置。',
                  'Specifies the expected response format. Typically "application/json". Optional but recommended.',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'prompt',
                type: 'string',
                required: !0,
                description: t(
                  '期望图像的文本描述。DALL·E 2 最长 1000 字符，DALL·E 3 最长 4000 字符。描述越详细效果越好。',
                  'A text description of the desired image(s). Maximum length is 1000 characters for DALL-E 2 and 4000 characters for DALL-E 3. Be as detailed and specific as possible for best results.',
                ),
              },
              {
                name: 'model',
                type: 'string',
                required: !1,
                description: t(
                  '图像生成模型。可选 gpt-image 系列（"gpt-image-2"、"gpt-image-1.5"、"gpt-image-1"、"gpt-image-1-mini"）或 "dall-e-3"、"dall-e-2"。各模型均支持参考图输入。推荐使用最新的 "gpt-image-2"。',
                  'The model to use for image generation. Options include the gpt-image family ("gpt-image-2", "gpt-image-1.5", "gpt-image-1", "gpt-image-1-mini") as well as "dall-e-3" and "dall-e-2". All models support reference image input. The latest "gpt-image-2" is recommended.',
                ),
              },
              {
                name: 'n',
                type: 'integer',
                required: !1,
                description: t(
                  '生成图片数量，1~10。gpt-image 系列与 DALL·E 2 支持 1~10；DALL·E 3 仅支持 n=1。默认 1。',
                  'The number of images to generate. Must be between 1 and 10. The gpt-image family and DALL-E 2 support 1-10; DALL-E 3 only supports n=1. Defaults to 1.',
                ),
              },
              {
                name: 'size',
                type: 'string',
                required: !1,
                description: t(
                  '生成尺寸。gpt-image 系列（含 gpt-image-2）: "1024x1024"/"1024x1536"/"1536x1024"/"auto"；DALL·E 3: "1024x1024"/"1792x1024"/"1024x1792"；DALL·E 2: "256x256"/"512x512"/"1024x1024"。默认 "1024x1024"（gpt-image 默认 "auto"，由模型自动选择）。',
                  'The size of the generated images. For the gpt-image family (including gpt-image-2): "1024x1024", "1024x1536", "1536x1024", or "auto". For DALL-E 3: "1024x1024", "1792x1024", or "1024x1792". For DALL-E 2: "256x256", "512x512", or "1024x1024". Defaults to "1024x1024" ("auto" for gpt-image, letting the model choose).',
                ),
              },
              {
                name: 'quality',
                type: 'string',
                required: !1,
                description: t(
                  '图像质量。gpt-image 系列（含 gpt-image-2）支持 "low"/"medium"/"high"/"auto"，默认 "auto"；DALL·E 3 支持 "standard"/"hd"（HD 细节更丰富），默认 "standard"。质量越高耗时与计费越高。',
                  'The quality of the generated image. The gpt-image family (including gpt-image-2) supports "low", "medium", "high", or "auto" (default "auto"); DALL-E 3 supports "standard" or "hd" (HD has finer detail, default "standard"). Higher quality increases latency and cost.',
                ),
              },
              {
                name: 'style',
                type: 'string',
                required: !1,
                description: t(
                  '图像风格，仅 DALL·E 3 支持。"vivid"（更戏剧化/高对比）或 "natural"（更自然）。默认 "vivid"。',
                  'The style of the generated images. Only supported for DALL-E 3. Options are "vivid" (hyper-real and dramatic images) or "natural" (more natural, less hyper-real looking images). Defaults to "vivid".',
                ),
              },
              {
                name: 'background',
                type: 'string',
                required: !1,
                description: t(
                  '背景透明度，仅 gpt-image 系列（含 gpt-image-2）支持。"transparent"（透明）/"opaque"（不透明）/"auto"，默认 "auto"。设为 "transparent" 时 output_format 需为 "png" 或 "webp"。',
                  'Background transparency, only supported by the gpt-image family (including gpt-image-2). "transparent", "opaque", or "auto" (default "auto"). When set to "transparent", output_format must be "png" or "webp".',
                ),
              },
              {
                name: 'output_format',
                type: 'string',
                required: !1,
                description: t(
                  '输出图片格式，仅 gpt-image 系列支持。"png"/"jpeg"/"webp"，默认 "png"。',
                  'The output image format, only supported by the gpt-image family. "png", "jpeg", or "webp". Defaults to "png".',
                ),
              },
              {
                name: 'output_compression',
                type: 'integer',
                required: !1,
                description: t(
                  '输出压缩级别（0~100），仅 gpt-image 系列在 output_format 为 "jpeg"/"webp" 时生效，默认 100。',
                  'Output compression level (0-100), only effective for the gpt-image family when output_format is "jpeg" or "webp". Defaults to 100.',
                ),
              },
              {
                name: 'moderation',
                type: 'string',
                required: !1,
                description: t(
                  '内容审核强度，仅 gpt-image 系列支持。"auto"（标准）或 "low"（更宽松），默认 "auto"。',
                  'Content moderation level, only supported by the gpt-image family. "auto" (standard) or "low" (less strict). Defaults to "auto".',
                ),
              },
              {
                name: 'image',
                type: 'string',
                required: !1,
                description: t(
                  '参考图，用于引导生成。支持 URL 或 base64（"data:image/jpeg;base64,..."），模型会结合提示词进行生成。',
                  'Reference image for guided generation. Supported by all models (gpt-image-2, gpt-image-1.5, gpt-image-1, dall-e-2, dall-e-3). Can be a URL (e.g., "https://example.com/image.jpg") or base64-encoded image data (format: "data:image/jpeg;base64,..."). The model will use this image as a reference to guide the generation based on your prompt.',
                ),
              },
              {
                name: 'response_format',
                type: 'string',
                required: !1,
                description: t(
                  '返回格式，仅 DALL·E 系列支持："url"（图片链接）或 "b64_json"（base64 JSON），默认 "url"。gpt-image 系列（含 gpt-image-2）不支持此参数，始终以 base64 返回（data 中的 b64_json 字段）。',
                  'The format in which the generated images are returned. Only supported by the DALL-E family: "url" (image URL) or "b64_json" (base64-encoded JSON), default "url". The gpt-image family (including gpt-image-2) does not support this parameter and always returns base64 (the b64_json field in data).',
                ),
              },
              {
                name: 'user',
                type: 'string',
                required: !1,
                description: t(
                  '终端用户唯一标识，便于监测和防滥用。',
                  'A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse.',
                ),
              },
            ],
            requestExample: {
              model: 'gpt-image-2',
              prompt:
                'A modern product poster for a coffee brand, with the bold headline text "MORNING BREW" rendered crisply at the top, warm lighting, photorealistic',
              n: 1,
              size: '1024x1536',
              quality: 'high',
              background: 'auto',
              output_format: 'png',
            },
            responseExample: {
              created: 1677858242,
              data: [
                {
                  b64_json:
                    'iVBORw0KGgoAAAANSUhEUgAA...（base64 编码的图片数据 / base64-encoded image data）',
                },
              ],
            },
          },
        });
      case 'grok-image-gen':
        return e.jsx(c, {
          data: {
            title: t('Grok 图像生成', 'Grok Image Generation'),
            method: 'POST',
            endpoint: '/v1/chat/completions',
            description: t(
              '通过对话补全接口使用 Grok 视觉模型生成图像。不同于传统图像接口，Grok 使用 chat 格式并通过 modalities 指定图像输出。支持文生图与参考图引导生成，返回结果以 URL 或 base64 嵌入到对话响应中。',
              "Generate images using Grok's vision models through the chat completions interface. Unlike traditional image generation APIs, Grok uses the chat format with modalities parameter to specify image output. Supports text-to-image generation with optional reference images for guided creation. The model returns images either as URLs or base64-encoded data within the chat response structure.",
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !0,
                description: t(
                  '用于认证的 Bearer token。格式："Bearer YOUR_API_KEY"，需放在请求头中。',
                  'Bearer token for authentication. Format: "Bearer YOUR_API_KEY". Include this in the request headers to authenticate your API calls.',
                ),
              },
              {
                name: 'Content-Type',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"，用于声明请求体格式。',
                  'Must be set to "application/json" to indicate the request body format.',
                ),
              },
              {
                name: 'Accept',
                type: 'string',
                required: !1,
                description: t(
                  '期望的响应格式，通常为 "application/json"，可选但建议设置。',
                  'Specifies the expected response format. Typically "application/json". Optional but recommended.',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'model',
                type: 'string',
                required: !0,
                description: t(
                  '用于图像生成的 Grok 模型 ID，如 "grok-4-image" 或 "grok-3-image"。',
                  'The Grok model ID to use for image generation. Options include "grok-4-image" or "grok-3-image" for image generation capabilities.',
                ),
              },
              {
                name: 'messages',
                type: 'array',
                required: !0,
                description: t(
                  '对话消息数组。每条消息包含 "role"（user/assistant）与 "content"。content 可为文本或内容数组；参考图输入使用 type="image_url"。',
                  'An array of message objects comprising the conversation. Each message has a "role" (user/assistant) and "content" which can be a string or an array of content parts. For reference image input, include an object with type "image_url" containing the image URL or base64 data.',
                ),
              },
              {
                name: 'messages[].content[].type',
                type: 'string',
                required: !0,
                description: t(
                  '内容类型。"text" 为文本提示，"image_url" 为参考图。',
                  'Content part type. Use "text" for text prompts, "image_url" for reference images.',
                ),
              },
              {
                name: 'messages[].content[].image_url',
                type: 'object',
                required: !1,
                description: t(
                  '参考图对象，包含 "url" 字段（HTTP URL 或 base64："data:image/jpeg;base64,..."），用于引导生成。',
                  'Reference image object. Contains "url" field with either an HTTP URL or base64-encoded image data (format: "data:image/jpeg;base64,..."). Use this to provide a reference image for guided generation.',
                ),
              },
              {
                name: 'modalities',
                type: 'array',
                required: !0,
                description: t(
                  '输出模态，必须包含 "image"。设置为 ["text","image"] 可同时返回文字描述与图片。',
                  'Specifies the output modalities. Must include "image" to generate images. Set to ["text", "image"] to receive both textual description and generated image in the response.',
                ),
              },
              {
                name: 'stream',
                type: 'boolean',
                required: !1,
                description: t(
                  '是否流式返回。图像生成通常设为 false 以一次性获取完整图片，默认 false。',
                  'Whether to stream the response. For image generation, this is typically set to false to receive the complete image in a single response. Defaults to false.',
                ),
              },
              {
                name: 'n',
                type: 'integer',
                required: !1,
                description: t(
                  '生成图片数量。通常设为 1；更大值生成多张变体。默认 1。',
                  'The number of images to generate. Typically set to 1 for Grok image generation. Higher values may generate multiple image variations. Defaults to 1.',
                ),
              },
            ],
            requestExample: {
              model: 'grok-4-image',
              messages: [
                {
                  role: 'user',
                  content: [
                    {
                      type: 'text',
                      text: 'Transform this image into a cyberpunk style with neon lights and futuristic elements',
                    },
                    {
                      type: 'image_url',
                      image_url: {
                        url: 'https://example.com/reference-image.jpg',
                      },
                    },
                  ],
                },
              ],
              modalities: ['text', 'image'],
              n: 1,
            },
            responseExample: {
              id: 'chatcmpl-grok-img-123',
              object: 'chat.completion',
              created: 1677858242,
              model: 'grok-4-image',
              choices: [
                {
                  index: 0,
                  message: {
                    role: 'assistant',
                    content: [
                      {
                        type: 'text',
                        text: "I've created a stunning landscape image featuring majestic mountains at sunset with vibrant colors.",
                      },
                      {
                        type: 'image_url',
                        image_url: {
                          url: 'https://example.com/generated-grok-image.png',
                        },
                      },
                    ],
                  },
                  finish_reason: 'stop',
                },
              ],
              usage: {
                prompt_tokens: 28,
                completion_tokens: 150,
                total_tokens: 178,
              },
            },
          },
        });
      case 'gemini-image-gen':
        return e.jsx(c, {
          data: {
            title: t('Gemini 图像生成', 'Gemini Image Generation'),
            method: 'POST',
            endpoint: '/v1/models/gemini-3-pro-image-preview:generateContent',
            description: t(
              '使用 Google Gemini 原生图像模型生成图像，支持文生图与可配置宽高比/分辨率。可用模型包括 gemini-2.5-flash-image（仅 1K）与 gemini-3-pro-image-preview（1K/2K/4K）。模型名需写在 endpoint 路径中，输出通过 responseModalities 指定图像。',
              "Generate images using Google's Gemini native image generation models. Supports text-to-image generation with configurable aspect ratios and resolutions. Models include gemini-2.5-flash-image (supports 1K resolution) and gemini-3-pro-image-preview (supports 1K, 2K, 4K resolutions). The model name should be specified in the endpoint URL path. Uses the Gemini API format with responseModalities for image output.",
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !0,
                description: t(
                  '用于认证的 Bearer token。格式："Bearer YOUR_API_KEY"，需放在请求头中。',
                  'Bearer token for authentication. Format: "Bearer YOUR_API_KEY". Include this in the request headers to authenticate your API calls.',
                ),
              },
              {
                name: 'Content-Type',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"，用于声明请求体格式。',
                  'Must be set to "application/json" to indicate the request body format.',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'contents',
                type: 'array',
                required: !0,
                description: t(
                  '包含图像生成提示词与可选参考图的对话内容。每条内容包含 "role"(user) 与 "parts"。',
                  'The conversation contents containing the image generation prompt and optional reference images. Each content object has a "role" (user) and "parts" array.',
                ),
              },
              {
                name: 'contents[].parts[].text',
                type: 'string',
                required: !1,
                description: t(
                  '用于描述期望图像的文本提示。',
                  'Text prompt describing the desired image transformation or generation.',
                ),
              },
              {
                name: 'contents[].parts[].inlineData',
                type: 'object',
                required: !1,
                description: t(
                  'base64 参考图。包含 "data" 与 "mimeType"（如 "image/jpeg"）。用于直接上传图片。',
                  'Reference image as base64-encoded data. Contains "data" (base64 string) and "mimeType" (e.g., "image/jpeg", "image/png"). Use this for direct image upload.',
                ),
              },
              {
                name: 'contents[].parts[].fileData',
                type: 'object',
                required: !1,
                description: t(
                  'URL 参考图。包含 "mimeType" 与 "fileUri"（图片 URL）。用于线上图片。',
                  'Reference image as URL. Contains "mimeType" and "fileUri" (image URL). Use this for images hosted online.',
                ),
              },
              {
                name: 'generationConfig',
                type: 'object',
                required: !0,
                description: t(
                  '生成配置，包含 responseModalities、aspectRatio、imageSize 等。',
                  'Configuration for image generation including responseModalities, aspectRatio, and imageSize settings.',
                ),
              },
              {
                name: 'generationConfig.responseModalities',
                type: 'array',
                required: !0,
                description: t(
                  '必须包含 "IMAGE" 才能生成图像。设置为 ["TEXT","IMAGE"] 返回文字+图片，或 ["IMAGE"] 仅图片。',
                  'Must include "IMAGE" to enable image generation. Set to ["TEXT", "IMAGE"] for both text and image output, or ["IMAGE"] for image only.',
                ),
              },
              {
                name: 'generationConfig.imageConfig',
                type: 'object',
                required: !1,
                description: t(
                  '图像配置选项。',
                  'Image-specific configuration options.',
                ),
              },
              {
                name: 'generationConfig.imageConfig.aspectRatio',
                type: 'string',
                required: !1,
                description: t(
                  '图像宽高比，支持 "1:1","2:3","3:2","3:4","4:3","4:5","5:4","9:16","16:9","21:9"，默认 "1:1"。',
                  'Aspect ratio of the generated image. Supported values: "1:1", "2:3", "3:2", "3:4", "4:3", "4:5", "5:4", "9:16", "16:9", "21:9". Defaults to "1:1".',
                ),
              },
              {
                name: 'generationConfig.imageConfig.imageSize',
                type: 'string',
                required: !1,
                description: t(
                  '图像分辨率。gemini-2.5-flash-image 仅支持 "1K"；gemini-3-pro-image-preview 支持 "1K"/"2K"/"4K"。',
                  'Resolution of the generated image. For gemini-2.5-flash-image: only "1K" is supported. For gemini-3-pro-image-preview: "1K", "2K", or "4K" are supported.',
                ),
              },
            ],
            requestExample: {
              contents: [
                {
                  role: 'user',
                  parts: [
                    {
                      text: 'Transform this photo into an oil painting style with impressionist brush strokes',
                    },
                    {
                      inlineData: {
                        data: 'base64_encoded_image_data...',
                        mimeType: 'image/jpeg',
                      },
                    },
                  ],
                },
              ],
              generationConfig: {
                responseModalities: ['TEXT', 'IMAGE'],
                imageConfig: { aspectRatio: '16:9', imageSize: '2K' },
              },
            },
            responseExample: {
              candidates: [
                {
                  content: {
                    parts: [
                      {
                        text: "Here's a beautiful image of a golden retriever puppy playing in autumn leaves.",
                      },
                      {
                        inlineData: {
                          mimeType: 'image/png',
                          data: 'base64_encoded_image_data...',
                        },
                      },
                    ],
                    role: 'model',
                  },
                  finishReason: 'STOP',
                  index: 0,
                },
              ],
              usageMetadata: {
                promptTokenCount: 15,
                candidatesTokenCount: 1,
                totalTokenCount: 16,
              },
            },
          },
        });
      case 'seedream-image-gen':
        return e.jsx(c, {
          data: {
            title: t('Seedream 图像生成', 'Seedream Image Generation'),
            method: 'POST',
            endpoint: '/v1/images/generations',
            description: t(
              '使用字节跳动 Seedream（豆包）模型生成高质量图像，支持文生图/图生图、灵活分辨率、多图分镜生成与可选水印；接口兼容 OpenAI 便于集成。',
              "Generate high-quality images using ByteDance's Seedream models (doubao-seedream series). Supports text-to-image and image-to-image generation with flexible resolution options, sequential image generation for multi-panel compositions, and optional watermarking. Uses OpenAI-compatible API format for easy integration.",
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !0,
                description: t(
                  '用于认证的 Bearer token。格式："Bearer YOUR_API_KEY"，需放在请求头中。',
                  'Bearer token for authentication. Format: "Bearer YOUR_API_KEY". Include this in the request headers to authenticate your API calls.',
                ),
              },
              {
                name: 'Content-Type',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"，用于声明请求体格式。',
                  'Must be set to "application/json" to indicate the request body format.',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'model',
                type: 'string',
                required: !0,
                description: t(
                  'Seedream 模型 ID，如 "doubao-seedream-4-0-250828"。名称包含 "t2i" 的模型仅支持文生图。',
                  'The Seedream model ID. Example: "doubao-seedream-4-0-250828". Models containing "t2i" in the name only support text-to-image (no reference image input).',
                ),
              },
              {
                name: 'prompt',
                type: 'string',
                required: !0,
                description: t(
                  '期望图像的文本描述，支持中英文。描述越细致效果越好。',
                  'Text description of the desired image. Supports both Chinese and English prompts. Be detailed and specific for best results.',
                ),
              },
              {
                name: 'size',
                type: 'string',
                required: !1,
                description: t(
                  '图像分辨率，可用预设 "1K"/"2K"/"4K" 或具体像素（如 "1024x1024"）。范围 1024x1024~4096x4096，默认 "2048x2048"。',
                  'Image resolution. Can specify preset resolutions ("1K", "2K", "4K") or exact pixel dimensions (e.g., "1024x1024", "2048x2048"). Range: 1024x1024 to 4096x4096. Defaults to "2048x2048".',
                ),
              },
              {
                name: 'image',
                type: 'string',
                required: !1,
                description: t(
                  '参考图，可为 URL 或 base64。模型将结合提示词引导生成。注意：名称含 "t2i" 的模型不支持参考图。',
                  'Reference image for guided generation. Can be a URL or base64-encoded image data. The model will use this image as a reference to guide the generation based on your prompt. Note: Not supported for models with "t2i" in the name (text-to-image only models).',
                ),
              },
              {
                name: 'sequential_image_generation',
                type: 'string',
                required: !1,
                description: t(
                  '多格图生成模式："auto"（自动判定是否需要多格）、"disabled"（仅单图，默认）。适合漫画/分镜。',
                  'Multi-panel image generation mode. Options: "auto" (automatically determines if prompt requires multiple panels), "disabled" (single image only, default). Useful for creating comic strips or sequential art.',
                ),
              },
              {
                name: 'stream',
                type: 'boolean',
                required: !1,
                description: t(
                  '是否启用流式输出，默认 false。',
                  'Enable streaming output mode. When true, partial results are sent as they become available. Defaults to false.',
                ),
              },
              {
                name: 'response_format',
                type: 'string',
                required: !1,
                description: t(
                  '输出格式："url"（默认）或 "b64_json"（base64）。',
                  'Output format for the generated image. Options: "url" (returns image URL, default) or "b64_json" (returns base64-encoded image data).',
                ),
              },
              {
                name: 'watermark',
                type: 'boolean',
                required: !1,
                description: t(
                  '是否添加“AI Generated”水印，默认 true；设为 false 可去水印。',
                  'Whether to add an "AI Generated" watermark to the bottom-right corner. Defaults to true. Set to false for clean images without watermark.',
                ),
              },
            ],
            requestExample: {
              model: 'doubao-seedream-4-0-250828',
              prompt:
                'Transform this photo into anime style with vibrant colors and expressive features',
              image: 'https://example.com/reference-photo.jpg',
              size: '2K',
              sequential_image_generation: 'disabled',
              response_format: 'url',
              watermark: !1,
            },
            responseExample: {
              created: 1677858242,
              data: [
                {
                  url: 'https://example.com/generated-seedream-image.png',
                  revised_prompt:
                    'A majestic dragon soaring through clouds at sunset, digital art style with vibrant colors',
                },
              ],
            },
          },
        });
      case 'flux-image-gen':
        return e.jsx(c, {
          data: {
            title: t('Flux 图像生成', 'Flux Image Generation'),
            method: 'POST',
            endpoint: '/v1/images/generations',
            description: t(
              '使用 Black Forest Labs 的 Flux 模型生成图像。Flux 文生图质量高、提示词遵循度强、艺术表现佳；使用宽高比而非固定尺寸，支持 flux-1.1-pro、flux-dev、flux-schnell 等多版本。注意：Flux 不支持参考图。',
              "Generate images using Black Forest Labs' Flux models. Flux offers high-quality text-to-image generation with excellent prompt adherence and artistic capabilities. Uses aspect ratio instead of fixed sizes for flexible image dimensions. Supports multiple Flux variants including flux-1.1-pro, flux-dev, and flux-schnell. Note: Flux does not support reference image input.",
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !0,
                description: t(
                  '用于认证的 Bearer token。格式："Bearer YOUR_API_KEY"，需放在请求头中。',
                  'Bearer token for authentication. Format: "Bearer YOUR_API_KEY". Include this in the request headers to authenticate your API calls.',
                ),
              },
              {
                name: 'Content-Type',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"，用于声明请求体格式。',
                  'Must be set to "application/json" to indicate the request body format.',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'model',
                type: 'string',
                required: !0,
                description: t(
                  'Flux 模型版本，如 "flux-1.1-pro"（最高质量）、"flux-dev"（开发测试）、"flux-schnell"（快速）。不同模型在速度/质量之间权衡。',
                  'The Flux model to use. Options include: "flux-1.1-pro" (highest quality), "flux-dev" (development/testing), "flux-schnell" (fast generation), and other Flux variants. Each model has different speed/quality trade-offs.',
                ),
              },
              {
                name: 'prompt',
                type: 'string',
                required: !0,
                description: t(
                  '期望图像的文本描述。Flux 擅长精细提示词、风格与构图。',
                  'Text description of the desired image. Flux models excel at following detailed prompts with specific artistic styles, compositions, and subject descriptions.',
                ),
              },
              {
                name: 'n',
                type: 'integer',
                required: !1,
                description: t(
                  '生成图片数量，范围 1~10，默认 1。',
                  'Number of images to generate. Range: 1-10. Defaults to 1.',
                ),
              },
              {
                name: 'aspect_ratio',
                type: 'string',
                required: !1,
                description: t(
                  '宽高比："21:9"(超宽)、"16:9"(宽屏)、"4:3"(标准)、"3:2"(照片)、"1:1"(方形)、"2:3"(竖向照片)、"3:4"(竖图)、"9:16"(竖屏)、"9:21"(超长竖屏)。默认 "1:1"。',
                  'Aspect ratio of the generated image. Supported values: "21:9" (ultra-wide), "16:9" (widescreen), "4:3" (standard), "3:2" (photo), "1:1" (square), "2:3" (portrait photo), "3:4" (portrait), "9:16" (vertical), "9:21" (tall vertical). Defaults to "1:1".',
                ),
              },
              {
                name: 'response_format',
                type: 'string',
                required: !1,
                description: t(
                  '输出格式："url" 或 "b64_json"，默认 "url"。',
                  'Output format. Options: "url" (returns image URL) or "b64_json" (returns base64-encoded data). Defaults to "url".',
                ),
              },
            ],
            requestExample: {
              model: 'flux-1.1-pro',
              prompt:
                'A cyberpunk cityscape at night with neon signs, rain-slicked streets, and flying vehicles, hyperrealistic digital art',
              n: 1,
              aspect_ratio: '16:9',
            },
            responseExample: {
              created: 1677858242,
              data: [
                {
                  url: 'https://example.com/generated-flux-image.png',
                  revised_prompt:
                    'A cyberpunk cityscape at night with neon signs, rain-slicked streets, and flying vehicles, hyperrealistic digital art',
                },
              ],
            },
          },
        });
      case 'video-create':
        return e.jsx(c, {
          data: {
            title: t('Sora2 官方格式视频生成', 'Sora2 Official Video Creation'),
            method: 'POST',
            endpoint: '/v1/videos',
            description: t(
              'OpenAI Sora2 官方接口，推荐接入统一格式接口。使用 multipart/form-data 格式提交请求。支持 sora-2（4/8/12 秒，仅 720p）和 sora-2-pro（4/8/12 秒，支持 720p 和 1080p）。逆向分组和官方分组计费方式、时长设置不同。',
              'OpenAI Sora2 official API format. Submit requests using multipart/form-data. Supports sora-2 (4/8/12 seconds, 720p only) and sora-2-pro (4/8/12 seconds, 720p and 1080p). Pricing and duration settings differ between reverse-proxy and official groups.',
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !0,
                description: t(
                  '用于认证的 Bearer token。格式："Bearer YOUR_API_KEY"，需放在请求头中。',
                  'Bearer token for authentication. Format: "Bearer YOUR_API_KEY". Include this in the request headers to authenticate your API calls.',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'model',
                type: 'string',
                required: !0,
                description: t(
                  '视频模型："sora-2" 或 "sora-2-pro"。sora-2 仅支持 720p 分辨率；sora-2-pro 额外支持 1080p 分辨率。',
                  'The video generation model to use. Options: "sora-2" or "sora-2-pro". sora-2 supports 720p resolutions only; sora-2-pro additionally supports 1080p resolutions.',
                ),
              },
              {
                name: 'prompt',
                type: 'string',
                required: !0,
                description: t(
                  '视频内容描述，建议包含动作、场景、镜头运动与风格等。',
                  'Text description of the desired video content. Describe the action, scene, camera movement, style, and any specific details you want.',
                ),
              },
              {
                name: 'size',
                type: 'string',
                required: !1,
                description: t(
                  '输出分辨率，格式为 宽x高。可选值：720x1280（720P竖屏）、1280x720（720P横屏）、1024x1792（1080P竖屏，仅 sora-2-pro）、1792x1024（1080P横屏，仅 sora-2-pro）。默认 720x1280。',
                  'Output resolution formatted as width x height. Options: "720x1280" (720P portrait), "1280x720" (720P landscape), "1024x1792" (1080P portrait, sora-2-pro only), "1792x1024" (1080P landscape, sora-2-pro only). Defaults to 720x1280.',
                ),
              },
              {
                name: 'seconds',
                type: 'string',
                required: !1,
                description: t(
                  '视频时长（秒）。官方分组支持 4 秒以上，按秒计费；逆向分组仅支持 10、15、25（sora-2-pro 支持）。默认 4 秒。',
                  'Clip duration in seconds. Official groups support 4+ seconds, billed per second. Reverse-proxy groups only support 10, 15, 25 (25 for sora-2-pro only). Defaults to 4 seconds.',
                ),
              },
              {
                name: 'input_reference',
                type: 'string (binary)',
                required: !1,
                description: t(
                  '参考图片，可为 URL 或文件上传。用于图生视频场景。',
                  'Reference image for image-to-video generation. Can be a URL or file upload.',
                ),
              },
              {
                name: 'watermark',
                type: 'boolean',
                required: !1,
                description: t(
                  '是否添加水印。设为 false 可生成无水印视频。默认 true。',
                  'Whether to add a watermark to the generated video. Set to false to generate videos without watermarks. Defaults to true.',
                ),
              },
            ],
            requestExample: {
              model: 'sora-2',
              prompt: 'A calico cat playing a piano on stage',
              seconds: '8',
              size: '720x1280',
            },
            responseExample: {
              id: 'sora-2:task_01k6x15vhrff09dkkqjrzwhm60',
              status: 'pending',
              status_update_time: 1735963427208,
              message:
                'Video generation task created successfully. Use the task ID to check status and retrieve the video when ready.',
            },
          },
        });
      case 'openai-video-character':
        return e.jsx(c, {
          data: {
            title: t(
              'OpenAI 创建视频（带 Character）',
              'OpenAI Video Creation (with Character)',
            ),
            method: 'POST',
            endpoint: '/v1/videos',
            description: t(
              'OpenAI 视频生成接口（带 Character 参考）。使用 multipart/form-data 提交请求，支持上传参考图与角色视频，并通过时间戳控制角色出场时间。',
              'OpenAI video generation endpoint with Character reference. Submit via multipart/form-data, supports reference image upload and character video, plus timestamps to control when the character appears.',
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !0,
                description: t(
                  '在 Header 中添加 Authorization，格式："Bearer YOUR_API_KEY"。',
                  'Add Authorization in the header. Format: "Bearer YOUR_API_KEY".',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'model',
                type: 'string',
                required: !0,
                description: t(
                  '模型名称，例如 "sora-2"。',
                  'Model name, e.g. "sora-2".',
                ),
              },
              {
                name: 'prompt',
                type: 'string',
                required: !0,
                description: t(
                  '视频内容描述。',
                  'Text prompt describing the video content.',
                ),
              },
              {
                name: 'seconds',
                type: 'string',
                required: !1,
                description: t(
                  '视频时长（秒），如 "10"。',
                  'Video duration in seconds, e.g. "10".',
                ),
              },
              {
                name: 'input_reference',
                type: 'file',
                required: !1,
                description: t(
                  '参考图文件（multipart 上传）。',
                  'Reference image file (multipart upload).',
                ),
              },
              {
                name: 'size',
                type: 'string',
                required: !1,
                description: t(
                  '输出分辨率，格式为 宽x高。可选：720x1280、1280x720、1024x1792、1792x1024。默认 720x1280。',
                  'Output resolution as width x height. Options: 720x1280, 1280x720, 1024x1792, 1792x1024. Defaults to 720x1280.',
                ),
              },
              {
                name: 'watermark',
                type: 'string',
                required: !1,
                description: t(
                  '是否添加水印，例如 "true" 或 "false"。',
                  'Whether to add a watermark, e.g. "true" or "false".',
                ),
              },
              {
                name: 'private',
                type: 'string',
                required: !1,
                description: t(
                  '是否私有生成，例如 "true" 或 "false"。',
                  'Whether to generate as private, e.g. "true" or "false".',
                ),
              },
              {
                name: 'character_url',
                type: 'string',
                required: !1,
                description: t(
                  '角色视频 URL，用于人物参考。',
                  'Character video URL for character reference.',
                ),
              },
              {
                name: 'character_timestamps',
                type: 'string',
                required: !1,
                description: t(
                  '角色出现时间点，逗号分隔，例如 "1,3"。',
                  'Character appearance timestamps, comma-separated, e.g. "1,3".',
                ),
              },
            ],
            multipart: !0,
            requestExample: {
              model: 'sora-2',
              prompt: t(
                '一个女孩在樱花树下奔跑，微风吹过花瓣飘落',
                'A girl running under cherry blossom trees, petals drifting in the breeze',
              ),
              seconds: '10',
              input_reference: 'file://C:\\Users\\Pictures\\reference.png',
              size: '720x1280',
              watermark: 'true',
              private: 'false',
              character_url: 'https://example.com/videos/sample-character.mp4',
              character_timestamps: '1,3',
            },
            responseExample: {
              id: 'video_6048220c-b0d9-4292-b80b-9c6eaf73f112',
              object: 'video',
              model: 'sora_video2',
              status: 'queued',
              progress: 0,
              created_at: 1762326617,
              seconds: '10',
              size: '1280x720',
            },
          },
        });
      case 'openai-character-create':
        return e.jsx(c, {
          data: {
            title: t('创建角色', 'Create Character'),
            method: 'POST',
            endpoint: '/sora/v1/characters',
            description: t(
              '创建角色用于后续视频生成中的人物引用。使用 application/json 提交请求。当前仅支持通过视频 URL 创建角色。小贴士：在 prompt 中使用 @username 调用角色；使用 sora-2-all、sora-2-pro-all 来启用角色能力。',
              'Create a character for use in subsequent video generation prompts. Submit via application/json. Currently only supports creating from a video URL. Tip: use @username in the prompt to invoke the character; use sora-2-all or sora-2-pro-all to enable character support.',
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !0,
                description: t(
                  '在 Header 中添加 Authorization，格式："Bearer YOUR_API_KEY"。',
                  'Add Authorization in the header. Format: "Bearer YOUR_API_KEY".',
                ),
              },
              {
                name: 'Content-Type',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"。',
                  'Must be "application/json".',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'url',
                type: 'string',
                required: !0,
                description: t(
                  '包含角色的视频 URL。',
                  'Video URL containing the character.',
                ),
              },
              {
                name: 'timestamps',
                type: 'string',
                required: !0,
                description: t(
                  '单位秒，例如 "1,2" 表示 1～2 秒内出现的角色。范围差值最大 3 秒、最小 1 秒。',
                  'In seconds, e.g. "1,2" means the character appears from 1s to 2s. Range difference max 3 seconds, min 1 second.',
                ),
              },
            ],
            requestExample: {
              url: 'https://example.com/videos/sample-character.mp4',
              timestamps: '1,3',
            },
            responseExample: {
              id: 'ch_6918d62178e48191a0b1ae49be428a13',
              username: 'hfspncadz.mooflapand',
              permalink:
                'https://sora.chatgpt.com/profile/hfspncadz.mooflapand',
              profile_picture_url:
                'https://videos.openai.com/az/files/00000000-b788-71f7-9de5-96555ff29024%2Fraw?se=2025-11-20T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=1af02b11-169c-463d-b441-d2ccfc9f02c8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-15T01%3A48%3A34Z&ske=2025-11-22T01%3A53%3A34Z&sks=b&skv=2024-08-04&sig=3/KGVtkEsZWBTmErhzUEU5pWrnL8JxRKH0wVCQvh6Fo%3D&ac=oaisdmntprsouthcentralus',
            },
          },
        });
      case 'wan-video':
        return e.jsx(c, {
          data: {
            title: t('万象 I2V 生成', 'Wan I2V Generation'),
            method: 'POST',
            endpoint: '/v1/video/create',
            description: t(
              '使用 Wan 2.6 i2v 进行图生视频。请求走统一 /v1/video/create，后端转发至上游。提供首帧图片与可选提示词即可生成平滑运动视频。',
              "Image-to-video generation with Wan 2.6 i2v. The request uses the unified /v1/video/create path, and the backend adapts the payload to Wan's upstream endpoint. Provide a first-frame image plus optional prompt controls to generate smooth motion video clips.",
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !0,
                description: t(
                  '用于认证的 Bearer token。格式："Bearer YOUR_API_KEY"。',
                  'Bearer token for authentication. Format: "Bearer YOUR_API_KEY".',
                ),
              },
              {
                name: 'Content-Type',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"。',
                  'Must be set to "application/json".',
                ),
              },
              {
                name: 'Accept',
                type: 'string',
                required: !1,
                description: t(
                  '可选，通常为 "application/json"。',
                  'Optional. Typically "application/json".',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'model',
                type: 'string',
                required: !0,
                description: t(
                  'Wan 视频模型，如 "wan2.6-i2v"。',
                  'Wan video model to use. Example: "wan2.6-i2v".',
                ),
              },
              {
                name: 'input.prompt',
                type: 'string',
                required: !1,
                description: t(
                  '引导运动与风格的提示词，可选但推荐。',
                  'Text description to guide motion and styling. Optional but recommended for better control.',
                ),
              },
              {
                name: 'input.negative_prompt',
                type: 'string',
                required: !1,
                description: t(
                  '需避免的内容，如 "blurry, distorted, watermark"。',
                  'Elements to avoid in the generated video (e.g., "blurry, distorted, watermark").',
                ),
              },
              {
                name: 'input.img_url',
                type: 'string',
                required: !0,
                description: t(
                  '首帧图片 URL 或 base64（data:image/...），i2v 必填。',
                  'First-frame image URL or base64 data URI (data:image/...). Required for i2v.',
                ),
              },
              {
                name: 'input.audio_url',
                type: 'string',
                required: !1,
                description: t(
                  '可选音频 URL（视上游模型支持）。',
                  'Optional audio track URL (if supported by the upstream model variant).',
                ),
              },
              {
                name: 'input.template',
                type: 'string',
                required: !1,
                description: t(
                  '可选视频效果模板名称。',
                  'Optional video effect template name.',
                ),
              },
              {
                name: 'parameters.resolution',
                type: 'string',
                required: !1,
                description: t(
                  '输出分辨率档位，如 "480P"/"720P"/"1080P"。',
                  'Output resolution tier. Common options: "480P", "720P", "1080P".',
                ),
              },
              {
                name: 'parameters.duration',
                type: 'integer',
                required: !1,
                description: t(
                  '视频时长（秒），范围视模型而定，常见 4~10 秒。',
                  'Video duration in seconds. Supported range depends on the model; typical values: 4-10s.',
                ),
              },
              {
                name: 'parameters.prompt_extend',
                type: 'boolean',
                required: !1,
                description: t(
                  '是否启用提示词增强，上游默认 true。',
                  'Whether to enable prompt enhancement. Defaults to true upstream.',
                ),
              },
              {
                name: 'parameters.watermark',
                type: 'boolean',
                required: !1,
                description: t(
                  '是否添加 AI 水印，默认 false。',
                  'Add AI watermark. Defaults to false.',
                ),
              },
              {
                name: 'parameters.seed',
                type: 'integer',
                required: !1,
                description: t(
                  '可选随机种子，便于复现。',
                  'Optional random seed for reproducibility.',
                ),
              },
            ],
            requestExample: {
              model: 'wan2.6-i2v',
              input: {
                prompt:
                  'Make this portrait come alive with a subtle camera push-in and natural breathing motion',
                negative_prompt: 'blurry, distorted, glitch',
                img_url: 'https://example.com/first-frame.png',
              },
              parameters: {
                resolution: '720P',
                duration: 6,
                prompt_extend: !0,
                watermark: !1,
              },
            },
            responseExample: {
              request_id: 'ccffb21f-c21e-4eba-861a-6c80e6db6e4d',
              output: {
                task_id: 'a55bfe14-6e78-4b9d-b97d-128420399ed1',
                task_status: 'PENDING',
              },
            },
          },
        });
      case 'veo-video':
        return e.jsx(c, {
          data: {
            title: t('Veo 视频生成', 'Veo Video Generation'),
            method: 'POST',
            endpoint: '/v1/video/create',
            description: t(
              '使用 Google Veo 模型生成高质量视频，支持文生视频/图生视频，多模型版本可选，支持提示词增强、超分与多种宽高比。',
              "Generate high-quality videos using Google's Veo models. Veo offers advanced text-to-video and image-to-video generation with multiple model variants for different use cases. Supports automatic prompt enhancement, upsampling, and flexible aspect ratios. Models include veo2, veo3 series with different speed/quality trade-offs and frame-based variants for precise control.",
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !0,
                description: t(
                  '用于认证的 Bearer token。格式："Bearer YOUR_API_KEY"，需放在请求头中。',
                  'Bearer token for authentication. Format: "Bearer YOUR_API_KEY". Include this in the request headers to authenticate your API calls.',
                ),
              },
              {
                name: 'Content-Type',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"，用于声明请求体格式。',
                  'Must be set to "application/json" to indicate the request body format.',
                ),
              },
              {
                name: 'Accept',
                type: 'string',
                required: !0,
                description: t(
                  '期望的响应格式，必须为 "application/json"。',
                  'Specifies the expected response format. Must be set to "application/json".',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'model',
                type: 'string',
                required: !0,
                description: t(
                  'Veo 模型，如 "veo2"/"veo3" 及其 fast/pro 版本。不同模型在速度与质量间权衡。',
                  'The Veo model to use. Options: "veo2", "veo2-fast", "veo2-pro", "veo3", "veo3-fast", "veo3-pro", "veo3.1", "veo3.1-fast", "veo3.1-pro", "veo3.1-4k", "veo3.1-pro-4k". Different models offer varying speed/quality trade-offs.',
                ),
              },
              {
                name: 'prompt',
                type: 'string',
                required: !0,
                description: t(
                  '视频描述，建议包含场景、动作、镜头与风格等细节。',
                  'Text description of the desired video content. Describe the scene, actions, camera movements, visual style, and any specific details. Veo models excel at understanding complex prompts with cinematic descriptions.',
                ),
              },
              {
                name: 'images',
                type: 'array',
                required: !1,
                description: t(
                  '参考图数组（URL 或 base64），用于引导画面风格与内容。',
                  'Array of reference images for video generation. Images should be URLs or base64-encoded data. Use reference images to guide the visual style and content of the generated video.',
                ),
              },
              {
                name: 'duration',
                type: 'string',
                required: !1,
                description: t(
                  '视频时长（秒）："4"/"6"/"8"。使用参考图时仅支持 "8" 且仅 16:9。',
                  'Video duration in seconds. Supported values: "4", "6", or "8". Important: When using reference images (images parameter), duration must be set to "8" and only 16:9 aspect ratio is supported.',
                ),
              },
              {
                name: 'enhance_prompt',
                type: 'boolean',
                required: !1,
                description: t(
                  '是否自动优化提示词（默认 true，中文会自动翻译为英文）。设为 false 以精确控制。',
                  'Enable automatic prompt enhancement. When true, the system optimizes your prompt for better results and automatically translates Chinese prompts to English. Defaults to true. Set to false for precise control over the exact prompt text.',
                ),
              },
              {
                name: 'enable_upsample',
                type: 'string',
                required: !1,
                description: t(
                  '是否超分： "true" 或 "false"。超分画质更高但耗时更长。',
                  'Enable video upsampling for higher quality output. Options: "true" (enable upsampling for enhanced resolution and detail) or "false" (standard quality). Upsampling improves visual fidelity but increases processing time.',
                ),
              },
              {
                name: 'aspect_ratio',
                type: 'string',
                required: !1,
                description: t(
                  '宽高比："16:9" 或 "9:16"。仅 veo3 系列支持；使用参考图仅 16:9。',
                  'Video aspect ratio. Options: "16:9" (widescreen/landscape) or "9:16" (vertical/portrait). Only supported for veo3 series models. When using reference images, only "16:9" is supported. Choose based on your target platform: 16:9 for YouTube/web, 9:16 for mobile/social media.',
                ),
              },
            ],
            requestExample: {
              model: 'veo3-pro',
              prompt:
                'A cinematic aerial shot slowly descending over a misty mountain valley at sunrise, revealing a winding river through ancient forests with rays of golden sunlight breaking through the clouds',
              images: [],
              duration: '8',
              enhance_prompt: !0,
              enable_upsample: 'true',
              aspect_ratio: '16:9',
            },
            responseExample: {
              id: 'veo3-pro:task_abc123def456',
              object: 'video.task',
              created: 1735963427,
              status: 'pending',
              model: 'veo3-pro',
              message:
                'Video generation task created successfully. Use the task ID to check status and retrieve the video when ready.',
            },
          },
        });
      case 'kling-video':
        return e.jsx(c, {
          data: {
            title: t('可灵视频生成', 'Kling Video Generation'),
            method: 'POST',
            endpoint: '/kling/v1/videos/text2video',
            description: t(
              '使用 Kling AI 文生视频模型生成高质量视频，支持多比例、时长与质量模式，并提供负面提示词、引导强度与分辨率等控制。',
              "Generate high-quality videos using Kling AI's advanced text-to-video models. Kling offers professional-grade video generation with support for multiple aspect ratios, durations, and quality modes. Features include negative prompt control, customizable guidance scale, and flexible resolution options. Ideal for creating marketing content, social media videos, and creative visual storytelling.",
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !0,
                description: t(
                  '用于认证的 Bearer token。格式："Bearer YOUR_API_KEY"，需放在请求头中。',
                  'Bearer token for authentication. Format: "Bearer YOUR_API_KEY". Include this in the request headers to authenticate your API calls.',
                ),
              },
              {
                name: 'Content-Type',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"，用于声明请求体格式。',
                  'Must be set to "application/json" to indicate the request body format.',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'prompt',
                type: 'string',
                required: !0,
                description: t(
                  '视频文本描述，建议包含场景、动作、镜头、光影与风格，最多 2500 字符。',
                  'Detailed text description of the video content to generate. Describe scenes, actions, camera movements, lighting, and visual style. Maximum 2500 characters. The more detailed and specific your prompt, the better the generation results.',
                ),
              },
              {
                name: 'model',
                type: 'string',
                required: !0,
                description: t(
                  'Kling 模型版本："kling-v1-5"、"kling-v1-6"(默认)、"kling-v2-5-turbo"。不同版本能力不同，v2-5-turbo 参数兼容不同。',
                  'The Kling AI model version to use. Options: "kling-v1-5", "kling-v1-6" (default), "kling-v2-5-turbo". Different versions offer varying quality levels and feature support. Note: v2-5-turbo has different parameter compatibility.',
                ),
              },
              {
                name: 'negative_prompt',
                type: 'string',
                required: !1,
                description: t(
                  '负面提示词，描述不希望出现的内容，最多 2500 字符。',
                  'Elements to exclude from the generated video. Describe unwanted objects, actions, or visual characteristics. Maximum 2500 characters. Helps refine output by specifying what NOT to include.',
                ),
              },
              {
                name: 'cfg_scale',
                type: 'number',
                required: !1,
                description: t(
                  '提示词跟随度 0~1，默认 0.5；越高越严格。kling-v2-5-turbo 不支持。',
                  'Guidance scale controlling how closely the generation follows your prompt. Range: 0 to 1. Default: 0.5. Higher values adhere more strictly to the prompt, lower values allow more creative interpretation. Not supported in kling-v2-5-turbo.',
                ),
              },
              {
                name: 'duration',
                type: 'integer',
                required: !1,
                description: t(
                  '时长（秒）：5（默认）或 10。kling-v2-5-turbo 不支持。',
                  'Video length in seconds. Supported values: 5 (default) or 10. Longer videos take more time to generate. Not supported in kling-v2-5-turbo.',
                ),
              },
              {
                name: 'aspect_ratio',
                type: 'string',
                required: !1,
                description: t(
                  '画面比例："16:9"(默认)、"9:16" 或 "1:1"。按发布平台选择。',
                  'Video dimensions and orientation. Options: "16:9" (widescreen, default), "9:16" (vertical/portrait), "1:1" (square). Choose based on your distribution platform: 16:9 for YouTube/web, 9:16 for TikTok/Instagram Stories, 1:1 for Instagram feed.',
                ),
              },
              {
                name: 'mode',
                type: 'string',
                required: !1,
                description: t(
                  '质量模式："std"（更快，仅 v1-6+）或 "pro"（更高质量更慢）。kling-v2-5-turbo 不支持。',
                  'Quality mode for generation. Options: "std" (standard - faster generation, only supported for kling-v1-6 and above), "pro" (professional - higher quality, slower generation). Pro mode delivers superior visual fidelity. Not supported in kling-v2-5-turbo.',
                ),
              },
            ],
            requestExample: {
              prompt:
                'A serene mountain landscape at golden hour, with sunlight streaming through clouds, gentle camera pan revealing a pristine lake surrounded by pine forests',
              model: 'kling-v1-6',
              negative_prompt:
                'blurry, low quality, distorted, text, watermark',
              cfg_scale: 0.5,
              duration: 5,
              aspect_ratio: '16:9',
              mode: 'pro',
            },
            responseExample: {
              task_id: 'kling_20250106_abc123xyz',
              status: 'processing',
              message:
                'Video generation task submitted successfully. Use task_id to query generation status and retrieve the completed video.',
            },
          },
        });
      case 'minimax-video':
        return e.jsx(c, {
          data: {
            title: t('MiniMax 视频生成', 'Minimax Video Generation'),
            method: 'POST',
            endpoint: '/minimax/v1/video_generation',
            description: t(
              '使用 MiniMax/Hailuo 模型生成专业视频，支持文本生成、智能提示词优化与首帧控制，多分辨率与异步任务流程。',
              "Create professional videos with Minimax's Video-01 and Hailuo AI models. Generate high-resolution videos from text descriptions with intelligent prompt optimization and optional first-frame image control. Supports multiple resolutions and provides asynchronous task-based workflow for efficient video creation. Perfect for content creators, marketers, and developers building video generation applications.",
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !0,
                description: t(
                  '用于认证的 Bearer token。格式："Bearer YOUR_API_KEY"，需放在请求头中。',
                  'Bearer token for authentication. Format: "Bearer YOUR_API_KEY". Include this in the request headers to authenticate your API calls.',
                ),
              },
              {
                name: 'Content-Type',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"，用于声明请求体格式。',
                  'Must be set to "application/json" to indicate the request body format.',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'model',
                type: 'string',
                required: !0,
                description: t(
                  'MiniMax 视频模型，如 "MiniMax-Hailuo-2.3-Fast" 或 "MiniMax-Hailuo-2.3"。',
                  'The Minimax video model to use. Options: "MiniMax-Hailuo-2.3-Fast" (faster generation) or "MiniMax-Hailuo-2.3" (standard quality). Each model may have different capabilities and performance characteristics.',
                ),
              },
              {
                name: 'prompt',
                type: 'string',
                required: !0,
                description: t(
                  '视频文本描述，建议包含场景、主体、动作、镜头、光影、氛围与风格。',
                  'Comprehensive text description of the desired video. Describe the scene, subject, actions, camera angles, lighting, mood, and visual style. The AI will interpret this to generate the video content. Be specific and detailed for best results.',
                ),
              },
              {
                name: 'duration',
                type: 'integer',
                required: !1,
                description: t(
                  '视频时长（秒）：6 或 10。时长越长处理时间越久。',
                  'Video duration in seconds. Supported values: 6 or 10 seconds. 6-second videos typically take 4-5 minutes to generate, while 10-second videos take 8-9 minutes. Longer videos provide more content but require more processing time.',
                ),
              },
              {
                name: 'prompt_optimizer',
                type: 'boolean',
                required: !1,
                description: t(
                  '是否自动优化提示词，默认 true。关闭可精确控制提示词。',
                  'Automatically enhance and optimize your prompt for better generation quality. Default: true. When enabled, the system refines your prompt to improve coherence and visual quality. Set to false for precise control over exact prompt wording.',
                ),
              },
              {
                name: 'first_frame_image',
                type: 'string',
                required: !1,
                description: t(
                  '首帧图（URL 或 base64，JPG/JPEG/PNG）。要求：宽高比 2:5~5:2，短边 > 300px，≤ 20MB。',
                  "URL or base64-encoded image to use as the video's starting frame. Supported formats: JPG, JPEG, PNG. Requirements: aspect ratio between 2:5 and 5:2, shorter side > 300px, file size ≤ 20MB. Useful for maintaining brand consistency or creating specific transitions.",
                ),
              },
            ],
            requestExample: {
              model: 'MiniMax-Hailuo-2.3',
              prompt:
                'A futuristic cityscape at night with neon lights reflecting off wet streets, flying vehicles passing by, cyberpunk aesthetic, cinematic atmosphere',
              duration: 6,
              prompt_optimizer: !0,
            },
            responseExample: {
              task_id: 'minimax_vid_20250106_xyz789',
              status: 'submitted',
              estimated_time: '4-5 minutes',
              message:
                'Video generation task created. Use task_id to check progress. Generation typically takes 4-5 minutes for 6-second videos, 8-9 minutes for 10-second videos.',
            },
          },
        });
      case 'jimeng-video':
        return e.jsx(c, {
          data: {
            title: t('即梦视频生成', 'Jimeng Video Generation'),
            method: 'POST',
            endpoint: '/v1/video/create',
            description: t(
              '使用即梦 AI 模型生成创意视频，支持多比例、多分辨率、可选参考图与灵活时长，适合内容创作与应用开发。',
              "Generate creative videos using Jimeng AI's advanced video generation models. Jimeng specializes in high-quality video synthesis with support for multiple aspect ratios and resolutions. Features flexible duration options and reference image input for guided video creation. Perfect for content creators, marketers, and developers building AI-powered video applications.",
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !0,
                description: t(
                  '用于认证的 Bearer token。格式："Bearer YOUR_API_KEY"，需放在请求头中。',
                  'Bearer token for authentication. Format: "Bearer YOUR_API_KEY". Include this in the request headers to authenticate your API calls.',
                ),
              },
              {
                name: 'Content-Type',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"，用于声明请求体格式。',
                  'Must be set to "application/json" to indicate the request body format.',
                ),
              },
              {
                name: 'Accept',
                type: 'string',
                required: !0,
                description: t(
                  '期望的响应格式，必须为 "application/json"。',
                  'Specifies the expected response format. Must be set to "application/json".',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'model',
                type: 'string',
                required: !0,
                description: t(
                  '即梦视频模型，如 "jimeng-video-3.0"。',
                  'The Jimeng video model to use. Example: "jimeng-video-3.0". Different model versions may offer varying capabilities and quality levels.',
                ),
              },
              {
                name: 'prompt',
                type: 'string',
                required: !0,
                description: t(
                  '视频文本描述，包含场景、动作、镜头、风格与氛围等。',
                  'Text description of the desired video content. Describe the scene, actions, subjects, camera movements, visual style, and mood. Be detailed and specific for best results.',
                ),
              },
              {
                name: 'duration',
                type: 'integer',
                required: !1,
                description: t(
                  '时长（秒）：5 或 10，时长越长耗时越高。',
                  'Video duration in seconds. Supported values: 5 or 10 seconds. Longer durations allow for more complex scenes and actions but require more processing time.',
                ),
              },
              {
                name: 'aspect_ratio',
                type: 'string',
                required: !0,
                description: t(
                  '宽高比："2:3"(竖屏)、"3:2"(横屏)、"1:1"(方形)。按平台选择。',
                  'Video aspect ratio. Options: "2:3" (vertical portrait), "3:2" (horizontal landscape), "1:1" (square). Choose based on your target platform: 2:3 for mobile stories, 3:2 for landscape content, 1:1 for social feeds.',
                ),
              },
              {
                name: 'size',
                type: 'string',
                required: !0,
                description: t(
                  '分辨率："720P" 或 "1080P"。更高分辨率更清晰但更慢。',
                  'Output video resolution. Options: "720P" (1280×720 pixels - standard quality) or "1080P" (1920×1080 pixels - high quality). Higher resolutions provide better visual clarity but take longer to generate and produce larger files.',
                ),
              },
              {
                name: 'images',
                type: 'array',
                required: !1,
                description: t(
                  '参考图数组（URL 或 base64），用于引导风格/一致性；为空则为纯文本生成。',
                  'Array of reference images for guided video generation. Images can be URLs or base64-encoded data. Use reference images to maintain visual consistency or guide the style of the generated video. Leave empty for text-to-video generation.',
                ),
              },
            ],
            requestExample: {
              model: 'jimeng-video-3.0',
              prompt:
                'A serene bamboo forest with gentle wind rustling through the leaves, dappled sunlight filtering through the canopy, peaceful and meditative atmosphere',
              duration: 5,
              aspect_ratio: '16:9',
              size: '1080P',
              images: [],
            },
            responseExample: {
              id: 'jimeng-vid:task_abc123xyz',
              object: 'video.task',
              created: 1735963427,
              status: 'pending',
              model: 'jimeng-video-3.0',
              message:
                'Video generation task submitted successfully. Use the task ID to check status and retrieve the video when ready.',
            },
          },
        });
      case 'grok-video':
        return e.jsx(c, {
          data: {
            title: t('Grok 视频生成', 'Grok Video Generation'),
            method: 'POST',
            endpoint: '/v1/video/create',
            description: t(
              '使用 Grok 视频模型生成高质量视频，支持多比例与分辨率，单张参考图引导风格，适合快速原型与内容创作。',
              "Create high-quality videos with Grok's advanced video generation technology. Grok Video offers fast and efficient video synthesis with support for various aspect ratios and resolutions. Features single reference image input for style-guided generation. Ideal for rapid video prototyping, content creation, and creative applications.",
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !0,
                description: t(
                  '用于认证的 Bearer token。格式："Bearer YOUR_API_KEY"，需放在请求头中。',
                  'Bearer token for authentication. Format: "Bearer YOUR_API_KEY". Include this in the request headers to authenticate your API calls.',
                ),
              },
              {
                name: 'Content-Type',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"，用于声明请求体格式。',
                  'Must be set to "application/json" to indicate the request body format.',
                ),
              },
              {
                name: 'Accept',
                type: 'string',
                required: !0,
                description: t(
                  '期望的响应格式，必须为 "application/json"。',
                  'Specifies the expected response format. Must be set to "application/json".',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'model',
                type: 'string',
                required: !0,
                description: t(
                  'Grok 视频模型，如 "grok-video-3"。',
                  'The Grok video model to use. Example: "grok-video-3". Specifies which version of the Grok video generation model to utilize.',
                ),
              },
              {
                name: 'prompt',
                type: 'string',
                required: !0,
                description: t(
                  '视频文本描述，包含场景、动作、画面元素与镜头等。',
                  'Text description of the desired video. Describe the scene, actions, visual elements, camera work, and atmosphere. Grok excels at interpreting concise yet descriptive prompts.',
                ),
              },
              {
                name: 'aspect_ratio',
                type: 'string',
                required: !0,
                description: t(
                  '宽高比："2:3"(竖屏)、"3:2"(横屏)、"1:1"(方形)。',
                  'Video aspect ratio. Options: "2:3" (vertical/portrait), "3:2" (horizontal/landscape), "1:1" (square). Select based on your distribution platform: 2:3 for mobile/stories, 3:2 for YouTube/web, 1:1 for Instagram feed.',
                ),
              },
              {
                name: 'size',
                type: 'string',
                required: !0,
                description: t(
                  '分辨率："720P" 或 "1080P"。更高分辨率更清晰但更慢。',
                  'Output video resolution. Options: "720P" (1280×720 pixels - standard quality) or "1080P" (1920×1080 pixels - high quality). Higher resolutions deliver better visual fidelity but require more processing time.',
                ),
              },
              {
                name: 'images',
                type: 'array',
                required: !1,
                description: t(
                  '参考图数组（仅支持 1 张），URL 或 base64，用于引导风格或首帧；无参考图则传空数组。',
                  'Array containing a single reference image. Note: Grok Video only supports one reference image at a time. The image can be a URL or base64-encoded data. Use this to guide the visual style or starting frame of the video. For text-to-video without reference, provide an empty array.',
                ),
              },
            ],
            requestExample: {
              model: 'grok-video-3',
              prompt:
                'A majestic dragon soaring through storm clouds with lightning illuminating its scales, cinematic and epic atmosphere',
              aspect_ratio: '16:9',
              size: '1080P',
              images: ['https://example.com/dragon-reference.jpg'],
            },
            responseExample: {
              id: 'grok-vid:task_def456ghi',
              object: 'video.task',
              created: 1735963427,
              status: 'pending',
              model: 'grok-video-3',
              message:
                'Video generation task created successfully. Use the task ID to check status and retrieve the completed video.',
            },
          },
        });
      case 'video-task-query':
        return e.jsx(c, {
          data: {
            title: t('视频任务进度查询', 'Video Task Progress Query'),
            method: 'GET',
            endpoint: '/v1/videos/{task_id}',
            description: t(
              '查询视频生成任务进度与状态，可获取完成状态、进度百分比以及最终视频 URL。支持 Sora、Veo、Kling、MiniMax、即梦、Grok 等平台。',
              'Query the progress and status of a video generation task. Use this endpoint to check the completion status, progress percentage, and retrieve the final video URL when the task is complete. Supports all video generation platforms including Sora, Veo, Kling, Minimax, Jimeng, and Grok.',
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !0,
                description: t(
                  '用于认证的 Bearer token。格式："Bearer YOUR_API_KEY"，需放在请求头中。',
                  'Bearer token for authentication. Format: "Bearer YOUR_API_KEY". Include this in the request headers to authenticate your API calls.',
                ),
              },
              {
                name: 'Accept',
                type: 'string',
                required: !1,
                description: t(
                  '期望的响应格式，通常为 "application/json"，可选但建议设置。',
                  'Specifies the expected response format. Typically "application/json". Optional but recommended.',
                ),
              },
            ],
            bodyParameters: [],
            requestExample: {},
            responseExample: {
              task_id: 'video_task_123abc',
              status: 'completed',
              progress: '100%',
              video_url: 'https://example.com/generated-video.mp4',
              created_at: 1735963427,
              completed_at: 1735963627,
              model: 'sora-2',
              message: 'Video generation completed successfully.',
            },
          },
        });
      case 'audio-chat':
        return e.jsx(c, {
          data: {
            title: t('语音对话补全', 'Audio Chat Completions'),
            method: 'POST',
            endpoint: '/v1/chat/completions',
            description: t(
              '与支持音频的模型（如 GPT-4o Audio）对话。支持音频输入/输出，适合语音助手、无障碍与多模态应用。模型可理解语音并以多种音色自然回复。',
              'Interact with audio-native large language models like GPT-4o Audio. This endpoint supports both audio input and audio output, enabling natural voice conversations with AI. Perfect for voice assistants, accessibility features, and multimodal applications. The model can understand spoken questions and respond with natural-sounding speech in various voices.',
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !0,
                description: t(
                  '用于认证的 Bearer token。格式："Bearer YOUR_API_KEY"，需放在请求头中。',
                  'Bearer token for authentication. Format: "Bearer YOUR_API_KEY". Include this in the request headers to authenticate your API calls.',
                ),
              },
              {
                name: 'Content-Type',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"，用于声明请求体格式。',
                  'Must be set to "application/json" to indicate the request body format.',
                ),
              },
              {
                name: 'Accept',
                type: 'string',
                required: !1,
                description: t(
                  '期望的响应格式，通常为 "application/json"，可选但建议设置。',
                  'Specifies the expected response format. Typically "application/json". Optional but recommended.',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'model',
                type: 'string',
                required: !0,
                description: t(
                  '支持音频的模型 ID，如 "gpt-4o-audio-preview"。',
                  'ID of the audio-capable model to use. Must be a model that supports audio modalities, such as "gpt-4o-audio-preview" or other audio-enabled models. These models are specifically trained to process and generate audio content.',
                ),
              },
              {
                name: 'messages',
                type: 'array',
                required: !0,
                description: t(
                  '对话消息数组，包含 "role" 与 "content"（文本或音频），支持混合内容。',
                  'Array of message objects comprising the conversation. Each message has a "role" (system, user, or assistant) and "content" (the message text or audio). Supports both text and audio content in the conversation history.',
                ),
              },
              {
                name: 'modalities',
                type: 'array',
                required: !0,
                description: t(
                  '输出模态，需设为 ["text","audio"] 启用语音输出；默认 ["text"]。',
                  'Specifies the output modalities for the response. Must be set to ["text", "audio"] to enable audio output. Default is ["text"] for text-only responses. Setting this enables the model to generate spoken responses in addition to or instead of text.',
                ),
              },
              {
                name: 'audio',
                type: 'object',
                required: !1,
                description: t(
                  '音频输出配置，包含 "voice" 与 "format"；使用音频输出时必填。',
                  'Configuration object for audio output settings. Contains "voice" and "format" parameters to control the characteristics of the generated speech. Required when using audio modality.',
                ),
              },
              {
                name: 'audio.voice',
                type: 'string',
                required: !1,
                description: t(
                  '音色选择：alloy/ash/ballad/coral/echo/fable/nova/onyx/sage/shimmer 等，不同音色风格不同。',
                  'The voice to use for audio output. Available voices: "alloy" (neutral), "ash" (warm), "ballad" (soft), "coral" (friendly), "echo" (masculine), "fable" (expressive), "nova" (cheerful), "onyx" (deep), "sage" (calm), "shimmer" (bright). Each voice has distinct characteristics suitable for different use cases.',
                ),
              },
              {
                name: 'audio.format',
                type: 'string',
                required: !1,
                description: t(
                  '输出格式：wav/mp3/flac/opus/pcm16，默认 wav。按质量与兼容性选择。',
                  'The audio format for the output. Supported formats: "wav" (uncompressed, high quality), "mp3" (compressed, good quality), "flac" (lossless compression), "opus" (low latency, web streaming), "pcm16" (raw audio, 16-bit PCM). Choose based on your quality, size, and compatibility requirements. Defaults to "wav".',
                ),
              },
            ],
            requestExample: {
              model: 'gpt-4o-audio-preview',
              modalities: ['text', 'audio'],
              audio: { voice: 'alloy', format: 'wav' },
              messages: [
                {
                  role: 'user',
                  content: 'Is a golden retriever a good family dog?',
                },
              ],
            },
            responseExample: {
              id: 'chatcmpl-audio-abc123',
              object: 'chat.completion',
              created: 1677652288,
              model: 'gpt-4o-audio-preview',
              choices: [
                {
                  index: 0,
                  message: {
                    role: 'assistant',
                    content:
                      'Yes, golden retrievers are excellent family dogs! They are known for being friendly, patient, and great with children.',
                    audio: {
                      id: 'audio_abc123def456',
                      data: 'UklGRiQAAABXQVZFZm10IBAAAAABAAEA...',
                      expires_at: 1677655888,
                      transcript:
                        'Yes, golden retrievers are excellent family dogs! They are known for being friendly, patient, and great with children.',
                    },
                  },
                  finish_reason: 'stop',
                },
              ],
              usage: {
                prompt_tokens: 15,
                completion_tokens: 28,
                total_tokens: 43,
              },
            },
          },
        });
      case 'text-to-speech':
        return e.jsx(c, {
          data: {
            title: t('文本转语音', 'Text to Speech'),
            method: 'POST',
            endpoint: '/v1/audio/speech',
            description: t(
              '使用 TTS 模型将文本生成高质量语音，支持多音色与音频格式，适合配音、无障碍、播客与交互语音等场景，并支持语速调节。',
              'Generates high-quality audio from input text using advanced text-to-speech models. Convert written content into natural-sounding speech with multiple voice options and audio formats. Perfect for creating voiceovers, accessibility features, audio content, podcasts, and interactive voice applications. Supports speed adjustment for customized playback.',
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !0,
                description: t(
                  '用于认证的 Bearer token。格式："Bearer YOUR_API_KEY"，需放在请求头中。',
                  'Bearer token for authentication. Format: "Bearer YOUR_API_KEY". Include this in the request headers to authenticate your API calls.',
                ),
              },
              {
                name: 'Content-Type',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"，用于声明请求体格式。',
                  'Must be set to "application/json" to indicate the request body format.',
                ),
              },
              {
                name: 'Accept',
                type: 'string',
                required: !1,
                description: t(
                  '期望的音频响应格式，如 "audio/mpeg"、"audio/opus" 等。',
                  'Specifies the expected response format. Can be set to specific audio MIME types like "audio/mpeg", "audio/opus", etc.',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'model',
                type: 'string',
                required: !0,
                description: t(
                  'TTS 模型："tts-1"（标准/更快）或 "tts-1-hd"（高清/更慢）。HD 语调更自然。',
                  'The TTS model to use for audio generation. Options: "tts-1" (standard quality, faster generation) or "tts-1-hd" (high definition, better quality but slower). HD model provides more natural intonation and clearer pronunciation.',
                ),
              },
              {
                name: 'input',
                type: 'string',
                required: !0,
                description: t(
                  '待转换的文本，最长 4096 字符。模型会根据标点自动处理停顿与语调。',
                  'The text to convert into speech. Maximum length is 4096 characters. Can include multiple sentences and paragraphs. The model will automatically handle punctuation for natural pauses and intonation.',
                ),
              },
              {
                name: 'voice',
                type: 'string',
                required: !0,
                description: t(
                  '音色选择：alloy/echo/fable/onyx/nova/shimmer 等，不同风格适配不同内容。',
                  'The voice to use for speech synthesis. Available voices: "alloy" (neutral, balanced), "echo" (masculine, clear), "fable" (warm, expressive British accent), "onyx" (deep, authoritative), "nova" (feminine, energetic), "shimmer" (soft, gentle). Each voice has unique characteristics suitable for different content types.',
                ),
              },
              {
                name: 'response_format',
                type: 'string',
                required: !1,
                description: t(
                  '输出格式：mp3(默认)/opus/aac/flac 等，按质量与兼容性选择。',
                  'The audio format for the output. Supported formats: "mp3" (default, widely compatible, good quality), "opus" (low latency, efficient for streaming), "aac" (high quality, good for mobile), "flac" (lossless, highest quality, larger files). Choose based on your quality and compatibility needs.',
                ),
              },
              {
                name: 'speed',
                type: 'number',
                required: !1,
                description: t(
                  '语速 0.25~4.0，默认 1.0。超出范围会被限制。',
                  'The playback speed of the generated audio. Range: 0.25 (quarter speed, very slow) to 4.0 (quadruple speed, very fast). Default is 1.0 (normal speed). Useful for creating fast-paced content or slow, deliberate narration. Values outside this range will be clamped.',
                ),
              },
            ],
            requestExample: {
              model: 'gpt-4o-mini-tts',
              input: 'The quick brown fox jumped over the lazy dog.',
              voice: 'alloy',
              response_format: 'mp3',
              speed: 1,
            },
            responseExample: {
              type: 'audio/mpeg',
              size: 24536,
              content_length: 24536,
              data: 'Binary audio data (MP3 format)',
              message:
                'Audio generated successfully. The response body contains the binary audio file in the specified format.',
            },
          },
        });
      case 'suno-music-gen':
        return e.jsx(c, {
          data: {
            title: t('Suno 音乐生成', 'Suno Music Generation'),
            method: 'POST',
            endpoint: '/suno/submit/music',
            description: t(
              '使用 Suno 生成包含人声与伴奏的原创音乐，可自定义歌词与风格，或使用灵感模式由 AI 生成歌词。支持多版本模型（chirp-v3-0/v3-5/v4），并支持续写扩展。',
              'Generate original music tracks with vocals and instrumentation using Suno AI. Create custom songs with your own lyrics and style preferences, or use inspiration mode for AI-generated lyrics. Supports multiple music model versions (chirp-v3-0, v3-5, v4) with different capabilities. Perfect for creating background music, original songs, jingles, and audio content. Includes continuation features to extend existing tracks.',
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !1,
                description: t(
                  '用于认证的 Bearer token。格式："Bearer YOUR_API_KEY"，可选。',
                  'Bearer token for authentication. Format: "Bearer YOUR_API_KEY". Include this in the request headers to authenticate your API calls. Optional if using other authentication methods.',
                ),
              },
              {
                name: 'Content-Type',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"。',
                  'Must be set to "application/json" to indicate the request body format.',
                ),
              },
              {
                name: 'Accept',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"，用于接收任务信息。',
                  'Must be set to "application/json" to receive JSON response with task information.',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'prompt',
                type: 'string',
                required: !0,
                description: t(
                  '歌词内容（自定义模式）。可包含主歌/副歌/桥段；纯伴奏也需填写，可描述情绪/风格。',
                  'Lyrics content for the song. Only used in custom mode where you provide your own lyrics. Can include verse, chorus, bridge sections. Maximum length varies by model. For instrumental tracks, this field is still required but can describe the mood or style instead of lyrics.',
                ),
              },
              {
                name: 'mv',
                type: 'string',
                required: !0,
                description: t(
                  '模型版本："chirp-v3-0"、"chirp-v3-5"、"chirp-v4"。新版本通常更好但可能更慢。',
                  'Model version selection. Available options: "chirp-v3-0" (stable, reliable), "chirp-v3-5" (improved quality), or "chirp-v4" (latest, best quality). Each version has different audio quality and generation capabilities. Newer versions generally produce better results but may take longer.',
                ),
              },
              {
                name: 'title',
                type: 'string',
                required: !0,
                description: t(
                  '歌曲标题，用于识别与管理，建议简洁清晰。',
                  'Title of the song. Used for identifying and organizing your generated music. Should be descriptive and memorable. Maximum length is typically 80 characters.',
                ),
              },
              {
                name: 'tags',
                type: 'string',
                required: !0,
                description: t(
                  '风格标签，用逗号分隔，如 "pop, electronic"、"ambient, relaxing"。',
                  'Style tags that define the genre and characteristics of the music. Multiple tags should be separated by commas. Examples: "pop, electronic", "rock, energetic", "ambient, relaxing". These tags guide the AI in generating appropriate instrumentation, tempo, and overall feel.',
                ),
              },
              {
                name: 'make_instrumental',
                type: 'boolean',
                required: !0,
                description: t(
                  '是否生成纯伴奏。true 为无歌词伴奏；false 为有人声。',
                  'Controls whether to generate a purely instrumental version without vocals. Set to true for background music or instrumental tracks. Set to false to include vocals singing the provided lyrics. Instrumental tracks focus on melody and harmony without vocal elements.',
                ),
              },
              {
                name: 'task_id',
                type: 'string',
                required: !1,
                description: t(
                  '已有任务的 ID，用于修改/续写/查询。',
                  'Task identifier for operating on existing tasks. Used when you want to modify, continue, or check status of a previously submitted music generation task.',
                ),
              },
              {
                name: 'continue_at',
                type: 'number',
                required: !1,
                description: t(
                  '续写起点（秒）。配合 continue_clip_id 使用。',
                  'Starting time in seconds (float) for continuing/extending an existing track. Used with continue_clip_id to specify where the continuation should begin. Allows creating longer versions of generated songs by extending from a specific timestamp.',
                ),
              },
              {
                name: 'continue_clip_id',
                type: 'string',
                required: !1,
                description: t(
                  '需要续写的片段 ID。',
                  'ID of the song/clip that needs to be continued or extended. Use this with continue_at to create seamless extensions of existing tracks. Useful for creating full-length songs from shorter generations.',
                ),
              },
              {
                name: 'gpt_description_prompt',
                type: 'string',
                required: !1,
                description: t(
                  '灵感模式描述词，描述主题/情绪/故事，由 AI 生成歌词。',
                  'Creative description prompt for inspiration mode. Only used when you want the AI to generate lyrics based on a concept or theme. Describe the mood, story, or topic you want the song to be about, and the AI will create appropriate lyrics.',
                ),
              },
              {
                name: 'notify_hook',
                type: 'string',
                required: !1,
                description: t(
                  '任务完成回调 URL。',
                  'Callback URL to be notified when the task completes. The system will POST to this URL with the completed task information. Useful for webhook-based workflows and asynchronous processing.',
                ),
              },
            ],
            requestExample: {
              prompt: `Verse 1:
Coding through the night, under neon lights
Algorithms dancing, everything feels right

Chorus:
In the digital dreams, where the data streams
We're building tomorrow, or so it seems`,
              mv: 'chirp-v4',
              title: 'Neon Algorithms',
              tags: 'synthwave, electronic, retro, upbeat',
              make_instrumental: !1,
            },
            responseExample: {
              code: 'success',
              data: '950bf3af-78a6-420e-8c01-3bde0bbb3ef9',
              message:
                'Music generation task submitted successfully. Use the task ID to check generation status and retrieve the audio when ready.',
            },
          },
        });
      case 'suno-lyrics-gen':
        return e.jsx(c, {
          data: {
            title: t('歌词生成', 'Lyrics Generation'),
            method: 'POST',
            endpoint: '/suno/submit/lyrics',
            description: t(
              '使用 AI 生成原创歌词，适合词作者与内容创作者。提供主题/风格描述即可生成含主歌/副歌/桥段的歌词，可直接用于 Suno 音乐生成。',
              'Generate creative and original song lyrics using AI. Perfect for songwriters, musicians, and content creators who need inspiration or complete lyrics for their music projects. Simply provide a theme, concept, or style description, and the AI will craft appropriate lyrics with proper structure including verses, choruses, and bridges. Ideal for creating lyrics in any genre from pop to rock, hip-hop to country. The generated lyrics can be directly used with the Suno Music Generation API.',
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !1,
                description: t(
                  '用于认证的 Bearer token。格式："Bearer YOUR_API_KEY"，可选。',
                  'Bearer token for authentication. Format: "Bearer YOUR_API_KEY". Include this in the request headers to authenticate your API calls. Optional if using other authentication methods.',
                ),
              },
              {
                name: 'Content-Type',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"。',
                  'Must be set to "application/json" to indicate the request body format.',
                ),
              },
              {
                name: 'Accept',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"。',
                  'Must be set to "application/json" to receive JSON response with task information.',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'prompt',
                type: 'string',
                required: !0,
                description: t(
                  '歌词主题/风格描述，可为关键词或详细描述，越具体效果越好。',
                  'Lyrics prompt that describes the theme, mood, style, or concept you want the lyrics to be about. Can be a single word (e.g., "dance", "love", "adventure"), a phrase (e.g., "summer romance"), or a detailed description (e.g., "a melancholic song about lost memories and finding hope"). The AI will generate complete lyrics with appropriate structure based on your prompt. Be specific for better results.',
                ),
              },
              {
                name: 'notify_hook',
                type: 'string',
                required: !1,
                description: t(
                  '可选回调 URL，生成完成后会 POST 结果。',
                  'Optional callback URL to be notified when the lyrics generation completes. The system will POST the generated lyrics to this URL. Useful for webhook-based workflows, asynchronous processing, and integrating with other services. The callback will include the task ID and generated lyrics content.',
                ),
              },
            ],
            requestExample: { prompt: 'dance' },
            responseExample: {
              code: 'success',
              data: '47443cc1-4902-42ae-ae7f-72a9900544e9',
              message:
                'Lyrics generation task submitted successfully. Use the task ID to retrieve the generated lyrics when ready.',
            },
          },
        });
      case 'music-task-query':
        return e.jsx(c, {
          data: {
            title: t('音乐任务进度查询', 'Music Task Progress Query'),
            method: 'GET',
            endpoint: '/suno/fetch/{id}',
            description: t(
              '查询音乐或歌词生成任务进度与状态，任务完成后可获取生成的音乐或歌词。支持 Suno 音乐/歌词任务。',
              'Query the progress and status of a music or lyrics generation task. Use this endpoint to check the completion status and retrieve the final generated music or lyrics when the task is complete. Supports Suno music generation and lyrics generation tasks.',
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !0,
                description: t(
                  '用于认证的 Bearer token。格式："Bearer YOUR_API_KEY"，需放在请求头中。',
                  'Bearer token for authentication. Format: "Bearer YOUR_API_KEY". Include this in the request headers to authenticate your API calls.',
                ),
              },
              {
                name: 'Accept',
                type: 'string',
                required: !1,
                description: t(
                  '期望的响应格式，通常为 "application/json"，可选但建议设置。',
                  'Specifies the expected response format. Typically "application/json". Optional but recommended.',
                ),
              },
            ],
            bodyParameters: [],
            requestExample: {},
            responseExample: {
              code: 'success',
              data: {
                id: '47443cc1-4902-42ae-ae7f-72a9900544e9',
                status: 'completed',
                audio_url: 'https://example.com/generated-music.mp3',
                lyrics: 'Generated lyrics content...',
                title: 'My Generated Song',
                created_at: 1735963427,
                completed_at: 1735963627,
              },
              message: 'Task completed successfully.',
            },
          },
        });
      case 'embedding':
        return e.jsx(c, {
          data: {
            title: t('向量嵌入', 'Embeddings'),
            method: 'POST',
            endpoint: '/v1/embeddings',
            description: t(
              '生成文本语义向量，用于语义检索、聚类、推荐、异常检测与分类。将文本映射到向量空间，使相似概念更接近。',
              'Creates embedding vectors that capture semantic meaning of input text. Embeddings are numerical representations of text that can be used for semantic search, clustering, recommendations, anomaly detection, and classification tasks. Convert text into dense vectors that place similar concepts close together in vector space. Essential for building AI-powered search engines, recommendation systems, and semantic analysis applications.',
            ),
            headerParameters: [
              {
                name: 'Authorization',
                type: 'string',
                required: !0,
                description: t(
                  '用于认证的 Bearer token。格式："Bearer YOUR_API_KEY"，需放在请求头中。',
                  'Bearer token for authentication. Format: "Bearer YOUR_API_KEY". Include this in the request headers to authenticate your API calls.',
                ),
              },
              {
                name: 'Content-Type',
                type: 'string',
                required: !0,
                description: t(
                  '必须为 "application/json"，用于声明请求体格式。',
                  'Must be set to "application/json" to indicate the request body format.',
                ),
              },
              {
                name: 'Accept',
                type: 'string',
                required: !1,
                description: t(
                  '期望的响应格式，通常为 "application/json"，可选但建议设置。',
                  'Specifies the expected response format. Typically "application/json". Optional but recommended.',
                ),
              },
            ],
            bodyParameters: [
              {
                name: 'model',
                type: 'string',
                required: !0,
                description: t(
                  '嵌入模型 ID，如 "text-embedding-3-small"/"text-embedding-3-large"/"text-embedding-ada-002"。按精度与成本选择。',
                  'ID of the embedding model to use. Available models include: "text-embedding-3-small" (cost-effective, good performance), "text-embedding-3-large" (highest quality, larger dimensions), "text-embedding-ada-002" (legacy model, still widely used). Different models have different dimensions and capabilities. Choose based on your accuracy and cost requirements.',
                ),
              },
              {
                name: 'input',
                type: 'string or array',
                required: !0,
                description: t(
                  '待嵌入文本，可为单条或数组批量。每条最大 8192 tokens。',
                  'Input text to generate embeddings for. Can be a single string or an array of strings for batch processing. Each input is encoded as a string or array of tokens. Maximum length is 8192 tokens per input. For batch requests, you can process multiple texts in a single API call for efficiency. Use arrays when you need embeddings for multiple documents simultaneously.',
                ),
              },
              {
                name: 'encoding_format',
                type: 'string',
                required: !1,
                description: t(
                  '返回格式："float"(默认) 或 "base64"（更省体积）。',
                  'Format for the returned embeddings. Options are "float" (default, standard floating-point numbers) or "base64" (base64-encoded string, more compact for transmission). Use base64 when you need to minimize response size or when storing embeddings in systems that prefer string representations.',
                ),
              },
              {
                name: 'dimensions',
                type: 'integer',
                required: !1,
                description: t(
                  '向量维度（部分模型支持）。维度更低更省资源但可能略降精度。',
                  'Number of dimensions for the output embeddings. Only supported by certain models like text-embedding-3-large and text-embedding-3-small. Allows you to reduce the embedding size for storage efficiency while maintaining most of the semantic information. Lower dimensions save storage and compute but may reduce accuracy slightly.',
                ),
              },
              {
                name: 'user',
                type: 'string',
                required: !1,
                description: t(
                  '终端用户唯一标识，便于监测与防滥用。',
                  'A unique identifier representing your end-user. Helps OpenAI monitor and detect abuse. Useful for tracking usage patterns and ensuring API compliance.',
                ),
              },
            ],
            requestExample: {
              model: 'text-embedding-3-large',
              input:
                'Artificial intelligence is transforming how we build and interact with software applications.',
            },
            responseExample: {
              object: 'list',
              data: [
                {
                  object: 'embedding',
                  embedding: [
                    0.0023064255, -0.009327292, -0.0028842222, 0.015589137,
                    -0.008019003, 0.012345678, -0.001234567, 0.009876543,
                  ],
                  index: 0,
                },
              ],
              model: 'text-embedding-3-large',
              usage: { prompt_tokens: 12, total_tokens: 12 },
            },
          },
        });
      case 'tools-calling':
        return e.jsx(u, {
          title: t('函数调用（工具）', 'Function Calling (Tools)'),
          content: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', {
                className: 'lead text-xl text-gray-600 mb-8',
                children: t(
                  '让模型与外部工具和 API 交互。函数调用让模型在需要时请求执行工具，从而构建强大的智能体工作流，而无需模型直接执行代码。',
                  'Enable your AI models to interact with external tools and APIs. Function calling allows models to intelligently request tool execution, creating powerful agentic workflows without directly executing code.',
                ),
              }),
              e.jsxs('div', {
                className: 'space-y-10',
                children: [
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('概览', 'Overview'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '函数调用（也叫工具调用）让模型在需要时建议使用外部工具完成任务。模型本身不执行工具，而是返回结构化请求，应用侧安全执行并回传结果。',
                          "Function calling (also known as tool calling) empowers language models to suggest external tool usage when needed to complete a task. The model doesn't execute tools directly—instead, it returns structured requests that your application can safely execute and return results for.",
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700',
                        children: t(
                          '这一标准化方式适配多家模型提供方，便于构建可搜索数据库、调用 API、执行计算与交互外部系统的智能体。',
                          'This standardized approach works across multiple model providers, allowing you to build sophisticated AI agents that can search databases, call APIs, perform calculations, and interact with external systems.',
                        ),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('模型支持', 'Model Support'),
                      }),
                      e.jsxs('p', {
                        className: 'text-gray-700 mb-4',
                        children: [
                          t(
                            '多数现代模型支持函数调用。浏览模型页时，关注支持参数中包含',
                            'Most modern language models support function calling. When browsing our Models page, look for models that list',
                          ),
                          e.jsx('span', {
                            className:
                              'font-mono text-sm bg-gray-100 px-2 py-0.5 rounded mx-1',
                            children: 'tools',
                          }),
                          t('的模型。', ' in their supported parameters.'),
                        ],
                      }),
                      e.jsx('div', {
                        className: 'bg-blue-50 border-l-4 border-blue-500 p-4',
                        children: e.jsxs('p', {
                          className: 'text-sm text-blue-800',
                          children: [
                            e.jsx('strong', {
                              children: t('小贴士：', 'Pro Tip:'),
                            }),
                            ' ',
                            t(
                              'GPT-4、Claude 3.5 与 Gemini Pro 都具备优秀的函数调用能力；更简单场景可用 GPT-3.5-turbo 以降低成本。',
                              'GPT-4, Claude 3.5, and Gemini Pro all offer excellent function calling capabilities. For simpler use cases, GPT-3.5-turbo provides a cost-effective option.',
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('工作原理', 'How It Works'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-6',
                        children: t(
                          '函数调用遵循三步对话循环：',
                          'Function calling follows a three-step conversational loop:',
                        ),
                      }),
                      e.jsxs('div', {
                        className: 'space-y-6',
                        children: [
                          e.jsxs('div', {
                            className: 'flex gap-4',
                            children: [
                              e.jsx('div', {
                                className:
                                  'flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg',
                                children: '1',
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h3', {
                                    className:
                                      'text-lg font-bold text-gray-900 mb-2',
                                    children: t('发起请求', 'Initial Request'),
                                  }),
                                  e.jsxs('p', {
                                    className: 'text-gray-700',
                                    children: [
                                      t(
                                        '将用户消息与函数定义一起放在',
                                        "Send your user's message along with function definitions in the",
                                      ),
                                      ' ',
                                      e.jsx('code', {
                                        className:
                                          'bg-gray-100 px-2 py-0.5 rounded',
                                        children: 'tools',
                                      }),
                                      t(
                                        '参数中。每个函数包含名称、描述与参数 schema，用于引导模型理解。',
                                        " parameter. Each function includes a name, description, and parameter schema that guides the model's understanding.",
                                      ),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className: 'flex gap-4',
                            children: [
                              e.jsx('div', {
                                className:
                                  'flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg',
                                children: '2',
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h3', {
                                    className:
                                      'text-lg font-bold text-gray-900 mb-2',
                                    children: t('执行工具', 'Tool Execution'),
                                  }),
                                  e.jsxs('p', {
                                    className: 'text-gray-700',
                                    children: [
                                      t(
                                        '模型分析请求，若需要外部工具会返回',
                                        'The model analyzes the request and returns a',
                                      ),
                                      ' ',
                                      e.jsx('code', {
                                        className:
                                          'bg-gray-100 px-2 py-0.5 rounded',
                                        children: 'tool_calls',
                                      }),
                                      t(
                                        '数组。应用侧根据参数执行函数并获取结果。',
                                        ' array if it needs external tools. Your application executes these function calls client-side with the provided arguments and captures the results.',
                                      ),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className: 'flex gap-4',
                            children: [
                              e.jsx('div', {
                                className:
                                  'flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg',
                                children: '3',
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h3', {
                                    className:
                                      'text-lg font-bold text-gray-900 mb-2',
                                    children: t('最终回复', 'Final Response'),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-gray-700',
                                    children: t(
                                      '将工具结果作为新消息发送回模型，模型会结合结果生成自然语言回复。',
                                      'Send the tool results back to the model as new messages. The model processes these results and generates a natural language response for your user, incorporating the data from your tools.',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('实现示例', 'Implementation Example'),
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('1. 定义工具', '1. Define Your Tools'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '首先定义模型可调用的函数，每个工具需包含清晰的名称、描述与参数 schema：',
                          'Start by defining the functions you want the model to access. Each tool needs a clear name, description, and parameter schema:',
                        ),
                      }),
                      e.jsx(r, {
                        language: 'javascript',
                        code: `const tools = [
  {
    type: "function",
    function: {
      name: "get_weather",
      description: "Get the current weather forecast for a specific location",
      parameters: {
        type: "object",
        properties: {
          location: {
            type: "string",
            description: "The city and country, e.g., 'San Francisco, US'"
          },
          unit: {
            type: "string",
            enum: ["celsius", "fahrenheit"],
            description: "Temperature unit preference"
          }
        },
        required: ["location"]
      }
    }
  }
];`,
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-8',
                        children: t(
                          '2. 发起初始请求',
                          '2. Make the Initial Request',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '在对话请求中包含 tools 数组：',
                          'Include the tools array in your chat completion request:',
                        ),
                      }),
                      e.jsx(r, {
                        language: 'javascript',
                        code: `const response = await fetch('__DOCS_BASE_URL__/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'gpt-4o',
    messages: [
      { role: 'user', content: 'What's the weather like in Tokyo?' }
    ],
    tools: tools,
    tool_choice: 'auto' // Let the model decide when to use tools
  })
});

const data = await response.json();`,
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-8',
                        children: t('3. 处理工具调用', '3. Handle Tool Calls'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '判断是否有工具调用，执行并回传结果：',
                          'Check if the model wants to call any tools, execute them, and send the results back:',
                        ),
                      }),
                      e.jsx(r, {
                        language: 'javascript',
                        code: `// Check if the model wants to call a tool
if (data.choices[0].message.tool_calls) {
  const toolCall = data.choices[0].message.tool_calls[0];
  const functionName = toolCall.function.name;
  const functionArgs = JSON.parse(toolCall.function.arguments);

  // Execute the function (implement this based on your needs)
  const functionResult = await executeFunction(functionName, functionArgs);

  // Send the result back to the model
  const followupResponse = await fetch('__DOCS_BASE_URL__/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [
        { role: 'user', content: 'What's the weather like in Tokyo?' },
        data.choices[0].message, // Assistant's tool call
        {
          role: 'tool',
          tool_call_id: toolCall.id,
          content: JSON.stringify(functionResult)
        }
      ],
      tools: tools
    })
  });

  const finalData = await followupResponse.json();
  console.log(finalData.choices[0].message.content);
}`,
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('最佳实践', 'Best Practices'),
                      }),
                      e.jsxs('div', {
                        className: 'space-y-4',
                        children: [
                          e.jsxs('div', {
                            className:
                              'bg-white p-6 rounded-lg border border-gray-200 shadow-sm',
                            children: [
                              e.jsxs('h4', {
                                className:
                                  'text-base font-bold text-gray-900 mb-2',
                                children: [
                                  '📝 ',
                                  t('清晰描述', 'Write Clear Descriptions'),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-gray-700 text-sm',
                                children: t(
                                  '函数名称与描述应清晰准确。模型依赖这些信息理解何时、如何使用工具；必要时可加入示例。',
                                  'Function names and descriptions should be precise and descriptive. The model relies on these to understand when and how to use each tool. Include examples in descriptions when helpful.',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'bg-white p-6 rounded-lg border border-gray-200 shadow-sm',
                            children: [
                              e.jsxs('h4', {
                                className:
                                  'text-base font-bold text-gray-900 mb-2',
                                children: [
                                  '🔒 ',
                                  t('校验输入', 'Validate Tool Inputs'),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-gray-700 text-sm',
                                children: t(
                                  '执行函数前务必校验/清洗模型给出的参数。即使通常有效，也应将其视为不可信输入以保证安全。',
                                  'Always validate and sanitize the arguments the model provides before executing functions. While models generally provide valid inputs, treat tool calls as untrusted user input for security.',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'bg-white p-6 rounded-lg border border-gray-200 shadow-sm',
                            children: [
                              e.jsxs('h4', {
                                className:
                                  'text-base font-bold text-gray-900 mb-2',
                                children: [
                                  '🔄 ',
                                  t(
                                    '每次都传 tools',
                                    'Include Tools in Every Request',
                                  ),
                                ],
                              }),
                              e.jsxs('p', {
                                className: 'text-gray-700 text-sm',
                                children: [
                                  t('在同一会话的每次请求中都传入', 'Pass the'),
                                  ' ',
                                  e.jsx('code', {
                                    className:
                                      'bg-gray-100 px-1.5 py-0.5 rounded',
                                    children: 'tools',
                                  }),
                                  t(
                                    '参数，以保持 schema 一致并允许模型随时调用工具。',
                                    ' parameter in all requests within a conversation thread. This ensures consistent schema validation and allows the model to call tools at any point in the conversation.',
                                  ),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'bg-white p-6 rounded-lg border border-gray-200 shadow-sm',
                            children: [
                              e.jsxs('h4', {
                                className:
                                  'text-base font-bold text-gray-900 mb-2',
                                children: [
                                  '🛡️ ',
                                  t('错误处理', 'Implement Error Handling'),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-gray-700 text-sm',
                                children: t(
                                  '工具执行可能失败。请在工具响应中返回错误信息，便于模型提示用户或尝试替代方案，并保持错误结构一致。',
                                  'Tool execution can fail. Return error messages in the tool response so the model can inform the user or try alternative approaches. Structure error responses consistently.',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'bg-white p-6 rounded-lg border border-gray-200 shadow-sm',
                            children: [
                              e.jsxs('h4', {
                                className:
                                  'text-base font-bold text-gray-900 mb-2',
                                children: [
                                  '🔢 ',
                                  t('设置迭代上限', 'Set Iteration Limits'),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-gray-700 text-sm',
                                children: t(
                                  '构建自治智能体时请限制最大迭代次数以避免死循环，通常 5~10 轮后需要人工介入。',
                                  'When building autonomous agents, implement maximum iteration counts to prevent infinite loops. A typical limit is 5-10 turns before requiring user intervention.',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('高级特性', 'Advanced Features'),
                      }),
                      e.jsxs('div', {
                        className: 'space-y-6 mt-6',
                        children: [
                          e.jsxs('div', {
                            children: [
                              e.jsx('h3', {
                                className:
                                  'text-lg font-semibold text-gray-900 mb-2',
                                children: t(
                                  '工具选择控制',
                                  'Tool Choice Control',
                                ),
                              }),
                              e.jsxs('p', {
                                className: 'text-gray-700 mb-3',
                                children: [
                                  t('使用', 'Use the'),
                                  ' ',
                                  e.jsx('code', {
                                    className:
                                      'bg-gray-100 px-2 py-0.5 rounded',
                                    children: 'tool_choice',
                                  }),
                                  t(
                                    '参数控制模型如何使用工具：',
                                    ' parameter to control how the model uses tools:',
                                  ),
                                ],
                              }),
                              e.jsxs('ul', {
                                className:
                                  'list-disc pl-6 space-y-2 text-gray-700',
                                children: [
                                  e.jsxs('li', {
                                    children: [
                                      e.jsx('code', {
                                        className:
                                          'bg-gray-100 px-2 py-0.5 rounded',
                                        children: '"auto"',
                                      }),
                                      t(
                                        ' - 模型自行决定（默认）',
                                        ' - Model decides whether to call tools (default behavior)',
                                      ),
                                    ],
                                  }),
                                  e.jsxs('li', {
                                    children: [
                                      e.jsx('code', {
                                        className:
                                          'bg-gray-100 px-2 py-0.5 rounded',
                                        children: '"none"',
                                      }),
                                      t(
                                        ' - 禁止调用工具',
                                        ' - Prevents the model from calling any tools',
                                      ),
                                    ],
                                  }),
                                  e.jsxs('li', {
                                    children: [
                                      e.jsx('code', {
                                        className:
                                          'bg-gray-100 px-2 py-0.5 rounded',
                                        children:
                                          '{"type": "function", "function": {"name": "get_weather"}}',
                                      }),
                                      t(
                                        ' - 强制调用指定工具',
                                        ' - Forces a specific tool to be called',
                                      ),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            children: [
                              e.jsx('h3', {
                                className:
                                  'text-lg font-semibold text-gray-900 mb-2',
                                children: t(
                                  '并行工具调用',
                                  'Parallel Tool Calls',
                                ),
                              }),
                              e.jsxs('p', {
                                className: 'text-gray-700 mb-3',
                                children: [
                                  t(
                                    '默认可并行调用多个工具（如同时查询多个城市天气）。可通过',
                                    'By default, models can request multiple tool calls simultaneously when it makes sense. For example, checking weather in multiple cities at once. Control this with the',
                                  ),
                                  ' ',
                                  e.jsx('code', {
                                    className:
                                      'bg-gray-100 px-2 py-0.5 rounded',
                                    children: 'parallel_tool_calls',
                                  }),
                                  t('参数控制：', ' parameter:'),
                                ],
                              }),
                              e.jsx(r, {
                                language: 'json',
                                code: { parallel_tool_calls: !0 },
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            children: [
                              e.jsx('h3', {
                                className:
                                  'text-lg font-semibold text-gray-900 mb-2',
                                children: t(
                                  '与流式输出结合',
                                  'Streaming with Tools',
                                ),
                              }),
                              e.jsxs('p', {
                                className: 'text-gray-700 mb-3',
                                children: [
                                  t(
                                    '函数调用可与流式响应配合使用。开启流式时监控',
                                    'Function calling works with streaming responses. When streaming is enabled, monitor the',
                                  ),
                                  ' ',
                                  e.jsx('code', {
                                    className:
                                      'bg-gray-100 px-2 py-0.5 rounded',
                                    children: 'finish_reason',
                                  }),
                                  t('字段：', ' field:'),
                                ],
                              }),
                              e.jsxs('ul', {
                                className:
                                  'list-disc pl-6 space-y-2 text-gray-700',
                                children: [
                                  e.jsxs('li', {
                                    children: [
                                      e.jsx('code', {
                                        className:
                                          'bg-gray-100 px-2 py-0.5 rounded',
                                        children: '"tool_calls"',
                                      }),
                                      t(
                                        ' - 需要调用工具',
                                        ' - The model wants to call tools',
                                      ),
                                    ],
                                  }),
                                  e.jsxs('li', {
                                    children: [
                                      e.jsx('code', {
                                        className:
                                          'bg-gray-100 px-2 py-0.5 rounded',
                                        children: '"stop"',
                                      }),
                                      t(
                                        ' - 正常完成',
                                        ' - Normal completion without tool calls',
                                      ),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-gray-700 mt-3 text-sm',
                                children: t(
                                  '需增量处理 delta 以拼装完整工具调用信息。',
                                  'Process delta objects incrementally to build the complete tool call information as chunks arrive.',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            children: [
                              e.jsx('h3', {
                                className:
                                  'text-lg font-semibold text-gray-900 mb-2',
                                children: t(
                                  '工具间推理',
                                  'Reasoning Between Tool Calls',
                                ),
                              }),
                              e.jsx('p', {
                                className: 'text-gray-700',
                                children: t(
                                  '高级模型可在工具调用之间进行中间推理，以实现多步问题解决。模型会先分析结果再决定下一步，但会增加 token 与延迟。支持该能力的模型会自动启用。',
                                  'Advanced models can perform intermediate reasoning between tool calls, allowing for sophisticated multi-step problem solving. This enables the model to analyze tool results before deciding on next steps, though it increases token usage and latency. This behavior is automatic in supported models.',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('常见场景', 'Common Use Cases'),
                      }),
                      e.jsxs('div', {
                        className: 'grid grid-cols-1 md:grid-cols-2 gap-4',
                        children: [
                          e.jsxs('div', {
                            className:
                              'p-5 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsxs('h4', {
                                className: 'font-semibold text-gray-900 mb-2',
                                children: [
                                  '🔍 ',
                                  t('信息检索', 'Information Retrieval'),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '搜索数据库、调用 API、读取文档与获取实时数据。',
                                  'Search databases, query APIs, fetch documentation, and retrieve real-time data.',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-5 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsxs('h4', {
                                className: 'font-semibold text-gray-900 mb-2',
                                children: [
                                  '📊 ',
                                  t('数据处理', 'Data Processing'),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '计算、数据分析、生成报告与格式转换。',
                                  'Perform calculations, analyze datasets, generate reports, and transform data formats.',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-5 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsxs('h4', {
                                className: 'font-semibold text-gray-900 mb-2',
                                children: [
                                  '🤖 ',
                                  t('流程自动化', 'Workflow Automation'),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '创建工单、发送通知、更新 CRM 并编排复杂流程。',
                                  'Create tickets, send notifications, update CRM systems, and orchestrate complex workflows.',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-5 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsxs('h4', {
                                className: 'font-semibold text-gray-900 mb-2',
                                children: [
                                  '💬 ',
                                  t('对话式智能体', 'Conversational Agents'),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '构建可预约、查库存、下单与客服处理的聊天机器人。',
                                  'Build chatbots that can book appointments, check inventory, process orders, and handle customer service.',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      case 'mcp':
        return e.jsx(u, {
          title: t('模型上下文协议（MCP）', 'Model Context Protocol (MCP)'),
          content: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', {
                className: 'lead text-xl text-gray-600 mb-8',
                children: t(
                  '模型上下文协议（MCP）是一种开源标准，用于将 AI 应用连接到外部数据源与工具。可以把它看作 AI 的通用连接器（类似 USB‑C），让模型安全访问你的数据与系统。',
                  'Model Context Protocol (MCP) is an open-source standard for connecting AI applications to external data sources and tools. Think of it as a universal connector—like USB-C for AI—that enables language models to securely access your data and systems.',
                ),
              }),
              e.jsxs('div', {
                className: 'space-y-10',
                children: [
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('概览', 'Overview'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          'MCP 由 Anthropic 于 2024 年 11 月提出，为模型连接外部上下文（数据库、API、文件系统、业务工具）提供标准化方式。无需为每个数据源单独定制集成，一个协议即可通用。',
                          'Introduced by Anthropic in November 2024, MCP provides a standardized way to connect AI models to external context sources including databases, APIs, file systems, and business tools. Instead of building custom integrations for every data source, MCP offers a universal protocol that works across all AI applications and providers.',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          'MCP 采用客户端-服务器架构：AI 应用（客户端）通过标准协议连接数据源（服务器）。这种关注点分离让你一次构建连接器即可复用到所有 AI 应用。',
                          'MCP operates on a client-server architecture where AI applications (clients) connect to data sources (servers) through a standardized protocol. This separation of concerns allows you to build data connectors once and use them across all your AI applications.',
                        ),
                      }),
                      e.jsx('div', {
                        className:
                          'bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 rounded-r-lg',
                        children: e.jsxs('p', {
                          className: 'text-sm text-blue-900',
                          children: [
                            e.jsx('strong', {
                              children: t('行业采用：', 'Industry Adoption:'),
                            }),
                            ' ',
                            t(
                              'MCP 发布后已被 OpenAI（2025 年 3 月）与 Google DeepMind（2025 年 4 月）采用，成为连接 AI 代理与工具/数据的事实标准。',
                              'Since its launch, MCP has been adopted by OpenAI (March 2025) and Google DeepMind (April 2025), making it the de-facto standard for connecting AI agents to tools and data across the industry.',
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('为什么使用 MCP？', 'Why Use MCP?'),
                      }),
                      e.jsxs('div', {
                        className: 'grid grid-cols-1 md:grid-cols-2 gap-4',
                        children: [
                          e.jsx('div', {
                            className:
                              'p-5 bg-white rounded-lg border border-gray-200 shadow-sm',
                            children: e.jsxs('div', {
                              className: 'flex items-start gap-3',
                              children: [
                                e.jsx('div', {
                                  className:
                                    'flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center',
                                  children: e.jsx('svg', {
                                    className: 'w-4 h-4 text-green-600',
                                    fill: 'none',
                                    viewBox: '0 0 24 24',
                                    stroke: 'currentColor',
                                    children: e.jsx('path', {
                                      strokeLinecap: 'round',
                                      strokeLinejoin: 'round',
                                      strokeWidth: 2,
                                      d: 'M5 13l4 4L19 7',
                                    }),
                                  }),
                                }),
                                e.jsxs('div', {
                                  children: [
                                    e.jsx('h4', {
                                      className:
                                        'text-base font-bold text-gray-900 mb-2',
                                      children: t(
                                        '通用兼容',
                                        'Universal Compatibility',
                                      ),
                                    }),
                                    e.jsx('p', {
                                      className: 'text-sm text-gray-600',
                                      children: t(
                                        '一次构建连接器，可复用于 ChatGPT、Claude、Gemini 等所有兼容 MCP 的应用。',
                                        'Build integrations once and use them across ChatGPT, Claude, Gemini, and any MCP-compatible AI application.',
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          e.jsx('div', {
                            className:
                              'p-5 bg-white rounded-lg border border-gray-200 shadow-sm',
                            children: e.jsxs('div', {
                              className: 'flex items-start gap-3',
                              children: [
                                e.jsx('div', {
                                  className:
                                    'flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center',
                                  children: e.jsx('svg', {
                                    className: 'w-4 h-4 text-blue-600',
                                    fill: 'none',
                                    viewBox: '0 0 24 24',
                                    stroke: 'currentColor',
                                    children: e.jsx('path', {
                                      strokeLinecap: 'round',
                                      strokeLinejoin: 'round',
                                      strokeWidth: 2,
                                      d: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
                                    }),
                                  }),
                                }),
                                e.jsxs('div', {
                                  children: [
                                    e.jsx('h4', {
                                      className:
                                        'text-base font-bold text-gray-900 mb-2',
                                      children: t('安全优先', 'Security First'),
                                    }),
                                    e.jsx('p', {
                                      className: 'text-sm text-gray-600',
                                      children: t(
                                        'MCP 服务器可在本地基础设施运行，敏感数据不出你的控制边界。',
                                        'MCP servers run locally on your infrastructure, ensuring sensitive data never leaves your control.',
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          e.jsx('div', {
                            className:
                              'p-5 bg-white rounded-lg border border-gray-200 shadow-sm',
                            children: e.jsxs('div', {
                              className: 'flex items-start gap-3',
                              children: [
                                e.jsx('div', {
                                  className:
                                    'flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center',
                                  children: e.jsx('svg', {
                                    className: 'w-4 h-4 text-purple-600',
                                    fill: 'none',
                                    viewBox: '0 0 24 24',
                                    stroke: 'currentColor',
                                    children: e.jsx('path', {
                                      strokeLinecap: 'round',
                                      strokeLinejoin: 'round',
                                      strokeWidth: 2,
                                      d: 'M13 10V3L4 14h7v7l9-11h-7z',
                                    }),
                                  }),
                                }),
                                e.jsxs('div', {
                                  children: [
                                    e.jsx('h4', {
                                      className:
                                        'text-base font-bold text-gray-900 mb-2',
                                      children: t('生态丰富', 'Rich Ecosystem'),
                                    }),
                                    e.jsx('p', {
                                      className: 'text-sm text-gray-600',
                                      children: t(
                                        '可使用大量预构建 MCP 服务器，或用任意语言自建。',
                                        'Access thousands of pre-built MCP servers for popular services, or build custom ones in any language.',
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          e.jsx('div', {
                            className:
                              'p-5 bg-white rounded-lg border border-gray-200 shadow-sm',
                            children: e.jsxs('div', {
                              className: 'flex items-start gap-3',
                              children: [
                                e.jsx('div', {
                                  className:
                                    'flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center',
                                  children: e.jsx('svg', {
                                    className: 'w-4 h-4 text-orange-600',
                                    fill: 'none',
                                    viewBox: '0 0 24 24',
                                    stroke: 'currentColor',
                                    children: e.jsx('path', {
                                      strokeLinecap: 'round',
                                      strokeLinejoin: 'round',
                                      strokeWidth: 2,
                                      d: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
                                    }),
                                  }),
                                }),
                                e.jsxs('div', {
                                  children: [
                                    e.jsx('h4', {
                                      className:
                                        'text-base font-bold text-gray-900 mb-2',
                                      children: t('实时数据', 'Real-Time Data'),
                                    }),
                                    e.jsx('p', {
                                      className: 'text-sm text-gray-600',
                                      children: t(
                                        '适合需要新鲜数据的 RAG 场景，无需频繁训练或微调模型。',
                                        'Perfect for RAG applications requiring fresh data—no need to constantly retrain or fine-tune models.',
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('MCP 如何工作', 'How MCP Works'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-6',
                        children: t(
                          'MCP 采用客户端-服务器架构，包含三大组件：',
                          'MCP follows a client-server architecture with three main components:',
                        ),
                      }),
                      e.jsxs('div', {
                        className: 'space-y-6',
                        children: [
                          e.jsxs('div', {
                            className: 'flex gap-4',
                            children: [
                              e.jsx('div', {
                                className:
                                  'flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg',
                                children: '1',
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h3', {
                                    className:
                                      'text-lg font-bold text-gray-900 mb-2',
                                    children: t(
                                      'MCP Host（AI 应用）',
                                      'MCP Hosts (AI Applications)',
                                    ),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-gray-700',
                                    children: t(
                                      '需要访问外部数据的 AI 应用，如 Claude Desktop、ChatGPT、定制聊天机器人等。Host 会发起连接到 MCP 服务器获取上下文。',
                                      'The AI applications that want to access external data. Examples include Claude Desktop, ChatGPT, custom chatbots, or any LLM-powered application. Hosts initiate connections to MCP servers to retrieve context.',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className: 'flex gap-4',
                            children: [
                              e.jsx('div', {
                                className:
                                  'flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg',
                                children: '2',
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h3', {
                                    className:
                                      'text-lg font-bold text-gray-900 mb-2',
                                    children: t('MCP Client', 'MCP Clients'),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-gray-700',
                                    children: t(
                                      '代表 Host 维护与服务器连接的协议客户端，负责通信、路由与会话管理。',
                                      'Protocol clients that maintain connections to servers on behalf of hosts. They handle the communication, request routing, and session management between your application and data sources.',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className: 'flex gap-4',
                            children: [
                              e.jsx('div', {
                                className:
                                  'flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg',
                                children: '3',
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h3', {
                                    className:
                                      'text-lg font-bold text-gray-900 mb-2',
                                    children: t('MCP Server', 'MCP Servers'),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-gray-700',
                                    children: t(
                                      '轻量服务，用于向 AI 应用暴露数据与工具。每个服务器可提供资源（数据）、提示词模板（prompts）与工具（functions）。',
                                      'Lightweight services that expose your data and tools to AI applications. Each server can provide resources (data), prompts (templates), and tools (functions) that the AI can access through the standardized protocol.',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs('div', {
                        className:
                          'mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200',
                        children: [
                          e.jsx('h4', {
                            className: 'font-bold text-gray-900 mb-3',
                            children: t('通信流程', 'Communication Flow'),
                          }),
                          e.jsxs('div', {
                            className:
                              'font-mono text-sm text-gray-700 space-y-1',
                            children: [
                              e.jsx('div', {
                                children: t(
                                  'AI 应用（Host） → MCP Client → MCP Server → 数据源',
                                  'AI Application (Host) → MCP Client → MCP Server → Your Data Source',
                                ),
                              }),
                              e.jsx('div', {
                                className: 'text-gray-500',
                                children: t(
                                  '                     ← 数据响应 ←',
                                  '                         ← Data Response ←',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('核心能力', 'Core Capabilities'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-6',
                        children: t(
                          'MCP 服务器可对 AI 应用暴露三类能力：',
                          'MCP servers can expose three types of capabilities to AI applications:',
                        ),
                      }),
                      e.jsxs('div', {
                        className: 'space-y-4',
                        children: [
                          e.jsxs('div', {
                            className:
                              'p-5 bg-gradient-to-r from-indigo-50 to-transparent border-l-4 border-indigo-500 rounded-r-lg',
                            children: [
                              e.jsxs('h4', {
                                className:
                                  'font-bold text-gray-900 mb-2 flex items-center gap-2',
                                children: [
                                  e.jsx(j, {}),
                                  e.jsx('span', {
                                    children: t(
                                      'Resources（资源）',
                                      'Resources',
                                    ),
                                  }),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-700 mb-2',
                                children: t(
                                  '客户端可读取的类文件数据，例如：',
                                  'File-like data that can be read by clients. Examples include:',
                                ),
                              }),
                              e.jsxs('ul', {
                                className:
                                  'text-sm text-gray-600 space-y-1 ml-6 list-disc',
                                children: [
                                  e.jsx('li', {
                                    children: t(
                                      '数据库记录与查询结果',
                                      'Database records and query results',
                                    ),
                                  }),
                                  e.jsx('li', {
                                    children: t(
                                      '本地或云存储文件',
                                      'Files from local or cloud storage',
                                    ),
                                  }),
                                  e.jsx('li', {
                                    children: t(
                                      'API 响应与缓存数据',
                                      'API responses and cached data',
                                    ),
                                  }),
                                  e.jsx('li', {
                                    children: t(
                                      '实时系统指标与日志',
                                      'Live system metrics and logs',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-5 bg-gradient-to-r from-green-50 to-transparent border-l-4 border-green-500 rounded-r-lg',
                            children: [
                              e.jsxs('h4', {
                                className:
                                  'font-bold text-gray-900 mb-2 flex items-center gap-2',
                                children: [
                                  e.jsx(C, {}),
                                  e.jsx('span', {
                                    children: t('Prompts（提示词）', 'Prompts'),
                                  }),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-700 mb-2',
                                children: t(
                                  '可被用户调用的预置提示词模板，例如：',
                                  'Pre-written prompt templates that users can invoke. Examples include:',
                                ),
                              }),
                              e.jsxs('ul', {
                                className:
                                  'text-sm text-gray-600 space-y-1 ml-6 list-disc',
                                children: [
                                  e.jsx('li', {
                                    children: t(
                                      '带具体规范的代码审查模板',
                                      'Code review templates with specific guidelines',
                                    ),
                                  }),
                                  e.jsx('li', {
                                    children: t(
                                      '含上下文注入的数据分析流程',
                                      'Data analysis workflows with context injection',
                                    ),
                                  }),
                                  e.jsx('li', {
                                    children: t(
                                      '客服回复模板',
                                      'Customer support response templates',
                                    ),
                                  }),
                                  e.jsx('li', {
                                    children: t(
                                      '带格式规则的报告生成提示词',
                                      'Report generation prompts with formatting rules',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-5 bg-gradient-to-r from-orange-50 to-transparent border-l-4 border-orange-500 rounded-r-lg',
                            children: [
                              e.jsxs('h4', {
                                className:
                                  'font-bold text-gray-900 mb-2 flex items-center gap-2',
                                children: [
                                  e.jsx(R, {}),
                                  e.jsx('span', {
                                    children: t('Tools（工具）', 'Tools'),
                                  }),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-700 mb-2',
                                children: t(
                                  '模型可调用来执行动作的函数，例如：',
                                  'Functions that the LLM can invoke to perform actions. Examples include:',
                                ),
                              }),
                              e.jsxs('ul', {
                                className:
                                  'text-sm text-gray-600 space-y-1 ml-6 list-disc',
                                children: [
                                  e.jsx('li', {
                                    children: t(
                                      '创建/更新/删除数据库记录',
                                      'Creating, updating, or deleting database records',
                                    ),
                                  }),
                                  e.jsx('li', {
                                    children: t(
                                      '发送邮件或通知',
                                      'Sending emails or notifications',
                                    ),
                                  }),
                                  e.jsx('li', {
                                    children: t(
                                      '执行代码或脚本',
                                      'Executing code or running scripts',
                                    ),
                                  }),
                                  e.jsx('li', {
                                    children: t(
                                      '调用外部 API 与服务',
                                      'Calling external APIs and services',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '构建 MCP 服务器',
                          'Building an MCP Server',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-6',
                        children: t(
                          '可使用官方 Python/TypeScript SDK 或任何支持 JSON‑RPC 的语言来构建 MCP 服务器。下面示例展示如何暴露本地文件：',
                          "MCP servers can be built using official SDKs for Python, TypeScript, or any language with JSON-RPC support. Here's a simple example of building a server that exposes local files:",
                        ),
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('1. 安装 SDK', '1. Install the SDK'),
                      }),
                      e.jsx(r, {
                        language: 'bash',
                        code: `# Python
pip install mcp

# TypeScript/Node.js
npm install @modelcontextprotocol/sdk`,
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-8',
                        children: t(
                          '2. 创建基础服务器',
                          '2. Create a Basic Server',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '一个最简的 Python MCP 服务器示例（提供文件读取能力）：',
                          "Here's a minimal MCP server in Python that exposes a file reading capability:",
                        ),
                      }),
                      e.jsx(r, {
                        language: 'javascript',
                        code: `from mcp.server import Server
from mcp.types import Resource, Tool
import os

# Initialize the MCP server
server = Server("file-system-server")

@server.list_resources()
async def list_files():
    """List available files as resources"""
    files = []
    for filename in os.listdir("./documents"):
        files.append(Resource(
            uri=f"file:///{filename}",
            name=filename,
            mimeType="text/plain",
            description=f"Content of {filename}"
        ))
    return files

@server.read_resource()
async def read_file(uri: str):
    """Read file contents"""
    filename = uri.replace("file:///", "")
    with open(f"./documents/{filename}", 'r') as f:
        return f.read()

@server.list_tools()
async def list_tools():
    """Expose file search tool"""
    return [Tool(
        name="search_files",
        description="Search for files by name pattern",
        inputSchema={
            "type": "object",
            "properties": {
                "pattern": {"type": "string", "description": "Search pattern"}
            },
            "required": ["pattern"]
        }
    )]

@server.call_tool()
async def search_files(pattern: str):
    """Search implementation"""
    import glob
    results = glob.glob(f"./documents/{pattern}")
    return {"files": results}

# Start the server
if __name__ == "__main__":
    server.run()`,
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-8',
                        children: t(
                          '3. 配置 AI 应用',
                          '3. Configure Your AI Application',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '将 MCP 服务器写入应用配置即可连接：',
                          'Connect your MCP server to an AI application by adding it to the configuration:',
                        ),
                      }),
                      e.jsx(r, {
                        language: 'json',
                        code: {
                          mcpServers: {
                            filesystem: {
                              command: 'python',
                              args: ['path/to/your/server.py'],
                              env: {},
                            },
                          },
                        },
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '在本平台使用 MCP',
                          'Using MCP with Our Platform',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '我们的统一 API 支持各主流提供方的 MCP 模型。使用支持 MCP 的模型时，可像标准函数调用一样引用 MCP 资源与工具。',
                          'Our unified API supports MCP-enabled models from all major providers. When using models that support MCP, you can reference MCP resources and tools just like you would with standard function calling.',
                        ),
                      }),
                      e.jsx('div', {
                        className:
                          'docs-accent bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg',
                        children: e.jsxs('p', {
                          className: 'text-sm text-amber-900',
                          children: [
                            e.jsx('strong', { children: t('注意：', 'Note:') }),
                            ' ',
                            t(
                              'MCP 服务器通常在应用层配置（如 Claude Desktop 或自研应用）。服务器运行在你的基础设施上，模型通过 MCP 协议访问。',
                              'MCP server configuration is typically done at the application level (e.g., in Claude Desktop or your custom AI app). The servers run on your infrastructure and the models access them through the MCP protocol.',
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('热门 MCP 服务器', 'Popular MCP Servers'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-6',
                        children: t(
                          '社区已经构建了大量可直接使用的服务器，以下是常见示例：',
                          'The MCP community has built thousands of ready-to-use servers. Here are some popular ones:',
                        ),
                      }),
                      e.jsxs('div', {
                        className: 'grid grid-cols-1 md:grid-cols-2 gap-4',
                        children: [
                          e.jsxs('div', {
                            className:
                              'p-4 bg-white rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-1',
                                children: '@modelcontextprotocol/server-github',
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '访问 GitHub 仓库、Issues、PR 并搜索代码',
                                  'Access GitHub repositories, issues, PRs, and search code',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-white rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-1',
                                children:
                                  '@modelcontextprotocol/server-postgres',
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '连接 PostgreSQL 并执行查询',
                                  'Connect to PostgreSQL databases and run queries',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-white rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-1',
                                children:
                                  '@modelcontextprotocol/server-filesystem',
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '读写本地文件系统',
                                  'Access local file system with read/write capabilities',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-white rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-1',
                                children: '@modelcontextprotocol/server-slack',
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '读取/发送 Slack 消息并搜索频道',
                                  'Read and send Slack messages, search channels',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs('p', {
                        className: 'text-gray-600 text-sm mt-4',
                        children: [
                          t('完整列表见', 'Browse the full list at'),
                          ' ',
                          e.jsx('a', {
                            href: 'https://github.com/modelcontextprotocol',
                            className: 'text-blue-600 hover:underline',
                            children: 'github.com/modelcontextprotocol',
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('最佳实践', 'Best Practices'),
                      }),
                      e.jsxs('div', {
                        className: 'space-y-4',
                        children: [
                          e.jsxs('div', {
                            className:
                              'bg-white p-6 rounded-lg border border-gray-200 shadow-sm',
                            children: [
                              e.jsxs('h4', {
                                className:
                                  'text-base font-bold text-gray-900 mb-2',
                                children: [
                                  '🔐 ',
                                  t(
                                    '完善认证',
                                    'Implement Proper Authentication',
                                  ),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-gray-700 text-sm',
                                children: t(
                                  'MCP 服务器应校验请求并实现合适的认证机制，切勿在缺乏访问控制时暴露敏感操作。',
                                  'MCP servers should validate requests and implement appropriate authentication mechanisms. Never expose sensitive operations without proper access controls.',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'bg-white p-6 rounded-lg border border-gray-200 shadow-sm',
                            children: [
                              e.jsxs('h4', {
                                className:
                                  'text-base font-bold text-gray-900 mb-2',
                                children: [
                                  '📊 ',
                                  t(
                                    '清晰的资源 Schema',
                                    'Design Clear Resource Schemas',
                                  ),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-gray-700 text-sm',
                                children: t(
                                  '为资源与工具提供清晰名称与详细 schema，描述越好模型利用效果越佳。',
                                  'Provide descriptive names and detailed schemas for your resources and tools. The better your descriptions, the more effectively AI models can utilize your data sources.',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'bg-white p-6 rounded-lg border border-gray-200 shadow-sm',
                            children: [
                              e.jsxs('h4', {
                                className:
                                  'text-base font-bold text-gray-900 mb-2',
                                children: [
                                  '⚡ ',
                                  t('性能优化', 'Optimize for Performance'),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-gray-700 text-sm',
                                children: t(
                                  '通过缓存、分页与懒加载保持响应快速，慢响应会降低 AI 应用体验。',
                                  'Keep server responses fast by implementing caching, pagination for large datasets, and lazy loading. Slow servers can degrade the AI application experience.',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'bg-white p-6 rounded-lg border border-gray-200 shadow-sm',
                            children: [
                              e.jsxs('h4', {
                                className:
                                  'text-base font-bold text-gray-900 mb-2',
                                children: [
                                  '🧪 ',
                                  t('用真实模型测试', 'Test with Real Models'),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-gray-700 text-sm',
                                children: t(
                                  '上线前用实际模型测试，确保资源与工具按预期工作。不同模型对 schema 的理解可能有差异。',
                                  'Before deploying, test your MCP server with actual AI models to ensure resources and tools work as expected. Different models may interpret schemas differently.',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('了解更多', 'Learn More'),
                      }),
                      e.jsxs('div', {
                        className: 'grid grid-cols-1 md:grid-cols-2 gap-4',
                        children: [
                          e.jsxs('a', {
                            href: 'https://docs.anthropic.com/en/docs/mcp',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            className:
                              'flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all',
                            children: [
                              e.jsx(O, {}),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h4', {
                                    className: 'font-bold text-gray-900',
                                    children: t(
                                      '官方文档',
                                      'Official Documentation',
                                    ),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-sm text-gray-600',
                                    children: t(
                                      '完整 MCP 规范与指南',
                                      'Complete MCP specification and guides',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('a', {
                            href: 'https://github.com/modelcontextprotocol',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            className:
                              'flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all',
                            children: [
                              e.jsx(j, {}),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h4', {
                                    className: 'font-bold text-gray-900',
                                    children: t(
                                      'GitHub 仓库',
                                      'GitHub Repository',
                                    ),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-sm text-gray-600',
                                    children: t(
                                      'SDK、示例与社区服务器',
                                      'SDKs, examples, and community servers',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('a', {
                            href: 'https://anthropic.skilljar.com/introduction-to-model-context-protocol',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            className:
                              'flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all',
                            children: [
                              e.jsx(_, {}),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h4', {
                                    className: 'font-bold text-gray-900',
                                    children: t('在线课程', 'Online Course'),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-sm text-gray-600',
                                    children: t(
                                      'Anthropic 交互式教程',
                                      'Interactive tutorial from Anthropic',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('a', {
                            href: 'https://www.anthropic.com/news/model-context-protocol',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            className:
                              'flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all',
                            children: [
                              e.jsx(E, {}),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h4', {
                                    className: 'font-bold text-gray-900',
                                    children: t(
                                      '官方公告',
                                      'Official Announcement',
                                    ),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-sm text-gray-600',
                                    children: t(
                                      '了解 MCP 的愿景与目标',
                                      "Learn about MCP's vision and goals",
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      case 'web-search':
        return e.jsx(u, {
          title: t('Web 搜索', 'Web Search'),
          content: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', {
                className: 'lead text-xl text-gray-600 mb-8',
                children: t(
                  '让模型连接到实时网络信息。Web 搜索可获取最新事件、实时数据与超出训练截止日期的信息。',
                  'Connect your AI models to real-time information from the web. Web search enables models to access current events, latest data, and up-to-date information beyond their training cutoff dates.',
                ),
              }),
              e.jsxs('div', {
                className: 'space-y-10',
                children: [
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('概览', 'Overview'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          'Web 搜索让模型在需要最新信息时进行实时互联网查询，不再局限于训练数据，可获取实时结果与新闻。',
                          'Web search functionality allows AI models to perform real-time internet queries when they need current information to answer user questions. Instead of being limited to training data, models can fetch live results, news, and real-time data from the web.',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700',
                        children: t(
                          '不同模型提供方的接入方式不同。下面覆盖 OpenAI、Google Gemini、Claude 等能力与专用端点。',
                          'Different model providers offer various approaches to web search integration. Below, we document the web search capabilities for OpenAI, Google Gemini, Claude, and specialized endpoints.',
                        ),
                      }),
                    ],
                  }),
                  e.jsx('div', {
                    className: 'bg-yellow-50 border-l-4 border-yellow-400 p-4',
                    children: e.jsxs('p', {
                      className: 'text-sm text-yellow-800',
                      children: [
                        e.jsx('strong', {
                          children: t('重要提示：', 'Important:'),
                        }),
                        ' ',
                        t(
                          'Web 搜索会增加延迟（通常 2–5 秒），但可显著提升对近期事件、价格、天气、新闻等时效信息的准确性。',
                          'Web search adds latency to requests (typically 2-5 seconds) but significantly improves factual accuracy for recent events, current prices, weather, news, and time-sensitive information.',
                        ),
                      ],
                    }),
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('支持的提供方', 'Supported Providers'),
                      }),
                      e.jsxs('div', {
                        className: 'grid grid-cols-1 md:grid-cols-2 gap-4',
                        children: [
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: 'OpenAI',
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '模型：gpt-4o-search-preview',
                                  'Models: gpt-4o-search-preview',
                                ),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600 mt-1',
                                children: t(
                                  '方式：web_search_options 参数',
                                  'Method: web_search_options parameter',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: 'Google Gemini',
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '模型：gemini-2.5-flash、gemini-2.0-flash-exp',
                                  'Models: gemini-2.5-flash, gemini-2.0-flash-exp',
                                ),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600 mt-1',
                                children: t(
                                  '方式：googleSearch 工具',
                                  'Method: googleSearch tool',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: 'Anthropic Claude',
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '模型：claude-3-7-sonnet、claude-3-5-sonnet',
                                  'Models: claude-3-7-sonnet, claude-3-5-sonnet',
                                ),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600 mt-1',
                                children: t(
                                  '方式：web_search 工具（beta header）',
                                  'Method: web_search tool with beta header',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: 'OpenAI Responses API',
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '模型：o3-mini、o3-pro',
                                  'Models: o3-mini, o3-pro',
                                ),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600 mt-1',
                                children: t(
                                  '方式：web_search_preview 工具类型',
                                  'Method: web_search_preview tool type',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '1. OpenAI Web 搜索',
                          '1. OpenAI Web Search',
                        ),
                      }),
                      e.jsxs('p', {
                        className: 'text-gray-700 mb-4',
                        children: [
                          t(
                            'OpenAI 的搜索模型如',
                            "OpenAI's specialized search models like",
                          ),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-2 py-0.5 rounded',
                            children: 'gpt-4o-search-preview',
                          }),
                          t('可通过', ' support web search through the'),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-2 py-0.5 rounded',
                            children: 'web_search_options',
                          }),
                          t('参数启用 Web 搜索。', ' parameter.'),
                        ],
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('请求格式', 'Request Format'),
                      }),
                      e.jsx(b, {
                        samples: [
                          {
                            label: 'JavaScript',
                            language: 'javascript',
                            code: `const response = await fetch('__DOCS_BASE_URL__/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'gpt-4o-search-preview',
    web_search_options: {},
    messages: [
      {
        role: 'user',
        content: 'What was a positive news story from today?'
      }
    ]
  })
});

const data = await response.json();
console.log(data.choices[0].message.content);`,
                          },
                          {
                            label: 'Python',
                            language: 'python',
                            code: `import requests

url = '__DOCS_BASE_URL__/v1/chat/completions'
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
}
payload = {
    'model': 'gpt-4o-search-preview',
    'web_search_options': {},
    'messages': [
        {
            'role': 'user',
            'content': 'What was a positive news story from today?'
        }
    ]
}

response = requests.post(url, headers=headers, json=payload)
data = response.json()
print(data['choices'][0]['message']['content'])`,
                          },
                        ],
                      }),
                      e.jsx('div', {
                        className:
                          'bg-blue-50 border-l-4 border-blue-500 p-4 mt-4',
                        children: e.jsxs('p', {
                          className: 'text-sm text-blue-800',
                          children: [
                            e.jsx('strong', { children: t('注意：', 'Note:') }),
                            ' ',
                            t('参数', 'The'),
                            ' ',
                            e.jsx('code', {
                              className: 'bg-gray-100 px-2 py-0.5 rounded',
                              children: 'web_search_options',
                            }),
                            t(
                              '可以为空对象，模型会根据问题自动决定是否搜索。',
                              ' parameter can be an empty object. The model automatically determines when to perform web searches based on the query.',
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '2. Google 搜索（Gemini）',
                          '2. Google Search (Gemini)',
                        ),
                      }),
                      e.jsxs('p', {
                        className: 'text-gray-700 mb-4',
                        children: [
                          t(
                            'Gemini 通过',
                            "Google's Gemini models integrate directly with Google Search using the",
                          ),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-2 py-0.5 rounded',
                            children: 'googleSearch',
                          }),
                          t(
                            '工具直接接入 Google 搜索，返回高质量结果。',
                            " tool. This provides high-quality search results leveraging Google's search infrastructure.",
                          ),
                        ],
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('请求格式', 'Request Format'),
                      }),
                      e.jsx(b, {
                        samples: [
                          {
                            label: 'JavaScript',
                            language: 'javascript',
                            code: `const response = await fetch('__DOCS_BASE_URL__/v1beta/models/gemini-2.5-flash:generateContent?key=YOUR_API_KEY', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    contents: [
      {
        role: 'user',
        parts: [
          { text: 'What is the weather in Chongqing today?' }
        ]
      }
    ],
    tools: [
      { googleSearch: {} }
    ]
  })
});

const data = await response.json();
console.log(data);`,
                          },
                          {
                            label: 'Python',
                            language: 'python',
                            code: `import requests

url = '__DOCS_BASE_URL__/v1beta/models/gemini-2.5-flash:generateContent'
params = {'key': 'YOUR_API_KEY'}
headers = {
    'Content-Type': 'application/json',
}
payload = {
    'contents': [
        {
            'role': 'user',
            'parts': [
                {'text': 'What is the weather in Chongqing today?'}
            ]
        }
    ],
    'tools': [
        {'googleSearch': {}}
    ]
}

response = requests.post(url, params=params, headers=headers, json=payload)
data = response.json()
print(data)`,
                          },
                        ],
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('关键特性', 'Key Features'),
                      }),
                      e.jsxs('ul', {
                        className: 'list-disc pl-6 space-y-2 text-gray-700',
                        children: [
                          e.jsx('li', {
                            children: t(
                              '原生集成 Google 搜索',
                              'Native integration with Google Search',
                            ),
                          }),
                          e.jsx('li', {
                            children: t(
                              '支持多模态查询（文本/图片）',
                              'Supports multimodal queries (text and images)',
                            ),
                          }),
                          e.jsx('li', {
                            children: t(
                              '自动优化查询',
                              'Automatic query optimization',
                            ),
                          }),
                          e.jsx('li', {
                            children: t(
                              '结果相关度高',
                              'High-quality, relevant results',
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '3. Claude Web 搜索',
                          '3. Claude Web Search',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          'Claude（3.7 Sonnet 与升级版 3.5 Sonnet）通过专用工具支持 Web 搜索，并可自动附带引用来源。管理员可在控制台直接开启，无需额外 header。',
                          "Anthropic's Claude models (3.7 Sonnet and upgraded 3.5 Sonnet) support web search through a dedicated tool with automatic citation of sources. Administrators can enable the feature directly in the Console without extra headers.",
                        ),
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('请求格式', 'Request Format'),
                      }),
                      e.jsx(b, {
                        samples: [
                          {
                            label: 'JavaScript',
                            language: 'javascript',
                            code: `const response = await fetch('__DOCS_BASE_URL__/v1/messages', {
  method: 'POST',
  headers: {
    'x-api-key': 'YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'claude-3-7-sonnet-20250219',
    max_tokens: 4096,
    tools: [
      {
        type: 'web_search',
        name: 'web_search'
      }
    ],
    messages: [
      {
        role: 'user',
        content: 'What are the latest developments in AI this week?'
      }
    ]
  })
});

const data = await response.json();
console.log(data);`,
                          },
                          {
                            label: 'Python',
                            language: 'python',
                            code: `import requests

url = '__DOCS_BASE_URL__/v1/messages'
headers = {
    'x-api-key': 'YOUR_API_KEY',
    'Content-Type': 'application/json',
}
payload = {
    'model': 'claude-3-7-sonnet-20250219',
    'max_tokens': 4096,
    'tools': [
        {
            'type': 'web_search',
            'name': 'web_search',
        }
    ],
    'messages': [
        {
            'role': 'user',
            'content': 'What are the latest developments in AI this week?'
        }
    ]
}

response = requests.post(url, headers=headers, json=payload)
data = response.json()
print(data)`,
                          },
                        ],
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('关键特性', 'Key Features'),
                      }),
                      e.jsxs('ul', {
                        className: 'list-disc pl-6 space-y-2 text-gray-700',
                        children: [
                          e.jsxs('li', {
                            children: [
                              e.jsx('strong', {
                                children: t(
                                  '自动引用：',
                                  'Automatic Citations:',
                                ),
                              }),
                              ' ',
                              t(
                                '所有搜索结果均附带来源引用',
                                'Every web-sourced response includes citations to source materials',
                              ),
                            ],
                          }),
                          e.jsxs('li', {
                            children: [
                              e.jsx('strong', {
                                children: t(
                                  '多次查询：',
                                  'Multi-Query Support:',
                                ),
                              }),
                              ' ',
                              t(
                                '单次请求可进行多轮搜索',
                                'Claude can perform multiple searches throughout a single request',
                              ),
                            ],
                          }),
                          e.jsxs('li', {
                            children: [
                              e.jsx('strong', {
                                children: t(
                                  '智能判断：',
                                  'Smart Search Decisions:',
                                ),
                              }),
                              ' ',
                              t(
                                '模型自动决定何时需要搜索',
                                'The model intelligently determines when search is needed',
                              ),
                            ],
                          }),
                          e.jsxs('li', {
                            children: [
                              e.jsx('strong', {
                                children: t('计费：', 'Pricing:'),
                              }),
                              ' ',
                              t(
                                '每 1000 次搜索 $10，另加标准 token 费用',
                                ' $10 per 1,000 searches plus standard token costs',
                              ),
                            ],
                          }),
                        ],
                      }),
                      e.jsx('div', {
                        className:
                          'bg-amber-50 border-l-4 border-amber-400 p-4 mt-4',
                        children: e.jsxs('p', {
                          className: 'text-sm text-amber-800',
                          children: [
                            e.jsx('strong', {
                              children: t('要求：', 'Requirements:'),
                            }),
                            ' ',
                            t(
                              '需由组织管理员在控制台启用 Web 搜索。启用后使用标准',
                              'Your organization administrator must enable web search in the Console. Once enabled, standard',
                            ),
                            ' ',
                            e.jsx('code', {
                              className: 'bg-gray-100 px-2 py-0.5 rounded',
                              children: 'x-api-key',
                            }),
                            t('认证即可。', ' authentication is sufficient.'),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '4. OpenAI Responses API',
                          '4. OpenAI Responses API',
                        ),
                      }),
                      e.jsxs('p', {
                        className: 'text-gray-700 mb-4',
                        children: [
                          t('OpenAI 的', "OpenAI's specialized"),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-2 py-0.5 rounded',
                            children: '/v1/responses',
                          }),
                          t(
                            '端点可通过',
                            ' endpoint supports web search for reasoning models through the',
                          ),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-2 py-0.5 rounded',
                            children: 'web_search_preview',
                          }),
                          t('工具类型启用搜索。', ' tool type.'),
                        ],
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('请求格式', 'Request Format'),
                      }),
                      e.jsx(b, {
                        samples: [
                          {
                            label: 'JavaScript',
                            language: 'javascript',
                            code: `const response = await fetch('__DOCS_BASE_URL__/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    model: 'o3-mini-2025-01-31',
    tools: [
      {
        type: 'web_search_preview'
      }
    ],
    input: 'What was a positive news story from today?'
  })
});

const data = await response.json();
console.log(data);`,
                          },
                          {
                            label: 'Python',
                            language: 'python',
                            code: `import requests

url = '__DOCS_BASE_URL__/v1/responses'
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}
payload = {
    'model': 'o3-mini-2025-01-31',
    'tools': [
        {
            'type': 'web_search_preview',
        }
    ],
    'input': 'What was a positive news story from today?'
}

response = requests.post(url, headers=headers, json=payload)
data = response.json()
print(data)`,
                          },
                        ],
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('响应格式', 'Response Format'),
                      }),
                      e.jsx(r, {
                        language: 'json',
                        code: {
                          id: 'chatcmpl-123',
                          object: 'chat.completion',
                          created: 1677652288,
                          model: 'o3-mini-2025-01-31',
                          choices: [
                            {
                              index: 0,
                              message: {
                                role: 'assistant',
                                content:
                                  "Based on recent news, here's a positive story...",
                              },
                              finish_reason: 'stop',
                            },
                          ],
                          usage: {
                            prompt_tokens: 9,
                            completion_tokens: 12,
                            total_tokens: 21,
                          },
                        },
                      }),
                      e.jsx('div', {
                        className:
                          'bg-blue-50 border-l-4 border-blue-500 p-4 mt-4',
                        children: e.jsxs('p', {
                          className: 'text-sm text-blue-800',
                          children: [
                            e.jsx('strong', {
                              children: t('支持模型：', 'Supported Models:'),
                            }),
                            ' ',
                            t(
                              '该端点专为 o3-mini、o3-pro 等推理模型设计，并非所有 OpenAI 模型都支持。',
                              'This endpoint is specifically designed for reasoning models like o3-mini and o3-pro. Not all OpenAI models support this endpoint.',
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('最佳实践', 'Best Practices'),
                      }),
                      e.jsxs('div', {
                        className: 'space-y-4',
                        children: [
                          e.jsxs('div', {
                            className: 'flex gap-4',
                            children: [
                              e.jsx('div', {
                                className:
                                  'flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold',
                                children: '✓',
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h4', {
                                    className: 'font-bold text-gray-900',
                                    children: t(
                                      '用于时效性问题',
                                      'Use for Time-Sensitive Queries',
                                    ),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-sm text-gray-600',
                                    children: t(
                                      '适合处理实时事件、天气、股票价格、体育比分与最新新闻。',
                                      'Web search excels at current events, weather, stock prices, sports scores, and recent news.',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className: 'flex gap-4',
                            children: [
                              e.jsx('div', {
                                className:
                                  'flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold',
                                children: '✓',
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h4', {
                                    className: 'font-bold text-gray-900',
                                    children: t(
                                      '设置合理超时',
                                      'Set Appropriate Timeouts',
                                    ),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-sm text-gray-600',
                                    children: t(
                                      '搜索请求耗时更长，建议将超时设置为至少 30 秒以覆盖搜索延迟。',
                                      'Web search requests take longer. Set timeouts to at least 30 seconds to accommodate search latency.',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className: 'flex gap-4',
                            children: [
                              e.jsx('div', {
                                className:
                                  'flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold',
                                children: '✓',
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h4', {
                                    className: 'font-bold text-gray-900',
                                    children: t(
                                      '展示并校验引用',
                                      'Verify Citations',
                                    ),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-sm text-gray-600',
                                    children: t(
                                      '当模型提供引用（如 Claude）时，应展示来源链接便于用户核验。',
                                      'When available (like with Claude), always surface citation links to users so they can verify information.',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className: 'flex gap-4',
                            children: [
                              e.jsx('div', {
                                className:
                                  'flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold',
                                children: '✗',
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h4', {
                                    className: 'font-bold text-gray-900',
                                    children: t(
                                      '避免用于静态知识',
                                      "Don't Use for Static Knowledge",
                                    ),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-sm text-gray-600',
                                    children: t(
                                      '不需要时效信息的问题不要用搜索，避免不必要成本与延迟。',
                                      "Avoid web search for questions that don't require current information. It adds cost and latency unnecessarily.",
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('提供方对比', 'Provider Comparison'),
                      }),
                      e.jsx('div', {
                        className: 'overflow-x-auto',
                        children: e.jsxs('table', {
                          className: 'w-full text-left border-collapse',
                          children: [
                            e.jsx('thead', {
                              children: e.jsxs('tr', {
                                className: 'border-b-2 border-gray-300',
                                children: [
                                  e.jsx('th', {
                                    className:
                                      'py-3 px-4 font-semibold bg-gray-50',
                                    children: t('提供方', 'Provider'),
                                  }),
                                  e.jsx('th', {
                                    className:
                                      'py-3 px-4 font-semibold bg-gray-50',
                                    children: t('引用', 'Citations'),
                                  }),
                                  e.jsx('th', {
                                    className:
                                      'py-3 px-4 font-semibold bg-gray-50',
                                    children: t('多次搜索', 'Multi-Search'),
                                  }),
                                  e.jsx('th', {
                                    className:
                                      'py-3 px-4 font-semibold bg-gray-50',
                                    children: t(
                                      '特殊要求',
                                      'Special Requirements',
                                    ),
                                  }),
                                ],
                              }),
                            }),
                            e.jsxs('tbody', {
                              children: [
                                e.jsxs('tr', {
                                  className: 'border-b border-gray-200',
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: 'OpenAI Search',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('否', 'No'),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('是', 'Yes'),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '需特定模型',
                                        'Specific model required',
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsxs('tr', {
                                  className: 'border-b border-gray-200',
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: 'Google Gemini',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('部分', 'Partial'),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('是', 'Yes'),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('无', 'None'),
                                    }),
                                  ],
                                }),
                                e.jsxs('tr', {
                                  className: 'border-b border-gray-200',
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: 'Claude',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('是（完整）', 'Yes (Full)'),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('是', 'Yes'),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        'Beta 头 + 管理员开启',
                                        'Beta header + admin approval',
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsxs('tr', {
                                  className: 'border-b border-gray-200',
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: 'OpenAI Responses',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('否', 'No'),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('是', 'Yes'),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '仅推理模型',
                                        'Reasoning models only',
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      case 'structured-outputs':
        return e.jsx(u, {
          title: t('结构化输出', 'Structured Outputs'),
          content: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', {
                className: 'lead text-xl text-gray-600 mb-8',
                children: t(
                  '确保模型输出严格匹配你的 JSON Schema。结构化输出可消除解析错误、校验痛点与格式不确定性，让你每次都获得可直接用于生产的 JSON。',
                  'Ensure AI models generate responses that perfectly match your JSON schemas. Structured Outputs eliminate parsing errors, validation headaches, and unpredictable formatting—giving you guaranteed, production-ready JSON every time.',
                ),
              }),
              e.jsxs('div', {
                className: 'space-y-10',
                children: [
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('概览', 'Overview'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '结构化输出会约束模型严格按照你指定的 JSON Schema 生成响应。你只需定义所需结构，模型保证按结构输出，而不是“猜测格式”。',
                          'Structured Outputs is a feature that constrains AI models to produce responses that strictly adhere to your specified JSON schema. Instead of hoping the model formats its output correctly, you define the exact structure you need, and the model is guaranteed to follow it.',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700',
                        children: t(
                          '这对需要将模型输出解析进数据库、API 或 UI 组件的生产场景至关重要。不同厂商实现方式不同，但目标一致：零解析错误、完美结构合规。',
                          'This capability is essential for production applications where you need to parse model outputs into databases, APIs, or UI components. Different providers implement this feature with varying approaches, but all share the same goal: zero parsing errors and perfect schema compliance.',
                        ),
                      }),
                    ],
                  }),
                  e.jsx('div', {
                    className: 'bg-green-50 border-l-4 border-green-400 p-4',
                    children: e.jsxs('p', {
                      className: 'text-sm text-green-800',
                      children: [
                        e.jsx('strong', {
                          children: t('为什么重要：', 'Why It Matters:'),
                        }),
                        ' ',
                        t(
                          '传统 JSON 模式仍可能生成错误 JSON 或缺失字段；结构化输出通过受约束解码，在生成时就确保结构合规。',
                          'Traditional JSON mode can still produce malformed JSON or missing fields. Structured Outputs use constrained decoding to guarantee schema compliance at the token generation level.',
                        ),
                      ],
                    }),
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('提供方支持', 'Provider Support'),
                      }),
                      e.jsxs('div', {
                        className: 'grid grid-cols-1 md:grid-cols-2 gap-4',
                        children: [
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: 'OpenAI',
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '模型：GPT-4o、GPT-4o-mini（2024-08-06+）',
                                  'Models: GPT-4o, GPT-4o-mini (2024-08-06+)',
                                ),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600 mt-1',
                                children: t(
                                  '方式：response_format 严格模式',
                                  'Method: response_format with strict mode',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: 'Google Gemini',
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '模型：Gemini 1.5 Pro、Gemini 2.0 Flash',
                                  'Models: Gemini 1.5 Pro, Gemini 2.0 Flash',
                                ),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600 mt-1',
                                children: t(
                                  '方式：responseSchema 参数',
                                  'Method: responseSchema parameter',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: 'Anthropic Claude',
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '模型：Claude Sonnet 4.5、Opus 4.1、Haiku 4.5',
                                  'Models: Claude Sonnet 4.5, Opus 4.1, Haiku 4.5',
                                ),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600 mt-1',
                                children: t(
                                  '方式：output_format + beta header',
                                  'Method: output_format with beta header',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: 'OpenAI Responses API',
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '模型：o3-mini、o3-pro',
                                  'Models: o3-mini, o3-pro',
                                ),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600 mt-1',
                                children: t(
                                  '方式：format 参数 + json_schema',
                                  'Method: format parameter with json_schema',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '1. OpenAI 结构化输出',
                          '1. OpenAI Structured Outputs',
                        ),
                      }),
                      e.jsxs('p', {
                        className: 'text-gray-700 mb-4',
                        children: [
                          t('OpenAI 使用', "OpenAI's implementation uses the"),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-2 py-0.5 rounded',
                            children: 'response_format',
                          }),
                          t('参数并配合', ' parameter with'),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-2 py-0.5 rounded',
                            children: 'strict: true',
                          }),
                          t(
                            '来强制结构合规。',
                            ' to enforce schema compliance.',
                          ),
                        ],
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('请求格式', 'Request Format'),
                      }),
                      e.jsx(b, {
                        samples: [
                          {
                            label: 'JavaScript',
                            language: 'javascript',
                            code: `const response = await fetch('__DOCS_BASE_URL__/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'gpt-4o-2024-08-06',
    messages: [
      {
        role: 'user',
        content: 'Extract the key information from this text: "John Smith, age 30, works as a software engineer at TechCorp in San Francisco."'
      }
    ],
    response_format: {
      type: 'json_schema',
      json_schema: {
        name: 'person_info',
        strict: true,
        schema: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            age: { type: 'integer' },
            occupation: { type: 'string' },
            company: { type: 'string' },
            location: { type: 'string' }
          },
          required: ['name', 'age', 'occupation', 'company', 'location'],
          additionalProperties: false
        }
      }
    }
  })
});

const data = await response.json();
console.log(data.choices[0].message.content);`,
                          },
                          {
                            label: 'Python',
                            language: 'python',
                            code: `import requests

url = '__DOCS_BASE_URL__/v1/chat/completions'
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
}
payload = {
    'model': 'gpt-4o-2024-08-06',
    'messages': [
        {
            'role': 'user',
            'content': 'Extract the key information from this text: "John Smith, age 30, works as a software engineer at TechCorp in San Francisco."'
        }
    ],
    'response_format': {
        'type': 'json_schema',
        'json_schema': {
            'name': 'person_info',
            'strict': True,
            'schema': {
                'type': 'object',
                'properties': {
                    'name': {'type': 'string'},
                    'age': {'type': 'integer'},
                    'occupation': {'type': 'string'},
                    'company': {'type': 'string'},
                    'location': {'type': 'string'},
                },
                'required': ['name', 'age', 'occupation', 'company', 'location'],
                'additionalProperties': False,
            }
        }
    }
}

response = requests.post(url, headers=headers, json=payload)
data = response.json()
print(data['choices'][0]['message']['content'])`,
                          },
                        ],
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('响应示例', 'Response Example'),
                      }),
                      e.jsx(r, {
                        language: 'json',
                        code: {
                          id: 'chatcmpl-abc123',
                          object: 'chat.completion',
                          created: 1677652288,
                          model: 'gpt-4o-2024-08-06',
                          choices: [
                            {
                              index: 0,
                              message: {
                                role: 'assistant',
                                content:
                                  '{"name":"John Smith","age":30,"occupation":"software engineer","company":"TechCorp","location":"San Francisco"}',
                              },
                              finish_reason: 'stop',
                            },
                          ],
                        },
                      }),
                      e.jsx('div', {
                        className:
                          'bg-blue-50 border-l-4 border-blue-500 p-4 mt-4',
                        children: e.jsxs('p', {
                          className: 'text-sm text-blue-800',
                          children: [
                            e.jsx('strong', {
                              children: t('关键特性：', 'Key Features:'),
                            }),
                            ' ',
                            t('设置', 'Setting'),
                            ' ',
                            e.jsx('code', {
                              className: 'bg-gray-100 px-2 py-0.5 rounded',
                              children: 'additionalProperties: false',
                            }),
                            t(
                              '可防止模型输出多余字段；',
                              " ensures the model won't add unexpected fields. The",
                            ),
                            ' ',
                            e.jsx('code', {
                              className: 'bg-gray-100 px-2 py-0.5 rounded',
                              children: 'strict: true',
                            }),
                            t(
                              '会启用受约束解码，保证结构合规。',
                              ' flag activates constrained decoding for guaranteed compliance.',
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '2. Google Gemini 结构化输出',
                          '2. Google Gemini Structured Outputs',
                        ),
                      }),
                      e.jsxs('p', {
                        className: 'text-gray-700 mb-4',
                        children: [
                          t('Gemini 使用', 'Gemini uses the'),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-2 py-0.5 rounded',
                            children: 'generationConfig',
                          }),
                          t('配合', ' with a'),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-2 py-0.5 rounded',
                            children: 'responseSchema',
                          }),
                          t(
                            '参数定义输出结构。',
                            ' parameter to define output structure.',
                          ),
                        ],
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('请求格式', 'Request Format'),
                      }),
                      e.jsx(b, {
                        samples: [
                          {
                            label: 'JavaScript',
                            language: 'javascript',
                            code: `const response = await fetch('__DOCS_BASE_URL__/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    contents: [
      {
        role: 'user',
        parts: [
          {
            text: 'List 3 popular programming languages with their primary use cases'
          }
        ]
      }
    ],
    generationConfig: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            language: { type: 'string' },
            primary_use_case: { type: 'string' },
            difficulty_level: {
              type: 'string',
              enum: ['beginner', 'intermediate', 'advanced']
            }
          },
          required: ['language', 'primary_use_case', 'difficulty_level']
        }
      }
    }
  })
});

const data = await response.json();
console.log(data);`,
                          },
                          {
                            label: 'Python',
                            language: 'python',
                            code: `import requests

url = '__DOCS_BASE_URL__/v1beta/models/gemini-2.0-flash:generateContent'
params = {'key': 'YOUR_API_KEY'}
headers = {
    'Content-Type': 'application/json',
}
payload = {
    'contents': [
        {
            'role': 'user',
            'parts': [
                {
                    'text': 'List 3 popular programming languages with their primary use cases'
                }
            ]
        }
    ],
    'generationConfig': {
        'responseMimeType': 'application/json',
        'responseSchema': {
            'type': 'array',
            'items': {
                'type': 'object',
                'properties': {
                    'language': {'type': 'string'},
                    'primary_use_case': {'type': 'string'},
                    'difficulty_level': {
                        'type': 'string',
                        'enum': ['beginner', 'intermediate', 'advanced'],
                    },
                },
                'required': ['language', 'primary_use_case', 'difficulty_level'],
            }
        }
    }
}

response = requests.post(url, params=params, headers=headers, json=payload)
data = response.json()
print(data)`,
                          },
                        ],
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('关键特性', 'Key Features'),
                      }),
                      e.jsxs('ul', {
                        className: 'list-disc pl-6 space-y-2 text-gray-700',
                        children: [
                          e.jsx('li', {
                            children: t(
                              '原生支持枚举，限制字段可选值',
                              'Native support for enums to restrict values to specific options',
                            ),
                          }),
                          e.jsx('li', {
                            children: t(
                              '支持嵌套对象与复杂数组',
                              'Supports nested objects and arrays of complex types',
                            ),
                          }),
                          e.jsx('li', {
                            children: t(
                              '与 Gemini 多模态能力无缝协作',
                              "Works seamlessly with Gemini's multimodal capabilities",
                            ),
                          }),
                          e.jsxs('li', {
                            children: [
                              t('设置', 'Set'),
                              ' ',
                              e.jsx('code', {
                                className: 'bg-gray-100 px-2 py-0.5 rounded',
                                children: 'responseMimeType',
                              }),
                              ' ',
                              t(
                                '为 "application/json" 输出 JSON',
                                ' to "application/json" for JSON output',
                              ),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '3. Anthropic Claude 结构化输出',
                          '3. Anthropic Claude Structured Outputs',
                        ),
                      }),
                      e.jsxs('p', {
                        className: 'text-gray-700 mb-4',
                        children: [
                          t('Claude 通过', 'Claude uses the'),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-2 py-0.5 rounded',
                            children: 'output_format',
                          }),
                          t(
                            '参数启用结构化输出；组织开通权限后无需额外 beta header。',
                            ' parameter to enable structured outputs. Once your organization has access, no additional beta headers are required.',
                          ),
                        ],
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('请求格式', 'Request Format'),
                      }),
                      e.jsx(b, {
                        samples: [
                          {
                            label: 'JavaScript',
                            language: 'javascript',
                            code: `const response = await fetch('__DOCS_BASE_URL__/v1/messages', {
  method: 'POST',
  headers: {
    'x-api-key': 'YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'claude-sonnet-4.5-20251022',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: 'Analyze this product review and extract sentiment: "This laptop is amazing! Fast, reliable, and great battery life."'
      }
    ],
    output_format: {
      type: 'json_schema',
      json_schema: {
        name: 'sentiment_analysis',
        schema: {
          type: 'object',
          properties: {
            sentiment: {
              type: 'string',
              enum: ['positive', 'neutral', 'negative']
            },
            confidence: {
              type: 'number',
              minimum: 0,
              maximum: 1
            },
            key_phrases: {
              type: 'array',
              items: { type: 'string' }
            }
          },
          required: ['sentiment', 'confidence', 'key_phrases']
        }
      }
    }
  })
});

const data = await response.json();
// Response is in data.content[0].text as valid JSON
const result = JSON.parse(data.content[0].text);
console.log(result);`,
                          },
                          {
                            label: 'Python',
                            language: 'python',
                            code: `import json
import requests

url = '__DOCS_BASE_URL__/v1/messages'
headers = {
    'x-api-key': 'YOUR_API_KEY',
    'Content-Type': 'application/json',
}
payload = {
    'model': 'claude-sonnet-4.5-20251022',
    'max_tokens': 1024,
    'messages': [
        {
            'role': 'user',
            'content': 'Analyze this product review and extract sentiment: "This laptop is amazing! Fast, reliable, and great battery life."'
        }
    ],
    'output_format': {
        'type': 'json_schema',
        'json_schema': {
            'name': 'sentiment_analysis',
            'schema': {
                'type': 'object',
                'properties': {
                    'sentiment': {
                        'type': 'string',
                        'enum': ['positive', 'neutral', 'negative'],
                    },
                    'confidence': {
                        'type': 'number',
                        'minimum': 0,
                        'maximum': 1,
                    },
                    'key_phrases': {
                        'type': 'array',
                        'items': {'type': 'string'},
                    },
                },
                'required': ['sentiment', 'confidence', 'key_phrases'],
            }
        }
    }
}

response = requests.post(url, headers=headers, json=payload)
data = response.json()
result = json.loads(data['content'][0]['text'])
print(result)`,
                          },
                        ],
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('关键特性', 'Key Features'),
                      }),
                      e.jsxs('ul', {
                        className: 'list-disc pl-6 space-y-2 text-gray-700',
                        children: [
                          e.jsxs('li', {
                            children: [
                              e.jsx('strong', {
                                children: t(
                                  '受约束解码：',
                                  'Constrained Decoding:',
                                ),
                              }),
                              ' ',
                              t(
                                '将 JSON Schema 编译为语法规则进行 token 级校验',
                                'Compiles JSON schema into grammar for token-level validation',
                              ),
                            ],
                          }),
                          e.jsxs('li', {
                            children: [
                              e.jsx('strong', {
                                children: t('SDK 支持：', 'SDK Support:'),
                              }),
                              ' ',
                              t(
                                '支持 Python（Pydantic）与 TypeScript（Zod）集成',
                                'Python (Pydantic) and TypeScript (Zod) integration available',
                              ),
                            ],
                          }),
                          e.jsxs('li', {
                            children: [
                              e.jsx('strong', {
                                children: t(
                                  '严格工具参数：',
                                  'Strict Tool Use:',
                                ),
                              }),
                              ' ',
                              t('工具定义中加入', 'Add'),
                              ' ',
                              e.jsx('code', {
                                className: 'bg-gray-100 px-2 py-0.5 rounded',
                                children: 'strict: true',
                              }),
                              ' ',
                              t(
                                '以保证参数合规',
                                ' to tool definitions for guaranteed parameter compliance',
                              ),
                            ],
                          }),
                          e.jsxs('li', {
                            children: [
                              e.jsx('strong', {
                                children: t(
                                  '零解析错误：',
                                  'Zero Parsing Errors:',
                                ),
                              }),
                              ' ',
                              t(
                                '无需重试逻辑与额外校验代码',
                                'Eliminates need for retry logic and validation code',
                              ),
                            ],
                          }),
                        ],
                      }),
                      e.jsx('div', {
                        className:
                          'bg-amber-50 border-l-4 border-amber-400 p-4 mt-4',
                        children: e.jsxs('p', {
                          className: 'text-sm text-amber-800',
                          children: [
                            e.jsx('strong', {
                              children: t('要求：', 'Requirements:'),
                            }),
                            ' ',
                            t(
                              '需在控制台为组织启用结构化输出。授权后使用标准认证 header 即可。',
                              "Ensure Structured Outputs is enabled for your organization in the Console. Once access is granted, standard authentication headers are all that's required.",
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '4. OpenAI Responses API 结构化输出',
                          '4. OpenAI Responses API Structured Outputs',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          'Responses API（如 o3 等推理模型）使用不同的 format 参数结构来启用结构化输出。',
                          'The Responses API (for reasoning models like o3) uses a different format parameter structure for structured outputs.',
                        ),
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('请求格式', 'Request Format'),
                      }),
                      e.jsx(b, {
                        samples: [
                          {
                            label: 'JavaScript',
                            language: 'javascript',
                            code: `const response = await fetch('__DOCS_BASE_URL__/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'o3-mini-2025-01-31',
    input: 'Solve this math problem step by step: What is 15% of 240?',
    text: {
      format: {
        type: 'json_schema',
        schema: {
          type: 'object',
          properties: {
            problem: { type: 'string' },
            steps: {
              type: 'array',
              items: { type: 'string' }
            },
            final_answer: { type: 'number' }
          },
          required: ['problem', 'steps', 'final_answer']
        }
      }
    }
  })
});

const data = await response.json();
console.log(data);`,
                          },
                          {
                            label: 'Python',
                            language: 'python',
                            code: `import requests

url = '__DOCS_BASE_URL__/v1/responses'
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
}
payload = {
    'model': 'o3-mini-2025-01-31',
    'input': 'Solve this math problem step by step: What is 15% of 240?',
    'text': {
        'format': {
            'type': 'json_schema',
            'schema': {
                'type': 'object',
                'properties': {
                    'problem': {'type': 'string'},
                    'steps': {
                        'type': 'array',
                        'items': {'type': 'string'},
                    },
                    'final_answer': {'type': 'number'},
                },
                'required': ['problem', 'steps', 'final_answer'],
            }
        }
    }
}

response = requests.post(url, headers=headers, json=payload)
data = response.json()
print(data)`,
                          },
                        ],
                      }),
                      e.jsx('div', {
                        className:
                          'bg-blue-50 border-l-4 border-blue-500 p-4 mt-4',
                        children: e.jsxs('p', {
                          className: 'text-sm text-blue-800',
                          children: [
                            e.jsx('strong', { children: t('注意：', 'Note:') }),
                            ' ',
                            t(
                              'Responses API 的格式与 Chat Completions 不同，请使用',
                              'The Responses API format differs from standard Chat Completions. Use the',
                            ),
                            ' ',
                            e.jsx('code', {
                              className: 'bg-gray-100 px-2 py-0.5 rounded mx-1',
                              children: 'text.format',
                            }),
                            t('结构，而不是', ' structure instead of'),
                            ' ',
                            e.jsx('code', {
                              className: 'bg-gray-100 px-2 py-0.5 rounded mx-1',
                              children: 'response_format',
                            }),
                            t('。', '.'),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('常见场景', 'Common Use Cases'),
                      }),
                      e.jsxs('div', {
                        className: 'space-y-4',
                        children: [
                          e.jsxs('div', {
                            className:
                              'p-5 bg-gradient-to-r from-purple-50 to-transparent border-l-4 border-purple-500 rounded-r-lg',
                            children: [
                              e.jsxs('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: [
                                  '📊 ',
                                  t('数据抽取', 'Data Extraction'),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-700',
                                children: t(
                                  '从简历、发票、邮件、文档等非结构化文本中抽取结构化信息，并直接输出到数据库 Schema。',
                                  'Extract structured information from unstructured text—resumes, invoices, emails, documents—and output directly to your database schema.',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-5 bg-gradient-to-r from-blue-50 to-transparent border-l-4 border-blue-500 rounded-r-lg',
                            children: [
                              e.jsxs('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: [
                                  '🔧 ',
                                  t('函数参数', 'Function Arguments'),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-700',
                                children: t(
                                  '生成严格类型安全的函数参数，避免错误 JSON 影响 API 调用。',
                                  'Generate perfectly formatted function call parameters with guaranteed type safety. No more invalid JSON breaking your API calls.',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-5 bg-gradient-to-r from-green-50 to-transparent border-l-4 border-green-500 rounded-r-lg',
                            children: [
                              e.jsxs('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: [
                                  '📝 ',
                                  t('表单生成', 'Form Generation'),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-700',
                                children: t(
                                  '生成与 UI 组件完全匹配的动态表单数据，自动填充下拉、复选框与复杂嵌套表单。',
                                  'Create dynamic form data that matches your UI components exactly. Populate dropdowns, checkboxes, and complex nested forms without manual parsing.',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-5 bg-gradient-to-r from-orange-50 to-transparent border-l-4 border-orange-500 rounded-r-lg',
                            children: [
                              e.jsxs('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: [
                                  '🎯 ',
                                  t('分类任务', 'Classification Tasks'),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-700',
                                children: t(
                                  '将内容分类到预定义类别并返回置信度，结合枚举仅输出有效分类标签。',
                                  'Classify content into predefined categories with confidence scores. Use enums to restrict outputs to valid classification labels only.',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('最佳实践', 'Best Practices'),
                      }),
                      e.jsxs('div', {
                        className: 'space-y-4',
                        children: [
                          e.jsxs('div', {
                            className: 'flex gap-4',
                            children: [
                              e.jsx('div', {
                                className:
                                  'flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold',
                                children: '✓',
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h4', {
                                    className: 'font-bold text-gray-900',
                                    children: t(
                                      '显式声明必填字段',
                                      'Define Required Fields Explicitly',
                                    ),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-sm text-gray-600',
                                    children: t(
                                      '务必指定必填字段，防止模型遗漏关键数据。',
                                      'Always specify which fields are required. This prevents the model from omitting critical data points.',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className: 'flex gap-4',
                            children: [
                              e.jsx('div', {
                                className:
                                  'flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold',
                                children: '✓',
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h4', {
                                    className: 'font-bold text-gray-900',
                                    children: t(
                                      '用枚举限制取值',
                                      'Use Enums for Restricted Values',
                                    ),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-sm text-gray-600',
                                    children: t(
                                      '当输出必须属于指定集合（如状态码、分类）时，用枚举约束模型。',
                                      'When outputs should be one of a specific set of values (like status codes or categories), use enums to constrain the model.',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className: 'flex gap-4',
                            children: [
                              e.jsx('div', {
                                className:
                                  'flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold',
                                children: '✓',
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h4', {
                                    className: 'font-bold text-gray-900',
                                    children: t(
                                      '补充清晰字段说明',
                                      'Provide Clear Property Descriptions',
                                    ),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-sm text-gray-600',
                                    children: t(
                                      '为 schema 字段增加描述，帮助模型理解字段含义。',
                                      'Add descriptions to schema properties to help the model understand what each field should contain.',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className: 'flex gap-4',
                            children: [
                              e.jsx('div', {
                                className:
                                  'flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold',
                                children: '✗',
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h4', {
                                    className: 'font-bold text-gray-900',
                                    children: t(
                                      '避免过度复杂',
                                      "Don't Over-Complicate Schemas",
                                    ),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-sm text-gray-600',
                                    children: t(
                                      '尽量保持 schema 简洁。过深的嵌套结构会降低性能并增加延迟。',
                                      'Keep schemas as simple as possible. Deeply nested structures can reduce model performance and increase latency.',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('提供方对比', 'Provider Comparison'),
                      }),
                      e.jsx('div', {
                        className: 'overflow-x-auto',
                        children: e.jsxs('table', {
                          className: 'w-full text-left border-collapse',
                          children: [
                            e.jsx('thead', {
                              children: e.jsxs('tr', {
                                className: 'border-b-2 border-gray-300',
                                children: [
                                  e.jsx('th', {
                                    className:
                                      'py-3 px-4 font-semibold bg-gray-50',
                                    children: t('提供方', 'Provider'),
                                  }),
                                  e.jsx('th', {
                                    className:
                                      'py-3 px-4 font-semibold bg-gray-50',
                                    children: t('参数', 'Parameter'),
                                  }),
                                  e.jsx('th', {
                                    className:
                                      'py-3 px-4 font-semibold bg-gray-50',
                                    children: t(
                                      '访问要求',
                                      'Access Requirements',
                                    ),
                                  }),
                                  e.jsx('th', {
                                    className:
                                      'py-3 px-4 font-semibold bg-gray-50',
                                    children: t('SDK 支持', 'SDK Support'),
                                  }),
                                ],
                              }),
                            }),
                            e.jsxs('tbody', {
                              children: [
                                e.jsxs('tr', {
                                  className: 'border-b border-gray-200',
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: 'OpenAI Chat',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4 font-mono text-sm',
                                      children: 'response_format',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('无', 'None'),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        'Python、Node.js',
                                        'Python, Node.js',
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsxs('tr', {
                                  className: 'border-b border-gray-200',
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: 'Google Gemini',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4 font-mono text-sm',
                                      children: 'responseSchema',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('无', 'None'),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        'Python、Node.js、Java',
                                        'Python, Node.js, Java',
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsxs('tr', {
                                  className: 'border-b border-gray-200',
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: 'Claude',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4 font-mono text-sm',
                                      children: 'output_format',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '控制台开关（无需额外 header）',
                                        'Console toggle (no extra headers)',
                                      ),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        'Python（Pydantic）、TS（Zod）',
                                        'Python (Pydantic), TS (Zod)',
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsxs('tr', {
                                  className: 'border-b border-gray-200',
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: 'OpenAI Responses',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4 font-mono text-sm',
                                      children: 'text.format',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('无', 'None'),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        'Python、Node.js',
                                        'Python, Node.js',
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    className:
                      'mt-10 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100',
                    children: [
                      e.jsx('h3', {
                        className: 'text-xl font-bold text-gray-900 mb-3',
                        children: t(
                          '从 JSON 模式迁移',
                          'Migrating from JSON Mode',
                        ),
                      }),
                      e.jsxs('p', {
                        className: 'text-gray-700 mb-3',
                        children: [
                          t(
                            '如果你仍在使用基础 JSON 模式（',
                            "If you're currently using basic JSON mode (",
                          ),
                          ' ',
                          e.jsxs('code', {
                            className: 'bg-gray-100 px-2 py-0.5 rounded',
                            children: [
                              'response_format: ',
                              "{type: 'json_object'}",
                            ],
                          }),
                          t(
                            '），升级到结构化输出将获得：',
                            '), upgrading to Structured Outputs provides:',
                          ),
                        ],
                      }),
                      e.jsxs('ul', {
                        className: 'list-disc pl-6 space-y-1 text-gray-700',
                        children: [
                          e.jsx('li', {
                            children: t(
                              '保证结构合规（不再有校验错误）',
                              'Guaranteed schema compliance (no more validation errors)',
                            ),
                          }),
                          e.jsx('li', {
                            children: t(
                              '生成时类型安全',
                              'Type safety at generation time',
                            ),
                          }),
                          e.jsx('li', {
                            children: t(
                              '无需为错误 JSON 编写重试逻辑',
                              'Elimination of retry logic for malformed responses',
                            ),
                          }),
                          e.jsx('li', {
                            children: t(
                              '更好地集成强类型语言',
                              'Better integration with strongly-typed languages',
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      case 'thinking-mode':
        return e.jsx(u, {
          title: t('思考模式与扩展推理', 'Thinking Mode & Extended Reasoning'),
          content: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', {
                className: 'lead text-xl text-gray-600 mb-8',
                children: t(
                  '让模型在回答前进行深度思考。思考模式允许推理模型投入更多算力分析复杂问题，在数学、编程与逻辑推理任务上显著提升表现。',
                  'Enable AI models to think deeply before responding. Thinking mode allows reasoning models to spend more computational time analyzing complex problems, leading to significantly better performance on math, coding, and logical reasoning tasks.',
                ),
              }),
              e.jsxs('div', {
                className: 'space-y-10',
                children: [
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('概览', 'Overview'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '思考模式（也称扩展推理或测试时算力）让模型在生成回答前进行额外“思考”。与一次前向即输出的常规模型不同，推理模型会进行内部推演、探索多条解题路径并自我纠错。',
                          'Thinking mode, also known as extended reasoning or test-time compute, is a capability in advanced AI models that allows them to spend additional computational resources "thinking" about a problem before generating a response. Unlike standard models that generate responses in a single forward pass, reasoning models can perform internal deliberation, explore multiple solution paths, and self-correct their reasoning.',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700',
                        children: t(
                          '这对需要多步推理、数学求解、复杂编程与逻辑分析的任务尤其有效。以延迟换质量，可在困难问题上获得显著提升。',
                          'This approach is particularly effective for tasks requiring multi-step reasoning, mathematical problem-solving, complex coding challenges, and logical analysis. By trading latency for quality, you can achieve dramatically better results on difficult problems.',
                        ),
                      }),
                    ],
                  }),
                  e.jsx('div', {
                    className: 'bg-purple-50 border-l-4 border-purple-400 p-4',
                    children: e.jsxs('p', {
                      className: 'text-sm text-purple-800',
                      children: [
                        e.jsx('strong', {
                          children: t('关键洞察：', 'Key Insight:'),
                        }),
                        ' ',
                        t(
                          '思考时间越多，表现越好。研究显示推理模型存在“算力越多，性能越好”的尺度规律，允许更长思考即可持续提升效果。',
                          `More thinking time = better performance. Studies show reasoning models exhibit a "more compute = better performance" scaling trend, with performance continuing to improve as they're allowed to think longer.`,
                        ),
                      ],
                    }),
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '支持的模型与提供方',
                          'Supported Models & Providers',
                        ),
                      }),
                      e.jsxs('div', {
                        className: 'grid grid-cols-1 md:grid-cols-2 gap-4',
                        children: [
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: t(
                                  'OpenAI 推理模型',
                                  'OpenAI Reasoning Models',
                                ),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '模型：o1、o3、o3-mini、o4-mini',
                                  'Models: o1, o3, o3-mini, o4-mini',
                                ),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600 mt-1',
                                children: t(
                                  '控制：reasoning_effort 参数',
                                  'Control: reasoning_effort parameter',
                                ),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-500 mt-2 text-xs',
                                children: t(
                                  '档位：low / medium / high',
                                  'Effort levels: low, medium, high',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: t(
                                  'Anthropic Claude 扩展思考',
                                  'Anthropic Claude Extended Thinking',
                                ),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '模型：Claude 3.7 Sonnet、Claude 4',
                                  'Models: Claude 3.7 Sonnet, Claude 4',
                                ),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600 mt-1',
                                children: t(
                                  '控制：thinking budget（token 分配）',
                                  'Control: thinking budget (token allocation)',
                                ),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-500 mt-2 text-xs',
                                children: t(
                                  '预算：1,024+ thinking tokens',
                                  'Budget: 1,024+ thinking tokens',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: t(
                                  'Google Gemini 思考模式',
                                  'Google Gemini Thinking',
                                ),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '模型：Gemini 3 Pro、Gemini 2.5',
                                  'Models: Gemini 3 Pro, Gemini 2.5',
                                ),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600 mt-1',
                                children: t(
                                  '控制：thinkingLevel 参数',
                                  'Control: thinkingLevel parameter',
                                ),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-500 mt-2 text-xs',
                                children: t(
                                  '档位：low / high / deep think',
                                  'Levels: low, high, deep think mode',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: 'OpenAI Responses API',
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '模型：o3-mini、o3-pro（/v1/responses）',
                                  'Models: o3-mini, o3-pro (via /v1/responses)',
                                ),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600 mt-1',
                                children: t(
                                  '控制：请求中的 reasoning_effort',
                                  'Control: reasoning_effort in request',
                                ),
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-500 mt-2 text-xs',
                                children: t(
                                  '适合批量推理',
                                  'Optimized for batch reasoning',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '1. OpenAI 推理模型',
                          '1. OpenAI Reasoning Models',
                        ),
                      }),
                      e.jsxs('p', {
                        className: 'text-gray-700 mb-4',
                        children: [
                          t(
                            'OpenAI 的 o 系列模型（o1、o3、o4-mini）使用',
                            "OpenAI's o-series models (o1, o3, o4-mini) use the",
                          ),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-2 py-0.5 rounded',
                            children: 'reasoning_effort',
                          }),
                          t(
                            '参数控制思考的计算投入。',
                            ' parameter to control how much computational time the model spends thinking.',
                          ),
                        ],
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('请求格式', 'Request Format'),
                      }),
                      e.jsx(b, {
                        samples: [
                          {
                            label: 'JavaScript',
                            language: 'javascript',
                            code: `const response = await fetch('__DOCS_BASE_URL__/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'o3-mini',
    messages: [
      {
        role: 'user',
        content: 'Solve this complex math problem: If a train leaves Station A at 60 mph heading east, and another train leaves Station B (200 miles east of A) at 40 mph heading west, when and where will they meet?'
      }
    ],
    reasoning_effort: 'high' // Options: 'low', 'medium', 'high'
  })
});

const data = await response.json();
console.log(data.choices[0].message.content);`,
                          },
                          {
                            label: 'Python',
                            language: 'python',
                            code: `import requests

url = '__DOCS_BASE_URL__/v1/chat/completions'
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
}
payload = {
    'model': 'o3-mini',
    'messages': [
        {
            'role': 'user',
            'content': 'Solve this complex math problem: If a train leaves Station A at 60 mph heading east, and another train leaves Station B (200 miles east of A) at 40 mph heading west, when and where will they meet?'
        }
    ],
    'reasoning_effort': 'high',  # Options: 'low', 'medium', 'high'
}

response = requests.post(url, headers=headers, json=payload)
data = response.json()
print(data['choices'][0]['message']['content'])`,
                          },
                        ],
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('思考档位分配', 'Effort Level Allocations'),
                      }),
                      e.jsx('div', {
                        className: 'overflow-x-auto',
                        children: e.jsxs('table', {
                          className: 'w-full text-left border-collapse mt-4',
                          children: [
                            e.jsx('thead', {
                              children: e.jsxs('tr', {
                                className:
                                  'border-b-2 border-gray-300 bg-gray-50',
                                children: [
                                  e.jsx('th', {
                                    className: 'py-3 px-4 font-semibold',
                                    children: t('档位', 'Effort Level'),
                                  }),
                                  e.jsx('th', {
                                    className: 'py-3 px-4 font-semibold',
                                    children: t(
                                      '推理 token 分配',
                                      'Reasoning Token Allocation',
                                    ),
                                  }),
                                  e.jsx('th', {
                                    className: 'py-3 px-4 font-semibold',
                                    children: t('适用场景', 'Best For'),
                                  }),
                                ],
                              }),
                            }),
                            e.jsxs('tbody', {
                              children: [
                                e.jsxs('tr', {
                                  className: 'border-b border-gray-200',
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4 font-mono text-sm',
                                      children: 'low',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '约为 max_tokens 的 20%',
                                        '~20% of max_tokens',
                                      ),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '简单推理、响应更快',
                                        'Simple reasoning, faster responses',
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsxs('tr', {
                                  className: 'border-b border-gray-200',
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4 font-mono text-sm',
                                      children: 'medium',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '约为 max_tokens 的 50%',
                                        '~50% of max_tokens',
                                      ),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '中等复杂问题',
                                        'Moderate complexity problems',
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsxs('tr', {
                                  className: 'border-b border-gray-200',
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4 font-mono text-sm',
                                      children: 'high',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '约为 max_tokens 的 80%',
                                        '~80% of max_tokens',
                                      ),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '复杂问题、最高质量',
                                        'Complex problems, maximum quality',
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      e.jsx('div', {
                        className:
                          'bg-blue-50 border-l-4 border-blue-500 p-4 mt-4',
                        children: e.jsxs('p', {
                          className: 'text-sm text-blue-800',
                          children: [
                            e.jsx('strong', {
                              children: t('Token 用量：', 'Token Usage:'),
                            }),
                            ' ',
                            t(
                              '推理 token 与输出 token 分开计数，可在响应中的',
                              'Reasoning tokens are separate from output tokens. Check',
                            ),
                            ' ',
                            e.jsx('code', {
                              className: 'bg-gray-100 px-2 py-0.5 rounded mx-1',
                              children: 'usage.reasoning_tokens',
                            }),
                            t(
                              '查看内部思考消耗。',
                              ' in the response to see how many tokens were spent on internal thinking.',
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '2. Anthropic Claude 扩展思考',
                          '2. Anthropic Claude Extended Thinking',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          'Claude 的扩展思考允许设置“思考预算”，控制模型在生成最终回答前用于内部推理的 token 数量。',
                          `Claude's extended thinking feature allows you to set a "thinking budget" that controls how many tokens the model can use for internal reasoning before generating its final response.`,
                        ),
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('请求格式', 'Request Format'),
                      }),
                      e.jsx(b, {
                        samples: [
                          {
                            label: 'JavaScript',
                            language: 'javascript',
                            code: `const response = await fetch('__DOCS_BASE_URL__/v1/messages', {
  method: 'POST',
  headers: {
    'x-api-key': 'YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'claude-3-7-sonnet-20250219',
    max_tokens: 16000,
    thinking: {
      type: 'enabled',
      budget_tokens: 10000 // Minimum: 1024, adjust based on problem complexity
    },
    messages: [
      {
        role: 'user',
        content: 'Explain the proof of Fermat's Last Theorem in detail, including historical context and key mathematical insights.'
      }
    ]
  })
});

const data = await response.json();
console.log(data);`,
                          },
                          {
                            label: 'Python',
                            language: 'python',
                            code: `import requests

url = '__DOCS_BASE_URL__/v1/messages'
headers = {
    'x-api-key': 'YOUR_API_KEY',
    'Content-Type': 'application/json',
}
payload = {
    'model': 'claude-3-7-sonnet-20250219',
    'max_tokens': 16000,
    'thinking': {
        'type': 'enabled',
        'budget_tokens': 10000,  # Minimum: 1024
    },
    'messages': [
        {
            'role': 'user',
            'content': "Explain the proof of Fermat's Last Theorem in detail, including historical context and key mathematical insights."
        }
    ]
}

response = requests.post(url, headers=headers, json=payload)
data = response.json()
print(data)`,
                          },
                        ],
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('关键特性', 'Key Features'),
                      }),
                      e.jsxs('ul', {
                        className: 'list-disc pl-6 space-y-2 text-gray-700',
                        children: [
                          e.jsxs('li', {
                            children: [
                              e.jsx('strong', {
                                children: t('可见思考：', 'Visible Thinking:'),
                              }),
                              ' ',
                              t(
                                '内部思考以独立内容块呈现，便于查看推理过程',
                                "Claude's internal thought process is exposed as a separate content block, letting you see how it reasoned through the problem",
                              ),
                            ],
                          }),
                          e.jsxs('li', {
                            children: [
                              e.jsx('strong', {
                                children: t('预算灵活：', 'Flexible Budgets:'),
                              }),
                              ' ',
                              t(
                                '从最少 1,024 tokens 起步并逐步上调，找到合适区间',
                                'Start with minimum 1,024 tokens and increase incrementally to find optimal range for your use case',
                              ),
                            ],
                          }),
                          e.jsxs('li', {
                            children: [
                              e.jsx('strong', {
                                children: t(
                                  '串行思考：',
                                  'Serial Test-Time Compute:',
                                ),
                              }),
                              ' ',
                              t(
                                '在输出前进行多轮顺序推理',
                                'Uses multiple sequential reasoning steps before producing final output',
                              ),
                            ],
                          }),
                          e.jsxs('li', {
                            children: [
                              e.jsx('strong', {
                                children: t(
                                  '交错思考：',
                                  'Interleaved Thinking:',
                                ),
                              }),
                              ' ',
                              t(
                                'Claude 4 可在工具调用之间思考以提升复杂推理能力',
                                'With Claude 4, thinking can occur between tool calls for more sophisticated reasoning',
                              ),
                            ],
                          }),
                        ],
                      }),
                      e.jsx('div', {
                        className:
                          'bg-amber-50 border-l-4 border-amber-400 p-4 mt-4',
                        children: e.jsxs('p', {
                          className: 'text-sm text-amber-800',
                          children: [
                            e.jsx('strong', {
                              children: t('性能表现：', 'Performance:'),
                            }),
                            ' ',
                            t(
                              '在 GPQA 物理等复杂任务上，Claude 3.7 的扩展思考可达 96.5% 准确率，显著优于常规推理。',
                              'On complex tasks like GPQA physics problems, Claude 3.7 with extended thinking achieves 96.5% accuracy, significantly outperforming standard inference.',
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '3. Google Gemini 思考模式',
                          '3. Google Gemini Thinking Mode',
                        ),
                      }),
                      e.jsxs('p', {
                        className: 'text-gray-700 mb-4',
                        children: [
                          t('Gemini 通过', 'Gemini uses the'),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-2 py-0.5 rounded',
                            children: 'thinkingLevel',
                          }),
                          t(
                            '参数启用动态或深度思考；Deep Think 模式会并行推理多种假设。',
                            ' parameter to enable dynamic or deep thinking. The Deep Think mode uses parallel reasoning to explore multiple hypotheses simultaneously.',
                          ),
                        ],
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('请求格式', 'Request Format'),
                      }),
                      e.jsx(b, {
                        samples: [
                          {
                            label: 'JavaScript',
                            language: 'javascript',
                            code: `const response = await fetch('__DOCS_BASE_URL__/v1beta/models/gemini-3-pro:generateContent?key=YOUR_API_KEY', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    contents: [
      {
        role: 'user',
        parts: [
          {
            text: 'Design an efficient algorithm to find the shortest path in a weighted graph with negative edge weights but no negative cycles.'
          }
        ]
      }
    ],
    generationConfig: {
      thinkingLevel: 'high' // Options: 'low', 'high', or omit for dynamic
    }
  })
});

const data = await response.json();
console.log(data);`,
                          },
                          {
                            label: 'Python',
                            language: 'python',
                            code: `import requests

url = '__DOCS_BASE_URL__/v1beta/models/gemini-3-pro:generateContent'
params = {'key': 'YOUR_API_KEY'}
headers = {
    'Content-Type': 'application/json',
}
payload = {
    'contents': [
        {
            'role': 'user',
            'parts': [
                {
                    'text': 'Design an efficient algorithm to find the shortest path in a weighted graph with negative edge weights but no negative cycles.'
                }
            ]
        }
    ],
    'generationConfig': {
        'thinkingLevel': 'high',  # Options: 'low', 'high', or omit for dynamic
    }
}

response = requests.post(url, params=params, headers=headers, json=payload)
data = response.json()
print(data)`,
                          },
                        ],
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('思考档位', 'Thinking Levels'),
                      }),
                      e.jsx('div', {
                        className: 'overflow-x-auto',
                        children: e.jsxs('table', {
                          className: 'w-full text-left border-collapse mt-4',
                          children: [
                            e.jsx('thead', {
                              children: e.jsxs('tr', {
                                className:
                                  'border-b-2 border-gray-300 bg-gray-50',
                                children: [
                                  e.jsx('th', {
                                    className: 'py-3 px-4 font-semibold',
                                    children: t('档位', 'Thinking Level'),
                                  }),
                                  e.jsx('th', {
                                    className: 'py-3 px-4 font-semibold',
                                    children: t(
                                      '推理行为',
                                      'Reasoning Behavior',
                                    ),
                                  }),
                                  e.jsx('th', {
                                    className: 'py-3 px-4 font-semibold',
                                    children: t('推荐场景', 'Recommended Use'),
                                  }),
                                ],
                              }),
                            }),
                            e.jsxs('tbody', {
                              children: [
                                e.jsxs('tr', {
                                  className: 'border-b border-gray-200',
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4 font-mono text-sm',
                                      children: 'dynamic',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '根据提示复杂度自动调整推理强度。',
                                        'Automatically adjusts reasoning effort based on prompt complexity.',
                                      ),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '默认选择，平衡质量、成本与延迟。',
                                        'Default choice that balances quality, cost, and latency.',
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsxs('tr', {
                                  className: 'border-b border-gray-200',
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4 font-mono text-sm',
                                      children: 'low',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '最小推理开销，响应最快。',
                                        'Minimal reasoning overhead for the fastest responses.',
                                      ),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '简单问题、轻量代码或对延迟敏感流程。',
                                        'Simple queries, lightweight coding, or latency-critical flows.',
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsxs('tr', {
                                  className: 'border-b border-gray-200',
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4 font-mono text-sm',
                                      children: 'high',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '延长推理，以准确性优先。',
                                        'Extended reasoning that prioritizes accuracy over speed.',
                                      ),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '复杂问题或需要深度思考的分析。',
                                        'Complex problems or analyses that benefit from deeper chains of thought.',
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsxs('tr', {
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4 font-mono text-sm',
                                      children: 'deep think',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '并行推理多个假设，结合 RL 引导优化。',
                                        'Parallel reasoning exploring multiple hypotheses with RL-guided optimization.',
                                      ),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        'Gemini AI Ultra 用户在最难问题中优先质量胜过延迟。',
                                        'Gemini AI Ultra subscribers tackling the hardest problems where quality outweighs latency.',
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '4. OpenAI Responses API',
                          '4. OpenAI Responses API',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          'Responses API 提供推理模型的替代接口，面向批处理与结构化推理任务优化。',
                          'The Responses API provides an alternative interface for reasoning models, optimized for batch processing and structured reasoning tasks.',
                        ),
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-6',
                        children: t('请求格式', 'Request Format'),
                      }),
                      e.jsx(b, {
                        samples: [
                          {
                            label: 'JavaScript',
                            language: 'javascript',
                            code: `const response = await fetch('__DOCS_BASE_URL__/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'o3-mini-2025-01-31',
    input: 'Write a recursive function to calculate Fibonacci numbers with memoization, then analyze its time and space complexity.',
    reasoning_effort: 'medium'
  })
});

const data = await response.json();
console.log(data);`,
                          },
                          {
                            label: 'Python',
                            language: 'python',
                            code: `import requests

url = '__DOCS_BASE_URL__/v1/responses'
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
}
payload = {
    'model': 'o3-mini-2025-01-31',
    'input': 'Write a recursive function to calculate Fibonacci numbers with memoization, then analyze its time and space complexity.',
    'reasoning_effort': 'medium',
}

response = requests.post(url, headers=headers, json=payload)
data = response.json()
print(data)`,
                          },
                        ],
                      }),
                      e.jsx('div', {
                        className:
                          'bg-blue-50 border-l-4 border-blue-500 p-4 mt-4',
                        children: e.jsxs('p', {
                          className: 'text-sm text-blue-800',
                          children: [
                            e.jsx('strong', {
                              children: t(
                                '批处理优化：',
                                'Batch Optimization:',
                              ),
                            }),
                            ' ',
                            t(
                              'Responses API 面向批量推理场景，可高效处理多个复杂问题，并与 Chat Completions 共用 reasoning_effort 档位。',
                              'The Responses API is designed for batch reasoning tasks where you need to process multiple complex problems efficiently. It shares the same reasoning_effort levels as Chat Completions.',
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '何时使用思考模式',
                          'When to Use Thinking Mode',
                        ),
                      }),
                      e.jsxs('div', {
                        className: 'space-y-4',
                        children: [
                          e.jsxs('div', {
                            className:
                              'p-5 bg-gradient-to-r from-indigo-50 to-transparent border-l-4 border-indigo-500 rounded-r-lg',
                            children: [
                              e.jsxs('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: [
                                  '🧮 ',
                                  t('复杂数学', 'Complex Mathematics'),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-700',
                                children: t(
                                  '多步证明、高等微积分、组合数学与优化问题在扩展推理下收益巨大。',
                                  'Multi-step proofs, advanced calculus, combinatorics, and mathematical optimization problems benefit enormously from extended reasoning.',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-5 bg-gradient-to-r from-blue-50 to-transparent border-l-4 border-blue-500 rounded-r-lg',
                            children: [
                              e.jsxs('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: [
                                  '💻 ',
                                  t(
                                    '高级编程挑战',
                                    'Advanced Coding Challenges',
                                  ),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-700',
                                children: t(
                                  '算法设计、复杂调试、架构决策与性能优化在思考模式下提升显著。',
                                  'Algorithm design, debugging complex code, architectural decisions, and performance optimization tasks see dramatic improvement with thinking mode.',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-5 bg-gradient-to-r from-green-50 to-transparent border-l-4 border-green-500 rounded-r-lg',
                            children: [
                              e.jsxs('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: [
                                  '🔬 ',
                                  t('科学推理', 'Scientific Reasoning'),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-700',
                                children: t(
                                  '物理题、化学分析、生物研究问题与跨学科科学推理等需要深度领域知识的场景。',
                                  'Physics problems, chemistry analysis, biology research questions, and interdisciplinary scientific queries requiring deep domain knowledge.',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-5 bg-gradient-to-r from-purple-50 to-transparent border-l-4 border-purple-500 rounded-r-lg',
                            children: [
                              e.jsxs('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: [
                                  '🎯 ',
                                  t('战略规划', 'Strategic Planning'),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-700',
                                children: t(
                                  '商业战略、博弈分析、风险评估与不确定条件下的决策，需要充分权衡时尤为适用。',
                                  'Business strategy, game theory analysis, risk assessment, and decision-making under uncertainty where thorough consideration is critical.',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('最佳实践', 'Best Practices'),
                      }),
                      e.jsxs('div', {
                        className: 'space-y-4',
                        children: [
                          e.jsxs('div', {
                            className: 'flex gap-4',
                            children: [
                              e.jsx('div', {
                                className:
                                  'flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold',
                                children: '✓',
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h4', {
                                    className: 'font-bold text-gray-900',
                                    children: t(
                                      '从较低档位开始',
                                      'Start with Lower Effort Levels',
                                    ),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-sm text-gray-600',
                                    children: t(
                                      '先从 low/medium 开始，仅在结果不足时再提高；档位越高成本与延迟越高。',
                                      'Begin with low/medium effort and increase only if results are insufficient. Higher thinking = higher cost and latency.',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className: 'flex gap-4',
                            children: [
                              e.jsx('div', {
                                className:
                                  'flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold',
                                children: '✓',
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h4', {
                                    className: 'font-bold text-gray-900',
                                    children: t(
                                      '提供清晰题面',
                                      'Provide Clear Problem Context',
                                    ),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-sm text-gray-600',
                                    children: t(
                                      '给推理模型完整题述；相比闲聊式上下文，它更擅长自包含的问题。',
                                      'Give reasoning models complete problem statements. Unlike chat models, they perform better with self-contained questions rather than conversational context.',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className: 'flex gap-4',
                            children: [
                              e.jsx('div', {
                                className:
                                  'flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold',
                                children: '✓',
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h4', {
                                    className: 'font-bold text-gray-900',
                                    children: t(
                                      '监控推理 token',
                                      'Monitor Reasoning Token Usage',
                                    ),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-sm text-gray-600',
                                    children: t(
                                      '观察响应中的 reasoning_tokens 以了解成本。有些问题可能消耗满额度但收益有限。',
                                      'Track reasoning_tokens in responses to understand cost. Some problems may use maximum allocated thinking tokens without proportional benefit.',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className: 'flex gap-4',
                            children: [
                              e.jsx('div', {
                                className:
                                  'flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold',
                                children: '✗',
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h4', {
                                    className: 'font-bold text-gray-900',
                                    children: t(
                                      '避免用于简单问题',
                                      "Don't Use for Simple Queries",
                                    ),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-sm text-gray-600',
                                    children: t(
                                      '思考模式会显著增加延迟。简单问题、事实查询或轻量分类建议用普通模型。',
                                      'Thinking mode adds significant latency. For straightforward questions, factual lookup, or simple classification, standard models are faster and more cost-effective.',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('性能影响', 'Performance Impact'),
                      }),
                      e.jsxs('div', {
                        className:
                          'bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200',
                        children: [
                          e.jsx('h3', {
                            className: 'text-xl font-bold text-gray-900 mb-4',
                            children: t('基准结果', 'Benchmark Results'),
                          }),
                          e.jsxs('div', {
                            className: 'space-y-3',
                            children: [
                              e.jsxs('div', {
                                children: [
                                  e.jsxs('div', {
                                    className:
                                      'flex justify-between items-center mb-1',
                                    children: [
                                      e.jsx('span', {
                                        className:
                                          'text-sm font-semibold text-gray-700',
                                        children: t(
                                          'GPQA（研究生级科学）',
                                          'GPQA (Graduate-Level Science)',
                                        ),
                                      }),
                                      e.jsx('span', {
                                        className:
                                          'text-sm font-bold text-green-600',
                                        children: t(
                                          '提升 40%',
                                          '+40% improvement',
                                        ),
                                      }),
                                    ],
                                  }),
                                  e.jsx('div', {
                                    className: 'text-xs text-gray-600',
                                    children: t(
                                      '标准：56.8% → 扩展思考：96.5%',
                                      'Standard: 56.8% → Extended Thinking: 96.5%',
                                    ),
                                  }),
                                ],
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsxs('div', {
                                    className:
                                      'flex justify-between items-center mb-1',
                                    children: [
                                      e.jsx('span', {
                                        className:
                                          'text-sm font-semibold text-gray-700',
                                        children: t(
                                          'Codeforces 评分（竞赛编程）',
                                          'Codeforces Rating (Competitive Programming)',
                                        ),
                                      }),
                                      e.jsx('span', {
                                        className:
                                          'text-sm font-bold text-blue-600',
                                        children: t(
                                          '提升 400 分',
                                          '+400 points',
                                        ),
                                      }),
                                    ],
                                  }),
                                  e.jsx('div', {
                                    className: 'text-xs text-gray-600',
                                    children: t(
                                      '标准：1400 → 高推理：1800+',
                                      'Standard: 1400 → High Reasoning: 1800+',
                                    ),
                                  }),
                                ],
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsxs('div', {
                                    className:
                                      'flex justify-between items-center mb-1',
                                    children: [
                                      e.jsx('span', {
                                        className:
                                          'text-sm font-semibold text-gray-700',
                                        children: 'LMArena Leaderboard',
                                      }),
                                      e.jsx('span', {
                                        className:
                                          'text-sm font-bold text-purple-600',
                                        children: '1501 Elo (Gemini 3)',
                                      }),
                                    ],
                                  }),
                                  e.jsx('div', {
                                    className: 'text-xs text-gray-600',
                                    children: t(
                                      '最先进的推理表现',
                                      'State-of-the-art reasoning performance',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('提供方对比', 'Provider Comparison'),
                      }),
                      e.jsx('div', {
                        className: 'overflow-x-auto',
                        children: e.jsxs('table', {
                          className: 'w-full text-left border-collapse',
                          children: [
                            e.jsx('thead', {
                              children: e.jsxs('tr', {
                                className: 'border-b-2 border-gray-300',
                                children: [
                                  e.jsx('th', {
                                    className:
                                      'py-3 px-4 font-semibold bg-gray-50',
                                    children: t('提供方', 'Provider'),
                                  }),
                                  e.jsx('th', {
                                    className:
                                      'py-3 px-4 font-semibold bg-gray-50',
                                    children: t('参数', 'Parameter'),
                                  }),
                                  e.jsx('th', {
                                    className:
                                      'py-3 px-4 font-semibold bg-gray-50',
                                    children: t(
                                      '思考可见性',
                                      'Thinking Visibility',
                                    ),
                                  }),
                                  e.jsx('th', {
                                    className:
                                      'py-3 px-4 font-semibold bg-gray-50',
                                    children: t(
                                      '控制粒度',
                                      'Control Granularity',
                                    ),
                                  }),
                                ],
                              }),
                            }),
                            e.jsxs('tbody', {
                              children: [
                                e.jsxs('tr', {
                                  className: 'border-b border-gray-200',
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: 'OpenAI o-series',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4 font-mono text-sm',
                                      children: 'reasoning_effort',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '隐藏（仅 token 数）',
                                        'Hidden (token count only)',
                                      ),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('3 档', '3 levels'),
                                    }),
                                  ],
                                }),
                                e.jsxs('tr', {
                                  className: 'border-b border-gray-200',
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: 'Claude Extended',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4 font-mono text-sm',
                                      children: 'thinking.budget_tokens',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '可见（完整过程）',
                                        'Visible (full process)',
                                      ),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '细粒度（token 级）',
                                        'Fine-grained (token-level)',
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsxs('tr', {
                                  className: 'border-b border-gray-200',
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: 'Google Gemini',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4 font-mono text-sm',
                                      children: 'thinkingLevel',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '部分可见',
                                        'Partially visible',
                                      ),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '动态 + 2 档',
                                        'Dynamic + 2 levels',
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsxs('tr', {
                                  className: 'border-b border-gray-200',
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: 'OpenAI Responses',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4 font-mono text-sm',
                                      children: 'reasoning_effort',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '隐藏（仅 token 数）',
                                        'Hidden (token count only)',
                                      ),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('3 档', '3 levels'),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      case 'multimodal-input':
        return e.jsx(u, {
          title: t('多模态输入', 'Multimodal Input'),
          content: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', {
                className: 'lead text-xl text-gray-600 mb-8',
                children: t(
                  '在文本之外处理图片、视频与文档。多模态输入让模型理解视觉内容、解析视频并从 PDF 提取信息，开启计算机视觉、文档处理与多媒体分析能力。',
                  'Process images, videos, and documents alongside text. Multimodal input allows AI models to analyze visual content, understand videos, and extract information from PDFs—unlocking powerful capabilities for computer vision, document processing, and multimedia analysis.',
                ),
              }),
              e.jsxs('div', {
                className: 'space-y-10',
                children: [
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('概览', 'Overview'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '多模态模型可处理文本之外的多种输入，包括图片、视频、音频与文档。这让视觉问答、文档分析、视频理解与复杂多媒体推理成为可能。',
                          "Multimodal AI models can process and understand multiple types of input beyond text, including images, videos, audio, and documents. This enables applications like visual question answering, document analysis, video understanding, and complex multimedia reasoning that weren't possible with text-only models.",
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700',
                        children: t(
                          '不同提供方的多模态能力深浅不一，从基础图像理解到高级视频分析与带版式理解的 PDF 处理。了解能力差异有助于选型。',
                          "Different providers offer varying levels of multimodal support, from basic image understanding to advanced video analysis and PDF processing with layout comprehension. Understanding each provider's capabilities helps you choose the right model for your specific use case.",
                        ),
                      }),
                    ],
                  }),
                  e.jsx('div', {
                    className: 'bg-indigo-50 border-l-4 border-indigo-400 p-4',
                    children: e.jsxs('p', {
                      className: 'text-sm text-indigo-800',
                      children: [
                        e.jsx('strong', {
                          children: t('原生多模态：', 'Native Multimodal:'),
                        }),
                        ' ',
                        t(
                          'GPT-4o、Claude 3.7、Gemini 3 等模型从训练之初即支持多模态，视觉与文本理解能无缝融合，而非外挂式图像处理。',
                          'Modern models like GPT-4o, Claude 3.7, and Gemini 3 are trained from the ground up to be multimodal, allowing seamless integration of visual and textual understanding—not just bolted-on image processing.',
                        ),
                      ],
                    }),
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('能力矩阵', 'Capability Matrix'),
                      }),
                      e.jsx('div', {
                        className: 'overflow-x-auto',
                        children: e.jsxs('table', {
                          className: 'w-full text-left border-collapse',
                          children: [
                            e.jsx('thead', {
                              children: e.jsxs('tr', {
                                className:
                                  'border-b-2 border-gray-300 bg-gray-50',
                                children: [
                                  e.jsx('th', {
                                    className: 'py-3 px-4 font-semibold',
                                    children: t('提供方', 'Provider'),
                                  }),
                                  e.jsx('th', {
                                    className: 'py-3 px-4 font-semibold',
                                    children: t('图片', 'Images'),
                                  }),
                                  e.jsx('th', {
                                    className: 'py-3 px-4 font-semibold',
                                    children: t('视频', 'Videos'),
                                  }),
                                  e.jsx('th', {
                                    className: 'py-3 px-4 font-semibold',
                                    children: t('文档/PDF', 'Documents/PDFs'),
                                  }),
                                  e.jsx('th', {
                                    className: 'py-3 px-4 font-semibold',
                                    children: t('最大上下文', 'Max Context'),
                                  }),
                                ],
                              }),
                            }),
                            e.jsxs('tbody', {
                              children: [
                                e.jsxs('tr', {
                                  className: 'border-b border-gray-200',
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4 font-semibold',
                                      children: 'OpenAI Chat',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '✓ 原生（10 张）',
                                        '✓ Native (10 images)',
                                      ),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('需抽帧', 'Frame extraction'),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('图片 OCR', 'Image OCR'),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('1M tokens', '1M tokens'),
                                    }),
                                  ],
                                }),
                                e.jsxs('tr', {
                                  className: 'border-b border-gray-200',
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4 font-semibold',
                                      children: 'Anthropic Claude',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '✓ 原生（20 张）',
                                        '✓ Native (20 images)',
                                      ),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('需抽帧', 'Frame extraction'),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '✓ 原生 PDF（100 页）',
                                        '✓ Native PDF (100 pages)',
                                      ),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('200k tokens', '200k tokens'),
                                    }),
                                  ],
                                }),
                                e.jsxs('tr', {
                                  className: 'border-b border-gray-200',
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4 font-semibold',
                                      children: 'Google Gemini',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '✓ 原生（不限）',
                                        '✓ Native (unlimited)',
                                      ),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '✓ 原生 + YouTube',
                                        '✓ Native + YouTube',
                                      ),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '✓ 原生 PDF（1000+ 页）',
                                        '✓ Native PDF (1000+ pages)',
                                      ),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('2M tokens', '2M tokens'),
                                    }),
                                  ],
                                }),
                                e.jsxs('tr', {
                                  className: 'border-b border-gray-200',
                                  children: [
                                    e.jsx('td', {
                                      className: 'py-3 px-4 font-semibold',
                                      children: 'OpenAI Responses',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t(
                                        '✓ 原生（10 张）',
                                        '✓ Native (10 images)',
                                      ),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('需抽帧', 'Frame extraction'),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('图片 OCR', 'Image OCR'),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4',
                                      children: t('1M tokens', '1M tokens'),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('图片输入', 'Image Input'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-6',
                        children: t(
                          '主流提供方均支持图像理解，可通过 URL 或 base64 发送图片。',
                          'All major providers support image understanding, allowing you to send images via URLs or base64-encoded data.',
                        ),
                      }),
                      e.jsx('h3', {
                        className: 'text-lg font-semibold text-gray-900 mb-3',
                        children: t(
                          '1. OpenAI Chat - 图像理解',
                          '1. OpenAI Chat - Image Understanding',
                        ),
                      }),
                      e.jsx(r, {
                        language: 'javascript',
                        code: `const response = await fetch('__DOCS_BASE_URL__/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'gpt-4o',
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'What is in this image? Describe it in detail.'
          },
          {
            type: 'image_url',
            image_url: {
              url: 'https://example.com/image.jpg',
              // Or use base64: 'data:image/jpeg;base64,/9j/4AAQSkZJRg...'
              detail: 'high' // 'low', 'high', or 'auto'
            }
          }
        ]
      }
    ],
    max_tokens: 500
  })
});

const data = await response.json();
console.log(data.choices[0].message.content);`,
                      }),
                      e.jsxs('div', {
                        className:
                          'bg-blue-50 border-l-4 border-blue-500 p-4 mt-4',
                        children: [
                          e.jsx('p', {
                            className: 'text-sm text-blue-800 mb-2',
                            children: e.jsx('strong', {
                              children: t('detail 参数：', 'Detail Parameter:'),
                            }),
                          }),
                          e.jsxs('ul', {
                            className:
                              'text-sm text-blue-800 list-disc pl-6 space-y-1',
                            children: [
                              e.jsxs('li', {
                                children: [
                                  e.jsx('code', {
                                    className:
                                      'bg-gray-100 px-2 py-0.5 rounded',
                                    children: 'low',
                                  }),
                                  t(
                                    '：85 tokens，更快、细节较少',
                                    ': 85 tokens, faster, less detail',
                                  ),
                                ],
                              }),
                              e.jsxs('li', {
                                children: [
                                  e.jsx('code', {
                                    className:
                                      'bg-gray-100 px-2 py-0.5 rounded',
                                    children: 'high',
                                  }),
                                  t(
                                    '：最高 765 tokens，细节最丰富',
                                    ': Up to 765 tokens, maximum detail',
                                  ),
                                ],
                              }),
                              e.jsxs('li', {
                                children: [
                                  e.jsx('code', {
                                    className:
                                      'bg-gray-100 px-2 py-0.5 rounded',
                                    children: 'auto',
                                  }),
                                  t(
                                    '：模型根据图片自动选择',
                                    ': Model decides based on image',
                                  ),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-8',
                        children: t(
                          '2. Anthropic Claude - 视觉',
                          '2. Anthropic Claude - Vision',
                        ),
                      }),
                      e.jsx(r, {
                        language: 'javascript',
                        code: `const response = await fetch('__DOCS_BASE_URL__/v1/messages', {
  method: 'POST',
  headers: {
    'x-api-key': 'YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'claude-3-7-sonnet-20250219',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'image',
            source: {
              type: 'url',
              url: 'https://example.com/chart.png'
              // Or base64: { type: 'base64', media_type: 'image/png', data: '...' }
            }
          },
          {
            type: 'text',
            text: 'Analyze the trends shown in this chart and provide key insights.'
          }
        ]
      }
    ]
  })
});

const data = await response.json();
console.log(data.content[0].text);`,
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-8',
                        children: t(
                          '3. Google Gemini - 图像理解',
                          '3. Google Gemini - Image Understanding',
                        ),
                      }),
                      e.jsx(r, {
                        language: 'javascript',
                        code: `const response = await fetch('__DOCS_BASE_URL__/v1beta/models/gemini-3-pro:generateContent?key=YOUR_API_KEY', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    contents: [
      {
        role: 'user',
        parts: [
          {
            text: 'What objects do you see in this image?'
          },
          {
            inline_data: {
              mime_type: 'image/jpeg',
              data: 'BASE64_ENCODED_IMAGE'
            }
            // Or use file_data for uploaded files
          }
        ]
      }
    ],
    generationConfig: {
      media_resolution: 'high' // 'low', 'medium', 'high' - controls token usage
    }
  })
});

const data = await response.json();
console.log(data.candidates[0].content.parts[0].text);`,
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('视频输入', 'Video Input'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-6',
                        children: t(
                          '不同提供方的视频理解能力不同。Gemini 支持原生视频，OpenAI 与 Claude 需先抽帧再分析。',
                          'Video understanding capabilities vary by provider. Gemini offers native video support, while OpenAI and Claude require frame extraction for video analysis.',
                        ),
                      }),
                      e.jsx('h3', {
                        className: 'text-lg font-semibold text-gray-900 mb-3',
                        children: t(
                          'Google Gemini - 原生视频支持',
                          'Google Gemini - Native Video Support',
                        ),
                      }),
                      e.jsx(r, {
                        language: 'javascript',
                        code: `// Step 1: Upload video file (for files >20MB or >1 min)
const uploadResponse = await fetch('__DOCS_BASE_URL__/upload/v1beta/files', {
  method: 'POST',
  headers: {
    'X-Goog-Upload-Protocol': 'resumable',
    'X-Goog-Upload-Command': 'start',
    'X-Goog-Upload-Header-Content-Type': 'video/mp4'
  }
});

// ... complete upload process ...

// Step 2: Use uploaded video
const response = await fetch('__DOCS_BASE_URL__/v1beta/models/gemini-3-pro:generateContent?key=YOUR_API_KEY', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    contents: [
      {
        role: 'user',
        parts: [
          {
            file_data: {
              mime_type: 'video/mp4',
              file_uri: 'gs://uploaded-file-uri'
            }
          },
          {
            text: 'Summarize the key points from this video. What are the main topics discussed?'
          }
        ]
      }
    ]
  })
});

// Alternative: YouTube URL support
const youtubeResponse = await fetch('__DOCS_BASE_URL__/v1beta/models/gemini-3-pro:generateContent?key=YOUR_API_KEY', {
  method: 'POST',
  body: JSON.stringify({
    contents: [{
      parts: [
        { text: 'Summarize this video' },
        { youtube_url: 'https://www.youtube.com/watch?v=VIDEO_ID' }
      ]
    }]
  })
});`,
                      }),
                      e.jsx('div', {
                        className:
                          'bg-green-50 border-l-4 border-green-500 p-4 mt-4',
                        children: e.jsxs('p', {
                          className: 'text-sm text-green-800',
                          children: [
                            e.jsx('strong', {
                              children: t(
                                'Gemini 视频特性：',
                                'Gemini Video Features:',
                              ),
                            }),
                            ' ',
                            t(
                              '无需抽帧即可理解视频，支持 YouTube URL，并可处理最长约 90 分钟的视频进行深度分析。',
                              'Native video understanding without frame extraction, support for YouTube URLs, and ability to process videos up to 90 minutes long for comprehensive analysis.',
                            ),
                          ],
                        }),
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-8',
                        children: t(
                          'OpenAI/Claude - 抽帧方案',
                          'OpenAI/Claude - Frame Extraction Approach',
                        ),
                      }),
                      e.jsx(r, {
                        language: 'javascript',
                        code: `// Extract frames from video (using ffmpeg or similar)
// Then send frames as multiple images

const response = await fetch('__DOCS_BASE_URL__/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'gpt-4.1',
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: 'Describe what happens in this video across these frames.' },
          { type: 'image_url', image_url: { url: 'frame_1.jpg' } },
          { type: 'image_url', image_url: { url: 'frame_2.jpg' } },
          { type: 'image_url', image_url: { url: 'frame_3.jpg' } },
          // ... up to 10 images for OpenAI
        ]
      }
    ]
  })
});`,
                      }),
                      e.jsx('div', {
                        className:
                          'bg-amber-50 border-l-4 border-amber-400 p-4 mt-4',
                        children: e.jsxs('p', {
                          className: 'text-sm text-amber-800',
                          children: [
                            e.jsx('strong', {
                              children: t('限制：', 'Limitation:'),
                            }),
                            ' ',
                            t(
                              'OpenAI 与 Claude 暂不支持 API 直接视频输入，请抽取关键帧并以图片发送。1M 上下文支持大量帧。',
                              "OpenAI and Claude don't currently support direct video input via API. Extract key frames and send them as images. The 1M token context window allows for many frames.",
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('文档 / PDF 输入', 'Document & PDF Input'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-6',
                        children: t(
                          'Claude 与 Gemini 提供原生 PDF 支持（含版式理解）；OpenAI 需先将 PDF 转为图片。',
                          'Claude and Gemini offer native PDF support with layout understanding, while OpenAI requires converting PDF pages to images.',
                        ),
                      }),
                      e.jsx('h3', {
                        className: 'text-lg font-semibold text-gray-900 mb-3',
                        children: t(
                          '1. Anthropic Claude - 原生 PDF',
                          '1. Anthropic Claude - Native PDF Support',
                        ),
                      }),
                      e.jsx(r, {
                        language: 'javascript',
                        code: `// Method 1: Base64 encoding (for PDFs <32MB, <100 pages)
const pdfBase64 = fs.readFileSync('document.pdf').toString('base64');

const response = await fetch('__DOCS_BASE_URL__/v1/messages', {
  method: 'POST',
  headers: {
    'x-api-key': 'YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'claude-3-7-sonnet-20250219',
    max_tokens: 2048,
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'document',
            source: {
              type: 'base64',
              media_type: 'application/pdf',
              data: pdfBase64
            }
          },
          {
            type: 'text',
            text: 'Summarize the key findings from this research paper.'
          }
        ]
      }
    ]
  })
});

// Method 2: Files API (recommended for larger PDFs)
const fileUpload = await fetch('__DOCS_BASE_URL__/v1/files', {
  method: 'POST',
  headers: {
    'x-api-key': 'YOUR_API_KEY'
  },
  body: formData // multipart/form-data with PDF file
});

const fileId = fileUpload.json().id;

// Then reference in messages
const analysisResponse = await fetch('__DOCS_BASE_URL__/v1/messages', {
  method: 'POST',
  headers: {
    'x-api-key': 'YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'claude-3-7-sonnet-20250219',
    messages: [{
      role: 'user',
      content: [
        { type: 'document', source: { type: 'file', file_id: fileId } },
        { type: 'text', text: 'Extract all tables from this document.' }
      ]
    }]
  })
});`,
                      }),
                      e.jsxs('div', {
                        className:
                          'bg-purple-50 border-l-4 border-purple-500 p-4 mt-4',
                        children: [
                          e.jsx('p', {
                            className: 'text-sm text-purple-800 mb-2',
                            children: e.jsx('strong', {
                              children: t(
                                'Claude PDF 能力：',
                                'Claude PDF Capabilities:',
                              ),
                            }),
                          }),
                          e.jsxs('ul', {
                            className:
                              'text-sm text-purple-800 list-disc pl-6 space-y-1',
                            children: [
                              e.jsx('li', {
                                children: t(
                                  '理解复杂版式、表格与图表',
                                  'Understands complex layouts, tables, and charts',
                                ),
                              }),
                              e.jsx('li', {
                                children: t(
                                  '可感知位置的文本抽取',
                                  'Extracts text with position awareness',
                                ),
                              }),
                              e.jsx('li', {
                                children: t(
                                  '最多处理 100 页（32MB 限制）',
                                  'Processes up to 100 pages (32MB limit)',
                                ),
                              }),
                              e.jsx('li', {
                                children: t(
                                  '融合视觉与文本抽取',
                                  'Combines vision + text extraction',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-8',
                        children: t(
                          '2. Google Gemini - 高级文档处理',
                          '2. Google Gemini - Advanced Document Processing',
                        ),
                      }),
                      e.jsx(r, {
                        language: 'javascript',
                        code: `// Upload PDF document
const uploadResponse = await fetch('__DOCS_BASE_URL__/upload/v1beta/files', {
  method: 'POST',
  headers: {
    'X-Goog-Upload-Protocol': 'resumable',
    'X-Goog-Upload-Command': 'start',
    'X-Goog-Upload-Header-Content-Type': 'application/pdf'
  }
});

// Process document
const response = await fetch('__DOCS_BASE_URL__/v1beta/models/gemini-3-pro:generateContent?key=YOUR_API_KEY', {
  method: 'POST',
  body: JSON.stringify({
    contents: [
      {
        role: 'user',
        parts: [
          {
            file_data: {
              mime_type: 'application/pdf',
              file_uri: 'gs://uploaded-pdf-uri'
            }
          },
          {
            text: 'Analyze this legal contract and identify key obligations, parties, and terms.'
          }
        ]
      }
    ],
    generationConfig: {
      media_resolution: 'high' // Ensures detailed document processing
    }
  })
});`,
                      }),
                      e.jsx('div', {
                        className:
                          'bg-green-50 border-l-4 border-green-500 p-4 mt-4',
                        children: e.jsxs('p', {
                          className: 'text-sm text-green-800',
                          children: [
                            e.jsx('strong', {
                              children: t(
                                'Gemini 文档优势：',
                                'Gemini Document Excellence:',
                              ),
                            }),
                            ' ',
                            t(
                              '可处理 1000+ 页 PDF，理解多栏排版，精准转录表格，解析图表并识别手写文本。',
                              'Can process 1000+ page PDFs, understands multi-column layouts, accurately transcribes tables, interprets charts and diagrams, and recognizes handwritten text.',
                            ),
                          ],
                        }),
                      }),
                      e.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 mb-3 mt-8',
                        children: t(
                          '3. OpenAI - PDF 转图片',
                          '3. OpenAI - PDF as Images',
                        ),
                      }),
                      e.jsx(r, {
                        language: 'javascript',
                        code: `// Convert PDF pages to images, then send to API
// Use pdf-to-image library or similar

const response = await fetch('__DOCS_BASE_URL__/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'gpt-4o',
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: 'Extract information from these document pages.' },
          { type: 'image_url', image_url: { url: 'page1.jpg', detail: 'high' } },
          { type: 'image_url', image_url: { url: 'page2.jpg', detail: 'high' } },
          // Up to 10 images per request
        ]
      }
    ]
  })
});`,
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('常见场景', 'Common Use Cases'),
                      }),
                      e.jsxs('div', {
                        className: 'space-y-4',
                        children: [
                          e.jsxs('div', {
                            className:
                              'p-5 bg-gradient-to-r from-blue-50 to-transparent border-l-4 border-blue-500 rounded-r-lg',
                            children: [
                              e.jsxs('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: [
                                  '📸 ',
                                  t('视觉问答', 'Visual Question Answering'),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-700',
                                children: t(
                                  '对图片提问：识别商品、理解场景、医学影像分析、卫星图像解读与视觉质量评估。',
                                  'Ask questions about images—product identification, scene understanding, medical imaging analysis, satellite imagery interpretation, and visual quality assessment.',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-5 bg-gradient-to-r from-purple-50 to-transparent border-l-4 border-purple-500 rounded-r-lg',
                            children: [
                              e.jsxs('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: [
                                  '📄 ',
                                  t('文档智能', 'Document Intelligence'),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-700',
                                children: t(
                                  '从发票抽取结构化数据、处理法律合同、分析财报、数字化手写表单与理解复杂技术图纸。',
                                  'Extract structured data from invoices, process legal contracts, analyze financial reports, digitize handwritten forms, and understand complex technical diagrams.',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-5 bg-gradient-to-r from-green-50 to-transparent border-l-4 border-green-500 rounded-r-lg',
                            children: [
                              e.jsxs('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: [
                                  '🎬 ',
                                  t('视频分析', 'Video Analysis'),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-700',
                                children: t(
                                  '生成视频摘要、识别动作与事件、分析演示内容、监控安防视频并生成带场景描述的字幕。',
                                  'Generate video summaries, detect actions and events, analyze presentation content, monitor surveillance footage, and create video transcripts with scene descriptions.',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-5 bg-gradient-to-r from-orange-50 to-transparent border-l-4 border-orange-500 rounded-r-lg',
                            children: [
                              e.jsxs('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: [
                                  '🔍 ',
                                  t('内容审核', 'Content Moderation'),
                                ],
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-700',
                                children: t(
                                  '自动检测不当内容、核验身份文件、合规审查上传媒体并标记潜在安全风险。',
                                  'Automatically detect inappropriate content, verify identity documents, analyze uploaded media for compliance, and flag potential safety issues in user-generated content.',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('最佳实践', 'Best Practices'),
                      }),
                      e.jsxs('div', {
                        className: 'space-y-4',
                        children: [
                          e.jsxs('div', {
                            className: 'flex gap-4',
                            children: [
                              e.jsx('div', {
                                className:
                                  'flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold',
                                children: '✓',
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h4', {
                                    className: 'font-bold text-gray-900',
                                    children: t(
                                      '优化图像质量',
                                      'Optimize Image Quality',
                                    ),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-sm text-gray-600',
                                    children: t(
                                      '合理选择 detail。高 detail（更多 tokens）适合图表/文字密集图像；低 detail（更少 tokens）适合简单场景与物体识别。',
                                      'Use appropriate detail levels. High detail (more tokens) is great for diagrams and text-heavy images. Low detail (fewer tokens) works fine for simple scenes and object identification.',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className: 'flex gap-4',
                            children: [
                              e.jsx('div', {
                                className:
                                  'flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold',
                                children: '✓',
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h4', {
                                    className: 'font-bold text-gray-900',
                                    children: t(
                                      '提供上下文',
                                      'Provide Context',
                                    ),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-sm text-gray-600',
                                    children: t(
                                      '务必配上文字指令，说明希望模型对图片/视频/文档做什么，而不是只上传不说明。',
                                      'Always include text instructions alongside media. Explain what you want the model to do with the image/video/document rather than just uploading it without guidance.',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className: 'flex gap-4',
                            children: [
                              e.jsx('div', {
                                className:
                                  'flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold',
                                children: '✓',
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h4', {
                                    className: 'font-bold text-gray-900',
                                    children: t(
                                      '优先使用原生能力',
                                      'Use Native Support When Available',
                                    ),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-sm text-gray-600',
                                    children: t(
                                      'PDF 优先用 Claude 或 Gemini 原生支持而非转图片；视频场景多数情况下 Gemini 原生理解优于抽帧。',
                                      "For PDFs, prefer Claude or Gemini's native support over converting to images. For videos, Gemini's native video understanding beats frame extraction for most use cases.",
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className: 'flex gap-4',
                            children: [
                              e.jsx('div', {
                                className:
                                  'flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold',
                                children: '✗',
                              }),
                              e.jsxs('div', {
                                children: [
                                  e.jsx('h4', {
                                    className: 'font-bold text-gray-900',
                                    children: t(
                                      '不要超限',
                                      "Don't Exceed Limits",
                                    ),
                                  }),
                                  e.jsx('p', {
                                    className: 'text-sm text-gray-600',
                                    children: t(
                                      '注意图片数量限制（OpenAI 10 张、Claude 20 张）、文件大小限制（Claude PDF 32MB）与页数限制（Claude 100 页）。大文件请分段。',
                                      'Respect image count limits (10 for OpenAI, 20 for Claude), file size limits (32MB for Claude PDFs), and page limits (100 pages for Claude). Break large documents into chunks if needed.',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '输入格式速查',
                          'Input Format Quick Reference',
                        ),
                      }),
                      e.jsxs('div', {
                        className: 'grid grid-cols-1 md:grid-cols-2 gap-4',
                        children: [
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: 'OpenAI',
                              }),
                              e.jsxs('ul', {
                                className: 'text-sm text-gray-600 space-y-1',
                                children: [
                                  e.jsxs('li', {
                                    children: [
                                      e.jsx('code', {
                                        className:
                                          'bg-gray-100 px-2 py-0.5 rounded text-xs',
                                        children: 'image_url',
                                      }),
                                      ' - ',
                                      t('URL 或 base64', 'URL or base64'),
                                    ],
                                  }),
                                  e.jsx('li', {
                                    children: t(
                                      '每次最多 10 张',
                                      'Max 10 images per request',
                                    ),
                                  }),
                                  e.jsx('li', {
                                    children: t(
                                      'detail：low（85 tokens）、high（765 tokens）',
                                      'Detail: low (85 tokens), high (765 tokens)',
                                    ),
                                  }),
                                  e.jsx('li', {
                                    children: t(
                                      '不支持原生视频/PDF',
                                      'No native video or PDF',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: 'Anthropic Claude',
                              }),
                              e.jsxs('ul', {
                                className: 'text-sm text-gray-600 space-y-1',
                                children: [
                                  e.jsxs('li', {
                                    children: [
                                      e.jsx('code', {
                                        className:
                                          'bg-gray-100 px-2 py-0.5 rounded text-xs',
                                        children: 'image',
                                      }),
                                      ' - ',
                                      t('URL 或 base64', 'URL or base64'),
                                    ],
                                  }),
                                  e.jsxs('li', {
                                    children: [
                                      e.jsx('code', {
                                        className:
                                          'bg-gray-100 px-2 py-0.5 rounded text-xs',
                                        children: 'document',
                                      }),
                                      ' - ',
                                      t('支持 PDF', 'PDF support'),
                                    ],
                                  }),
                                  e.jsx('li', {
                                    children: t(
                                      '最多 20 张图、100 页 PDF、32MB',
                                      'Max 20 images, 100 PDF pages, 32MB',
                                    ),
                                  }),
                                  e.jsx('li', {
                                    children: t(
                                      '不支持原生视频',
                                      'No native video',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: 'Google Gemini',
                              }),
                              e.jsxs('ul', {
                                className: 'text-sm text-gray-600 space-y-1',
                                children: [
                                  e.jsxs('li', {
                                    children: [
                                      e.jsx('code', {
                                        className:
                                          'bg-gray-100 px-2 py-0.5 rounded text-xs',
                                        children: 'inline_data',
                                      }),
                                      ' - ',
                                      t('Base64 媒体', 'Base64 media'),
                                    ],
                                  }),
                                  e.jsxs('li', {
                                    children: [
                                      e.jsx('code', {
                                        className:
                                          'bg-gray-100 px-2 py-0.5 rounded text-xs',
                                        children: 'file_data',
                                      }),
                                      ' - ',
                                      t('上传文件', 'Uploaded files'),
                                    ],
                                  }),
                                  e.jsx('li', {
                                    children: t(
                                      '原生视频/PDF/YouTube URL',
                                      'Native video, PDF, YouTube URLs',
                                    ),
                                  }),
                                  e.jsx('li', {
                                    children: t(
                                      '1000+ 页、2M token 上下文',
                                      '1000+ pages, 2M token context',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-bold text-gray-900 mb-2',
                                children: 'OpenAI Responses',
                              }),
                              e.jsxs('ul', {
                                className: 'text-sm text-gray-600 space-y-1',
                                children: [
                                  e.jsx('li', {
                                    children: t(
                                      '与 OpenAI Chat API 相同',
                                      'Same as OpenAI Chat API',
                                    ),
                                  }),
                                  e.jsxs('li', {
                                    children: [
                                      e.jsx('code', {
                                        className:
                                          'bg-gray-100 px-2 py-0.5 rounded text-xs',
                                        children: 'image_url',
                                      }),
                                      ' ',
                                      t('格式', 'format'),
                                    ],
                                  }),
                                  e.jsx('li', {
                                    children: t(
                                      '每次最多 10 张',
                                      'Max 10 images per request',
                                    ),
                                  }),
                                  e.jsx('li', {
                                    children: t(
                                      '面向推理模型优化',
                                      'Optimized for reasoning models',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      case 'opencode':
        return e.jsx(u, {
          title: t('OpenCode', 'OpenCode'),
          content: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', {
                className: 'lead text-xl text-gray-600 mb-8',
                children: t(
                  'OpenCode 是面向终端的强大 AI 编码智能体。接入 __DOCS_PROJECT_NAME__ 后，只需一个 API Key 即可访问多家模型，无需分别管理各提供方凭据。',
                  'OpenCode is a powerful AI coding agent built for the terminal. Connect it to __DOCS_PROJECT_NAME__ to access all your favorite models with a single API key—no need to manage multiple provider credentials.',
                ),
              }),
              e.jsxs('div', {
                className: 'space-y-10',
                children: [
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('什么是 OpenCode？', 'What is OpenCode?'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          'OpenCode 是开源 CLI 工具，将 AI 助手直接带到终端。它提供优雅的 TUI（终端界面），可用于编码任务、调试、代码评审等。',
                          'OpenCode is an open-source CLI tool that brings AI assistance directly to your terminal. It provides a beautiful TUI (Terminal User Interface) for interacting with various AI models to help with coding tasks, debugging, code review, and more.',
                        ),
                      }),
                      e.jsx('div', {
                        className:
                          'bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 rounded-r-lg',
                        children: e.jsxs('p', {
                          className: 'text-sm text-blue-900',
                          children: [
                            e.jsx('strong', {
                              children: t(
                                '为什么用 __DOCS_PROJECT_NAME__ + OpenCode？',
                                'Why __DOCS_PROJECT_NAME__ + OpenCode?',
                              ),
                            }),
                            ' ',
                            t(
                              '无需分别管理 OpenAI、Anthropic、Google 的 Key；只用一个 __DOCS_PROJECT_NAME__ Key 即可统一访问与计费。',
                              'Instead of managing separate API keys for OpenAI, Anthropic, and Google, use a single __DOCS_PROJECT_NAME__ key to access all providers through OpenCode. Unified billing, unified access.',
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '步骤 1：安装 OpenCode',
                          'Step 1: Install OpenCode',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '请选择安装方式：',
                          'Choose your preferred installation method:',
                        ),
                      }),
                      e.jsxs('div', {
                        className: 'space-y-4',
                        children: [
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-semibold text-gray-900 mb-2',
                                children: t(
                                  '快速安装（推荐）',
                                  'Quick Install (Recommended)',
                                ),
                              }),
                              e.jsx(r, {
                                language: 'bash',
                                code: 'curl -fsSL https://opencode.ai/install | bash',
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-semibold text-gray-900 mb-2',
                                children: t('包管理器', 'Package Managers'),
                              }),
                              e.jsx('div', {
                                className: 'overflow-x-auto',
                                children: e.jsx('table', {
                                  className: 'w-full text-sm',
                                  children: e.jsxs('tbody', {
                                    children: [
                                      e.jsxs('tr', {
                                        className: 'border-b border-gray-200',
                                        children: [
                                          e.jsx('td', {
                                            className:
                                              'py-2 px-3 font-medium text-gray-700',
                                            children: 'npm',
                                          }),
                                          e.jsx('td', {
                                            className:
                                              'py-2 px-3 font-mono text-gray-600',
                                            children:
                                              'npm i -g opencode-ai@latest',
                                          }),
                                        ],
                                      }),
                                      e.jsxs('tr', {
                                        className: 'border-b border-gray-200',
                                        children: [
                                          e.jsx('td', {
                                            className:
                                              'py-2 px-3 font-medium text-gray-700',
                                            children: 'Homebrew',
                                          }),
                                          e.jsx('td', {
                                            className:
                                              'py-2 px-3 font-mono text-gray-600',
                                            children: 'brew install opencode',
                                          }),
                                        ],
                                      }),
                                      e.jsxs('tr', {
                                        className: 'border-b border-gray-200',
                                        children: [
                                          e.jsx('td', {
                                            className:
                                              'py-2 px-3 font-medium text-gray-700',
                                            children: t(
                                              'Windows（Scoop）',
                                              'Windows (Scoop)',
                                            ),
                                          }),
                                          e.jsx('td', {
                                            className:
                                              'py-2 px-3 font-mono text-gray-600',
                                            children:
                                              'scoop install extras/opencode',
                                          }),
                                        ],
                                      }),
                                      e.jsxs('tr', {
                                        className: 'border-b border-gray-200',
                                        children: [
                                          e.jsx('td', {
                                            className:
                                              'py-2 px-3 font-medium text-gray-700',
                                            children: 'Bun',
                                          }),
                                          e.jsx('td', {
                                            className:
                                              'py-2 px-3 font-mono text-gray-600',
                                            children: 'bun add -g opencode-ai',
                                          }),
                                        ],
                                      }),
                                      e.jsxs('tr', {
                                        children: [
                                          e.jsx('td', {
                                            className:
                                              'py-2 px-3 font-medium text-gray-700',
                                            children: t(
                                              'Arch Linux',
                                              'Arch Linux',
                                            ),
                                          }),
                                          e.jsx('td', {
                                            className:
                                              'py-2 px-3 font-mono text-gray-600',
                                            children: 'paru -S opencode-bin',
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '步骤 2：创建配置文件',
                          'Step 2: Create Configuration File',
                        ),
                      }),
                      e.jsxs('p', {
                        className: 'text-gray-700 mb-4',
                        children: [
                          t('在项目根目录创建', 'Create an'),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-2 py-1 rounded text-sm',
                            children: 'opencode.json',
                          }),
                          t('文件：', ' file in your project root directory:'),
                        ],
                      }),
                      e.jsx(r, {
                        language: 'json',
                        code: `{
  "$schema": "https://opencode.ai/config.json",

  "provider": {
    "__DOCS_PROJECT_KEY___openai": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "__DOCS_PROJECT_NAME__ (OpenAI)",
      "options": {
        "baseURL": "__DOCS_BASE_URL__/v1"
      },
      "models": {
        "gpt-4o": { "name": "GPT-4o" },
        "gpt-4o-mini": { "name": "GPT-4o Mini" },
        "o1": { "name": "o1" },
        "o3-mini": { "name": "o3 Mini" }
      }
    },

    "__DOCS_PROJECT_KEY___anthropic": {
      "npm": "@ai-sdk/anthropic",
      "name": "__DOCS_PROJECT_NAME__ (Anthropic)",
      "options": {
        "baseURL": "__DOCS_BASE_URL__/v1"
      },
      "models": {
        "claude-sonnet-4-20250514": { "name": "Claude Sonnet 4" },
        "claude-3-5-sonnet-latest": { "name": "Claude 3.5 Sonnet" },
        "claude-3-5-haiku-latest": { "name": "Claude 3.5 Haiku" }
      }
    },

    "__DOCS_PROJECT_KEY___google": {
      "npm": "@ai-sdk/google",
      "name": "__DOCS_PROJECT_NAME__ (Google)",
      "options": {
        "baseURL": "__DOCS_BASE_URL__/v1"
      },
      "models": {
        "gemini-2.5-pro-preview-05-06": { "name": "Gemini 2.5 Pro" },
        "gemini-2.5-flash-preview-05-20": { "name": "Gemini 2.5 Flash" }
      }
    }
  },

  "model": "__DOCS_PROJECT_KEY___openai/gpt-4o-mini"
}`,
                      }),
                      e.jsx('div', {
                        className:
                          'bg-amber-50 border-l-4 border-amber-500 p-4 mt-4',
                        children: e.jsxs('p', {
                          className: 'text-sm text-amber-800',
                          children: [
                            e.jsx('strong', {
                              children: t(
                                '支持三套 SDK：',
                                'Three SDKs Supported:',
                              ),
                            }),
                            ' ',
                            t(
                              '该配置通过 __DOCS_PROJECT_NAME__ 启用 OpenAI、Anthropic、Google 三大提供方，可按需调整模型列表。',
                              'This configuration enables all three major AI providers through __DOCS_PROJECT_NAME__—OpenAI, Anthropic, and Google. You can customize the models list based on your needs.',
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '步骤 3：启动 OpenCode',
                          'Step 3: Launch OpenCode',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '在项目目录打开终端并启动 OpenCode：',
                          'Open your terminal in the project directory and start OpenCode:',
                        ),
                      }),
                      e.jsx(r, { language: 'bash', code: 'opencode' }),
                      e.jsx('p', {
                        className: 'text-gray-600 text-sm mt-3',
                        children: t(
                          'OpenCode 会启动 TUI 界面，也可以使用参数：',
                          'OpenCode will launch its TUI interface. You can also use flags:',
                        ),
                      }),
                      e.jsxs('ul', {
                        className:
                          'text-sm text-gray-600 mt-2 space-y-1 ml-4 list-disc',
                        children: [
                          e.jsxs('li', {
                            children: [
                              e.jsx('code', {
                                className: 'bg-gray-100 px-1 rounded',
                                children: 'opencode -d',
                              }),
                              ' — ',
                              t('开启调试日志', 'Start with debug logging'),
                            ],
                          }),
                          e.jsxs('li', {
                            children: [
                              e.jsx('code', {
                                className: 'bg-gray-100 px-1 rounded',
                                children: 'opencode -c /path/to/project',
                              }),
                              ' — ',
                              t(
                                '使用指定工作目录启动',
                                'Start with a specific working directory',
                              ),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '步骤 4：连接 __DOCS_PROJECT_NAME__',
                          'Step 4: Connect to __DOCS_PROJECT_NAME__',
                        ),
                      }),
                      e.jsxs('p', {
                        className: 'text-gray-700 mb-4',
                        children: [
                          t(
                            '在 OpenCode 的 TUI 中使用',
                            'Inside the OpenCode TUI, use the',
                          ),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-2 py-1 rounded text-sm',
                            children: '/connect',
                          }),
                          t('命令：', ' command:'),
                        ],
                      }),
                      e.jsxs('div', {
                        className:
                          'bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm',
                        children: [
                          e.jsx('div', {
                            className: 'text-gray-500 mb-2',
                            children: '# In OpenCode TUI, type:',
                          }),
                          e.jsx('div', { children: '/connect' }),
                        ],
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mt-4 mb-3',
                        children: t(
                          '将显示配置中的可用提供方列表：',
                          'This will show a list of available providers from your configuration:',
                        ),
                      }),
                      e.jsx('div', {
                        className:
                          'p-4 bg-white rounded-lg border border-gray-200',
                        children: e.jsxs('div', {
                          className: 'space-y-2',
                          children: [
                            e.jsxs('div', {
                              className:
                                'flex items-center gap-3 p-2 bg-blue-50 rounded border border-blue-200',
                              children: [
                                e.jsx('span', {
                                  className: 'text-blue-600 font-semibold',
                                  children: '1.',
                                }),
                                e.jsx('span', {
                                  className: 'text-gray-800',
                                  children: projectLabel(
                                    '__DOCS_PROJECT_NAME__ (OpenAI)',
                                  ),
                                }),
                                e.jsx('span', {
                                  className: 'text-xs text-gray-500',
                                  children: '— GPT-4o, o1, o3-mini',
                                }),
                              ],
                            }),
                            e.jsxs('div', {
                              className:
                                'flex items-center gap-3 p-2 bg-purple-50 rounded border border-purple-200',
                              children: [
                                e.jsx('span', {
                                  className: 'text-purple-600 font-semibold',
                                  children: '2.',
                                }),
                                e.jsx('span', {
                                  className: 'text-gray-800',
                                  children: projectLabel(
                                    '__DOCS_PROJECT_NAME__ (Anthropic)',
                                  ),
                                }),
                                e.jsx('span', {
                                  className: 'text-xs text-gray-500',
                                  children: '— Claude Sonnet 4, Claude 3.5',
                                }),
                              ],
                            }),
                            e.jsxs('div', {
                              className:
                                'flex items-center gap-3 p-2 bg-green-50 rounded border border-green-200',
                              children: [
                                e.jsx('span', {
                                  className: 'text-green-600 font-semibold',
                                  children: '3.',
                                }),
                                e.jsx('span', {
                                  className: 'text-gray-800',
                                  children: projectLabel(
                                    '__DOCS_PROJECT_NAME__ (Google)',
                                  ),
                                }),
                                e.jsx('span', {
                                  className: 'text-xs text-gray-500',
                                  children:
                                    '— Gemini 2.5 Pro, Gemini 2.5 Flash',
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mt-4',
                        children: t(
                          '选择任一 __DOCS_PROJECT_NAME__ 提供方继续。',
                          'Select any of the __DOCS_PROJECT_NAME__ providers to continue.',
                        ),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '步骤 5：输入 API Key',
                          'Step 5: Enter Your API Key',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '选择提供方后会提示输入 __DOCS_PROJECT_NAME__ Key：',
                          "After selecting a provider, you'll be prompted to enter your __DOCS_PROJECT_NAME__ key:",
                        ),
                      }),
                      e.jsxs('div', {
                        className:
                          'bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm',
                        children: [
                          e.jsx('div', {
                            className: 'text-gray-500 mb-2',
                            children: projectLabel(
                              '# Paste your __DOCS_PROJECT_NAME__ key when prompted:',
                            ),
                          }),
                          e.jsx('div', {
                            children: 'Enter API Key: sk-xxxxxxxxxxxxxxxxxxxx',
                          }),
                        ],
                      }),
                      e.jsx('div', {
                        className:
                          'bg-green-50 border-l-4 border-green-500 p-4 mt-4',
                        children: e.jsxs('p', {
                          className: 'text-sm text-green-800',
                          children: [
                            e.jsx('strong', {
                              children: t(
                                '在哪里获取 Key？',
                                'Where to get your key?',
                              ),
                            }),
                            ' ',
                            t(
                              '在 __DOCS_PROJECT_NAME__ 控制台的 Token 管理页面创建或复制 API Key，该 Key 可用于三大提供方。',
                              'Go to the Token Management page in your __DOCS_PROJECT_NAME__ console to create or copy your API key. The same key works for all three providers!',
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('准备就绪！', "You're All Set!"),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '连接完成后即可使用已配置模型。常用命令如下：',
                          'Once connected, you can start using OpenCode with any of the configured models. Some useful commands:',
                        ),
                      }),
                      e.jsxs('div', {
                        className: 'grid grid-cols-1 md:grid-cols-2 gap-4',
                        children: [
                          e.jsxs('div', {
                            className:
                              'p-4 bg-white rounded-lg border border-gray-200',
                            children: [
                              e.jsx('code', {
                                className: 'text-blue-600 font-semibold',
                                children: '/model',
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600 mt-1',
                                children: t(
                                  '切换模型',
                                  'Switch between models',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-white rounded-lg border border-gray-200',
                            children: [
                              e.jsx('code', {
                                className: 'text-blue-600 font-semibold',
                                children: '/clear',
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600 mt-1',
                                children: t(
                                  '清空对话历史',
                                  'Clear conversation history',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-white rounded-lg border border-gray-200',
                            children: [
                              e.jsx('code', {
                                className: 'text-blue-600 font-semibold',
                                children: '/help',
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600 mt-1',
                                children: t(
                                  '查看所有命令',
                                  'View all available commands',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-white rounded-lg border border-gray-200',
                            children: [
                              e.jsx('code', {
                                className: 'text-blue-600 font-semibold',
                                children: '/config',
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-gray-600 mt-1',
                                children: t(
                                  '查看当前配置',
                                  'View current configuration',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs('div', {
                        className:
                          'mt-6 p-5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200',
                        children: [
                          e.jsx('h4', {
                            className: 'font-bold text-gray-900 mb-2',
                            children: t('快速回顾', 'Quick Summary'),
                          }),
                          e.jsxs('ol', {
                            className:
                              'text-sm text-gray-700 space-y-2 list-decimal pl-4',
                            children: [
                              e.jsxs('li', {
                                children: [
                                  t('通过', 'Install OpenCode via'),
                                  ' ',
                                  e.jsx('code', {
                                    className: 'bg-white px-1 rounded',
                                    children: 'curl',
                                  }),
                                  ' ',
                                  t(
                                    '或包管理器安装 OpenCode',
                                    'or package manager',
                                  ),
                                ],
                              }),
                              e.jsxs('li', {
                                children: [
                                  t(
                                    '创建包含 __DOCS_PROJECT_NAME__ 提供方的',
                                    'Create',
                                  ),
                                  ' ',
                                  e.jsx('code', {
                                    className: 'bg-white px-1 rounded',
                                    children: 'opencode.json',
                                  }),
                                  ' ',
                                  t(
                                    '配置',
                                    'with __DOCS_PROJECT_NAME__ providers',
                                  ),
                                ],
                              }),
                              e.jsxs('li', {
                                children: [
                                  t('在终端运行', 'Run'),
                                  ' ',
                                  e.jsx('code', {
                                    className: 'bg-white px-1 rounded',
                                    children: 'opencode',
                                  }),
                                ],
                              }),
                              e.jsxs('li', {
                                children: [
                                  t('输入', 'Type'),
                                  ' ',
                                  e.jsx('code', {
                                    className: 'bg-white px-1 rounded',
                                    children: '/connect',
                                  }),
                                  ' ',
                                  t('并选择提供方', 'and select a provider'),
                                ],
                              }),
                              e.jsx('li', {
                                children: t(
                                  '输入 __DOCS_PROJECT_NAME__ Key 即可完成',
                                  'Enter your __DOCS_PROJECT_NAME__ key — done!',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      case 'claude-code':
        return e.jsx(u, {
          title: t('Claude Code', 'Claude Code'),
          content: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', {
                className: 'lead text-xl text-gray-600 mb-8',
                children: t(
                  'Claude Code 是 Anthropic 官方 CLI AI 编码助手。接入 __DOCS_PROJECT_NAME__ 可无缝使用。',
                  "Claude Code is Anthropic's official CLI AI coding assistant. Connect it to __DOCS_PROJECT_NAME__ for seamless access.",
                ),
              }),
              e.jsxs('div', {
                className: 'space-y-10',
                children: [
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '什么是 Claude Code？',
                          'What is Claude Code?',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          'Claude Code 是 Anthropic 官方命令行 AI 编程助手，将强大的 AI 能力直接带到终端，适用于编码、调试与代码评审。',
                          "Claude Code is Anthropic's official command-line AI programming assistant that brings powerful AI capabilities directly to your terminal for coding, debugging, and code review tasks.",
                        ),
                      }),
                      e.jsx('div', {
                        className:
                          'bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 p-5 rounded-r-lg',
                        children: e.jsxs('p', {
                          className: 'text-sm text-purple-900',
                          children: [
                            e.jsx('strong', {
                              children: t(
                                '为什么用 __DOCS_PROJECT_NAME__ + Claude Code？',
                                'Why __DOCS_PROJECT_NAME__ + Claude Code?',
                              ),
                            }),
                            ' ',
                            t(
                              '使用 __DOCS_PROJECT_NAME__ Key 即可通过 Claude Code 访问 Claude 模型，无需单独的 Anthropic 凭据，统一接入与计费。',
                              'Use your __DOCS_PROJECT_NAME__ key to access Claude models through Claude Code. No need for separate Anthropic API credentials—unified access and billing.',
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('系统要求', 'System Requirements'),
                      }),
                      e.jsx('div', {
                        className:
                          'p-4 bg-gray-50 rounded-lg border border-gray-200',
                        children: e.jsxs('ul', {
                          className: 'text-gray-700 space-y-2 ml-4 list-disc',
                          children: [
                            e.jsx('li', {
                              children: t(
                                'Node.js 版本 ≥ 18.0',
                                'Node.js version >= 18.0',
                              ),
                            }),
                            e.jsx('li', {
                              children: t(
                                '支持系统：macOS、Linux、Windows（WSL）',
                                'Supported systems: macOS, Linux, Windows (WSL)',
                              ),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '步骤 1：安装 Node.js',
                          'Step 1: Install Node.js',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-600 text-sm mb-4',
                        children: t(
                          '如果已安装 Node.js 18.0 或更高版本，可跳过此步骤。',
                          'If you already have Node.js 18.0 or higher installed, you can skip this step.',
                        ),
                      }),
                      e.jsxs('div', {
                        className: 'space-y-4',
                        children: [
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-semibold text-gray-900 mb-2',
                                children: 'Ubuntu / Debian',
                              }),
                              e.jsx(r, {
                                language: 'bash',
                                code: `# Install Node.js LTS
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo bash -
sudo apt-get install -y nodejs

# Verify installation
node --version`,
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-semibold text-gray-900 mb-2',
                                children: 'macOS',
                              }),
                              e.jsx(r, {
                                language: 'bash',
                                code: `# Install Xcode Command Line Tools
sudo xcode-select --install

# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js via Homebrew
brew install node

# Verify installation
node --version`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '步骤 2：安装 Claude Code',
                          'Step 2: Install Claude Code',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '使用 npm 全局安装 Claude Code：',
                          'Install Claude Code globally using npm:',
                        ),
                      }),
                      e.jsx(r, {
                        language: 'bash',
                        code: `npm install -g @anthropic-ai/claude-code

# Verify installation
claude --version`,
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '步骤 3：配置并开始使用',
                          'Step 3: Configure and Start Using',
                        ),
                      }),
                      e.jsx('h3', {
                        className: 'text-lg font-semibold text-gray-900 mb-3',
                        children: t('必需配置', 'Required Configuration'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '需要设置两个重要环境变量：',
                          'You need to set up two important environment variables:',
                        ),
                      }),
                      e.jsx('div', {
                        className: 'overflow-x-auto mb-6',
                        children: e.jsxs('table', {
                          className:
                            'w-full text-sm border border-gray-200 rounded-lg overflow-hidden',
                          children: [
                            e.jsx('thead', {
                              className:
                                'bg-gradient-to-r from-gray-50 to-gray-100',
                              children: e.jsxs('tr', {
                                children: [
                                  e.jsx('th', {
                                    className:
                                      'text-left py-3 px-4 font-semibold text-gray-900 border-b',
                                    children: t('变量', 'Variable'),
                                  }),
                                  e.jsx('th', {
                                    className:
                                      'text-left py-3 px-4 font-semibold text-gray-900 border-b',
                                    children: t('说明', 'Description'),
                                  }),
                                  e.jsx('th', {
                                    className:
                                      'text-left py-3 px-4 font-semibold text-gray-900 border-b',
                                    children: t('获取方式', 'How to Get'),
                                  }),
                                ],
                              }),
                            }),
                            e.jsxs('tbody', {
                              className: 'bg-white',
                              children: [
                                e.jsxs('tr', {
                                  className:
                                    'border-b hover:bg-gray-50 transition-colors',
                                  children: [
                                    e.jsx('td', {
                                      className:
                                        'py-3 px-4 font-mono text-purple-700',
                                      children: 'ANTHROPIC_AUTH_TOKEN',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4 text-gray-600',
                                      children: t(
                                        'API 认证 token',
                                        'API authentication token',
                                      ),
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4 text-gray-600',
                                      children: t(
                                        '在控制台创建 token（以 sk- 开头）',
                                        'Create a token in your dashboard (starts with sk-)',
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsxs('tr', {
                                  className:
                                    'hover:bg-gray-50 transition-colors',
                                  children: [
                                    e.jsx('td', {
                                      className:
                                        'py-3 px-4 font-mono text-purple-700',
                                      children: 'ANTHROPIC_BASE_URL',
                                    }),
                                    e.jsx('td', {
                                      className: 'py-3 px-4 text-gray-600',
                                      children: t(
                                        'API 服务地址',
                                        'API service endpoint',
                                      ),
                                    }),
                                    e.jsxs('td', {
                                      className: 'py-3 px-4 text-gray-600',
                                      children: [
                                        t('使用', 'Use'),
                                        ' ',
                                        baseUrl,
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      e.jsx('div', {
                        className:
                          'bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 rounded-r-lg mb-6',
                        children: e.jsxs('p', {
                          className: 'text-sm text-blue-900',
                          children: [
                            e.jsx('strong', {
                              children: t(
                                'Token 创建建议：',
                                'Token Creation Tips:',
                              ),
                            }),
                            ' ',
                            t(
                              '创建 token 时建议选择不限额度，组别选 auto/default/plus，其余保持默认。',
                              'When creating your token, set unlimited quota, choose auto/default/plus group, and keep other settings at their defaults.',
                            ),
                          ],
                        }),
                      }),
                      e.jsx('h3', {
                        className: 'text-lg font-semibold text-gray-900 mb-3',
                        children: t('启动 Claude Code', 'Launch Claude Code'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '在项目目录执行以下命令：',
                          'Run these commands in your project directory:',
                        ),
                      }),
                      e.jsxs('div', {
                        className: 'space-y-4',
                        children: [
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-semibold text-gray-900 mb-2',
                                children: 'Linux / macOS',
                              }),
                              e.jsx(r, {
                                language: 'bash',
                                code: `# Navigate to your project
cd your-project-folder

# Set environment variables
export ANTHROPIC_AUTH_TOKEN=sk-...  # Replace with your token
export ANTHROPIC_BASE_URL=__DOCS_BASE_URL__
export API_TIMEOUT_MS=300000  # 300 second timeout

# Launch Claude Code
claude`,
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-semibold text-gray-900 mb-2',
                                children: 'Windows PowerShell',
                              }),
                              e.jsx(r, {
                                language: 'bash',
                                code: `# Navigate to your project
cd your-project-folder

# Set environment variables
$env:ANTHROPIC_BASE_URL = "__DOCS_BASE_URL__"
$env:ANTHROPIC_AUTH_TOKEN = "sk-..."
$env:API_TIMEOUT_MS = "300000"

# Launch Claude Code
claude`,
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border border-gray-200',
                            children: [
                              e.jsx('h4', {
                                className: 'font-semibold text-gray-900 mb-2',
                                children: 'Windows CMD',
                              }),
                              e.jsx(r, {
                                language: 'bash',
                                code: `# Navigate to your project
cd your-project-folder

# Set environment variables
set ANTHROPIC_BASE_URL=__DOCS_BASE_URL__
set ANTHROPIC_AUTH_TOKEN=sk-...
set API_TIMEOUT_MS=300000

# Launch Claude Code
claude`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('首次运行设置', 'First Run Setup'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '首次启动时，Claude Code 会引导你完成：',
                          'On your first launch, Claude Code will guide you through:',
                        ),
                      }),
                      e.jsxs('div', {
                        className: 'grid grid-cols-1 md:grid-cols-2 gap-4',
                        children: [
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-200',
                            children: [
                              e.jsx('div', {
                                className: 'font-semibold text-purple-900 mb-1',
                                children: t('主题选择', 'Theme Selection'),
                              }),
                              e.jsx('div', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '选择偏好界面主题',
                                  'Choose your preferred interface theme',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gradient-to-br from-indigo-50 to-white rounded-lg border border-indigo-200',
                            children: [
                              e.jsx('div', {
                                className: 'font-semibold text-indigo-900 mb-1',
                                children: t(
                                  '安全确认',
                                  'Security Confirmation',
                                ),
                              }),
                              e.jsx('div', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '检查并确认安全设置',
                                  'Review and confirm security settings',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-200',
                            children: [
                              e.jsx('div', {
                                className: 'font-semibold text-blue-900 mb-1',
                                children: t(
                                  '终端配置',
                                  'Terminal Configuration',
                                ),
                              }),
                              e.jsx('div', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '设置终端环境',
                                  'Set up your terminal environment',
                                ),
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gradient-to-br from-cyan-50 to-white rounded-lg border border-cyan-200',
                            children: [
                              e.jsx('div', {
                                className: 'font-semibold text-cyan-900 mb-1',
                                children: t('目录信任', 'Directory Trust'),
                              }),
                              e.jsx('div', {
                                className: 'text-sm text-gray-600',
                                children: t(
                                  '信任当前工作目录',
                                  'Trust your current working directory',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('故障排查', 'Troubleshooting'),
                      }),
                      e.jsxs('div', {
                        className: 'space-y-4',
                        children: [
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border-l-4 border-amber-400',
                            children: [
                              e.jsx('h4', {
                                className: 'font-semibold text-gray-900 mb-2',
                                children: t('API Key 无效', 'Invalid API Key'),
                              }),
                              e.jsxs('p', {
                                className: 'text-gray-600 text-sm',
                                children: [
                                  t(
                                    '确认 Key 格式正确（以',
                                    'Ensure your key is formatted correctly (starts with',
                                  ),
                                  ' ',
                                  e.jsx('code', {
                                    className:
                                      'bg-white px-2 py-1 rounded text-gray-800 border',
                                    children: 'sk-',
                                  }),
                                  ' ',
                                  t('开头）且有效。', ') and is valid.'),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className:
                              'p-4 bg-gray-50 rounded-lg border-l-4 border-amber-400',
                            children: [
                              e.jsx('h4', {
                                className: 'font-semibold text-gray-900 mb-2',
                                children: t(
                                  '网络连接失败',
                                  'Network Connection Failed',
                                ),
                              }),
                              e.jsx('p', {
                                className: 'text-gray-600 text-sm mb-2',
                                children: t(
                                  '确认可以访问 __DOCS_PROJECT_NAME__：',
                                  'Verify you can reach __DOCS_PROJECT_NAME__:',
                                ),
                              }),
                              e.jsx(r, {
                                language: 'bash',
                                code: 'curl __DOCS_BASE_URL__/v1/models',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx('section', {
                    children: e.jsxs('div', {
                      className:
                        'bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200 p-6',
                      children: [
                        e.jsx('h4', {
                          className: 'font-bold text-gray-900 mb-3 text-lg',
                          children: t('快速开始摘要', 'Quick Start Summary'),
                        }),
                        e.jsxs('ol', {
                          className:
                            'text-sm text-gray-700 space-y-2 list-decimal pl-5',
                          children: [
                            e.jsx('li', {
                              children: t(
                                '安装 Node.js（≥ 18.0）',
                                'Install Node.js (>= 18.0)',
                              ),
                            }),
                            e.jsxs('li', {
                              children: [
                                t('运行', 'Run'),
                                ' ',
                                e.jsx('code', {
                                  className:
                                    'bg-white px-2 py-1 rounded border text-gray-800',
                                  children:
                                    'npm install -g @anthropic-ai/claude-code',
                                }),
                              ],
                            }),
                            e.jsxs('li', {
                              children: [
                                t('设置环境变量', 'Set environment variables'),
                                ' ',
                                e.jsx('code', {
                                  className:
                                    'bg-white px-2 py-1 rounded border text-gray-800',
                                  children: 'ANTHROPIC_AUTH_TOKEN',
                                }),
                                t(' 和 ', ' and '),
                                e.jsx('code', {
                                  className:
                                    'bg-white px-2 py-1 rounded border text-gray-800',
                                  children: 'ANTHROPIC_BASE_URL',
                                }),
                              ],
                            }),
                            e.jsxs('li', {
                              children: [
                                t('在项目目录运行', 'Launch with'),
                                ' ',
                                e.jsx('code', {
                                  className:
                                    'bg-white px-2 py-1 rounded border text-gray-800',
                                  children: 'claude',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      case 'openclaw':
        return e.jsx(u, {
          title: t(
            'OpenClaw 最新版本 自定义中转站配置教程',
            'OpenClaw Latest Version Custom Relay Configuration',
          ),
          content: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', {
                className: 'lead text-xl text-gray-600 mb-8',
                children: t(
                  '本教程介绍如何在 OpenClaw 最新版本中配置自定义中转站（以 __DOCS_PROJECT_NAME__ 为例）。',
                  'This guide shows how to configure a custom relay in OpenClaw latest version (using __DOCS_PROJECT_NAME__ as the example).',
                ),
              }),
              e.jsxs('div', {
                className: 'space-y-10',
                children: [
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '第一步：安装与基础初始化',
                          'Step 1: Install & Initialize',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '首先确保你已经安装了 Node.js 环境，然后在终端执行：',
                          'Make sure Node.js is installed, then run:',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-2 font-semibold',
                        children: t('1) 全局安装：', '1) Install globally:'),
                      }),
                      e.jsx(r, {
                        language: 'bash',
                        code: 'npm install -g openclaw@latest',
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-2 mt-4 font-semibold',
                        children: t(
                          '2) 执行引导（根据提示完成基础设置）：',
                          '2) Run onboarding (follow prompts):',
                        ),
                      }),
                      e.jsx(r, { language: 'bash', code: 'openclaw onboard' }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '第二步：修改主配置文件 openclaw.json',
                          'Step 2: Edit openclaw.json',
                        ),
                      }),
                      e.jsxs('p', {
                        className: 'text-gray-700 mb-4',
                        children: [
                          t('打开路径：', 'Open:'),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-2 py-1 rounded text-sm',
                            children: String.raw`C:\Users\admin\.openclaw\openclaw.json`,
                          }),
                        ],
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '将 models 和 auth 部分修改为以下内容，以支持自定义中转站。',
                          'Update the `models` and `auth` sections as below to enable a custom relay.',
                        ),
                      }),
                      e.jsx(r, {
                        language: 'json',
                        code: String.raw`{
  "agents": {
    "defaults": {
      "model": {
        "primary": "api-proxy-claude/claude-sonnet-4-5-20250929"
      },
      "models": {
        "api-proxy-gpt/gpt-5.2": {
          "alias": "GPT-5.2"
        },
        "api-proxy-claude/claude-sonnet-4-5-20250929": {
          "alias": "Claude Sonnet 4.5"
        },
        "api-proxy-google/gemini-3-pro-preview": {
          "alias": "Gemini 3 Pro"
        },
        "api-proxy-deepseek/deepseek-v3.2": {
          "alias": "Deepseek v3.2"
        }
      },
      "workspace": "C:\\Users\\admin\\clawd",
      "maxConcurrent": 4,
      "subagents": {
        "maxConcurrent": 8
      }
    }
  },
  "auth": {
    "profiles": {
      "api-proxy-gpt:default": {
        "provider": "api-proxy-gpt",
        "mode": "api_key"
      },
      "api-proxy-claude:default": {
        "provider": "api-proxy-claude",
        "mode": "api_key"
      },
      "api-proxy-google:default": {
        "provider": "api-proxy-google",
        "mode": "api_key"
      },
      "api-proxy-deepseek:default": {
        "provider": "api-proxy-deepseek",
        "mode": "api_key"
      }
    }
  },
  "models": {
    "mode": "merge",
    "providers": {
      "api-proxy-gpt": {
        "baseUrl": "__DOCS_BASE_URL__/v1",
        "api": "openai-completions",
        "models": [
          {
            "id": "gpt-5.2",
            "name": "GPT-5.2",
            "reasoning": false,
            "input": ["text"],
            "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
            "contextWindow": 128000,
            "maxTokens": 8192
          }
        ]
      },
      "api-proxy-claude": {
        "baseUrl": "__DOCS_BASE_URL__",
        "api": "anthropic-messages",
        "models": [
          {
            "id": "claude-sonnet-4-5-20250929",
            "name": "Claude Sonnet 4.5",
            "reasoning": false,
            "input": ["text"],
            "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
            "contextWindow": 200000,
            "maxTokens": 8192
          }
        ]
      },
      "api-proxy-google": {
        "baseUrl": "__DOCS_BASE_URL__/v1",
        "api": "google-generative-ai",
        "models": [
          {
            "id": "gemini-3-pro-preview",
            "name": "Gemini 3 Pro",
            "reasoning": false,
            "input": ["text"],
            "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
            "contextWindow": 2000000,
            "maxTokens": 8192
          }
        ]
      },
      "api-proxy-deepseek": {
        "baseUrl": "__DOCS_BASE_URL__/v1",
        "api": "openai-completions",
        "models": [
          {
            "id": "deepseek-v3.2",
            "name": "Deepseek v3.2",
            "reasoning": false,
            "input": ["text"],
            "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
            "contextWindow": 2000000,
            "maxTokens": 8192
          }
        ]
      }
    }
  }
}`,
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '第三步：配置鉴权文件 auth-profiles.json',
                          'Step 3: Configure auth-profiles.json',
                        ),
                      }),
                      e.jsxs('p', {
                        className: 'text-gray-700 mb-4',
                        children: [
                          t('打开路径：', 'Open:'),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-2 py-1 rounded text-sm',
                            children: String.raw`C:\Users\admin\.openclaw\agents\main\agent\auth-profiles.json`,
                          }),
                        ],
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '在此处填入你从中转站获取的真实 API Key。',
                          'Fill in the real API keys obtained from your relay.',
                        ),
                      }),
                      e.jsx(r, {
                        language: 'json',
                        code: String.raw`{
  "version": 1,
  "profiles": {
    "api-proxy-gpt:default": {
      "type": "api_key",
      "provider": "api-proxy-gpt",
      "key": "sk-your-unique-gpt-key-here"
    },
    "api-proxy-claude:default": {
      "type": "api_key",
      "provider": "api-proxy-claude",
      "key": "sk-your-unique-claude-key-here"
    },
    "api-proxy-google:default": {
      "type": "api_key",
      "provider": "api-proxy-google",
      "key": "sk-your-unique-google-key-here"
    },
    "api-proxy-deepseek:default": {
      "type": "api_key",
      "provider": "api-proxy-deepseek",
      "key": "sk-your-unique-deepseek-key-here"
    }
  }
}`,
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '第四步：检查并启动',
                          'Step 4: Verify & Start',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-2 font-semibold',
                        children: t(
                          '1) 启动 Gateway 服务：',
                          '1) Start the gateway service:',
                        ),
                      }),
                      e.jsx(r, {
                        language: 'bash',
                        code: 'openclaw gateway --port 18789',
                      }),
                      e.jsxs('p', {
                        className: 'text-gray-700 mt-4',
                        children: [
                          t(
                            '2) 访问控制台：打开浏览器访问',
                            '2) Open the console: visit',
                          ),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-2 py-1 rounded text-sm',
                            children: 'http://127.0.0.1:18789/',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      case 'codex':
        return e.jsx(u, {
          title: t(
            'Codex 配置教程 - __DOCS_PROJECT_NAME__ 接口对接',
            'Codex Configuration Guide - __DOCS_PROJECT_NAME__ Integration',
          ),
          content: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', {
                className: 'lead text-xl text-gray-600 mb-8',
                children: t(
                  '本教程介绍如何配置 Codex 以接入 __DOCS_PROJECT_NAME__ 第三方 API。',
                  'This guide shows how to configure Codex to connect with __DOCS_PROJECT_NAME__ third-party API.',
                ),
              }),
              e.jsxs('div', {
                className: 'space-y-10',
                children: [
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '第一步：配置鉴权文件 auth.json',
                          'Step 1: Configure auth.json',
                        ),
                      }),
                      e.jsxs('p', {
                        className: 'text-gray-700 mb-4',
                        children: [
                          t('在', 'In the'),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-2 py-1 rounded text-sm',
                            children: '.codex',
                          }),
                          t(' 目录下找到 ', ' directory, find '),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-2 py-1 rounded text-sm',
                            children: 'auth.json',
                          }),
                          t(
                            '，将 OPENAI_API_KEY 替换为你的真实 SK：',
                            ', and replace OPENAI_API_KEY with your real SK:',
                          ),
                        ],
                      }),
                      e.jsx(r, {
                        language: 'json',
                        code: `{
  "OPENAI_API_KEY": "sk-xxx"
}`,
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '第二步：配置 config.toml',
                          'Step 2: Configure config.toml',
                        ),
                      }),
                      e.jsxs('p', {
                        className: 'text-gray-700 mb-4',
                        children: [
                          t('在', 'In the'),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-2 py-1 rounded text-sm',
                            children: '.codex',
                          }),
                          t(' 目录下找到 ', ' directory, find '),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-2 py-1 rounded text-sm',
                            children: 'config.toml',
                          }),
                          t(
                            '，将以下内容完整覆盖粘贴到文件中（替换原有全部内容）。',
                            ', and paste the following content to completely replace the entire file.',
                          ),
                        ],
                      }),
                      e.jsx('div', {
                        className:
                          'p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400 mb-4',
                        children: e.jsx('p', {
                          className: 'text-amber-800 text-sm font-semibold',
                          children: t(
                            '⚠ 注意：此配置为完整覆盖，请替换文件中的所有内容，而非仅修改单个字段。',
                            '⚠ Note: This is a full replacement. Replace the entire file content, not just individual fields.',
                          ),
                        }),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '其中 model_reasoning_effort 可选值为 high、medium、low，分别代表模型思考的努力程度（高、中、低）。',
                          "The model_reasoning_effort field accepts high, medium, or low, representing the model's reasoning effort level.",
                        ),
                      }),
                      e.jsx(r, {
                        language: 'toml',
                        code: `model_provider = "__DOCS_PROJECT_KEY__"
model = "gpt-5.3-codex"
model_reasoning_effort = "high"
disable_response_storage = true
preferred_auth_method = "apikey"

[model_providers.__DOCS_PROJECT_KEY__]
name = "__DOCS_PROJECT_KEY__"
base_url = "__DOCS_BASE_URL__/v1"
wire_api = "responses"`,
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '第三步：启动 Codex',
                          'Step 3: Launch Codex',
                        ),
                      }),
                      e.jsx('div', {
                        className:
                          'p-4 bg-red-50 rounded-lg border-l-4 border-red-400 mb-4',
                        children: e.jsx('p', {
                          className: 'text-red-800 text-sm font-bold',
                          children: t(
                            '重启终端！重启终端！重启终端！',
                            'Restart your terminal! Restart your terminal! Restart your terminal!',
                          ),
                        }),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700',
                        children: t(
                          '配置完成后，请务必重启终端，然后即可正常使用 Codex。',
                          'After configuration, make sure to restart your terminal, then you can use Codex normally.',
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      case 'librechat':
        return e.jsx(u, {
          title: t('LibreChat', 'LibreChat'),
          content: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', {
                className: 'lead text-xl text-gray-600 mb-8',
                children: t(
                  'LibreChat 是开源的多模型对话平台，支持 OpenAI 兼容 API。通过简单配置即可接入 __DOCS_PROJECT_NAME__。',
                  'LibreChat is an open-source multi-model chat platform that supports OpenAI-compatible APIs. Connect it to __DOCS_PROJECT_NAME__ with simple configuration.',
                ),
              }),
              e.jsxs('div', {
                className: 'space-y-10',
                children: [
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t('什么是 LibreChat？', 'What is LibreChat?'),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          'LibreChat 是一个开源的 AI 对话平台，提供类似 ChatGPT 的用户界面，支持多种模型提供方。它可以通过 Docker 快速部署，并支持 OpenAI 兼容的 API 接口。',
                          'LibreChat is an open-source AI chat platform that provides a ChatGPT-like user interface with support for multiple model providers. It can be quickly deployed via Docker and supports OpenAI-compatible API endpoints.',
                        ),
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '步骤 1：克隆仓库',
                          'Step 1: Clone Repository',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '首先将 LibreChat 拉取到本机：',
                          'First, clone LibreChat to your local machine:',
                        ),
                      }),
                      e.jsx(r, {
                        language: 'bash',
                        code: `git clone https://github.com/danny-avila/LibreChat.git
cd LibreChat`,
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '步骤 2：创建配置文件',
                          'Step 2: Create Configuration File',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '复制示例配置文件：',
                          'Copy the example configuration file:',
                        ),
                      }),
                      e.jsx(r, {
                        language: 'bash',
                        code: 'cp .env.example .env',
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '步骤 3：编辑配置',
                          'Step 3: Edit Configuration',
                        ),
                      }),
                      e.jsxs('p', {
                        className: 'text-gray-700 mb-4',
                        children: [
                          t('用编辑器打开', 'Open the'),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-2 py-1 rounded text-sm',
                            children: '.env',
                          }),
                          t(
                            '文件，添加以下配置：',
                            ' file with your editor and add the following configuration:',
                          ),
                        ],
                      }),
                      e.jsx(r, {
                        language: 'bash',
                        code: `# 你的第三方 OpenAI 兼容 API Key
# Your third-party OpenAI-compatible API Key
OPENAI_API_KEY="sk-your___DOCS_PROJECT_KEY___key"

# 你的第三方 OpenAI 兼容 baseURL（必须写到 /v1）
# Your third-party OpenAI-compatible baseURL (must include /v1)
OPENAI_REVERSE_PROXY="__DOCS_BASE_URL__/v1"

# 手动声明可用模型（逗号分隔，不要空格，第一个为默认模型）
# Manually declare available models (comma-separated, no spaces, first one is default)
OPENAI_MODELS="gpt-4o-mini,gpt-4.1-mini,gpt-4o,claude-sonnet-4-20250514"`,
                      }),
                      e.jsxs('div', {
                        className:
                          'mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200',
                        children: [
                          e.jsx('h4', {
                            className: 'font-semibold text-gray-900 mb-2',
                            children: t('配置说明', 'Configuration Notes'),
                          }),
                          e.jsxs('ul', {
                            className:
                              'text-gray-700 text-sm space-y-2 ml-4 list-disc',
                            children: [
                              e.jsxs('li', {
                                children: [
                                  e.jsx('code', {
                                    className: 'bg-gray-100 px-1 rounded',
                                    children: 'OPENAI_API_KEY',
                                  }),
                                  ' — ',
                                  t(
                                    '填入你的 __DOCS_PROJECT_NAME__ Key（以 sk- 开头）',
                                    'Your __DOCS_PROJECT_NAME__ Key (starts with sk-)',
                                  ),
                                ],
                              }),
                              e.jsxs('li', {
                                children: [
                                  e.jsx('code', {
                                    className: 'bg-gray-100 px-1 rounded',
                                    children: 'OPENAI_REVERSE_PROXY',
                                  }),
                                  ' — ',
                                  t(
                                    '__DOCS_PROJECT_NAME__ 的 OpenAI 兼容端点，必须以 /v1 结尾',
                                    '__DOCS_PROJECT_NAME__ OpenAI-compatible endpoint, must end with /v1',
                                  ),
                                ],
                              }),
                              e.jsxs('li', {
                                children: [
                                  e.jsx('code', {
                                    className: 'bg-gray-100 px-1 rounded',
                                    children: 'OPENAI_MODELS',
                                  }),
                                  ' — ',
                                  t(
                                    '可用模型列表，第一个模型将作为默认选项',
                                    'Available models list, first model will be the default',
                                  ),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('section', {
                    children: [
                      e.jsx('h2', {
                        className: 'text-2xl font-bold text-gray-900 mb-4',
                        children: t(
                          '步骤 4：启动服务',
                          'Step 4: Start the Service',
                        ),
                      }),
                      e.jsx('p', {
                        className: 'text-gray-700 mb-4',
                        children: t(
                          '在终端运行以下命令启动 LibreChat：',
                          'Run the following command in your terminal to start LibreChat:',
                        ),
                      }),
                      e.jsx(r, {
                        language: 'bash',
                        code: 'docker compose up -d',
                      }),
                      e.jsxs('p', {
                        className: 'text-gray-600 text-sm mt-3',
                        children: [
                          t('启动完成后，访问', 'After startup, visit'),
                          ' ',
                          e.jsx('code', {
                            className: 'bg-gray-100 px-1 rounded',
                            children: 'http://localhost:3080',
                          }),
                          t(' 即可使用 LibreChat。', ' to use LibreChat.'),
                        ],
                      }),
                    ],
                  }),
                  e.jsx('section', {
                    children: e.jsxs('div', {
                      className:
                        'p-5 bg-gray-50 rounded-lg border border-gray-200',
                      children: [
                        e.jsx('h4', {
                          className: 'font-bold text-gray-900 mb-2',
                          children: t('快速回顾', 'Quick Summary'),
                        }),
                        e.jsxs('ol', {
                          className:
                            'text-sm text-gray-700 space-y-2 list-decimal pl-4',
                          children: [
                            e.jsxs('li', {
                              children: [
                                t('克隆仓库：', 'Clone repository:'),
                                ' ',
                                e.jsx('code', {
                                  className: 'bg-white px-1 rounded border',
                                  children:
                                    'git clone https://github.com/danny-avila/LibreChat.git',
                                }),
                              ],
                            }),
                            e.jsxs('li', {
                              children: [
                                t('创建配置：', 'Create config:'),
                                ' ',
                                e.jsx('code', {
                                  className: 'bg-white px-1 rounded border',
                                  children: 'cp .env.example .env',
                                }),
                              ],
                            }),
                            e.jsxs('li', {
                              children: [
                                t('编辑', 'Edit'),
                                ' ',
                                e.jsx('code', {
                                  className: 'bg-white px-1 rounded border',
                                  children: '.env',
                                }),
                                ' ',
                                t(
                                  '设置 __DOCS_PROJECT_NAME__ Key 和模型',
                                  'to set __DOCS_PROJECT_NAME__ Key and models',
                                ),
                              ],
                            }),
                            e.jsxs('li', {
                              children: [
                                t('启动服务：', 'Start service:'),
                                ' ',
                                e.jsx('code', {
                                  className: 'bg-white px-1 rounded border',
                                  children: 'docker compose up -d',
                                }),
                              ],
                            }),
                            e.jsxs('li', {
                              children: [
                                t('访问', 'Visit'),
                                ' ',
                                e.jsx('code', {
                                  className: 'bg-white px-1 rounded border',
                                  children: 'http://localhost:3080',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      default:
        return e.jsx(u, {
          title: 'Welcome',
          content: e.jsx('p', { children: 'Select an item from the sidebar.' }),
        });
    }
  },
  Y = ({
    item: s,
    level: n = 0,
    activeId: t,
    onSelect: o,
    expandedIds: i,
    toggleExpand: l,
  }) => {
    const d = s.children && s.children.length > 0,
      m = i.has(s.id),
      x = t === s.id;
    return e.jsxs('li', {
      children: [
        e.jsxs('div', {
          className: `
          docs-nav-item grid grid-cols-[20px_minmax(0,1fr)_20px] items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-sm font-medium transition-colors
          ${x ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}
          ${n > 0 ? 'docs-nav-item--nested' : ''}
        `,
          onClick: (f) => {
            d ? l(s.id) : o(s.id);
          },
          children: [
            e.jsxs('div', {
              className: 'contents',
              children: [
                e.jsx('span', {
                  className: x
                    ? 'docs-nav-icon text-blue-600'
                    : 'docs-nav-icon text-gray-400 group-hover:text-gray-600',
                  children: s.icon || null,
                }),
                e.jsx('span', {
                  className: 'docs-nav-title truncate',
                  children: s.title,
                }),
              ],
            }),
            e.jsx('span', {
              className: 'docs-nav-arrow text-gray-400',
              children: d ? (m ? e.jsx($, {}) : e.jsx(Q, {})) : null,
            }),
          ],
        }),
        d &&
          m &&
          e.jsx('ul', {
            className:
              'docs-nav-children mt-1 space-y-0.5 border-l border-gray-100',
            children: s.children.map((f) =>
              e.jsx(
                Y,
                {
                  item: f,
                  level: n + 1,
                  activeId: t,
                  onSelect: o,
                  expandedIds: i,
                  toggleExpand: l,
                },
                f.id,
              ),
            ),
          }),
      ],
    });
  },
  fe = () => {
    const { i18n: s } = I(),
      n = s.language && s.language.startsWith('zh'),
      t = B(),
      { docId: o } = F(),
      [statusState] = y.useContext(StatusContext),
      projectName = getDocsProjectName(
        statusState == null ? void 0 : statusState.status,
      ),
      i = 'quickstart',
      [l, d] = y.useState(i),
      [m, x] = y.useState(!1),
      [f, p] = y.useState(new Set()),
      g = y.useMemo(() => ie(n), [n]),
      k = y.useMemo(() => le(g.main), [g]),
      N = (h) => {
        p((v) => {
          const w = new Set(v);
          return w.has(h) ? w.delete(h) : w.add(h), w;
        });
      };
    y.useEffect(() => {
      const h = typeof o == 'string' && o.length > 0;
      if (h && o === i) {
        t('/docs', { replace: !0 }), d(i);
        return;
      }
      if (h && !k.has(o)) {
        t('/docs', { replace: !0 }), d(i);
        return;
      }
      if (h) {
        d(o);
        return;
      }
      d(i);
    }, [o, k, t]);
    const P = (h) => {
      const v = h === i ? '/docs' : `/docs/${h}`;
      d(h), t(v), x(!1), window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return e.jsxs('div', {
      className:
        'docs-page bg-white flex flex-col md:flex-row min-h-screen md:h-screen overflow-x-hidden md:overflow-hidden pt-24 md:pt-0',
      children: [
        e.jsxs('div', {
          className:
            'md:hidden h-14 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-20',
          children: [
            e.jsx('span', {
              className: 'font-bold text-gray-900',
              children: a(n, '文档', 'Documentation'),
            }),
            e.jsx('button', {
              onClick: () => x(!m),
              className: 'p-2 text-gray-600',
              children: e.jsx(X, {}),
            }),
          ],
        }),
        e.jsx('aside', {
          className: `
        docs-scrollable fixed inset-y-0 left-0 z-10 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out
        md:static md:inset-auto md:translate-x-0 md:flex-shrink-0 md:h-screen md:pt-28 md:overflow-y-auto
        ${m ? 'translate-x-0 overflow-y-auto pt-20' : '-translate-x-full'}
      `,
          children: e.jsx('div', {
            className: 'p-6',
            children: e.jsx('nav', {
              children: e.jsx('ul', {
                className: 'space-y-6',
                children: g.main.map((h) => {
                  var v;
                  return e.jsxs(
                    'li',
                    {
                      children: [
                        e.jsx('h3', {
                          className:
                            'px-3 text-sm font-bold text-gray-900 uppercase tracking-wide mb-3 mt-6 first:mt-0',
                          children: h.title,
                        }),
                        e.jsx('ul', {
                          className: 'space-y-1',
                          children:
                            (v = h.children) == null
                              ? void 0
                              : v.map((w) =>
                                  e.jsx(
                                    Y,
                                    {
                                      item: w,
                                      activeId: l,
                                      onSelect: P,
                                      expandedIds: f,
                                      toggleExpand: N,
                                    },
                                    w.id,
                                  ),
                                ),
                        }),
                      ],
                    },
                    h.id,
                  );
                }),
              }),
            }),
          }),
        }),
        e.jsx('div', {
          className: 'flex-1 min-w-0 md:h-screen md:overflow-hidden',
          children: e.jsx('main', {
            className:
              'flex-1 min-w-0 md:h-full md:overflow-y-auto md:pt-28 pb-12 md:pb-0',
            children: e.jsx('div', {
              className:
                'docs-content max-w-[1400px] mx-auto w-full p-6 md:p-10',
              children: me(n, l, projectName),
            }),
          }),
        }),
        m &&
          e.jsx('div', {
            className: 'fixed inset-0 bg-black/50 z-[5] md:hidden',
            onClick: () => x(!1),
          }),
      ],
    });
  };
export { fe as default };
