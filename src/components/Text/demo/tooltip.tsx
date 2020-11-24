/**
 * title: Tooltip
 * desc: When you want to move the mouse into the text, you can set the attribute `tooltipContent` .
 */
import React, { FC } from 'react'
import { Text } from 'sparkd'

const Demo: FC = () => {
  return (
    <Text
      content='Good interface design does not start with pictures, but with understanding of people, such as what people like, why people try a particular software, and how they might interact with it. Good interface design does not start with pictures, but with understanding of people'
      tooltipContent='Yeah, i am writting...'
      tooltipColor='primary'
    />
  )
}

export default Demo
