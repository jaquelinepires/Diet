import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  height: 40px;
  margin-top: 10px;
  justify-content: center;
`;
export const Title = styled.Text`
${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
`}
`;
