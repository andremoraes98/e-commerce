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
    },
    $hideOnMobile: {
      control: 'boolean'
    }
  }
} as Meta<typeof Logo>

export const Default: StoryObj<LogoProps> = {
  args: {
    color: 'black',
    $hideOnMobile: false,
    size: 'normal'
  }
}
