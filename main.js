const { app, BrowserWindow, BrowserView, ipcMain } = require('electron')
const path = require('path')

if (process.platform === 'win32') {
  app.setAppUserModelId('MinBrowser')
}

let mainWindow
let webview
let currentLang = 'zh'

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  mainWindow.loadFile('browser.html')

  ipcMain.on('navigate', (_, url) => {
    if (webview) webview.webContents.loadURL(url)
  })

  ipcMain.on('go-back', () => {
    if (webview && webview.webContents.canGoBack()) webview.webContents.goBack()
  })

  ipcMain.on('go-forward', () => {
    if (webview && webview.webContents.canGoForward()) webview.webContents.goForward()
  })

  ipcMain.on('reload', () => {
    if (webview) webview.webContents.reload()
  })

  ipcMain.on('set-lang', (_, lang) => { currentLang = lang })

  ipcMain.on('open-help', () => {
    if (webview) webview.webContents.loadURL(`file://${path.join(__dirname, 'help.html').replace(/\\/g, '/')}?lang=${currentLang}`)
  })

  ipcMain.on('stop', () => {
    if (webview) webview.webContents.stop()
  })

  ipcMain.on('create-webview', () => {
    if (webview) {
      mainWindow.removeBrowserView(webview)
      webview = null
    }

    webview = new BrowserView({
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      },
    })

    mainWindow.addBrowserView(webview)
    resizeWebview()
    webview.webContents.loadURL('https://cn.bing.com')

    webview.webContents.on('page-title-updated', (_, title) => {
      mainWindow.setTitle(title)
    })

    webview.webContents.on('did-navigate', (_, url) => {
      mainWindow.webContents.send('url-changed', url)
    })

    webview.webContents.on('did-navigate-in-page', (_, url) => {
      mainWindow.webContents.send('url-changed', url)
    })
  })

  ipcMain.on('resize-webview', () => {
    resizeWebview()
  })

  mainWindow.on('resize', () => {
    resizeWebview()
  })
}

function resizeWebview() {
  if (!webview || !mainWindow) return
  const bounds = mainWindow.getBounds()
  webview.setBounds({ x: 0, y: 50, width: bounds.width, height: bounds.height - 50 })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
