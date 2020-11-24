/**
 * title: 样式
 * desc: 一些样式设置。
 */
import React, { FC } from 'react'
import { Text } from 'sparkd'

const Demo: FC = () => {
  return (
    <>
      <Text content='请输入您想要展示的内容' color='#854cac' topPadding={10} bottomPadding={20} fontSize={14} />
      <Text content='请输入您想要展示的内容' color='#854cac' topPadding={10} bottomPadding={20} fontSize={16} />
      <Text content='请输入您想要展示的内容' color='#fff' fontSize={16} backgroundColor='#e9c65d' />
    </>
  )
}

export default Demo
