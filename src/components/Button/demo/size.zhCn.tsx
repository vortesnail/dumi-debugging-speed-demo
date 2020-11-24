/**
 * title: 按钮尺寸
 * desc: 按钮有大、中、小三种尺寸。<br/> 通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React, { FC } from 'react'
import { Button } from 'sparkd'

const MyComponent: FC = () => {
  return (
    <>
      <div>
        <p>Large</p>
        <Button type='primary' size='large'>
          Primary
        </Button>
        <Button size='large'>Default</Button>
        <Button type='dashed' size='large'>
          Dashed
        </Button>
        <Button type='text' size='large'>
          Text
        </Button>
        <Button type='link' size='large'>
          Link
        </Button>
      </div>
      <div>
        <p>Default</p>
        <Button type='primary'>Primary</Button>
        <Button>Default</Button>
        <Button type='dashed'>Dashed</Button>
        <Button type='text'>Text</Button>
        <Button type='link'>Link</Button>
      </div>
      <div>
        <p>Small</p>
        <Button type='primary' size='small'>
          Primary
        </Button>
        <Button size='small'>Default</Button>
        <Button type='dashed' size='small'>
          Dashed
        </Button>
        <Button type='text' size='small'>
          Text
        </Button>
        <Button type='link' size='small'>
          Link
        </Button>
      </div>
    </>
  )
}

export default MyComponent
