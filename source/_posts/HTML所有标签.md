---
title: HTML所有标签
date: 2019-02-20 10:02:08
tags: 
  - 前端
  - HTML
---

参考链接:

-	[htmlreference all tags](https://htmlreference.io/element/a/)
- [HTML layouts](https://www.w3schools.com/html/html_layout.asp)
- [前端九部 - 入门者手册2019](https://www.yuque.com/fe9/basic/khrne0)

# DOCTYPE
<!DOCTYPE> 是文档类型声明，它用来告诉浏览器用什么规则解析 HTML 元素。在 HTML 4.01 中，文档类型声明需要引用 DTD（Document Type Definition，文档类型定义），这是因为 HTML 4.01 基于 SGML（Standard Generalized Markup Language，通用标记语言）。这里有两个概念，涉及到了 HTML 的发展历史，可以简单熟悉一下。DTD 规定了标记语言的规则，这样浏览器才能正确地显示内容。
HTML5 不基于 SGML，所以不需要引入 DTD，只需要 <!DOCTYPE html> 便对文档类型进行了声明。文档类型声明必需放在 HTML 文档的第一行。

# head
[head适配](https://blog.csdn.net/qq_40963664/article/details/80755665)

<meta> 标签提供了页面相关数据信息，同时还可以通过 <meta> 标签设置页面的描述、关键词等信息，这些信息有利于 SEO（Search Engine Optimization，搜索引擎优化)。

```html
<meta charset="utf-8">
<meta name="description" content="网站的描述信息">
<meta name="keywords" content="网站关键词">

<!-- width: viewport 的宽度 （范围从 200 到 10,000 ，默认为 980 像素 ）
height: viewport 的高度 （范围从 223 到 10,000 ）
initial-scale: 初始的缩放比例 （范围从>0到 10 ）
minimum-scale: 允许用户缩放到的最小比例
maximum-scale: 允许用户缩放到的最大比例
user-scalable: 用户是否可以手动缩放 -->
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui" /> 

<link rel="icon" href="xxx.ico">

<!-- 是否删除默认的苹果工具栏和菜单栏 -->
<meta name="apple-mobile-web-app-capable" content="yes" />
 
<!-- 其他的meta设置 -->
<!-- 启用360浏览器的极速模式(webkit) -->
<meta name="renderer" content="webkit">
<!-- 避免IE使用兼容模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">
<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">
<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">
<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">
<!-- UC应用模式 -->
<meta name="browsermode" content="application">
<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">

```


# HTML 语义化
`
HTML 语义化是指仅仅从 HTML 元素上就能看出页面的大致结构，比如需要强调的内容可以放在 <strong> 标签中，而不是通过样式设置 <span> 标签去做。不同浏览器对 HTML 元素的解析可能有差异，HTML 语义化便是在抛开样式之后，页面能有一个友好的展示效果。我们力求让页面有良好的结构，让页面的元素有含义，同时利于被搜索引擎解析，利于 SEO。HTML 语义化的建议：
`
- `少使用无意义的 <div>、<span> 标签；`
- `在 <label> 标签中设置 for 属性和对应的 <input> 关联起来；`
- `设置 <img> 标签的 alt 属性，给 <a> 标签设置 title 属性，利于 SEO；`
- `在页面的标题部分使用 <h1>~<h6> 标签，不需要给它们加多余的样式；`


# layout
网页通常会有多列的布局（海报、报纸等），HTML5对布局提供了语义化的标签：

![html layout](/iamges/HTML/img_sem_elements.gif)

#### header: [Defines the header of a web page or section.](https://htmlreference.io/element/header/)
#### nav: [Defines a section with navigation links.](https://htmlreference.io/element/nav/)
#### section: [Defines a section within a web page.](https://htmlreference.io/element/section/)
#### article: [Defines a self-contained block of content that can exist in any context.It can have its own header, footer, sections... Useful for a list of blog posts.](https://htmlreference.io/element/article/)
```html
<article>
  <header>
    <h3>
      <a href="/my-blog-post">My blog post</a>
    </h3>
  </header>
  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
  </section>
  <footer>
    <small>
      Posted on <time datetime="2017-04-29T19:00">Apr 29</time> in <a href="/category/code">Code</a>
    </small>
  </footer>
</article>
```
#### aside: [Defines a block of content that is related to the main content. Displayed as a sidebar usually.](https://htmlreference.io/element/aside/)
#### footer: [Defines the footer of a web page or section.](https://htmlreference.io/element/footer/)
#### detials: [Defines a toggable block of content with a summary and additional details.](https://htmlreference.io/element/detials/)
- summary: [details标签的自标签，点击toggle details标签](https://htmlreference.io/element/summary/)

```html
<details>
  <summary>Read more</summary>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
</details>
```




