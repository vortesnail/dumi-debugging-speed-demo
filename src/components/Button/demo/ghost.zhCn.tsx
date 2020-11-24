/**
 * title: 幽灵按钮
 * desc: 幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React, { FC } from 'react'
import { Button } from 'sparkd'

const MyComponent: FC = () => {
  return (
    <div style={{ background: ' rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
      <Button type='primary' ghost>
        Primary
      </Button>
      <Button ghost>Default</Button>
      <Button type='dashed' ghost>
        Dashed
      </Button>
    </div>
  )
}

export default MyComponent
