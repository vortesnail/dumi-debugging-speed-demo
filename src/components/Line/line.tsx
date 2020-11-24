import React, { FC } from 'react'
import classNames from 'classnames'
import ReactEchartsCore from 'echarts-for-react/lib/core'
import { EChartOption } from 'echarts'
import echarts from 'echarts/lib/echarts'
import { prefixCls } from 'Utils/constants'
import { getColor } from 'Utils/styleCombine'
import MiniLine, { MiniLineProps } from './mini-line'

import 'echarts/lib/chart/line'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'

interface Des {
  des?: any
}

export type XYData = {
  name: string
  xData: string[]
  yData: number[]
}

export interface LineProps {
  className?: string
  title?: string
  height?: string | number
  isSmooth?: boolean
  hasShadow?: boolean
  hasLegend?: boolean
  dataSource?: XYData[]
}

export type NFC = FC<LineProps> & Des & { MiniLine: FC<MiniLineProps> }

const Line: NFC = (props) => {
  const { className, title, height, isSmooth, hasShadow, hasLegend, dataSource } = props

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
  let otherOpt: any = {}
  if (hasLegend) {
    otherOpt = {
      legend: {
        left: 0,
        top: 30,
        itemGap: 26,
        itemHeight: 4,
        itemWidth: 16,
        textStyle: {
          color: '#666',
        },
        icon: 'rect',
      },
    }
  }

  const options: EChartOption = {
    title: {
      text: title,
      textStyle: {
        color: '#333',
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 24,
      },
    },
    grid: {
      left: 6,
      right: 16,
      top: hasLegend ? 68 : 44,
      bottom: 6,
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: ['10%', '10%'],
      axisTick: {
        alignWithLabel: true,
        length: 3,
      },
      axisLine: {
        lineStyle: {
          color: '#ccc',
        },
        onZero: false,
      },
      axisLabel: {
        color: '#999',
        fontSize: 12,
        margin: 9,
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
        color: '#999',
        fontSize: 12,
        margin: 10,
      },
      splitLine: {
        lineStyle: {
          color: '#eee',
        },
      },
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255,255,255,0.9)',
      formatter(params: EChartOption.Tooltip.Format[]) {
        let html = `
          <p style="color: #999; font-size: 12px; line-height: 14px; margin: 0">${params[0]?.name}</p>
        `
        params.forEach((each) => {
          html +=
            '<div style="font-size: 12px; line-height: 14px; display: flex; align-items: center; justify-content: space-between; margin-top: 8px">'
          if (hasLegend) {
            html += `
              <span style="margin-right: 10px; display: flex; align-items: center;">
                <span style="display:inline-block;margin-right:5px;width:16px;height:4px;background-color:${each.color}"></span>
                <span style="color: #666">${each.seriesName}</span>
              </span>
              <span style="color: ${each.color}">${each.value}</span>
            `
          } else {
            html += `
              <span style="color: #666; margin-right: 20px">${each.seriesName}</span>
              <span style="color: #666">${each.value}</span>
            `
          }
          html += '</div>'
        })
        return html
      },
      padding: [10, 10],
      extraCssText:
        'box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12);',
    },
    series: renderYData(),
    ...otherOpt,
  }

  return (
    <ReactEchartsCore
      className={classNames(`${prefixCls}-line`, className)}
      echarts={echarts}
      option={options}
      style={{ height, width: '100%' }}
      notMerge
      lazyUpdate
    />
  )
}

Line.defaultProps = {
  className: '',
  title: undefined,
  height: 260,
  isSmooth: false,
  hasShadow: false,
  hasLegend: false,
  dataSource: [],
}

Line.MiniLine = MiniLine

export default Line
