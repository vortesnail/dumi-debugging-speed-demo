/**
 * title: Dangerous Button
 * desc: After the operation, it cannot be cancelled or has a warning button.
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
