/**
 * title: Callback
 * desc: Callback with affixed state.
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React, { FC } from 'react'
import { Affix, Button } from 'sparkd'

const Demo: FC = () => {
  return (
    <Affix offsetTop={120} onChange={(affixed: boolean) => console.log(affixed)}>
      <Button>120px to affix top</Button>
    </Affix>
  )
}

export default Demo
