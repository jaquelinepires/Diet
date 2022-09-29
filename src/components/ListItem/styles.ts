import styled, { css } from 'styled-components/native';

type Props = {
    isActive: boolean;
}

export const Container = styled.TouchableOpacity`
    width: 100%;
    margin: 4px 0; 
    height: 50px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    flex-direction: row;
    align-items: center;
` 

export const Hours = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_100};
    `}
    margin: 14px;
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_100}; 
    `};
    border-left: 1px solid ${({ theme }) => theme.COLORS.GRAY_400}
    // border-left/right/top/bottom not working in React Native for IOS
`

export const Circle = styled.View<Props>`
    width: 14px;
    height: 14px;
    position: absolute;
    right: 14px;
    border-radius: 50%;
    background-color: ${({ theme, isActive }) => isActive ?
    theme.COLORS.GREEN_LIGHT : theme.COLORS.GREEN_DARK}
    `;