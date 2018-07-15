# mini

微信小程序

## 文件

- WXML + WXSS + JS

- app.js 入口文件

```javasript
App({}); // 整个应用的初始化
```

- 页面 js

```javascript
//获取应用实例
const app = getApp();

Page({});
```

- WXML

  - div -> view

## 结构

- App -> Pages

## 跟 angular/vue/react 差不多，特别是 vue

## WXML——自定义组件（标签）

## 布局

- rem -> rpx

- rpx 相对单位：整个页面有 750 个 rpx

  - 假设 PSD 的宽是 500 ， 页面的元素都要乘 1.5 倍的 rpx (设计师的图基本都会是 750)

## 跳转（路由）

- 标签跳转

```
<navigator url="跳转路径?id=参数"></navigator>

// 获取参数
onload: function(options){
    console.log(options); // options 即可获取到参数
    this.setData({
        id:options.id
    })
}
```

## JS-开放 API

1. 拍照

2. 识别二维码

3. 重力感应

...
