/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { FC, useRef } from 'react'
import { Dropdown as AntdDropdown } from 'antd'
import { DropDownProps as AntdDropDownProps } from 'antd/es/dropdown/index'
import { DownOutlined } from '@ant-design/icons'
import { prefixCls } from 'Utils/constants'
import classNames from 'classnames'
import Button from '../Button'
import DropdownButton, { DropdownButtonProps } from './dropdown-button'

interface Des {
  des?: any
}

interface DropDownProps extends AntdDropDownProps {
  type?: 'label' | 'button'
  label?: string
  hasDownIcon?: boolean
}

export type NFC = FC<DropDownProps> & Des & { Button: FC<DropdownButtonProps> }

const Dropdown: NFC = (props) => {
  const { className, type, label, hasDownIcon, overlay, ...restProps } = props
  const dropdownRef = useRef<HTMLSpanElement>(null)
  const classes = classNames(`${prefixCls}-dropdown`, className, {})

  const renderBtn = () => {
    if (type === 'button') {
      return (
        <Button>
          {label}
          {hasDownIcon ? <DownOutlined /> : ''}
        </Button>
      )
    }
    return (
      <span className={`${prefixCls}-dropdown-label`}>
        <span>{label}</span>
        {hasDownIcon ? <DownOutlined /> : ''}
      </span>
    )
  }

  return (
    <span className={classes} ref={dropdownRef}>
      <AntdDropdown overlay={overlay} {...restProps} getPopupContainer={() => dropdownRef.current!}>
        {renderBtn()}
      </AntdDropdown>
    </span>
  )
}

Dropdown.defaultProps = {
  type: 'label',
  label: '下拉菜单',
  hasDownIcon: true,
}

Dropdown.Button = DropdownButton

export default Dropdown
