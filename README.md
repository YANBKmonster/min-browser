# MinBrowser

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Electron](https://img.shields.io/badge/Electron-33+-47848F?logo=electron&logoColor=white)](https://electronjs.org)
[![Platform](https://img.shields.io/badge/Platform-Windows-0078D6?logo=windows&logoColor=white)](https://github.com/YANBKmonster/min-browser)
[![GitHub stars](https://img.shields.io/github/stars/YANBKmonster/min-browser?style=social)](https://github.com/YANBKmonster/min-browser)

一个极简的 Chromium 浏览器，基于 Electron 构建。

## 截图

![截图](https://cdn.jsdelivr.net/gh/YANBKmonster/min-browser/screenshots/screenshot.png)

## 功能

- 基于 Chromium 内核（Electron）
- 地址栏导航
- 前进 / 后退 / 刷新
- 安装包 & 便携版双模式发布

## 快速开始

```bash
# 克隆
git clone https://github.com/YANBKmonster/min-browser.git
cd min-browser

# 安装依赖
npm install

# 启动
npm start
```

## 构建安装包

```bash
npm run build
```

输出在 `dist/` 目录：

| 文件 | 类型 |
|------|------|
| `MinBrowser-*-Setup.exe` | NSIS 安装包 |
| `MinBrowser-*-portable.zip` | 便携版 |
| `win-unpacked/MinBrowser.exe` | 解压即用 |

## 技术栈

- **Electron** — Chromium + Node.js 运行时
- **NSIS** — Windows 安装包制作
- **electron-builder** — 自动构建

## 许可证

[MIT](LICENSE)
