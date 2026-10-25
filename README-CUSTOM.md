# 抖音优化 · 简洁版 — 开发与使用说明

这是从 [WhiteSevs/TamperMonkeyScript](https://github.com/WhiteSevs/TamperMonkeyScript) 的「抖音优化」派生的 E7G 定制版本。**当前分支仅保留抖音脚本及其构建必需组件**；上游其他项目已从当前源码树移除。

## 安装

- 推荐从 [GitHub Releases](https://github.com/E7G/TamperMonkeyScript/releases/latest) 安装 `douyin-clean.user.js`，或者使用 [仓库编译成品](https://raw.githubusercontent.com/E7G/TamperMonkeyScript/master/scripts-vite/%E6%8A%96%E9%9F%B3%E4%BC%98%E5%8C%96/dist/%E6%8A%96%E9%9F%B3%E4%BC%98%E5%8C%96%EF%BC%88%E7%AE%80%E6%B4%81%E7%89%88%EF%BC%89.user.js)。
- 使用 Edge/Chrome 的 Tampermonkey 或 Violentmonkey 扩展。**请停用其他版本「抖音优化」**，避免重复注入。
- 安装后刷新抖音。抖音网页更新时原生入口可能需要随 DOM 调整，用户仍可使用用户脚本管理器的原生配置菜单。

## 定制功能

- **广告过滤：** 默认打开，用上游现有的 `isAds` 广告判定，不按关键词误杀普通视频；不保证覆盖全部广告。
- **简洁预设：** 仅首次运行设置部分开关，隐藏 AI、短剧、小游戏、冗余弹幕和提示；保留正常观看、搜索、评论、消息等。此后可以自行关闭某个选项。
- **原生设置：** 在抖音 `.WYX6tGGi` 图标组内，原始设置齿轮旁增加独立“优化设置”图标，不替换原始功能，也不添加悬浮入口。
- **下载按钮：** 位于播放器右侧控制组的 `.xgplayer-pip` 小窗模式按钮之后，播放列表变化时检测并维持位置。
- **规则存储：** 不清空原有自定义过滤规则。

## 编译

此 Fork 为单脚本 pnpm 工程，保留 `script-components` 与 `lib/CoverUMD` 等构建支持文件。在根目录运行：

```bash
pnpm install
pnpm --dir scripts-vite/抖音优化 exec vue-tsc --noEmit
pnpm --dir scripts-vite/抖音优化 exec vite build
pnpm --dir scripts-vite/抖音优化 exec vite build --minify --no-emptyOutDir
```

输出：`scripts-vite/抖音优化/dist/抖音优化（简洁版）.user.js`（普通版）及 `抖音优化（简洁版）.min.user.js`（压缩版）。GitHub Actions 使用同一套构建流程。

## 许可证与上游

源自 WhiteSevs 项目的抖音优化，保留原作者署名、Git 历史与仓库 `LICENSE`（GPL-3.0）。E7G 维护这里的额外修改，和原作者、抖音官方均无官方关联。问题反馈请使用本仓库 Issues。
