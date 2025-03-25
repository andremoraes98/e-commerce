import { screen } from '@testing-library/dom'
import Logo from '.'
import { renderWithTheme } from '@/utils/tests/renderWithTheme'

describe('<Logo />', () => {
  it('should render white logo if color was not provide', () => {
    renderWithTheme(<Logo />)

    const logo = screen.getByLabelText(/Won Games Logo/i)
    const logoWrapper = logo.parentElement

    expect(logoWrapper).toHaveStyle({ color: '#FAFAFA' })
  })

  it('should render black logo if color black was provide', () => {
    renderWithTheme(<Logo color='black' />)

    const logo = screen.getByLabelText(/Won Games Logo/i)
    const logoWrapper = logo.parentElement

    expect(logoWrapper).toHaveStyle({ color: '#030517' })
  })

  it('should render normal logo if size was not provide', () => {
    renderWithTheme(<Logo />)

    const logo = screen.getByLabelText(/Won Games Logo/i)
    const logoWrapper = logo.parentElement

    expect(logoWrapper).toHaveStyle({ height: '3.3rem', width: '11rem' })
  })

  it('should render bigger logo if size was provide', () => {
    renderWithTheme(<Logo size='large' />)

    const logo = screen.getByLabelText(/Won Games Logo/i)
    const logoWrapper = logo.parentElement

    expect(logoWrapper).toHaveStyle({ height: '5.9rem', width: '20rem' })
  })

  it('should render logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo $hideOnMobile />)

    const logo = screen.getByLabelText(/Won Games Logo/i)
    const logoWrapper = logo.parentElement

    expect(logoWrapper).toHaveStyleRule('width', '11rem')
  })
})
