---
title: Line
group:
  title: Charts
  order: 6
---

## Line

Contains a line chart with multiple presentation methods.

## When To Use

Applicable to two-dimensional large data sets, scenarios that need to reflect changing trends and relevance, and can intuitively reflect the changing trends of data.

## Examples

### Basic line chart

<code src='@Comp/Line/demo/basic.tsx' />

### Multi line chart

<code src='@Comp/Line/demo/multi.tsx' />

### Curve line chart

<code src='@Comp/Line/demo/curve.tsx' />

### Line chart with shadow

<code src='@Comp/Line/demo/shadow.tsx' />

### Line chart with legend

<code src='@Comp/Line/demo/legend.tsx' />

### Mini line chart

<code src='@Comp/Line/demo/mini.tsx' />

## API

| Property   | Description                              | Type       | Default |
| ---------- | ---------------------------------------- | ---------- | ------- |
| title      | Top title of line chart                  | string     | -       |
| height     | Chart height                             | number     | `260`   |
| isSmooth   | Whether the line chart is a smooth curve | boolean    | `false` |
| hasShadow  | Whether the line chart has shadow        | boolean    | `false` |
| hasLegend  | Whether the line chart has legend        | boolean    | `false` |
| dataSource | Data source                              | `XYData[]` | `[]`    |

### Line.MiniLine

| Property   | Description                              | Type       | Default |
| ---------- | ---------------------------------------- | ---------- | ------- |
| title      | Top title of line chart                  | string     | -       |
| subTitle   | Sub title of line chart                  | string     | -       |
| height     | Chart height                             | number     | `260`   |
| isSmooth   | Whether the line chart is a smooth curve | boolean    | `false` |
| hasShadow  | Whether the line chart has shadow        | boolean    | `false` |
| dataSource | Data source                              | `XYData[]` | `[]`    |

## Interface

### XYData

| Property | Description       | Type       | Default | Must  |
| -------- | ----------------- | ---------- | ------- | ----- |
| name     | Name of this line | string     | -       | `Yes` |
| xData    | Abscissa data     | `string[]` | -       | `Yes` |
| yData    | Ordinate data     | `number[]` | -       | `Yes` |
