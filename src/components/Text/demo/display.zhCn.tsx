/**
 * title: 展现形式
 * desc: 设置 `display` 属性来控制文字是行还是块。
 */
import React, { FC } from 'react'
import { Text } from 'sparkd'

const Demo: FC = () => {
  return (
    <>
      <p style={{ background: '#eee', margin: '4px 0' }}>设置 display 为 inline: </p>
      <Text display='inline' content='请输入您想展示的内容' />
      <span>&nbsp;&nbsp;&nbsp;</span>
      <Text display='inline' content='请输入您想展示的内容' />
      <p style={{ background: '#eee', margin: '4px 0' }}>设置 display 为 block: </p>
      <Text display='block' content='请输入您想展示的内容' />
      <Text display='block' content='请输入您想展示的内容' />
    </>
  )
}

export default Demo
