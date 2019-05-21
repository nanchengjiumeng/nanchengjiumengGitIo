---
title: npm scripts
date: 2019-03-01 11:16:10
tags:
    - nodejs
---
参考链接:
- [scripts | npm](https://www.npmjs.cn/misc/scripts/)

## lifecycle
```JSON
 "scripts": {
    "prepublish": "",
    "prepare": "",
    "prepublishOnly": "",
    "prepack":"",
    "postpack":"",
    "publish":"",
    "preinstall":"",
    "install":" install的默认值为 'node-gyp rebuild' ",
    "postinstall":"",
    "preuninstall":"",
    "uninstall":"",
    "postuninstall":"",
    "preversion":"",
    "version":"",
    "postversion":"",
    "pretest":"",
    "test":"",
    "posttest":"",
    "prestop":"",
    "stop":"",
    "poststop":"",
    "prestart":"",
    "start":"默认值为 'node server.js' ",
    "poststart":"",
    "prerestart,prestart,postprestart":"",
    "preshrinkwrap,shrinkwrap,postshrinkwrap":""
  }
```