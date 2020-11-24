/**
 * title: 带导航标题
 * desc: 传入字符串作为导航标题。
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
  return <Breadcrumb navTitle='导航栏' routes={routes} />
}

export default Demo
