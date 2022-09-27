import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

export const Button = styled(TouchableOpacity)`
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px ;
`;
export const ImageContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-right-width: 1px;
`;
export const Text = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 14px;
`;
export const Icon = styled.Text`
  background-color: white;
  width: 24px;
`