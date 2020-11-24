/**
 * title: Colorful Tooltip
 * desc: We preset a series of colorful Tooltip styles for use in different situations.
 */
import React, { FC } from 'react'
import { Tooltip, Button } from 'sparkd'

const Demo: FC = () => {
  return (
    <>
      <Tooltip title='this is primary usage' colorType='primary'>
        <Button>primary</Button>
      </Tooltip>
      <Tooltip title='this is darkerPrimary usage' colorType='darkerPrimary'>
        <Button>darkerPrimary</Button>
      </Tooltip>
      <Tooltip title='this is moreDarkerPrimary usage' colorType='moreDarkerPrimary'>
        <Button>moreDarkerPrimary</Button>
      </Tooltip>
      <Tooltip title='this is success usage' colorType='success'>
        <Button>success</Button>
      </Tooltip>
      <Tooltip title='this is info usage' colorType='info'>
        <Button>info</Button>
      </Tooltip>
      <Tooltip title='this is warning usage' colorType='warning'>
        <Button>warning</Button>
      </Tooltip>
      <Tooltip title='this is danger usage' colorType='danger'>
        <Button>danger</Button>
      </Tooltip>
      <Tooltip title='this is darkerDanger usage' colorType='darkerDanger'>
        <Button>darkerDanger</Button>
      </Tooltip>
      <Tooltip title='this is moreDarkerDanger usage' colorType='moreDarkerDanger'>
        <Button>moreDarkerDanger</Button>
      </Tooltip>
      <Tooltip title='this is light usage' colorType='light'>
        <Button>light</Button>
      </Tooltip>
      <Tooltip title='this is dark usage' colorType='dark'>
        <Button>dark</Button>
      </Tooltip>
    </>
  )
}

export default Demo
