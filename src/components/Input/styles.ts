import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  border-radius: 6px;
  padding: 14px;
  
  ${({ theme }) => css`
    color: ${theme.COLORS.BODY};
    border: 1px solid ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;