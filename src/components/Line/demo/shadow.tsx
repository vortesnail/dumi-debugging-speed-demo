/**
 * title: Line chart with shadow
 * desc: A more beautiful way of presentation can be obtained by setting the property `hasShadow`.
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React, { FC } from 'react'
import { Line } from 'sparkd'

const dataSource = [
  {
    name: 'Line1',
    xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    yData: [100, 832, 701, 1100, 300, 899, 1120],
  },
]

const Demo: FC = () => {
  return <Line title='Line Chart' dataSource={dataSource} hasShadow />
}

export default Demo
