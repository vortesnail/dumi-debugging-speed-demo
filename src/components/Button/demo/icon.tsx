/**
 * title: Icon
 * desc: Components `Button` can contain an `Icon`. This is done by setting the `icon` property or placing an `Icon` component within the `Button`. <br/> If you want specific control over the positioning and placement of the `Icon`, then that should be done by placing the `Icon` component within the `Button` rather than using the `icon` property.
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React, { FC } from 'react'
import { PlusOutlined, VerticalAlignBottomOutlined, EyeOutlined, CopyOutlined } from '@ant-design/icons'
import { Button } from 'sparkd'

const MyComponent: FC = () => {
  return (
    <>
      <div style={{ width: '380px' }}>
        <Button icon={<PlusOutlined />} block>
          Add
        </Button>
      </div>
      <Button type='primary' icon={<PlusOutlined />}>
        Upload File
      </Button>
      <Button type='primary' icon={<VerticalAlignBottomOutlined />}>
        Template Download
      </Button>
      <Button shape='circle' icon={<EyeOutlined />} />
      <Button shape='circle' icon={<CopyOutlined />} />
    </>
  )
}

export default MyComponent
