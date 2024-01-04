import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './'

const meta = {
  argTypes: {
    variant: {
      options: ['primary'],
    },
  },
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    disabled: false,
    variant: 'primary',
  },
}
