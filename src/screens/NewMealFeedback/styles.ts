import { SafeAreaView } from 'react-native-safe-area-context';
import styled, {css} from 'styled-components/native';

interface CreateMealFeedbackProps {
  isInDiet: boolean
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 32px;
  align-items: center;
 
`;
export const Title = styled.Text<CreateMealFeedbackProps>`
  ${({ theme, isInDiet }) => css`
    color: ${isInDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    `};
  margin-bottom: 8px;
  `;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;
export const Span = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

`;
export const ImageFeedback = styled.Image`
 margin: 32px 0;
`;
