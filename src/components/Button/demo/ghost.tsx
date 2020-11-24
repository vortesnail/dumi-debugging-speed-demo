/**
 * title: Ghost Button
 * desc: Property `ghost` will make button's background transparent, it is commonly used in colored background.
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
