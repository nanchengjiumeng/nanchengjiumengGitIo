---
title: css loyouts
date: 2019-02-25 23:34:16
tags:
    - css
---
# display

常见的块级元素有：`<div>、<h1> ~ <h6>、<p>、<ul>、<ol>、<dl>、<table>、<address>、<form>` 等。
常见的行内元素有` <a>、<b>、<label>、<span>、<img>、<em>、<strong>、<i>、<input> `等。
- 行内元素一半不可以包含块级元素，只能包含行内元素和文本；
- 给行内元素设置宽高不会起作用，margin和padding值也都只对左右起作用。

`<input>、<button>、<textarea>、<select>`都是[可替代元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element)，这些元素即使是空的，浏览器也会根据其标签和属性来决定显示的内容。

inline-block：因为浏览器会将 HTML 中的换行符、制表符、空白符合并成空白符，[消除中间空隙的办法link：去除inline-block元素间间距的N种方法。](https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/)

# 清除浮动
```html
<div class="container">
    <div class="box_1 float">box 1</div>
    <div class="box_2 float">box 2</div>
</div>
```

```css
.container::after {
    content: '';
    clear: both;
    display: block;
    height: 0;
    visibility: hidden;
}
.container {
    border: 3px solid #ccc;
    zoom: 1;   /* 兼容 IE6、IE7 */
}
```








