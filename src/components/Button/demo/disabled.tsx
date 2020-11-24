/**
 * title: Disabled
 * desc: To mark a button as disabled, add the `disabled` property to the `Button`.
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
