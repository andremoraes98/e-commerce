import { Meta, StoryObj } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    color: {
      control: 'select'
    },
    size: {
      control: 'select'
    }
  }
} as Meta

export const Default: StoryObj<LogoProps> = {
  args: {
    color: 'black',
    size: 'normal'
  }
}
