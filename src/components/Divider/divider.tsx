import React, { FC } from 'react'
import { Divider as AntdDivider } from 'antd'
import { DividerProps as AntdDividerProps } from 'antd/es/divider/index'
import { prefixCls } from 'Utils/constants'
import classNames from 'classnames'

interface Des {
  des?: any
}

export type NFC = FC<AntdDividerProps> & Des

const Divider: NFC = (props) => {
  const { children, className, dashed, orientation, type, plain, ...restProps } = props
  const classes = classNames(`${prefixCls}-divider`, className, {
    [`${prefixCls}-divider-dashed`]: dashed,
    [`${prefixCls}-divider-with-text-${orientation}`]: orientation,
    [`${prefixCls}-divider-${type}`]: type,
    [`${prefixCls}-divider-plain`]: plain,
  })

  return (
    <AntdDivider className={classes} dashed={dashed} orientation={orientation} type={type} plain={plain} {...restProps}>
      {children}
    </AntdDivider>
  )
}

Divider.defaultProps = {
  className: '',
  dashed: false,
  orientation: 'center',
  type: 'horizontal',
  plain: false,
}

export default Divider
