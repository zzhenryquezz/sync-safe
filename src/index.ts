import { app, BrowserWindow } from 'electron'

app.on('ready', () => {
  const window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  })

  window.loadURL('http://localhost:8080')

  window.on('close', () => {
    app.quit()
  })
})
