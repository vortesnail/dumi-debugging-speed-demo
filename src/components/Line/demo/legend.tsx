/**
 * title: Line chart with legend
 * desc: The line chart with legend can click to show and hide a certain line.
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
  {
    name: 'Line2',
    xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    yData: [200, 900, 312, 436, 1132, 634, 1200],
  },
  {
    name: 'Line3',
    xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    yData: [800, 123, 421, 1212, 442, 565, 634],
  },
  {
    name: 'Line4',
    xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    yData: [564, 532, 1200, 200, 300, 899, 321],
  },
]

const Demo: FC = () => {
  return <Line title='Line Chart' dataSource={dataSource} hasLegend />
}

export default Demo
