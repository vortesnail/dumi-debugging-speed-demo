/**
 * title: Mini line chart
 * desc: The simplest way to display.
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
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: 300, padding: 20 }}>
        <Line.MiniLine title='Mini Line Chart' subTitle='1.48' dataSource={dataSource} />
      </div>
      <div style={{ width: 300, padding: 20 }}>
        <Line.MiniLine title='Mini Line Chart' subTitle='1.48' dataSource={dataSource} isSmooth />
      </div>
    </div>
  )
}

export default Demo
