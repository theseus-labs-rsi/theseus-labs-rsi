# Theseus Lab website

Theseus 实验室主页，使用 React + TypeScript + Vite 构建，通过 GitHub Pages 自动部署。

## 本地开发

```bash
npm install
npm run dev
```

## 添加研究或 Blog

编辑 `src/data/research.ts`，添加一条研究记录即可出现在主页。需要详细页面时，可在 `src/App.tsx` 中扩展对应详情内容。

## 部署

推送到 `main` 分支会触发 `.github/workflows/deploy-pages.yml`，构建产物将发布到 GitHub Pages。

正式地址：<https://theseus-labs-rsi.github.io/>
