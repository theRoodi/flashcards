import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './'

const meta = {
  argTypes: {
    variant: {
      options: ['inputIcon', 'inputPrimary', 'inputSearch'],
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputPrimary: Story = {
  args: {
    disabled: false,
    variant: 'inputPrimary',
  },
}
export const InputIcon: Story = {
  args: {
    disabled: false,
    variant: 'inputIcon',
  },
}
export const InputSearch: Story = {
  args: {
    disabled: false,
    variant: 'inputSearch',
  },
}
