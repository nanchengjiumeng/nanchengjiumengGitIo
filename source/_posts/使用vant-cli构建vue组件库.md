---
title: 使用vant-cli构建vue组件库
date: 2020-05-12 17:51:37
tags: vue vant vant-cli
---
# 构建

参考vant开发人员提供的demo：

[vant-cli demo](https://github.com/youzan/vant-demo/tree/master/vant-cli/base) 

# 遇到的问题

问题：搭建好demo后，用vue-cli构建一个vue项目，用`yarn link`引用vant-cli demo项目. `Home.vue`代码如下:

![代码](/iamges/vant-cli/vant-cli-demo-1.png)

在vue-cli项目中运行`yarn build`，发现打包好发现有js文件的大小有200kb左右，vue不到80kb，vue-route 30kb左右，这样算一个空项目不应该有真么大。用`webpack-bundle-analyzer`分析一下：

![webpack-bundle-analyzer 结果](/iamges/vant-cli/vant-cli-modules-repeat.png)

居然打包后文件里有两份vue代码. 排查后发现当vant-cli组件库下的node_modules中包含vue的时候，会多打包处一份vue代码，具体原因没找到。

当组件库发不到npm后，用`npm install`安装不会包含`node_modules`，所以这个问题不影响正常使用包。