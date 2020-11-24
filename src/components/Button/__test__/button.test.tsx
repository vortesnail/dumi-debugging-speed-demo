import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { ButtonProps } from 'antd/es/button/index'
import { prefixCls } from 'Utils/constants'
import Button from '../button'

const defaultProps: ButtonProps = {
  onClick: jest.fn(),
}

const testProps: ButtonProps = {
  type: 'primary',
  size: 'large',
  className: 'klass',
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
}

describe('test Buttom component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>)
    const element = wrapper.getByText('Nice').parentNode as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass(`${prefixCls}-btn ${prefixCls}-btn-default`)
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const element = wrapper.getByText('Nice').parentNode
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass(`${prefixCls}-btn-primary ${prefixCls}-btn-large klass`)
  })

  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(
      <Button type='link' href='http://wwww.baidu.com'>
        Link
      </Button>,
    )
    const element = wrapper.getByText('Link').parentNode as HTMLAnchorElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass(`${prefixCls}-btn ${prefixCls}-btn-link`)
  })

  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>)
    const element = wrapper.getByText('Nice').parentNode as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})
