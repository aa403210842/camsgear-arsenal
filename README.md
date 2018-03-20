# 安装准备

## 安装第三方打包工具 electron-forge
```
yarn global add electron-forge
# or
npm install electron-forge -g
```

## 镜像加速 安装
```
ELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron/ yarn install
# or
ELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron/ npm install
```

# 打包编译

```
--platform=<platform>
```

```
--arch=<arch>
```

## macOS应用

## win应用
Windows 提供
- ia32 (x86)
- amd64 (x64)