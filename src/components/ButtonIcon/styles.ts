import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  height: 56px;
  flex-direction: row;
`;

export const Title = styled.Text`
  margin-left: 8px;
  ${({ theme }) => css`
    font-size: ${ theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;
    export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
    size: 20,
    color: theme.COLORS.GRAY_100,
    }))``;


