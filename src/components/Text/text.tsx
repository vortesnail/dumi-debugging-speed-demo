import React, { FC } from 'react'
import { prefixCls } from 'Utils/constants'
import classNames from 'classnames'
import { styleCombine } from 'Utils/styleCombine'
import Tooltip from '../Tooltip'
import { ColorType } from '../Tooltip/tooltip'

interface Des {
  des?: any
}

interface TextProps {
  className?: string
  content?: string
  color?: string
  topPadding?: number
  rightPadding?: number
  bottomPadding?: number
  leftPadding?: number
  fontSize?: number
  backgroundColor?: string
  display?: 'inline' | 'block'
  tooltipContent?: string
  tooltipColor?: keyof ColorType
}

export type NFC = FC<TextProps> & Des

const Text: NFC = (props) => {
  const {
    className,
    content,
    color,
    topPadding,
    rightPadding,
    bottomPadding,
    leftPadding,
    fontSize,
    backgroundColor,
    display,
    tooltipContent,
    tooltipColor,
  } = props
  const classes = classNames(`${prefixCls}-text`, className, {
    [`${prefixCls}-text-inline`]: display === 'inline',
  })

  const styles = {
    ...styleCombine(
      {
        paddingTop: topPadding,
        paddingRight: rightPadding,
        paddingBottom: bottomPadding,
        paddingLeft: leftPadding,
        fontSize,
      },
      'px',
    ),
    ...styleCombine(
      {
        color,
        backgroundColor,
      },
      '',
    ),
  }

  const renderFn = () => {
    if (display === 'inline') {
      if (tooltipContent && tooltipContent !== '') {
        return (
          <Tooltip title={tooltipContent} colorType={tooltipColor}>
            <span className={classes} style={styles}>
              {content}
            </span>
          </Tooltip>
        )
      }
      return (
        <span className={classes} style={styles}>
          {content}
        </span>
      )
    }

    return (
      <>
        {tooltipContent && tooltipContent !== '' ? (
          <Tooltip title={tooltipContent} colorType={tooltipColor}>
            <p className={classes} style={styles}>
              {content}
            </p>
          </Tooltip>
        ) : (
          <p className={classes} style={styles}>
            {content}
          </p>
        )}
      </>
    )
  }

  return renderFn()
}

Text.defaultProps = {
  className: '',
  content: '内容',
  color: '#333333',
  fontSize: 14,
  display: 'block',
  tooltipColor: 'primary',
}

export default Text
