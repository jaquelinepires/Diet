import styled, { css }from 'styled-components/native';

export const Container = styled.View`
    height: 400px;
    justify-content: center;
    align-items: center;
`;
export const Title = styled.Text`
      ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.BODY};
    `};
`;
