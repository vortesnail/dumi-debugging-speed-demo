/**
 * title: 内嵌菜单
 * desc: 垂直菜单，子菜单内嵌在菜单区域。
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React, { FC } from 'react'
import { ScissorOutlined, DeleteOutlined } from '@ant-design/icons'
import { Menu } from 'sparkd'

const Demo: FC = () => {
  return (
    <div style={{ width: 250 }}>
      <Menu
        mode='inline'
        dataSource={[
          {
            key: 'nav1',
            name: 'Nav1',
            icon: <ScissorOutlined />,
            path: 'www.baidu.com',
            childs: [],
          },
          {
            key: 'nav2',
            name: 'Nav2',
            icon: <DeleteOutlined />,
            path: 'www.zhihu.com',
            childs: [
              {
                key: 'nav2-son1',
                name: 'Nav2 son1',
                icon: <DeleteOutlined />,
                path: 'www.zhihu.com',
                childs: [],
              },
              {
                key: 'nav2-son2',
                name: 'Nav2 son2',
                icon: <DeleteOutlined />,
                path: 'www.zhihu.com',
                childs: [],
              },
            ],
          },
          {
            key: 'nav3',
            name: 'Nav3',
            icon: <ScissorOutlined />,
            path: 'www.baidu.com',
            childs: [],
          },
          {
            key: 'nav4',
            name: 'Nav4',
            icon: <ScissorOutlined />,
            path: 'www.baidu.com',
            isLink: true,
            childs: [],
          },
        ]}
      />
    </div>
  )
}

export default Demo
