---
title: Line 折线图
group:
  title: 图表
  order: 6
---

## Line 折线图

含有多种呈现方式的折线图。

## 何时使用

适用于二维大数据集，需要反映变化趋势、关联性的场景，能直观的反映数据的变化趋势。

## 代码演示

### 基础折线图

<code src='@Comp/Line/demo/basic.zhCn.tsx' />

### 多条折线图

<code src='@Comp/Line/demo/multi.zhCn.tsx' />

### 曲线折线图

<code src='@Comp/Line/demo/curve.zhCn.tsx' />

### 带有阴影的折线图

<code src='@Comp/Line/demo/shadow.zhCn.tsx' />

### 带有图例的折线图

<code src='@Comp/Line/demo/legend.zhCn.tsx' />

### 迷你折线图

<code src='@Comp/Line/demo/mini.zhCn.tsx' />

## API

| 属性       | 说明                 | 类型            | 默认值  |
| ---------- | -------------------- | --------------- | ------- |
| title      | 折线图顶部标题       | string          | -       |
| height     | 图表高度             | number \| sring | `260`   |
| isSmooth   | 折线图是否为平滑曲线 | boolean         | `false` |
| hasShadow  | 折线图是否有阴影     | boolean         | `false` |
| hasLegend  | 折线图是否有图例     | boolean         | `false` |
| dataSource | 数据源               | `XYData[]`      | `[]`    |

### Line.MiniLine

| 属性       | 说明                 | 类型            | 默认值  |
| ---------- | -------------------- | --------------- | ------- |
| title      | 折线图顶部标题       | string          | -       |
| subTitle   | 折线图副标题         | string          | -       |
| height     | 图表高度             | number \| sring | `260`   |
| isSmooth   | 折线图是否为平滑曲线 | boolean         | `false` |
| hasShadow  | 折线图是否有阴影     | boolean         | `false` |
| dataSource | 数据源               | `XYData[]`      | `[]`    |

## Interface

### XYData

| 属性  | 说明         | 类型       | 默认值 | 必选  |
| ----- | ------------ | ---------- | ------ | ----- |
| name  | 此条折线名称 | string     | -      | `Yes` |
| xData | 横坐标数据   | `string[]` | -      | `Yes` |
| yData | 纵坐标数据   | `number[]` | -      | `Yes` |
