---
title: Menu
group:
  title: Navigation
  order: 2
---

## Menu

A versatile menu for navigation.

## When to use

Navigation is an important part of any website, as a good navigation setup allows users to move around the site quickly and efficiently. Ant Design offers top and side navigation options. Top navigation provides all the categories and functions of the website. Side navigation provides the multi-level structure of the website.

## Examples

### Top Navigation

<code src='@Comp/Menu/demo/horizontal.tsx' />

### Inline menu

<code src='@Comp/Menu/demo/inline.tsx' />

### Custom width

<code src='@Comp/Menu/demo/width.tsx' />

### Menu Themes

<code src='@Comp/Menu/demo/theme.tsx' />

## API

| Param              | Description                                 | Type              | Default value |
| ------------------ | ------------------------------------------- | ----------------- | ------------- |
| width              | Custom menu width                           | number \| string  | '100%'        |
| theme              | Color theme of the menu                     | `light` \| `dark` | `light`       |
| defaultSelectedKey | The menu selected by default, pass in `key` | string            | -             |
| dataSource         | Render menu data                            | DataSource[]      | []            |

#### DataSource

| Param | Description | Type | Default value | Must |
| --- | --- | --- | --- | --- |
| key | Unique key value of menu item | string | - | Yes |
| name | Menu item name | string | - | Yes |
| icon | Menu want prefix icon | ReactNode | - | No |
| isLink | Identifies whether the current menu item jumps outside the chain | boolean | - | No |
| path | Jump destination route after clicking the menu item | string | - | Yes |
| onClick | Menu item click callback | (info: DataSource) => any | - | No |
| childs | Submenu | DataSource[] | - | Yes |
