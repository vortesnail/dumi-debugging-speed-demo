/**
 * title: Block Button
 * desc: Set `block` property will make the button fit to its parent width.
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
