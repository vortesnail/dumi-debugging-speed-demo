/**
 * title: Loading
 * desc: A loading indicator can be added to a button by setting the `loading` property on the `Button`.
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React, { FC, useState } from 'react'
import { Button } from 'sparkd'

const MyComponent: FC = () => {
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <>
      <Button type='primary' loading>
        Primary
      </Button>
      <Button
        type='primary'
        loading={loading}
        onClick={() => {
          setLoading(!loading)
        }}
      >
        Click Me
      </Button>
    </>
  )
}

export default MyComponent
