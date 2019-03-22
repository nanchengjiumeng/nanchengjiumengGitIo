---
title: webpack foundamentals
date: 2019-03-20 18:40:13
tags:
    - Nodejs
---
# Problem with script Loading

# History of Modules
The birth of JS modules is the early period nodejs. we share package, run tools, linters, commands. They took the V8 engine and show it like a binary and giv it a runtime for the server side.

How to run a javascript without DOM, hwo to add a tag Element without HTML Tag.  That is when the birth of CommonJS came. CommonJs has a syntax require, which allows us to inject other pieces of a module into the current module.
eg:

```js
//commonjs
// a.js 
const  path = require("path");

module.exports = (first, second) => first/second;

// b.js
const divide = require("./a.js");
exports.add = (first, second) => first + second;
exports.subtract = (first, second) => first - second;
exports.divideFn = divide;

// c.js
const {add, subtract} = require("./b.js");
const sum = add(1,2); // > 3
const sub = subtract(3,1); // > 2
```

``JavaScript = npm + node + modules``

Every body is starting to write all of their tools, all their scripts , all their utilities in javascripts on node.

But no browser support for CommonJS, we can't write modules use CommonJS. The resolution algorithm for CommonJS is kinda slow. Is there a solution? we start noticing that also people started to ship their web modules through NPM(NPM is a huge instant. Three years ago, developer had to go to a CDM or a GitHub distro, pull something down, concat it together).

Like Browserify and WebMake, it's not very popular, but you'll find out why it's super important. Their main primise to allow you write CommonJS modules.
But then it get bundled, and stripping those statements, and then executed in the same orders so that it works in the Web. We ll started to see different approaches like loaders, or things that like JavaScripts that executes in the browser that's responsible for going in dynamically realtime fetching different module formats.

CommonJS is just too dynamica of a module format to be able to have really optimized code. The scary thing was not everybody was shipping CommonJs, like we had AMD witch cropped up(it maybe came out of `Dojo`).

```js
// AMD pattern
define('myAwesomeLib', ['lodash', 'someDep'], function(_,someDep){
    return { ... }
})
```

Even Omnaco in VS Code is written entirely AMD, but  it do too many dynamic(if moment was jaust shipped in ESM, we wouldn'd have any issues, but with legacy code, we will struggle in logacy code). Something's also AMD + CommonJS. There`s problems, like it's too dynamic, the MomentJS scenario.

```js
define(function(require, exports, module){
    var _ = require('loadsh');

    // ...do things
    module.exports = someLib;
})
```

The syntax is really awkward, non-standard, not even node, nor the browser support it.





