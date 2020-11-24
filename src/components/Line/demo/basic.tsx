/**
 * title: Basic line chart
 * desc: The most original and concise line chart.
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
  return <Line title='Line Chart' dataSource={dataSource} />
}

export default Demo
