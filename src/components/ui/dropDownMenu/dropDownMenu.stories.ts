import type { Meta, StoryObj } from '@storybook/react'

import { DropDownMenu } from './'

const meta = {
  argTypes: {
    variant: {
      options: ['primary'],
    },
  },
  component: DropDownMenu,
  tags: ['autodocs'],
  title: 'Components/DropDownMenu',
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    disabled: false,
    variant: 'primary',
  },
}
