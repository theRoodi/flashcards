import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './slider.module.scss'

export type SliderProps<T extends ElementType = 'input'> = {
  as?: T
  className?: string
  fullWidth?: boolean
  variant?: 'primary'
} & ComponentPropsWithoutRef<T>

export const Slider = <T extends ElementType = 'input'>(
  props: SliderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof SliderProps<T>>
) => {
  const { as: Component = 'input', className, fullWidth, variant = 'primary', ...rest } = props

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}
