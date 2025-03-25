import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

const wrapperModifers = {
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: solid 0.7rem ${theme.colors.secondary};
  `,
  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.xxsmall};

    &::after {
      border: 0.4rem solid ${theme.colors.primary};
      bottom: -1rem;
      content: '';
      left: 0px;
      position: absolute;
      width: 5rem;
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineBottom, lineLeft }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}

    ${lineLeft && wrapperModifers.lineLeft(theme)}
    ${lineBottom && wrapperModifers.lineBottom(theme)}
  `}
`
