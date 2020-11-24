/**
 * title: Block 按钮
 * desc: 设置 `block` 属性将使按钮适合其父宽度。
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React, { FC } from 'react'
import { Button } from 'sparkd'

const MyComponent: FC = () => {
  return (
    <>
      <Button type='primary' block>
        Primary
      </Button>
      <Button block>Default</Button>
      <Button type='dashed' block>
        Dashed
      </Button>
      <Button type='link' block>
        Link
      </Button>
    </>
  )
}

export default MyComponent
