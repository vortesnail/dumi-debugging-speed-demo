/**
 * title: 加载中状态
 * desc: 添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
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
