import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './dropDownMenu.module.scss'

export type DropDownMenuProps<T extends ElementType = 'span'> = {
  as?: T
  className?: string
  fullWidth?: boolean
  variant?: 'primary'
} & ComponentPropsWithoutRef<T>

export const DropDownMenu = <T extends ElementType = 'span'>(
  props: DropDownMenuProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof DropDownMenuProps<T>>
) => {
  const { as: Component = 'span', className, fullWidth, variant = 'primary', ...rest } = props

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}
