---
title: Dropdown
group:
  title: Navigation
  order: 2
---

## Dropdown

A dropdown list.

## When to use

When there are more than a few options to choose from, you can wrap them in a `Dropdown`. By hovering or clicking on the trigger, a dropdown menu will appear, which allows you to choose an option and execute the relevant action.

## Examples

### Text drop-down menu

<code src='@Comp/Dropdown/demo/label.tsx' />

### Button drop-down menu

<code src='@Comp/Dropdown/demo/button.tsx' />

### Drop-down icon

<code src='@Comp/Dropdown/demo/icon.tsx' />

### Button with drop-down box

<code src='@Comp/Dropdown/demo/dropdown-button.tsx' />

## API

| Property    | Description                              | Type                | Default  |
| ----------- | ---------------------------------------- | ------------------- | -------- |
| type        | Click carrier type of the drop-down menu | `label` \| `button` | `label`  |
| label       | Display text                             | string              | 下拉菜单 |
| hasDownIcon | Decide if there is a drop-down icon      | boolean             | true     |

### Dropdown.Button

| Property | Description       | Type                                        | Default            |
| -------- | ----------------- | ------------------------------------------- | ------------------ |
| icon     | Drop down icon    | React.ReactNode                             | `<DownOutlined />` |
| label    | Display text      | string                                      | 下拉菜单           |
| onClick  | Callback function | React.MouseEventHandler<HTMLButtonElement\> | -                  |
