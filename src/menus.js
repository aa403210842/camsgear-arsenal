import { app, Menu } from 'electron'

const template = [
  {
    label: '编辑', // Edit
    submenu: [
      { role: 'undo', label: '撤销' },
      { role: 'redo', label: '重做' },
      { type: 'separator' },
      { role: 'cut', label: '剪切' },
      { role: 'copy', label: '复制' },
      { role: 'paste', label: '粘贴' }
    ]
  },
  {
    label: '视图', // View
    submenu: [
      { role: 'reload', label: '重新加载' },
      { role: 'forcereload', label: '强制重载' },
      { role: 'toggledevtools', label: '检测' },
      { type: 'separator' },
      { role: 'resetzoom', label: '实际大小' },
      { role: 'zoomin', label: '放大' },
      { role: 'zoomout', label: '缩小' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  {
    label: '窗口', // Window
    role: 'window',
    submenu: [
      { role: 'minimize', label: '最小化' },
      { role: 'close', label: '关闭窗口' }
    ]
  }
]

if (process.platform === 'darwin') {
  const name = app.getName()
  template.unshift({
    label: name,
    submenu: [
      { role: 'about', label: `关于 ${name}` },
      { type: 'separator' },
      {
        role: 'services',
        submenu: []
      },
      { type: 'separator' },
      { role: 'hide', label: '隐藏' },
      { role: 'hideothers', label: '隐藏其他应用' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit', label: '退出' }
    ]
  })
  // Window menu.
  template[3].submenu = [
    { role: 'close', label: '关闭窗口' },
    { role: 'minimize', label: '最小化' },
    { role: 'zoom', label: '缩放' }
    // { type: 'separator' },
    // { role: 'front', label: '前置全部窗口' }
  ]
}

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
