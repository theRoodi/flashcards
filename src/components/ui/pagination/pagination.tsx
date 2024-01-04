import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './pagination.module.scss'

export type PaginationProps<T extends ElementType = 'button'> = {
  as?: T
  className?: string
  fullWidth?: boolean
  variant?: 'primary'
} & ComponentPropsWithoutRef<T>

export const Pagination = <T extends ElementType = 'button'>(
  props: PaginationProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof PaginationProps<T>>
) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}
