/**
 * title: 多彩文字提示
 * desc: 我们添加了多种预设色彩的文字提示样式，用作不同场景使用。
 */
import React, { FC } from 'react'
import { Tooltip, Button } from 'sparkd'

const Demo: FC = () => {
  return (
    <>
      <Tooltip title='这是primary颜色' colorType='primary'>
        <Button>primary</Button>
      </Tooltip>
      <Tooltip title='这是darkerPrimary颜色' colorType='darkerPrimary'>
        <Button>darkerPrimary</Button>
      </Tooltip>
      <Tooltip title='这是moreDarkerPrimary颜色' colorType='moreDarkerPrimary'>
        <Button>moreDarkerPrimary</Button>
      </Tooltip>
      <Tooltip title='这是success颜色' colorType='success'>
        <Button>success</Button>
      </Tooltip>
      <Tooltip title='这是info颜色' colorType='info'>
        <Button>info</Button>
      </Tooltip>
      <Tooltip title='这是warning颜色' colorType='warning'>
        <Button>warning</Button>
      </Tooltip>
      <Tooltip title='这是danger颜色' colorType='danger'>
        <Button>danger</Button>
      </Tooltip>
      <Tooltip title='这是darkerDanger颜色' colorType='darkerDanger'>
        <Button>darkerDanger</Button>
      </Tooltip>
      <Tooltip title='这是moreDarkerDanger颜色' colorType='moreDarkerDanger'>
        <Button>moreDarkerDanger</Button>
      </Tooltip>
      <Tooltip title='这是light颜色' colorType='light'>
        <Button>light</Button>
      </Tooltip>
      <Tooltip title='这是dark颜色' colorType='dark'>
        <Button>dark</Button>
      </Tooltip>
    </>
  )
}

export default Demo
