import { ComponentProps, ComponentPropsWithoutRef } from 'react'

export type TextFieldProps = {
  containerProps?: ComponentProps<'div'>
  errorMessage?: string
  label?: string
  labelProps?: ComponentProps<'label'>
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const TextFiled = {}
// forwardRef<HTMLInputElement, TextFieldProps>()
//   render({
//     className,
//     errorMessage,
//     placeholder,
//     type,
//       containerProps,
//       labelProps,
//       label,
//       onChange,
//       onValueChange,
//       ...restProps
//   },
//       ref
//   ) => {
//
// }
// )
