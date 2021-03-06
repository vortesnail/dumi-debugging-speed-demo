/**
 * title: 多条折线图
 * desc: 属性 `dataSource` 传入的数组对象为多个就能呈现多条折线。
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React, { FC } from 'react'
import { Line } from 'sparkd'

const dataSource = [
  {
    name: '折线1',
    xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    yData: [100, 832, 701, 1100, 300, 899, 1120],
  },
  {
    name: '折线2',
    xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    yData: [200, 900, 312, 436, 1132, 634, 1200],
  },
  {
    name: '折线3',
    xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    yData: [800, 123, 421, 1212, 442, 565, 634],
  },
  {
    name: '折线4',
    xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    yData: [564, 532, 1200, 200, 300, 899, 321],
  },
]

const Demo: FC = () => {
  return <Line title='折线图' dataSource={dataSource} />
}

export default Demo
