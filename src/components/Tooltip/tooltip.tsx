import React, { FC } from 'react'
import { Tooltip as AntdTooltip } from 'antd'
import { TooltipProps as AntdTooltipProps } from 'antd/es/tooltip/index'
import { prefixCls } from 'Utils/constants'
import classNames from 'classnames'

interface Des {
  des?: any
}

interface ColorProps {
  colorType?: keyof ColorType
}

export type ColorType = {
  primary?: string
  darkerPrimary?: string
  moreDarkerPrimary?: string
  success?: string
  info?: string
  warning?: string
  danger?: string
  darkerDanger?: string
  moreDarkerDanger?: string
  light?: string
  dark?: string
}

export type NFC = FC<AntdTooltipProps & ColorProps> & Des

const Tooltip: NFC = (props) => {
  const { overlayClassName, colorType, ...restProps } = props
  const classes = classNames(`${prefixCls}-tooltip`, overlayClassName)
  const colorObject: ColorType = {
    primary: '#4a90e2',
    darkerPrimary: '#3688e7',
    moreDarkerPrimary: '#2d7cd8',
    success: '#4cac93',
    info: '#4a90e2',
    warning: '#ed9d3e',
    danger: '#d0021b',
    darkerDanger: '#c20119',
    moreDarkerDanger: '#bc0017',
    light: '#f2f2f2',
    dark: '#333',
  }
  let colorHex
  if (colorType) {
    if (Object.keys(colorObject).includes(colorType)) {
      colorHex = colorObject[colorType]
    } else {
      colorHex = colorType
    }
  }
  return <AntdTooltip className={classes} {...restProps} color={colorHex} />
}

export default Tooltip
