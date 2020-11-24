/**
 * title: 自定义宽度
 * desc: 任意改变为你想要的宽度
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React, { FC } from 'react'
import { ScissorOutlined, DeleteOutlined } from '@ant-design/icons'
import { Menu } from 'sparkd'

const Demo: FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <Menu
        mode='inline'
        width={600}
        dataSource={[
          {
            key: 'nav1',
            name: '导航1',
            icon: <ScissorOutlined />,
            path: 'www.baidu.com',
            childs: [],
          },
          {
            key: 'nav2',
            name: '导航2',
            icon: <DeleteOutlined />,
            path: 'www.zhihu.com',
            childs: [
              {
                key: 'nav2-son1',
                name: '导航2儿子1',
                icon: <DeleteOutlined />,
                path: 'www.zhihu.com',
                childs: [],
              },
              {
                key: 'nav2-son2',
                name: '导航2儿子2',
                icon: <DeleteOutlined />,
                path: 'www.zhihu.com',
                childs: [],
              },
            ],
          },
          {
            key: 'nav3',
            name: '导航3',
            icon: <ScissorOutlined />,
            path: 'www.baidu.com',
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
    </div>
  )
}

export default Demo
