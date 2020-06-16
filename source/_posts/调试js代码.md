---
title: 调试js代码
date: 2020-06-10 14:19:20
tags:
  - debug
  - js
---
## 相关链接

  - [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/)
  - [chrome-remote-interface(GitHub)](https://github.com/cyrus-and/chrome-remote-interface/)
  - [Debugger for Microsoft Edge](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-edge)

## 如何使用vscode调试浏览器中执行的js代码

### use DevTools as protocol client

1. chrome打开的时候增加参数`--remote-debugging-port=9229`。

```bash
/Applications/Microsoft\ Edge.app/Contents/MacOS/Microsoft\ Edge --remote-debugging-port=9229
```

2. 执行上述命令，将打开浏览器`1`，此时`9229`端口将被作为通信端口被占用。

3. 然后，再打开一个chrome客户端`--user-data-dir=/Users/ricardo/Downloads/SuperCar-master/dist`

```bash
/Applications/Microsoft\ Edge.app/Contents/MacOS/Microsoft\ Edge --user-data-dir=/Users/ricardo/Downloads/SuperCar-master/dist
```

4. 执行上述命令，将新建一个chrome实例子，并打开该实例。

5. 在新打开的浏览器中访问`localhost:9229`, 将附加到浏览器`1`的所有tab进行调试。

### 使用vscode调试vue项目

1. 在vscode的插件市场下载并安装[Debugger for Microsoft Edge](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-edge).

2. 在`vue.config.js`中修改webpack配置[devtool](https://webpack.js.org/configuration/devtool/#root).

  ```js
    configureWebpack: {
        devtool: 'source-map' 
    }
  ```

3. 在左侧[Activity Bar](https://code.visualstudio.com/docs/getstarted/userinterface)配置启动项,`.vscode/lunch.json`.

  ```json
    {
      "type": "edge",
      "request": "launch",
      "name": "Launch Edge",
      "url": "http://localhost:8081", // 端口与vue项目的dev server端口一致
      "webRoot": "${workspaceFolder}/src",
      "breakOnLoad": true,
      "sourceMapPathOverrides": {
        "webpack:///./src/*": "${webRoot}/*",
        "webpack:///src/*": "${webRoot}/*",
        "webpack:///*": "*",
        "webpack:///./~/*": "${webRoot}/node_modules/*"
      }
    }
  ```

4. `npm run serve` 启动vue项目.

5. 启动vscode 调试，`F5`或者在`Activity Bar`的`Run`中点击绿色箭头。

6. vscode底部的`status bar`由蓝色变为黄色，右上角显示调试栏，链接成功。即可在代码中进行加断点调试.

> 注意: 如果出现端口超时， 可能浏览器的`--remote-debugging-port=9229`字段中的端口号，与调试配置中的端口号不一致。 可以将`Edge`进程杀死后，重新操作`步骤5`, vscode会启动一个端口一致的新浏览器实例。






