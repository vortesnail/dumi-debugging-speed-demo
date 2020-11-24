/**
 * title: Display
 * desc: Set the property `display` to control whether the text is line or block.
 */
import React, { FC } from 'react'
import { Text } from 'sparkd'

const Demo: FC = () => {
  return (
    <>
      <p style={{ background: '#eee', margin: '4px 0' }}>Set display to inline: </p>
      <Text display='inline' content='Please enter what you want to show' />
      <span>&nbsp;&nbsp;&nbsp;</span>
      <Text display='inline' content='Please enter what you want to show' />
      <p style={{ background: '#eee', margin: '4px 0' }}>Set display to block: </p>
      <Text display='block' content='Please enter what you want to show' />
      <Text display='block' content='Please enter what you want to show' />
    </>
  )
}

export default Demo
