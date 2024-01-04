import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './select.module.scss'

export type SelectProps<T extends ElementType = 'select'> = {
  as?: T
  className?: string
  fullWidth?: boolean
  variant?: 'primary'
} & ComponentPropsWithoutRef<T>

export const Select = <T extends ElementType = 'select'>(
  props: SelectProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof SelectProps<T>>
) => {
  const { as: Component = 'select', className, fullWidth, variant = 'primary', ...rest } = props

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}
