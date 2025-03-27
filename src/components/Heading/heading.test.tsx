import { renderWithTheme } from '@/utils/tests/renderWithTheme'
import Heading from '.'
import { screen } from '@testing-library/dom'

describe('<Heading />', () => {
  it('should render the default heading', () => {
    renderWithTheme(<Heading>Won Games</Heading>)

    const headingComponent = screen.getByRole('heading', { level: 2 })

    expect(headingComponent).toHaveStyleRule('color', '#030517')
  })

  it('should render the white heading', () => {
    renderWithTheme(<Heading color='white'>Won Games</Heading>)

    const headingComponent = screen.getByRole('heading', { level: 2 })

    expect(headingComponent).toHaveStyleRule('color', '#FAFAFA')
  })

  it('should render the line left', () => {
    renderWithTheme(<Heading $lineLeft>Won Games</Heading>)

    const headingComponent = screen.getByRole('heading', { level: 2 })

    expect(headingComponent).toHaveStyleRule(
      'border-left',
      '0.7rem solid #3CD3C1'
    )
  })

  it('should render the line bottom', () => {
    renderWithTheme(<Heading $lineBottom>Won Games</Heading>)

    const headingComponent = screen.getByRole('heading', { level: 2 })

    expect(headingComponent).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      { modifier: '::after' }
    )
  })
})
