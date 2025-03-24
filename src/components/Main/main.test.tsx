import { render, screen } from '@testing-library/react'

import Main from '.'

describe('Main', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    const heading = screen.getByRole('heading', { name: /hello world/i })

    expect(heading).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the background color correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#f0f0f0' })
  })
})
