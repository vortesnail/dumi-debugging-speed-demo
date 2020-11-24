/**
 * title: 曲线折线图
 * desc: 设置属性 `isSmooth` 来得到曲线图。
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
]

const Demo: FC = () => {
  return <Line title='折线图' dataSource={dataSource} isSmooth />
}

export default Demo
