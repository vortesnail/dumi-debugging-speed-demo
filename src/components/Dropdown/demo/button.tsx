/**
 * title: Button drop-down menu
 * desc: Use a `Button` as drop-down menu, just give a `label` to change default text.
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React, { FC } from 'react'
import { ScissorOutlined, DeleteOutlined } from '@ant-design/icons'
import { Dropdown, Menu } from 'sparkd'

const Demo: FC = () => {
  const menu = (
    <Menu
      width={120}
      mode='vertical'
      dataSource={[
        {
          key: 'nav1',
          name: '导航1',
          icon: <ScissorOutlined />,
          path: '?d=1',
          childs: [],
          onClick: (info: any) => {
            console.log(info)
          },
        },
        {
          key: 'nav2',
          name: '导航2',
          icon: <DeleteOutlined />,
          path: '?d=2',
          childs: [],
        },
        {
          key: 'nav3',
          name: '导航3',
          icon: <ScissorOutlined />,
          path: '?d=3',
          childs: [],
        },
        {
          key: 'nav4',
          name: '导航4',
          icon: <ScissorOutlined />,
          path: 'www.baidu.com',
          isLink: true,
          childs: [],
        },
      ]}
    />
  )
  return <Dropdown overlay={menu} type='button' label='按钮下拉菜单' />
}

export default Demo
