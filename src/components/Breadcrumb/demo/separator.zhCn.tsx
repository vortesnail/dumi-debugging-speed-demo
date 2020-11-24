/**
 * title: 分隔符
 * desc: 使用 `separator=">"` 可以自定义分隔符。
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React, { FC } from 'react'
import { Breadcrumb } from 'sparkd'

const routes = [
  {
    title: 'Home',
    href: '/',
    isLink: true,
    onClick: (info: any) => {
      console.log(info)
    },
  },
  {
    title: 'App',
    href: '/app',
    isLink: true,
    onClick: (info: any) => {
      console.log(info)
    },
  },
  {
    title: 'Shop',
    href: '/shop',
    isLink: true,
    onClick: (info: any) => {
      console.log(info)
    },
  },
]

const Demo: FC = () => {
  return <Breadcrumb navTitle='导航栏' separator='>' routes={routes} />
}

export default Demo
