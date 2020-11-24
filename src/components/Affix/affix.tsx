import React, { FC } from 'react'
import { Affix as AntdAffix } from 'antd'
import { AffixProps as AntdAffixProps } from 'antd/es/affix/index'
import { prefixCls } from 'Utils/constants'
import classNames from 'classnames'

interface Des {
  des?: any
}

export type NFC = FC<AntdAffixProps> & Des

const Affix: NFC = (props) => {
  const { className, children, ...restProps } = props
  const classes = classNames(`${prefixCls}-btn`, className)

  return (
    <AntdAffix className={classes} {...restProps}>
      {children}
    </AntdAffix>
  )
}

Affix.defaultProps = {
  className: '',
}

export default Affix
