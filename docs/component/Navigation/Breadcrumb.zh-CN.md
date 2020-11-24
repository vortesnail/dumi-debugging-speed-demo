---
title: Breadcrumb 面包屑
group:
  title: 导航
  order: 2
---

## Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

- 当系统拥有超过两级以上的层级结构时；

- 当需要告知用户『你在哪里』时；

- 当需要向上导航的功能时。

## 代码演示

### 基本

<code src='@Comp/Breadcrumb/demo/basic.zhCn.tsx' />

### 带导航标题

<code src='@Comp/Breadcrumb/demo/navtitle.zhCn.tsx' />

### 带有图标的

<code src='@Comp/Breadcrumb/demo/icon.zhCn.tsx' />

### 分隔符

<code src='@Comp/Breadcrumb/demo/separator.zhCn.tsx' />

### 带路由完整示例

<code src='@Comp/Breadcrumb/demo/router.zhCn.tsx' />

## API

| 属性            | 说明               | 类型          | 默认值                                                        |
| --------------- | ------------------ | ------------- | ------------------------------------------------------------- |
| className       | 组件最外层另外类名 | string        | -                                                             |
| separator       | 分隔符             | ReactNode     | `/`                                                           |
| navTitle        | 导航标题           | string        | -                                                             |
| backgroundColor | 导航栏背景色       | string        | -                                                             |
| routes          |                    | Array<Route\> | `[{ title: 'Home', href: '#' }, { title: 'App', href: '#' }]` |

## Interface

### Route

| 属性    | 说明                     | 类型                  | 默认值    | 必选 |
| ------- | ------------------------ | --------------------- | --------- | ---- |
| icon    | 导航项的前缀图标         | ReactElement          | -         | 否   |
| title   | 导航项的标题             | string                | -         | 否   |
| href    | 导航项要跳转到的地址     | string                | -         | 否   |
| isLink  | 标识当前导航项是否可跳转 | boolean \| undefined  | undefined | 否   |
| onClick | 导航项点击回调           | (info: Route) => void | -         | 否   |
