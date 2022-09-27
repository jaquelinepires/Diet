import { TouchableOpacity, Dimensions } from 'react-native';
import { ArrowArcRight } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;
export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.height};
  margin-top: 38px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
export const Logo = styled.Image`
`;
export const Subtitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 20px;
  color: ${({ theme }) => theme.COLORS.height};
`;
export const Button = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;

