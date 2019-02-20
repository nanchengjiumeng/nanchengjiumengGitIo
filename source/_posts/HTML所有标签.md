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




