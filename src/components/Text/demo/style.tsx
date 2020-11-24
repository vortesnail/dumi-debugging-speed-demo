/**
 * title: Style
 * desc: Some style settings.
 */
import React, { FC } from 'react'
import { Text } from 'sparkd'

const Demo: FC = () => {
  return (
    <>
      <Text
        content='Please enter what you want to show'
        color='#854cac'
        topPadding={10}
        bottomPadding={20}
        fontSize={14}
      />
      <Text
        content='Please enter what you want to show'
        color='#854cac'
        topPadding={10}
        bottomPadding={20}
        fontSize={16}
      />
      <Text content='Please enter what you want to show' color='#fff' fontSize={16} backgroundColor='#e9c65d' />
    </>
  )
}

export default Demo
