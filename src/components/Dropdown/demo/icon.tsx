/**
 * title: Drop-down icon
 * desc: Decide whether you need a drop-down icon according to `hasDownIcon`.
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
  return (
    <div>
      <Dropdown overlay={menu} label='Dropdown menu' hasDownIcon={false} />
      <br />
      <Dropdown overlay={menu} label='Dropdown menu' />
      <br />
      <Dropdown overlay={menu} type='button' label='Dropdown menu' hasDownIcon={false} />
      <br />
      <Dropdown overlay={menu} type='button' label='Dropdown menu' />
      <br />
    </div>
  )
}

export default Demo
