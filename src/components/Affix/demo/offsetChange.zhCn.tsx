/**
 * title: 固定状态改变的回调
 * desc: 可以获得是否固定的状态。
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
