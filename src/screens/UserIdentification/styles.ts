import styled from 'styled-components/native';
import { TextInput } from "react-native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;
export const Content = styled.View`
  flex: 1;
  width: 100%;
`;
export const Form = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 54px;
  align-items: center;
  width: 100%;
`;
export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.height};
  line-height: 32px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-top: 20px;

`
export const Emotion = styled.Text`
  font-size: 44px;
`;
export const Input = styled(TextInput)`
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.gray};
  color: ${({ theme }) => theme.COLORS.height};
  width: 100%;
  margin-top: 50px;
  font-size: 18px;
  padding: 10px;
  text-align: center;
  
`;

export const Footer = styled.View `
  margin-top: 40px;
  width: 100%;
  padding: 0 20px;
`;
