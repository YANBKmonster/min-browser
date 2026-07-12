# MinBrowser

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Electron](https://img.shields.io/badge/Electron-33+-47848F?logo=electron&logoColor=white)](https://electronjs.org)
[![Platform](https://img.shields.io/badge/Platform-Windows-0078D6)](https://github.com/YANBKmonster/min-browser)
[![GitHub stars](https://img.shields.io/github/stars/YANBKmonster/min-browser?style=social)](https://github.com/YANBKmonster/min-browser)

[中文](README.md) | [🌏 English](README.en.md)

A minimal Chromium browser built with Electron.

## Downloads

Get the latest version from [Releases](https://github.com/YANBKmonster/min-browser/releases):

| Platform | File | Description |
|----------|------|-------------|
| Windows | `MinBrowser-*-Setup.exe` | Installer (recommended) |
| Windows | `MinBrowser-*-portable.exe` | Portable (extract & run) |

## Features

- Chromium-based (Electron)
- Address bar navigation
- Forward / Back / Reload
- Windows only

## Quick Start

```bash
# Clone
git clone https://github.com/YANBKmonster/min-browser.git
cd min-browser

# Install dependencies
npm install

# Start
npm start
```

## Build Installer

```bash
npm run build
```

Output in `dist/`:

| Platform | File | Type |
|----------|------|------|
| Windows | `MinBrowser-*-Setup.exe` | NSIS installer |
| Windows | `MinBrowser-*-portable.exe` | Portable |
| Windows | `win-unpacked/MinBrowser.exe` | Unpacked |

## Tech Stack

- **Electron** — Chromium + Node.js runtime
- **electron-builder** — Windows build automation
- **NSIS** — Windows installer

## License

[MIT](LICENSE)
