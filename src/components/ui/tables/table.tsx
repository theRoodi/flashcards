import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './table.module.scss'

export type TableProps<T extends ElementType = 'table'> = {
  as?: T
  className?: string
  fullWidth?: boolean
  variant?: 'primary'
} & ComponentPropsWithoutRef<T>

export const Table = <T extends ElementType = 'table'>(
  props: TableProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TableProps<T>>
) => {
  const { as: Component = 'table', className, fullWidth, variant = 'primary', ...rest } = props

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}
