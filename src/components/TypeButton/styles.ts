;import { TouchableOpacity } from 'react-native';
import styled, {css} from 'styled-components/native';

interface IconProps {
  type: 'GOOD' | 'BAD';
}
interface ButtonProps {
  isActive: boolean;
  type: 'GOOD' | 'BAD';
}
export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme}) => theme.COLORS.GRAY_100};
  border-radius: 6px;

  padding: 16px;


  ${({ isActive, type }) => isActive && type === 'GOOD' && css`
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    border: 1px solid ${({ theme }) => theme.COLORS.GREEN_DARK};
  `}
  ${({ isActive, type }) => isActive && type === 'BAD' && css`
    background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
    border: 1px solid ${({ theme }) => theme.COLORS.RED_DARK};

  `}
`;

export const MealCategoryButtonIndicator = styled.View<IconProps>`
  ${({ theme, type }) => css`
    background-color: ${type === 'BAD' ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK};
  `};
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  margin-right: 8px;              
`

export const Title = styled.Text`
    ${({ theme }) => css`
  font-size: ${ theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.GRAY_600};
  font-family: ${theme.FONT_FAMILY.BOLD};
`}
`;
