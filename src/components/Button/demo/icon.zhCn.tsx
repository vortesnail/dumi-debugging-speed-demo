/**
 * title: 图标按钮
 * desc: 当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。<br/> 如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。
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
          增加
        </Button>
      </div>
      <Button type='primary' icon={<PlusOutlined />}>
        上传文件
      </Button>
      <Button type='primary' icon={<VerticalAlignBottomOutlined />}>
        模板下载
      </Button>
      <Button shape='circle' icon={<EyeOutlined />} />
      <Button shape='circle' icon={<CopyOutlined />} />
    </>
  )
}

export default MyComponent
