---
title: Text 文本
group:
  title: 数据展示
  order: 4
---

## Text 文本

用来展示纯文字。

## 何时使用

- 一段描述文字用于告知用户某些信息。

- 某段内容的标题。

## 代码演示

### 基本使用

<code src='@Comp/Text/demo/basic.zhCn.tsx' />

### 展现形式

<code src='@Comp/Text/demo/display.zhCn.tsx' />

### 样式

<code src='@Comp/Text/demo/style.zhCn.tsx' />

### 提示框

<code src='@Comp/Text/demo/tooltip.zhCn.tsx' />

## API

| Property        | Description            | Type                | Default   |
| --------------- | ---------------------- | ------------------- | --------- |
| content         | 文本内容               | string              | `内容`    |
| color           | 文本颜色               | string              | `#333333` |
| topPadding      | 上内边距               | number              | -         |
| rightPadding    | 右内边距               | number              | -         |
| bottomPadding   | 底内边距               | number              | -         |
| leftPadding     | 左内边距               | number              | -         |
| fontSize        | 文本字体大小           | number              | -         |
| backgroundColor | 文本背景颜色           | string              | -         |
| display         | 展现形式               | `inline` \| `block` | `block`   |
| tooltipContent  | Tooltip 文本内容       | string              | -         |
| tooltipColor    | Tooltip 文本框背景颜色 | `keyof ColorType`   | `primary` |

Notice: 只有 `tooltipContent` 有值且不为空时，提示框才会出现。

## Interface

### ColorType

```javascript
export type ColorType = {
  primary?: string
  darkerPrimary?: string
  moreDarkerPrimary?: string
  success?: string
  info?: string
  warning?: string
  danger?: string
  darkerDanger?: string
  moreDarkerDanger?: string
  light?: string
  dark?: string
}
```

```javascript
const colorObject: ColorType = {
  primary: '#4a90e2',
  darkerPrimary: '#3688e7',
  moreDarkerPrimary: '#2d7cd8',
  success: '#4cac93',
  info: '#4a90e2',
  warning: '#ed9d3e',
  danger: '#d0021b',
  darkerDanger: '#c20119',
  moreDarkerDanger: '#bc0017',
  light: '#f2f2f2',
  dark: '#333',
}
```
