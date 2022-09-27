import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 327px;
  height: 50px;
  margin: 0 auto;
  background-color: ${({ theme}) => theme.COLORS.GRAY_500};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 16px;

  
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${ theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};

`}
`;