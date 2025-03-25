import theme from '@/styles/theme'
import { render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

export function renderWithTheme(component: React.ReactNode): RenderResult {
  const componentWithTheme = render(
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  )

  return componentWithTheme
}
