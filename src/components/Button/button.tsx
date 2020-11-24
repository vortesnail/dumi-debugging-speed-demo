import React, { FC } from 'react'
import { Button as AntdButton } from 'antd'
import { ButtonProps as AntdButtonProps } from 'antd/es/button/index'
import { prefixCls } from 'Utils/constants'
import classNames from 'classnames'

interface Des {
  des?: any
}

export type NFC = FC<AntdButtonProps> & Des

const Button: NFC = (props) => {
  const { className, children, type, size, ...restProps } = props
  const classes = classNames(`${prefixCls}-btn`, className, {
    [`${prefixCls}-btn-${type}`]: type,
    [`${prefixCls}-btn-${size}`]: size,
  })

  return (
    <AntdButton className={classes} type={type} size={size} {...restProps}>
      {children}
    </AntdButton>
  )
}

Button.defaultProps = {
  type: 'default',
  size: 'middle',
}

export default Button
