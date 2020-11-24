/**
 * title: Complete example with routing
 * desc: Use `react-router-dom` in conjunction with a complete demo.
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React, { FC } from 'react'
import { AppstoreOutlined, ShoppingCartOutlined, HomeOutlined } from '@ant-design/icons'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Breadcrumb } from 'sparkd'

const routes = [
  {
    icon: <HomeOutlined />,
    title: 'Home',
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
  return (
    <HashRouter>
      <Breadcrumb navTitle='Navigation' routes={routes} />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/app' exact>
          <App />
        </Route>
        <Route path='/shop' exact>
          <Shop />
        </Route>
      </Switch>
    </HashRouter>
  )
}

function Home() {
  return <div>Home Page</div>
}

function Shop() {
  return <div>Shop Page</div>
}

function App() {
  return <div>App Page</div>
}

export default Demo
