/**
 * title: Basic Usage
 * desc: The simplest use.
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
  return <Breadcrumb routes={routes} />
}

export default Demo
