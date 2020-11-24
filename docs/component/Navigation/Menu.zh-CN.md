---
title: Menu 菜单
group:
  title: 导航
  order: 2
---

## Menu 菜单

为页面和功能提供导航的菜单列表。

## 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

## 代码演示

### 顶部导航

<code src='@Comp/Menu/demo/horizontal.zhCn.tsx' />

### 内嵌菜单

<code src='@Comp/Menu/demo/inline.zhCn.tsx' />

### 自定义宽度

<code src='@Comp/Menu/demo/width.zhCn.tsx' />

### 主题

<code src='@Comp/Menu/demo/theme.zhCn.tsx' />

## API

| 属性               | 说明                         | 类型              | 默认值  |
| ------------------ | ---------------------------- | ----------------- | ------- |
| width              | 菜单自定义宽度               | number \| string  | '100%'  |
| theme              | 菜单主题色                   | `light` \| `dark` | `light` |
| defaultSelectedKey | 默认选择的菜单想，传入 `key` | string            | -       |
| dataSource         | 渲染菜单的数据               | DataSource[]      | []      |

#### DataSource

| 属性    | 说明                         | 类型                      | 默认值 | 比选 |
| ------- | ---------------------------- | ------------------------- | ------ | ---- |
| key     | 菜单项唯一键值               | string                    | -      | 是   |
| name    | 菜单项名称                   | string                    | -      | 是   |
| icon    | 菜单想前缀图标               | ReactNode                 | -      | 否   |
| isLink  | 标识当前菜单项是否跳转外链   | boolean                   | -      | 否   |
| path    | 点击菜单项之后的跳转目标路由 | string                    | -      | 是   |
| onClick | 点击菜单项之后的回调         | (info: DataSource) => any | -      | 否   |
| childs  | 子菜单                       | DataSource[]              | -      | 是   |
