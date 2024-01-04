import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './'

const meta = {
  argTypes: {
    variant: {
      options: ['primary'],
    },
  },
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    disabled: false,
    variant: 'primary',
  },
}
