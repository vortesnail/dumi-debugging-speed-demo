import React, { FC, ReactNode, ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import { prefixCls } from 'Utils/constants'
import classNames from 'classnames'

interface Des {
  des?: any
}

export type Route = {
  icon?: ReactElement
  title?: string
  href?: string
  isLink?: boolean
  onClick?: (info: Route) => void
}

export interface BreadcrumbProps {
  className?: string
  separator?: ReactNode
  navTitle?: string
  backgroundColor?: string
  routes?: Route[]
}

export type NFC = FC<BreadcrumbProps> & Des

export interface BreadcrumbItemProps extends Route {
  separator?: ReactNode
  suffixSeparator?: ReactNode
  isCurrent?: boolean
}

const BreadcrumbItem: FC<BreadcrumbItemProps> = (props) => {
  const { icon, title, href, isLink, onClick, separator, suffixSeparator, isCurrent } = props
  const history = useHistory()

  const onItemClick = () => {
    if (history && href && isLink) {
      history.push(href)
    }

    if (onClick) {
      onClick({ icon, title, href, isLink, onClick })
    }
  }

  return (
    <span className={`${prefixCls}-breadcrumb-item`}>
      {separator && <span className={`${prefixCls}-breadcrumb-item-separator`}>{separator}</span>}
      <span
        className={classNames(`${prefixCls}-breadcrumb-item-click-area`, {
          [`${prefixCls}-breadcrumb-item-click-area-not-click`]: !isLink,
          [`${prefixCls}-breadcrumb-item-click-area-current`]: isCurrent,
        })}
        onClick={onItemClick}
      >
        {icon && <span className={`${prefixCls}-breadcrumb-item-icon`}>{icon}</span>}
        {title && <span className={`${prefixCls}-breadcrumb-item-title`}>{title}</span>}
      </span>
      {suffixSeparator && <span className={`${prefixCls}-breadcrumb-item-suffix-separator`}>{suffixSeparator}</span>}
    </span>
  )
}

const Breadcrumb: NFC = (props) => {
  const { className, separator, navTitle, backgroundColor, routes } = props
  const classes = classNames(`${prefixCls}-breadcrumb`, className, {})

  return (
    <div className={classes} style={{ backgroundColor }}>
      {navTitle && <BreadcrumbItem title={navTitle} isLink={false} suffixSeparator=':' />}
      {routes?.map((route, index) => (
        <BreadcrumbItem
          key={route.title}
          icon={route.icon}
          title={route.title}
          href={route.href}
          isLink={route.isLink}
          separator={index === 0 ? undefined : separator}
          onClick={route.onClick}
          isCurrent={index === routes.length - 1}
        />
      ))}
    </div>
  )
}

Breadcrumb.defaultProps = {
  separator: '/',
  navTitle: undefined,
  backgroundColor: ' #fff',
  routes: [
    {
      title: 'Home',
      href: '#',
    },
    {
      title: 'App',
      href: '#',
    },
  ],
}

export default Breadcrumb
