import styled, { css } from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native';

export type ButtonTypeStyleProps = 'default' | 'good' | 'bad'

type Props = {
  type: ButtonTypeStyleProps;
}

export const HeaderContainer = styled.View<Props>`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 32px 24px;
  background-color: ${({ theme, type }) => {
    switch (type) {
      case 'good':
        return theme.COLORS.GREEN_LIGHT
      case 'bad':
        return theme.COLORS.RED_LIGHT
      default:
        return theme.COLORS.GRAY_200
    }
  }};
  `

export const BackButton = styled.TouchableOpacity``

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => {
  return {
    color: theme.COLORS.GREEN_DARK,
    size: 32,
  }
})``

export const PageTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  flex: 1;
  text-align: center;
  margin-right: 32px;
`