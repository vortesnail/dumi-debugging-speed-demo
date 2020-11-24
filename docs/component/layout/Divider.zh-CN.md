---
title: Divider 分割线
group:
  title: 布局
---

## Divider 分割线

区隔内容的分割线。

## 何时使用

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。

## 代码演示

### 水平分割线

<code src='@Comp/Divider/demo/horizontal.zhCn.tsx' />

### 带文字的分割线

<code src='@Comp/Divider/demo/title.zhCn.tsx' />

### 分割文字使用正文样式

<code src='@Comp/Divider/demo/noHeaderStyle.zhCn.tsx' />

### 垂直分割线

<code src='@Comp/Divider/demo/vertical.zhCn.tsx' />

## API

| 属性        | 说明                       | 类型                          | 默认值       |
| ----------- | -------------------------- | ----------------------------- | ------------ |
| className   | 分割线样式类               | string                        | -            |
| dashed      | 是否虚线                   | boolean                       | false        |
| orientation | 分割线标题的位置           | `left` \| `right` \| `center` | `center`     |
| plain       | 文字是否显示为普通正文样式 | boolean                       | false        |
| style       | 分割线样式对象             | CSSProperties                 | -            |
| type        | 水平还是垂直类型           | `horizontal` \| `vertical`    | `horizontal` |
