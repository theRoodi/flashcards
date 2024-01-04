import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './modal.module.scss'

export type ModalProps<T extends ElementType = 'span'> = {
  as?: T
  className?: string
  fullWidth?: boolean
  variant?: 'primary'
} & ComponentPropsWithoutRef<T>

export const Modal = <T extends ElementType = 'span'>(
  props: ModalProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ModalProps<T>>
) => {
  const { as: Component = 'span', className, fullWidth, variant = 'primary', ...rest } = props

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}
