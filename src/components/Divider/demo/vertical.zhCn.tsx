/**
 * title: 垂直分割线
 * desc: 使用 `type="vertical"` 设置为行内的垂直分割线。
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React, { FC } from 'react'
import { Divider } from 'sparkd'

const Demo: FC = () => {
  return (
    <>
      Text
      <Divider type='vertical' />
      <a href='www.baidu.com'>Link</a>
      <Divider type='vertical' />
      <a href='www.baidu.com'>Link</a>
    </>
  )
}

export default Demo
