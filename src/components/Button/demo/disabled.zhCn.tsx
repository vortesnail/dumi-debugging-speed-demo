/**
 * title: 不可用状态
 * desc: 添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React, { FC } from 'react'
import { Button } from 'sparkd'

const MyComponent: FC = () => {
  return (
    <>
      <div>
        <Button type='primary'>Primary</Button>
        <Button type='primary' danger>
          Primary
        </Button>
        <Button>Default</Button>
        <Button type='dashed'>Dashed</Button>
        <Button type='text'>Text</Button>
        <Button type='link'>Link</Button>
        <div style={{ display: 'inline-block', background: ' rgb(190, 200, 200)', padding: '6px' }}>
          <Button ghost>Primary</Button>
        </div>
      </div>
      <div>
        <Button type='primary' disabled>
          Primary
        </Button>
        <Button type='primary' danger disabled>
          Primary
        </Button>
        <Button disabled>Default</Button>
        <Button type='dashed' disabled>
          Dashed
        </Button>
        <Button type='text' disabled>
          Text
        </Button>
        <Button type='link' disabled>
          Link
        </Button>
        <div style={{ display: 'inline-block', background: ' rgb(190, 200, 200)', padding: '6px' }}>
          <Button ghost disabled>
            Primary
          </Button>
        </div>
      </div>
    </>
  )
}

export default MyComponent
