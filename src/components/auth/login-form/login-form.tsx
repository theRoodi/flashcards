import { useForm } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkbox/checkbox'

import { Button } from '../../ui/button'
// import { TextField } from '../../ui/text-field'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { handleSubmit, register } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      <input {...register('password')} />
      <Checkbox {...register('rememberMe')} label={'remember me'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
