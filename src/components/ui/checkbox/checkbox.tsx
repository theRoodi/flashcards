import { ComponentPropsWithoutRef, ElementType, FC } from 'react'

import s from './checkbox.module.scss'

// @ts-ignore
export type CheckboxProps<T extends ElementType = 'input'> = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onChange?: (checked: boolean) => void
  position?: 'left'
  required?: boolean
} & ComponentPropsWithoutRef<T>

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  className,
  disabled,
  id,
  label,
  onChange,
  position,
  required,
}) => {
  const className = {
    buttonWrapper: clsx(s.buttonWrapper, className),
    container: clsx(s.container, className),
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
    root: s.root,
  }

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}
