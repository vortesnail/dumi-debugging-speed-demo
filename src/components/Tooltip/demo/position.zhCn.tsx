/**
 * title: 位置
 * desc: 位置有 12 个方向。
 */
import React, { FC } from 'react'
import { Tooltip, Button } from 'sparkd'

const Demo: FC = () => {
  return (
    <>
      <Tooltip title='在上方偏左出现' placement='topLeft'>
        <Button>在上方偏左出现</Button>
      </Tooltip>
      <Tooltip title='在上方出现' placement='top'>
        <Button>在上方出现</Button>
      </Tooltip>
      <Tooltip title='在上方偏右出现' placement='topRight'>
        <Button>在上方偏右出现</Button>
      </Tooltip>
      <Tooltip title='在左方偏上出现' placement='leftTop'>
        <Button>在左方偏上出现</Button>
      </Tooltip>
      <Tooltip title='在左方出现' placement='left'>
        <Button>在左方出现</Button>
      </Tooltip>
      <Tooltip title='在左方偏下出现' placement='leftBottom'>
        <Button>在左方偏下出现</Button>
      </Tooltip>
      <Tooltip title='在右方偏上出现' placement='rightTop'>
        <Button>在右方偏上出现</Button>
      </Tooltip>
      <Tooltip title='在右方出现' placement='right'>
        <Button>在右方出现</Button>
      </Tooltip>
      <Tooltip title='在右方偏下出现' placement='rightBottom'>
        <Button>在右方偏下出现</Button>
      </Tooltip>
      <Tooltip title='在下方偏左出现' placement='bottomLeft'>
        <Button>在下方偏左出现</Button>
      </Tooltip>
      <Tooltip title='在下方出现' placement='bottom'>
        <Button>在下方出现</Button>
      </Tooltip>
      <Tooltip title='在下方偏右出现' placement='bottomRight'>
        <Button>在下方偏右出现</Button>
      </Tooltip>
    </>
  )
}

export default Demo
