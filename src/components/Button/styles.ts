import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'

export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  height: 56px;;

`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
