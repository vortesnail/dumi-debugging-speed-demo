import React, { FC } from 'react'
import classNames from 'classnames'
import ReactEchartsCore from 'echarts-for-react/lib/core'
import { EChartOption } from 'echarts'
import echarts from 'echarts/lib/echarts'
import { prefixCls } from 'Utils/constants'
import { getColor } from 'Utils/styleCombine'

import 'echarts/lib/chart/line'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/title'

export type XYData = {
  name: string
  xData: string[]
  yData: number[]
}

export interface MiniLineProps {
  className?: string
  title?: string
  subTitle?: string
  height?: string | number
  isSmooth?: boolean
  hasShadow?: boolean
  dataSource?: XYData[]
}

const MiniLine: FC<MiniLineProps> = (props) => {
  const { className, title, subTitle, height, isSmooth, hasShadow, dataSource } = props

  const xData: string[] = dataSource ? dataSource[0].xData : []
  const renderYData = () => {
    const yDataCollect: EChartOption.Series[] = []
    if (dataSource) {
      dataSource.forEach((data, index) => {
        let serOtherOpt: any = {}
        if (hasShadow) {
          serOtherOpt = {
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: getColor(index),
                  },
                  {
                    offset: 1,
                    color: '#fff',
                  },
                ],
              },
              opacity: 0.25,
            },
          }
        }

        yDataCollect.push({
          type: 'line',
          name: data.name,
          stack: '',
          smooth: isSmooth,
          itemStyle: {
            color: getColor(index),
          },
          symbolSize: 1,
          showSymbol: false,
          data: data.yData,
          ...serOtherOpt,
        })
      })
    }

    return yDataCollect
  }

  let gridTop = 0
  if (title && title !== '') {
    gridTop += 32
  }
  if (subTitle && subTitle !== '') {
    gridTop += 24
  }

  const options: EChartOption = {
    title: [
      {
        text: title,
        textStyle: {
          color: '#333',
          fontSize: 16,
          fontWeight: 500,
          lineHeight: 16,
        },
        left: -4,
        top: 0,
      },
      {
        text: subTitle,
        textStyle: {
          color: '#5B8FF9',
          fontSize: 20,
          fontWeight: 500,
          lineHeight: 16,
        },
        left: -4,
        top: title && title !== '' ? 30 : 0,
      },
    ],
    grid: {
      left: 6,
      right: 16,
      top: gridTop,
      bottom: 6,
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: '#000',
          opacity: 0.1,
        },
        onZero: false,
      },
      axisLabel: {
        show: false,
      },
      data: xData,
    },
    yAxis: {
      type: 'value',
      boundaryGap: false,
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },

    series: renderYData(),
  }

  return (
    <ReactEchartsCore
      className={classNames(`${prefixCls}-mini-line`, className)}
      echarts={echarts}
      option={options}
      style={{ height, width: '100%' }}
      notMerge
      lazyUpdate
    />
  )
}

MiniLine.defaultProps = {
  className: '',
  title: '',
  subTitle: '',
  height: 120,
  isSmooth: false,
  hasShadow: true,
  dataSource: [],
}

export default MiniLine
