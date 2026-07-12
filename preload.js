const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('browserAPI', {
  navigate: (url) => ipcRenderer.send('navigate', url),
  goBack: () => ipcRenderer.send('go-back'),
  goForward: () => ipcRenderer.send('go-forward'),
  reload: () => ipcRenderer.send('reload'),
  stop: () => ipcRenderer.send('stop'),
  createWebview: () => ipcRenderer.send('create-webview'),
  resizeWebview: () => ipcRenderer.send('resize-webview'),
  onUrlChanged: (callback) => ipcRenderer.on('url-changed', (_, url) => callback(url)),
})
