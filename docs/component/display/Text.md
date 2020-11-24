---
title: Text
group:
  title: Display
  order: 4
---

## Text

Used to display plain text.

## When To Use

- A description text is used to inform the user of certain information.

- The title of a piece of content.

## Examples

### Basic

<code src='@Comp/Text/demo/basic.tsx' />

### Display

<code src='@Comp/Text/demo/display.tsx' />

### Style

<code src='@Comp/Text/demo/style.tsx' />

### Tooltip

<code src='@Comp/Text/demo/tooltip.tsx' />

## API

| Property        | Description           | Type                | Default   |
| --------------- | --------------------- | ------------------- | --------- |
| content         | Text content          | string              | `内容`    |
| color           | Text color            | string              | `#333333` |
| topPadding      | Top padding           | number              | -         |
| rightPadding    | Right padding         | number              | -         |
| bottomPadding   | Bottom padding        | number              | -         |
| leftPadding     | Left padding          | number              | -         |
| fontSize        | Text font size        | number              | -         |
| backgroundColor | Text background color | string              | -         |
| display         | Display form          | `inline` \| `block` | `block`   |
| tooltipContent  | Tooltip text content  | string              | -         |
| tooltipColor    | Tooltip text color    | `keyof ColorType`   | `primary` |

Notice: The prompt box will only appear when `tooltipContent` has a value and is not empty.

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
