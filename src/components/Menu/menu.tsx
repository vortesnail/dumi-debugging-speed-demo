import React, { FC, ReactNode, useState } from 'react'
import { Menu as AntdMenu } from 'antd'
import { MenuProps as AntdMenuProps } from 'antd/es/menu/index'
import { MenuInfo } from 'rc-menu/lib/interface'
import { useHistory } from 'react-router-dom'
import { prefixCls } from 'Utils/constants'
import classNames from 'classnames'

interface Des {
  des?: any
}

type DataSource = {
  key: string
  name: string
  icon?: ReactNode
  isLink?: boolean
  path: string
  onClick?: (info: DataSource) => any
  childs: DataSource[]
}

interface MenuProps extends AntdMenuProps {
  dataSource: DataSource[]
  width?: number | string
  defaultSelectedKey?: React.Key
}

export type NFC = FC<MenuProps> & Des

const Menu: NFC = (props) => {
  const { className, mode, dataSource, width, defaultSelectedKey, ...restProps } = props
  const history = useHistory()
  const classes = classNames(`${prefixCls}-menu`, className, {})
  const [current, setCurrent] = useState<React.Key | undefined>(defaultSelectedKey)

  const handleMenuClick = (e: MenuInfo) => {
    setCurrent(e.key)
  }

  const onItemClick = (menu: DataSource) => {
    if (history) {
      history.push(menu.path)
    }
    if (menu.onClick) {
      menu.onClick(menu)
    }
  }

  const renderMenu = (menu: DataSource) => {
    if (menu.childs.length === 0) {
      return (
        <AntdMenu.Item key={menu.key} icon={menu.icon} onClick={() => onItemClick(menu)}>
          {menu.isLink ? (
            <a href={menu.path} target='_blank' rel='noopener noreferrer'>
              {menu.name}
            </a>
          ) : (
            menu.name
          )}
        </AntdMenu.Item>
      )
    }

    return (
      <AntdMenu.SubMenu key={menu.key} icon={menu.icon} title={menu.name}>
        {menu.childs.map((childMenu) => {
          return renderMenu(childMenu)
        })}
      </AntdMenu.SubMenu>
    )
  }

  return (
    <AntdMenu
      className={classes}
      onClick={handleMenuClick}
      selectedKeys={[current as string]}
      mode={mode}
      style={{ width }}
      {...restProps}
    >
      {dataSource?.map((menu) => renderMenu(menu))}
    </AntdMenu>
  )
}

Menu.defaultProps = {
  className: '',
  mode: 'horizontal',
  dataSource: [],
  width: '100%',
  defaultSelectedKey: '',
}

export default Menu
