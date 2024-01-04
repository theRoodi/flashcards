import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './checkbox.module.scss'

// @ts-ignore
export type CheckboxProps<T extends ElementType = 'input'> = {
  as?: T
  className?: string
  fullWidth?: boolean
  type?: 'checkbox'
  variant?: 'primary'
} & ComponentPropsWithoutRef<T>

export const Checkbox = <T extends ElementType = 'input'>(
  props: CheckboxProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof CheckboxProps<T>>
) => {
  const { as: Component = 'input', className, fullWidth, variant = 'primary', ...rest } = props

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}
