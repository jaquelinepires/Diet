import styled, {css} from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type ButtonTypeSelectProps = 'YES' | 'NO';

type Props = {
  type: ButtonTypeSelectProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }) => type === 'YES' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  
  justify-content: center;
  align-items: center;
  `;

export const Title = styled.Text`
  ${({ theme }) => css`
  font-size: ${ theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.GRAY_600};
  font-family: ${theme.FONT_FAMILY.BOLD};

`}
`;
