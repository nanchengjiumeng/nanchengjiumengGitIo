---
title: vue lifecycle
date: 2019-04-11 11:58:22
tags:
    - vue
---

# new Vue();
 
##  breforeCreate()

observe data && init events

## created()

template options and render

## beforeMount()

create virtual DOM el and replace 'el' with it

## mounted()


> beforeUpdate() \
> virtual DOM rerender and patch \
> updated() 

> actived() \
> keep-alive component reactivated  \
> deactiveted() 

## beforeDestroy()

teardown watchers, child components, event listenners

## destoryed()


# Transition && Animations

[vue transition link](https://vuejs.org/v2/guide/transitions.html#Transition-Classes)

## Classses

1. v-enter `Starting state for enter`
2. v-enter-active `Active state for enter`
3. v-enter-to `v2.1.8+. Ending state for enter`
4. v-leave `Starting state for leave`
5. v-leave-active `Active state for leave`
6. v-leave-to `v2.1.9+. Ending state for leave`

![vue transition](https://vuejs.org/images/transition.png)

## JS Hooks

1. v-on:before-enter
2. v-on:enter
3. v-on:after-enter
4. v-on:enter-cancelled
5. v-on:before-leave
6. v-on:leave
7. v-on:after-leave
8. v-on:leave-cancelled

```js
methods:{
    // @params el {DOM} current <transition/>
    // @params done {Function} optional when used in combination whith CSS
    beforeEnter: function(el, done){

    }
}
```
