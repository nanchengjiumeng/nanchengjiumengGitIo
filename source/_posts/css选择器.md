---
title: css选择器
date: 2019-02-28 10:23:01
tags:
    - 前端
    - css
---
参考:
- [link](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

# 普通选择器
- `tagName`
- `#id` 
- `.class-name`
- `*`
- `[attr] 
[attr=value] 
[attr~=value] 
[attr|=value] 
[attr^=value] 
[attr$=value]
 [attr*=value]`

# 组合选择
- A + B `ex: h2 + p will match all <p> elements that directly follow an <h2>.`
- A ~ B `ex: p ~ span will match all <span> elements that follow a <p>` 
- A > B `ex: ul > li will match all <li> elements that are nested directly inside a <ul> element.`
- A B
- A || B `ex: col || td will match all <td> elements that belong to the scope of the <col>.`

# 伪类

[link](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) 
*Example*: `a:visited` will match all `<a>` elements that have been visited by the user.

# 伪元素
[link](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
Example: p::first-line will match the first line of all `<p>` elements.

