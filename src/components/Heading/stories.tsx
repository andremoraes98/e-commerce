import { Meta, StoryObj } from '@storybook/react'
import Heading from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    },
    color: {
      control: 'select'
    },
    lineBottom: {
      control: 'boolean'
    },
    lineLeft: {
      control: 'boolean'
    }
  }
} as Meta<typeof Heading>

export const Default: StoryObj<typeof Heading> = {
  args: {
    children: 'Heading',
    color: 'black',
    lineBottom: false,
    lineLeft: false
  }
}
