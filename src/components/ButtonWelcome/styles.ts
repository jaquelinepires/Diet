import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'

export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.WHITE}
`
