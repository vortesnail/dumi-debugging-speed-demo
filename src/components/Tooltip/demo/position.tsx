/**
 * title: Placement
 * desc: There are 12 placement options available.
 */
import React, { FC } from 'react'
import { Tooltip, Button } from 'sparkd'

const Demo: FC = () => {
  return (
    <>
      <Tooltip title='this is topLeft usage' placement='topLeft'>
        <Button>topLeft</Button>
      </Tooltip>
      <Tooltip title='this is top usage' placement='top'>
        <Button>top</Button>
      </Tooltip>
      <Tooltip title='this is topRight usage' placement='topRight'>
        <Button>topRight</Button>
      </Tooltip>
      <Tooltip title='this is leftTop usage' placement='leftTop'>
        <Button>leftTop</Button>
      </Tooltip>
      <Tooltip title='this is left usage' placement='left'>
        <Button>left</Button>
      </Tooltip>
      <Tooltip title='this is leftBottom usage' placement='leftBottom'>
        <Button>leftBottom</Button>
      </Tooltip>
      <Tooltip title='this is rightTop usage' placement='rightTop'>
        <Button>rightTop</Button>
      </Tooltip>
      <Tooltip title='this is right usage' placement='right'>
        <Button>right</Button>
      </Tooltip>
      <Tooltip title='this is rightBottom usage' placement='rightBottom'>
        <Button>rightBottom</Button>
      </Tooltip>
      <Tooltip title='this is bottomLeft usage' placement='bottomLeft'>
        <Button>bottomLeft</Button>
      </Tooltip>
      <Tooltip title='this is bottom usage' placement='bottom'>
        <Button>bottom</Button>
      </Tooltip>
      <Tooltip title='this is bottomRight usage' placement='bottomRight'>
        <Button>bottomRight</Button>
      </Tooltip>
    </>
  )
}

export default Demo
