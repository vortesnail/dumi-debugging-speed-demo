/**
 * title: With an Icon
 * desc: The icon should be placed in front of the text.
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React, { FC } from 'react'
import { AppstoreOutlined, ShoppingCartOutlined, HomeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'sparkd'

const routes = [
  {
    icon: <HomeOutlined />,
    href: '/',
    isLink: true,
    onClick: (info: any) => {
      console.log(info)
    },
  },
  {
    icon: <AppstoreOutlined />,
    title: 'App',
    href: '/app',
    isLink: true,
    onClick: (info: any) => {
      console.log(info)
    },
  },
  {
    icon: <ShoppingCartOutlined />,
    title: 'Shop',
    href: '/shop',
    isLink: true,
    onClick: (info: any) => {
      console.log(info)
    },
  },
]

const Demo: FC = () => {
  return <Breadcrumb navTitle='Navigation' routes={routes} />
}

export default Demo
