# 抖音优化 · 简洁版

这是 [WhiteSevs/TamperMonkeyScript](https://github.com/WhiteSevs/TamperMonkeyScript) 中「抖音优化」脚本的公开定制版（Fork），由 E7G 在原项目基础上修改。**这不是原作者的官方版本**，其他脚本仍保留在 Fork 中以便复用上游构建结构。

## 安装

- 推荐从 [GitHub Releases](https://github.com/E7G/TamperMonkeyScript/releases/latest) 获取 `douyin-clean.user.js`，用 Edge / Chrome 的 Tampermonkey、Violentmonkey 等用户脚本管理器安装。
- 也可以使用 [仓库中的已编译脚本](https://raw.githubusercontent.com/E7G/TamperMonkeyScript/master/scripts-vite/%E6%8A%96%E9%9F%B3%E4%BC%98%E5%8C%96/dist/%E6%8A%96%E9%9F%B3%E4%BC%98%E5%8C%96%EF%BC%88%E7%AE%80%E6%B4%81%E7%89%88%EF%BC%89.user.js)。
- 定制版使用独立脚本名称和命名空间。**请禁用其他同时生效的「抖音优化」版本**，避免重复注入、样式冲突。
- 刷新抖音网页版。若页面更新导致原生入口定位失效，仍可从油猴扩展菜单打开原项目的设置面板。

## 与原版的差异

- 默认使用脚本已有的 `isAds` 广告识别进行视频过滤，而非粗暴匹配广告关键词；只能过滤成功识别的广告视频。
- 首次运行应用一次简洁预设，隐藏部分 AI、小游戏、短剧、冗余弹幕与干扰元素；保留搜索、消息、评论等重要控件。之后可在配置中逐项修改。
- 把「优化设置」图标插入抖音原生设置图标的 `.WYX6tGGi` 容器内（定位齿轮和 `#btn-feelgood`），不再生成悬浮设置入口。
- 播放器底部下载按钮跟随「小窗模式」控件 `.xgplayer-pip`，在其右边显示。切换视频时避免重复添加。
- 保持原有自定义规则存储逻辑，不强制清除用户规则。

## 源码及构建

修改集中在 `scripts-vite/抖音优化/src` 及 `scripts-vite/抖音优化/vite.config.ts`。本 Fork 仍采用上游的 pnpm monorepo 结构：

```bash
pnpm install
pnpm --dir scripts-vite/抖音优化 exec vue-tsc --noEmit
pnpm --dir scripts-vite/抖音优化 exec vite build
```

构建结果：`scripts-vite/抖音优化/dist/抖音优化（简洁版）.user.js`。

## 原作者、许可与责任说明

本项目派生自 [WhiteSevs/TamperMonkeyScript](https://github.com/WhiteSevs/TamperMonkeyScript) 的「抖音优化」。原脚本作者为 **WhiteSevs**；本 Fork 的定制更改由 **E7G** 维护。保留上游 Git 提交历史、版权标识及仓库中的 `LICENSE`。该用户脚本声明使用 **GPL-3.0-only** 许可证，发布修改版时继续遵守相同条款。

这是社区定制版本，与抖音官方无关。网页 DOM 和接口可能变化；已完成 TypeScript 与生产构建检查，但不保证所有抖音页面版本都可正常运行。请通过本仓库 Issues 报告问题。
