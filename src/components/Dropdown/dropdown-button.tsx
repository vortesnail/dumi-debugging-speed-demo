/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { FC, useRef } from 'react'
import { Dropdown as AntdDropdown } from 'antd'
import { DropDownProps as AntdDropDownProps } from 'antd/es/dropdown/index'
import { DownOutlined } from '@ant-design/icons'
import { prefixCls } from 'Utils/constants'
import classNames from 'classnames'
import Button from '../Button'

export interface DropdownButtonProps extends AntdDropDownProps {
  label?: string
  icon?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export type NFC = FC<DropdownButtonProps>

const DropdownButton: NFC = (props) => {
  const { className, label, overlay, icon, onClick, ...restProps } = props
  const dropdownRef = useRef<HTMLSpanElement>(null)
  const classes = classNames(`${prefixCls}-dropdown-button`, className, {})

  return (
    <span className={classes} ref={dropdownRef}>
      <Button className={`${prefixCls}-dropdown-button-label`} onClick={onClick}>
        {label}
      </Button>
      <AntdDropdown
        overlay={overlay}
        placement='bottomRight'
        {...restProps}
        getPopupContainer={() => dropdownRef.current!}
      >
        <Button className={`${prefixCls}-dropdown-button-icon`}>{icon}</Button>
      </AntdDropdown>
    </span>
  )
}

DropdownButton.defaultProps = {
  label: '下拉菜单',
  icon: <DownOutlined />,
  onClick: () => {
    /** */
  },
}

export default DropdownButton
