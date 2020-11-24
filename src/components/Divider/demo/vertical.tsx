/**
 * title: Vertical
 * desc: Use `type="vertical"` make it vertical.
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
