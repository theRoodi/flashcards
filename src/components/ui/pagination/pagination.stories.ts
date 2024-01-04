import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './'

const meta = {
  argTypes: {
    variant: {
      options: ['primary'],
    },
  },
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    disabled: false,
    variant: 'primary',
  },
}
