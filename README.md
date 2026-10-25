# 抖音优化 · 简洁版

基于 [WhiteSevs/TamperMonkeyScript](https://github.com/WhiteSevs/TamperMonkeyScript) 的 **抖音优化** 用户脚本，E7G 维护的精简定制版。本仓库 **仅维护抖音这一款脚本**，不包含上游其他网站脚本。

[**下载安装（GitHub Releases）**](https://github.com/E7G/TamperMonkeyScript/releases/latest) · [**安装普通版 .user.js**](https://github.com/E7G/TamperMonkeyScript/releases/latest/download/douyin-clean.user.js) · [**问题反馈**](https://github.com/E7G/TamperMonkeyScript/issues)

## 主要功能

- 默认过滤可识别的广告视频，沿用脚本的 `isAds` 判定规则，不简单屏蔽含有“广告”关键词的普通视频。
- 首次运行启用简洁预设，隐藏部分无用入口、AI 控件、弹幕和多余提示，保留搜索、关注、评论、消息等基本功能。
- 在抖音原生设置图标组增加“优化设置”图标，不生成侧栏或浮动设置入口。
- 视频播放器的 **下载** 按钮放在 **小窗模式** 的右侧。
- 保留原脚本自定义视频过滤规则及配置面板，开关可以按个人需要再调整。

## 安装与更新

1. 在 Edge / Chrome 中启用 Tampermonkey、Violentmonkey 或同类用户脚本扩展。
2. 在 [Releases](https://github.com/E7G/TamperMonkeyScript/releases/latest) 下载普通版 `douyin-clean.user.js` 并安装。
3. **禁用原作者版本及历史定制版本**，避免在 `douyin.com` 重复注入。
4. 刷新抖音网页版。脚本包含本仓库的更新地址，供用户脚本扩展检查更新。

也可使用仓库内的 [构建成品](scripts-vite/抖音优化/dist/抖音优化（简洁版）.user.js)。

## 目录结构

- `scripts-vite/抖音优化/`：唯一的用户脚本、配置与编译成品
- `script-components/`：该脚本使用的公共 UI 和设置组件
- `lib/CoverUMD/`：构建脚本所需的兼容辅助库
- `types/` 与根目录配置：TypeScript、Vite、pnpm 的工程支持

本项目保留必需的共享基础设施，但不再包含其他网站的用户脚本。

## 本地构建

安装 Node.js 22+ 与 pnpm 10 后，在仓库根目录执行：

```bash
pnpm install
pnpm --dir scripts-vite/抖音优化 exec vue-tsc --noEmit
pnpm --dir scripts-vite/抖音优化 exec vite build
```

详细说明参见 [README-CUSTOM.md](README-CUSTOM.md)。

## 来源与授权

原脚本作者 **WhiteSevs**，本定制版由 **E7G** 维护。本项目从原仓库 Fork 而来，版权与原作者署名保留，遵守 [GPL-3.0-only](LICENSE)。本仓库不是原项目官方分支，也与抖音官方无关。当前网页 DOM 与接口可能变化，构建成功不意味着所有页面都已完成浏览器实测。
