---
title: Divider
group:
  title: Layout
---

## Divider

A divider line separates different content.

## When To Use

- Divide sections of article.
- Divide inline text and links such as the operation column of table.

## Examples

### Horizontal

<code src='@Comp/Divider/demo/horizontal.tsx' />

### Divider with title

<code src='@Comp/Divider/demo/title.tsx' />

### Text without heading style

<code src='@Comp/Divider/demo/noHeaderStyle.tsx' />

### Vertical

<code src='@Comp/Divider/demo/vertical.tsx' />

## API

| Property    | Description                          | Type                          | Default      |
| ----------- | ------------------------------------ | ----------------------------- | ------------ |
| className   | The className of container           | string                        | -            |
| dashed      | Whether line is dashed               | boolean                       | false        |
| orientation | The position of title inside divider | `left` \| `right` \| `center` | `center`     |
| plain       | Divider text show as plain style     | boolean                       | true         |
| style       | The style object of container        | CSSProperties                 | -            |
| type        | The direction type of divider        | `horizontal` \| `vertical`    | `horizontal` |
