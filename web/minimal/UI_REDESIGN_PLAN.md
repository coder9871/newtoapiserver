# UI Redesign Plan for `web/minimal`

## Goal

在不修改接口、路由语义、数据结构和业务交互逻辑的前提下，重做 `web/minimal` 的整体视觉语言与页面外壳，让现有前端从“常规后台”升级为“有品牌感、有层次、有惊艳度”的界面。

核心约束：

- 不改接口协议
- 不改页面功能
- 不改业务流程
- 只改 UI 布局、视觉风格、容器关系、样式 token、交互细节

## New Design Direction

> 方向已于 2026-06-04 最终确定为 **b.ai 单色（暖象牙白 + 近黑主色）**。
> 早期文档里的“琥珀色 + 青绿辅助”方向已废弃，相关彩色已从代码中清理。

最终方向：

- 暖象牙白纸张感背景（`#fffdf7`）
- 近黑作为唯一主强调色（`#18181b`），按钮黑底白字、胶囊圆角
- 不引入彩色强调，靠层次 / 留白 / 字重建立秩序
- 语义色（success / warning / danger）保留，数据可视化的分类色板保留
- 顶栏和侧栏使用半透明玻璃容器（中性色）
- 内容区光斑 / 网格纹理保留但收敛为极淡中性
- 导航采用胶囊式高端控制台风格

颜色单一来源：`src/styles/bai-theme.css` 拥有所有 Semi `--semi-color-*` token；
`src/index.css` 只定义壳层专用 `--app-*` token（全部中性单色）。

目标观感关键词：

- Editorial
- Warm Ivory
- Monochrome
- Premium
- Layered
- Confident

## Scope

本轮优先改“全局壳层”，让所有已有页面自动继承新风格。

优先级 1：

- 顶栏 Header
- 侧栏 Sidebar
- 全局背景和设计 token
- 通用容器质感
- 常用 Semi 组件的圆角、边框、阴影、激活态

优先级 2：

- 首页
- Dashboard
- Pricing
- Playground
- 列表页表格容器

优先级 3：

- 表单页视觉一致性
- 弹窗、侧滑面板、空状态、骨架屏
- 移动端细化
- 深色模式细化

## Files Already Touched

当前已经开始动这些文件：

- `web/minimal/src/components/layout/PageLayout.jsx`
- `web/minimal/src/components/layout/SiderBar.jsx`
- `web/minimal/src/components/layout/headerbar/index.jsx`
- `web/minimal/src/components/layout/headerbar/Navigation.jsx`
- `web/minimal/src/components/layout/headerbar/HeaderLogo.jsx`
- `web/minimal/src/index.css`

## What Has Been Implemented

### 1. Global shell rebuild

`PageLayout.jsx` 已改成新的壳层结构：

- 顶栏作为独立浮层容器
- 侧栏下移，和顶栏形成分离式布局
- 内容区增加背景装饰层
- 内容页包进新的 shell page 容器
- 控制台页面内边距重新调整

### 2. Header redesign

`headerbar/index.jsx` 已改为：

- 更厚的浮层顶栏
- 更强的左右区块分组
- 导航、用户操作、品牌区域更清晰

`Navigation.jsx` 已改为：

- 顶部导航从普通文本链接改为胶囊式 hover/active 风格

`HeaderLogo.jsx` 已改为：

- 品牌图标外层增加高光容器
- 标题和标识更偏品牌化展示

### 3. Sidebar redesign

`SiderBar.jsx` 已改为：

- 侧栏整体变为玻璃卡片
- 增加竖向强调 rail
- 各区块增加 section eyebrow
- 导航项变成大圆角卡片式入口
- 折叠按钮样式与新风格统一

### 4. Global theme tokens

`index.css` 已新增或改造：

- 新的全局色板变量
- 亮色/暗色两套壳层 token
- 页面背景渐变和装饰光斑
- 顶栏和侧栏的容器样式
- Semi 组件基础圆角/边框/阴影统一
- Tabs、Buttons、Cards、Inputs、Tables 的整体质感升级

## Current Status

当前状态（更新于 2026-06-05，第三轮继续推进后）：

- 设计语言冲突清理（上一轮）已完成，全站统一 b.ai 单色。
- **本轮（第二轮）已完成 Phase A→D 的核心收口**，详见下方「第二轮进展」。
- `bun run build` 已于 2026-06-05 本地跑通；当前无编译错误。仍保留既有体积 warning（大 chunk / lottie `eval`），但与本轮 UI 改动无关。

### 第二轮进展（Phase A–D 核心）

基础层 L1–L5（最高杠杆，传播全站）：
- `--app-shell-border` 对比上调（0.08→0.12 / 暗 0.08→0.10）、暗色阴影减弱（0.42→0.28）。
- `.app-shell-main` 内边距改对称（`0 18px 18px 18px`），修内容区贴侧栏。
- 侧栏 PageLayout `top` 硬编码 84px → `var(--app-header-height)`；`table-scroll-card` 110px → 关联 header 变量。
- bai-theme.css 新增 token 归属注释 + 编辑级排版尺度（`.editorial-*`）+ 共享 `.dashboard-panel-*` / `.admin-page-head`。
- 颜色逃逸收口：`.sbg-variant-*` 五彩 → 单色（保留 class 兼容 Pricing 筛选器）、`blur-ball` / `with-pastel-balls` → 中性、`channel-affinity-tag` 青 → 单色。语义绿（折扣）与数据可视化分类色保留。

Phase A 壳层：顶栏新增 `.active` 当前页指示、暗色侧栏图标去暖桃改中性、折叠态对称留白、Footer 去 `#FFD166` 黄球、HeaderLogo badge 去 purple/blue。

Phase B 关键页：
- Home：标题行高 1.05→1.16、meta 卡 hover/字重/留白、聚焦光环增强、暗色容器加实。
- Dashboard：面板灰阶硬编码 → Semi token（修暗色失效）、分区间距加大。
- Pricing：命令面板渐变去青绿、inline metric / toggle 去暖色玻璃、卡片 hover 加深、头像去装饰、标题层级加强、表头去灰填充。
- Playground：发送 CTA / 设置·调试图标 / loading·系统消息渐变 → 单色，消息操作 hover 统一中性（删除保留 danger）。

Phase C 表格：滚动条 token 中性化、5 个 `*Description` 图标+标题统一近黑加粗、CardTable 移动端标签 token 化 + 行距。

Phase D 弹层：遮罩中性化 + 模糊、弹窗抬升阴影、Modal/SideSheet 头脚发丝线、底部按钮胶囊化、RiskAcknowledgementModal 灰阶 token 化（橙色 warning 语义保留）。

### 第三轮进展（Phase C 深化）

- 新增共享后台页头组件：`src/components/common/ui/AdminPageHeader.jsx`
- `Tokens / Users / Models / Redemptions / Subscriptions` 的 description 区已切到统一 editorial 页头
- `Channels / Model Deployments` 之前缺少真正页头，现已补上 description 区并接入共享页头
- `ModelsActions / DeploymentsActions` 中的紧凑模式开关已上移到页头，减少操作条视觉噪音，让筛选与批量按钮层次更清楚
- `Usage Logs / Task Logs / Midjourney Logs` 已从“仅统计条/提示条”升级为统一后台页头 + 次级信息区的双层结构
- `Setting` 页已补成“配置中心”页头，加入当前分区提示与分区总数标签，让大体量配置页先建立信息架构再进入 tabs
- `CardPro` 头部已开始系统化：`stats / actions / search` 区块新增共享 section chrome，统一圆角、描边、输入胶囊化与按钮尺度
- `Usage Logs` 的统计 tag 与 `Task/MJ Logs` 的提示文案已收回到单色语言，减少与全站 b.ai 单色方向的冲突
- 2026-06-05 已在浏览器抽查 `console/token`，确认页头、操作条、搜索条与表格外壳的层级收口方向成立
- `Channels / Models` 顶部 notice 已切到统一 `admin-page-notice` 样式，不再各自使用零散 inline 定位
- `Task Logs / Midjourney Logs` 已移除多余 `Layout` 包裹，减少默认容器感，页面结构更接近其他后台页
- 2026-06-05 再次执行 `bun run build`，当前这批共享层改动可稳定编译通过
- `Setting` 页已从单纯 tabs 容器升级为「配置中心」结构：顶部 quick-nav 分区导航 + 当前分区面板，长表单入口与上下文更清楚
- `Setting` 新增 overview / quicknav / panel 三层壳，减少“大量配置直接怼进 Tabs”带来的默认后台观感
- 2026-06-05 已为这轮设置页重构再次跑通 `bun run build`

仍待办：浏览器核对（亮/暗、移动、一个表单、一个弹窗）；按需推进 Phase C 各页筛选/批量区版式重构（当前页头层级已基本统一，但不少列表页的筛选条仍偏“组件默认堆叠”）；继续推进设置页 tab 导航与长表单节奏的深度细化。

## Remaining Work

后续建议按下面顺序继续。

### Phase A: Fix shell-level visual inconsistencies

重点检查：

- 顶栏在公开页面、控制台页面、移动端下的高度和平衡
- 侧栏折叠态图标、文本、留白
- 内容区与表格页的外边距是否统一
- 暗色模式下玻璃层的对比度

### Phase B: Key page redesign

优先页面：

- `src/pages/Home`
- `src/pages/Dashboard`
- `src/pages/Pricing`
- `src/pages/Playground`

这些页面需要单独设计，不应只依赖全局皮肤。

建议：

- 首页做成更强品牌 landing
- Dashboard 强化“指标仪表盘”感
- Pricing 做成更高端、更像产品目录
- Playground 做成更沉浸的工作台

### Phase C: List pages and admin tables

目标页面：

- 渠道管理
- 令牌管理
- 用户管理
- 使用日志
- 模型管理

重点不是改字段，而是改：

- 页头结构
- 筛选条层次
- 表格容器
- 批量操作区
- 空状态和加载态

### Phase D: Modal and sheet system

统一这些组件的视觉：

- Modal
- SideSheet
- Drawer
- Confirm dialog
- Form section

目标是让弹层不再像默认组件库，而是属于同一套产品语言。

## Suggested Next Files

下一轮继续时，建议优先看这些文件：

- `web/minimal/src/pages/Home/index.jsx`
- `web/minimal/src/pages/Home/home.css`
- `web/minimal/src/pages/Dashboard/index.jsx`
- `web/minimal/src/components/dashboard/*`
- `web/minimal/src/pages/Pricing/index.jsx`
- `web/minimal/src/pages/Playground/index.jsx`
- `web/minimal/src/components/common/ui/CardPro.jsx`
- `web/minimal/src/components/common/ui/CardTable.jsx`

## Design Principles To Keep

继续改时请保持这些原则：

- 不要回到常规蓝白后台风格
- 不要只做局部 padding 微调，要保持整体语言统一
- 不要让每个页面长得像不同项目
- 不要堆太多渐变，重点是克制和高级感
- 优先改容器、层次、留白、版式，再改颜色
- 保持桌面端和移动端都可用

## Validation Checklist

每次继续改完后，至少检查：

- `bun run build`
- 首页
- 控制台主页面
- 一个表格页
- 一个表单页
- 一个弹窗
- 移动端顶部和侧栏
- 暗色模式

## Notes for Continuation

如果后续上下文中断，新的执行者只需要先做三件事：

1. 先读这个文件
2. 再看已修改的 6 个文件
3. 从 `Phase A` 开始继续收口，再进入 `Phase B`

## Optional Follow-up

如果要把这次改版做成更稳的长期工程，建议后续补：

- 独立的 design tokens 文件
- 壳层专用 CSS 分层
- 组件级视觉规范文档
- 截图对照清单
