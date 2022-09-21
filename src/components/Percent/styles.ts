import { ArrowUpRight } from 'phosphor-react-native';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  `;
export const StatisticsButton = styled.TouchableOpacity`
width: 100%;
padding: 20px 16px;
background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
border-radius: 8px;

align-items: center;
justify-content: center;
`;

export const StatisticsButtonIcon = styled(ArrowUpRight).attrs(({ theme }) => {
return {
  size: 24,
  color: theme.COLORS.GREEN_DARK
}
})`
align-self: flex-end;
`

export const StatisticsButtonTitle = styled.Text`
${({ theme }) => css`
  color: ${theme.COLORS.GRAY_700};
  font-size: ${theme.FONT_SIZE.XXL}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`};

margin-top: -24px;
`;

export const StatisticsButtonText = styled.Text`
${({ theme }) => css`
  color: ${theme.COLORS.GRAY_600};
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
`};
`;
