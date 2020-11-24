/**
 * title: 按钮类型
 * desc: 按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React, { FC } from 'react'
import { Button } from 'sparkd'

const MyComponent: FC = () => {
  return (
    <>
      <Button type='primary'>Primary Button</Button>
      <Button>Default Button</Button>
      <Button type='dashed'>Dashed Button</Button>
      <Button type='text'>Text Button</Button>
      <Button type='link'>Link Button</Button>
    </>
  )
}

export default MyComponent
