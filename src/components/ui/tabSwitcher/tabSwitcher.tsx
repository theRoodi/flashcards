import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './tabSwitcher.module.scss'

export type TabSwitcherProps<T extends ElementType = 'button'> = {
  as?: T
  className?: string
  fullWidth?: boolean
  variant?: 'primary'
} & ComponentPropsWithoutRef<T>

export const TabSwitcher = <T extends ElementType = 'button'>(
  props: TabSwitcherProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TabSwitcherProps<T>>
) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}
