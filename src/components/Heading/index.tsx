import * as S from './styles'

export type HeadingProps = {
  children: string | React.ReactNode
  color?: 'black' | 'white'
  lineBottom: boolean
  lineLeft: boolean
}

const Heading = ({
  children,
  color = 'black',
  lineBottom = false,
  lineLeft = false
}: HeadingProps) => (
  <S.Wrapper color={color} lineBottom={lineBottom} lineLeft={lineLeft}>
    {children}
  </S.Wrapper>
)

export default Heading
