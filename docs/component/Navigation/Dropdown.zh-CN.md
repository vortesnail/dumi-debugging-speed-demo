---
title: Dropdown 下拉菜单
group:
  title: 导航
  order: 2
---

## Dropdown 下拉菜单

向下弹出的列表。

## 何时使用

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

- 用于收罗一组命令操作。

- Select 用于选择，而 Dropdown 是命令集合。

## 代码演示

### 文字下拉菜单

<code src='@Comp/Dropdown/demo/label.zhCn.tsx' />

### 按钮下拉菜单

<code src='@Comp/Dropdown/demo/button.zhCn.tsx' />

### 下拉图标

<code src='@Comp/Dropdown/demo/icon.zhCn.tsx' />

### 带下拉框的按钮

<code src='@Comp/Dropdown/demo/dropdown-button.zhCn.tsx' />

## API

| 属性        | 说明                   | 类型                | 默认值   |
| ----------- | ---------------------- | ------------------- | -------- |
| type        | 下拉菜单的点击对象类型 | `label` \| `button` | `label`  |
| label       | 呈现的文字内容         | string              | 下拉菜单 |
| hasDownIcon | 决定是否有下拉图标     | boolean             | true     |

### Dropdown.Button

| 属性    | 说明           | 类型                                        | 默认值             |
| ------- | -------------- | ------------------------------------------- | ------------------ |
| icon    | 下拉图标       | React.ReactNode                             | `<DownOutlined />` |
| label   | 呈现的文字内容 | string                                      | 下拉菜单           |
| onClick | 点击回调函数   | React.MouseEventHandler<HTMLButtonElement\> | -                  |
