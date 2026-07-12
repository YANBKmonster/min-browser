# MinBrowser

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Electron](https://img.shields.io/badge/Electron-33+-47848F?logo=electron&logoColor=white)](https://electronjs.org)
[![Platform](https://img.shields.io/badge/Platform-Windows-0078D6)](https://github.com/YANBKmonster/min-browser)
[![GitHub stars](https://img.shields.io/github/stars/YANBKmonster/min-browser?style=social)](https://github.com/YANBKmonster/min-browser)

一个极简的 Chromium 浏览器，基于 Electron 构建。

## 下载

从 [Releases](https://github.com/YANBKmonster/min-browser/releases) 页面下载最新版本：

| 平台 | 文件 | 说明 |
|------|------|------|
| Windows | `MinBrowser-*-Setup.exe` | 安装包（推荐） |
| Windows | `MinBrowser-*-portable.exe` | 便携版（解压即用） |

## 功能

- 基于 Chromium 内核（Electron）
- 地址栏导航
- 前进 / 后退 / 刷新
- 支持 Windows 平台

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

| 平台 | 文件 | 类型 |
|------|------|------|
| Windows | `MinBrowser-*-Setup.exe` | NSIS 安装包 |
| Windows | `MinBrowser-*-portable.exe` | 便携版 |
| Windows | `win-unpacked/MinBrowser.exe` | 解压即用 |

## 技术栈

- **Electron** — Chromium + Node.js 运行时
- **electron-builder** — Windows 自动构建
- **NSIS** — Windows 安装包制作

## 许可证

[MIT](LICENSE)