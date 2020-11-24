---
title: Breadcrumb
group:
  title: Navigation
  order: 2
---

## Breadcrumb

A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.

## When To Use

- When the system has more than two layers in a hierarchy.

- When you need to inform the user of where they are.

- When the user may need to navigate back to a higher level.

## Examples

### Basic Usage

<code src='@Comp/Breadcrumb/demo/basic.tsx' />

### With an navigation title

<code src='@Comp/Breadcrumb/demo/navtitle.tsx' />

### With an Icon

<code src='@Comp/Breadcrumb/demo/icon.tsx' />

### Configuring the Separator

<code src='@Comp/Breadcrumb/demo/separator.tsx' />

### Complete example with routing

<code src='@Comp/Breadcrumb/demo/router.tsx' />

## API

| Param | Description | Type | Default value |
| --- | --- | --- | --- |
| className | Another class name of the outermost component | string | - |
| separator | Set separator | ReactNode | `/` |
| navTitle | Navigation title | string | - |
| backgroundColor | Navigation bar background color | string | - |
| routes |  | Array<Route\> | `[{ title: 'Home', href: '#' }, { title: 'App', href: '#' }]` |

## Interface

### Route

| Param | Description | Type | Default value | Must |
| --- | --- | --- | --- | --- |
| icon | Prefix icon for navigation item | ReactElement | - | 否 |
| title | Title of navigation item | string | - | 否 |
| href | The address the navigation item will jump to | string | - | 否 |
| isLink | Identifies whether the current navigation item can be jumped | boolean \| undefined | undefined | 否 |
| onClick | Navigation item click callback | (info: Route) => void | - | 否 |
