/**
 * title: 带有阴影的折线图
 * desc: 更美的呈现方式，设置属性 `hasShadow` 即可得到。
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
  return <Line title='折线图' dataSource={dataSource} hasShadow />
}

export default Demo
