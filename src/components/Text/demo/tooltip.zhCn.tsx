/**
 * title: 提示框
 * desc: 当你想鼠标移入文本后弹框提示，可设置属性 `tooltipContent` 。
 */
import React, { FC } from 'react'
import { Text } from 'sparkd'

const Demo: FC = () => {
  return (
    <Text
      content='好的界面设计并不始于图片，而是始于对人的理解，比如人们喜欢什么，为什么人们会试用某种特定的软件，他们可能与之怎样交互。好的界面设计并不始于图片，而是始于对人的理解'
      tooltipContent='我正在写呢...'
      tooltipColor='primary'
    />
  )
}

export default Demo
