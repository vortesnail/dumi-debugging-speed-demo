/**
 * title: Size
 * desc: Ant Design supports a default button size as well as a large and small size. <br />If a large or small button is desired, set the `size` property to either `large` or `small` respectively. Omit the `size` property for a button with the default size.
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
