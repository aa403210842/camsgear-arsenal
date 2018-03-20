import { app, autoUpdater, dialog } from 'electron'
import ms from 'ms'
import isDev from 'electron-is-dev'

const isLinux = process.platform === 'linux'
const eventName = isLinux ? 'update-available' : 'update-downloaded'
let isInited = false

const server = 'https://your-deployment-url.com'
const feed = `${server}/update/${process.platform}/${app.getVersion()}`
autoUpdater.setFeedURL(feed)

autoUpdater.on(eventName, (event, releaseNotes, releaseName) => {
  const dialogOpts = {
    type: 'info',
    buttons: ['重启安装', '稍后安装'],
    title: '应用更新',
    message: process.platform === 'win32' ? releaseNotes : releaseName,
    detail: '有可用新版本，重新启动应用程序以应用更新。'
  }

  dialog.showMessageBox(dialogOpts, response => {
    if (response === 0) autoUpdater.quitAndInstall()
  })
})

autoUpdater.on('error', error => {
  dialog.showErrorBox('更新应用出错了', error.message)
  console.error('> 更新应用出错了')
  console.error(error)
})

app.on('ready', () => {
  if (isInited) {
    return
  }
  isInited = true
  if (!isDev) {
    setTimeout(() => {
      autoUpdater.checkForUpdates()
    }, ms('10s'))

    // setInterval(() => {
    //   autoUpdater.checkForUpdates();
    // }, ms('30m'))
  }
})
