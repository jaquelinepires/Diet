import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft } from 'phosphor-react-native'

type Props = {
  variant?: 'good' | 'bad';
  }

export const StatisticsContainer = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  ${({ theme, variant }) => css`
    background-color: ${variant === 'good' ? theme.COLORS.RED_LIGHT : theme.COLORS.GREEN_LIGHT};
  `};

`
export const Images = styled.Image``
export const StatisticsHeader = styled.View`
  width: 100%;
  align-items: center;
  padding: 32px 24px;
  
`

export const StatisticsBackButton = styled.TouchableOpacity`
  align-self: flex-start;
`

export const StatisticsBackIcon = styled(ArrowLeft).attrs(({ theme }) => {
  return {
    size: 32,
    color: theme.COLORS.GREEN_DARK
  }
})``

export const StatisticsHeaderTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  margin-top: -32px;
`

export const StatisticsHeaderSubtitle = styled.Text`
  
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`

export const StatisticsContent = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 24px;
`

export const StatisticsContentTitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `};
  margin-top: 12px;
  margin-bottom: 24px;
`

export const MealsInDietColumContainer = styled.View`
  flex-direction: row;
  width: 48%;
`

export const Container = styled.View``
export const ChartContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: -90px;

`