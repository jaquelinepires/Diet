import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from "styled-components/native";
import { ArrowUpRight, Plus } from "phosphor-react-native"

export const Container = styled.View`
  width: 100%;
  margin-top: 40px;
`;
export const ListHeaderTitle = styled.Text`
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 16px 24px;
`;
export const ButtonAddMealIcon = styled(Plus).attrs(({ theme }) => {
  return {
    size: 18,
    color: theme.COLORS.WHITE
  }
})``

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  margin-left: 12px;
`;