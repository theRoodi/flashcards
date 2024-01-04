import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './radioGroup.module.scss'

export type RadioGroupProps<T extends ElementType = 'input'> = {
  as?: T
  className?: string
  fullWidth?: boolean
  variant?: 'primary'
} & ComponentPropsWithoutRef<T>

export const RadioGroup = <T extends ElementType = 'input'>(
  props: RadioGroupProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof RadioGroupProps<T>>
) => {
  const { as: Component = 'input', className, fullWidth, variant = 'primary', ...rest } = props

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}
