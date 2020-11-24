/**
 * title: 危险按钮
 * desc: 操作后不可撤销或带有警示性的按钮。
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React, { FC } from 'react'
import { Button } from 'sparkd'

const MyComponent: FC = () => {
  return (
    <>
      <Button type='primary' danger>
        Primary
      </Button>
      <Button danger>Default</Button>
      <Button type='dashed' danger>
        Dashed
      </Button>
      <Button type='text' danger>
        Text
      </Button>
      <Button type='link' danger>
        Link
      </Button>
    </>
  )
}

export default MyComponent
