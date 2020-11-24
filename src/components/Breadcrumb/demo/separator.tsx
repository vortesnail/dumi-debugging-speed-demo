/**
 * title: Configuring the Separator
 * desc: The separator can be customized by setting the separator property `separator=">"`.
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
  return <Breadcrumb navTitle='Navigation' separator='>' routes={routes} />
}

export default Demo
