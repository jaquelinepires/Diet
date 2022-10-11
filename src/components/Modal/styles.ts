import styled, { css } from "styled-components/native";

export type ModalTypeStyleProps = {
    type: 'DARK' | 'LIGHT';
    typeTwo?: 'DARK' | 'LIGHT';
    numberOfButtons: 1 | 2;
}

type Props = ModalTypeStyleProps;

export const Background = styled.View`
    flex: 1;
    opacity: .25;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Container = styled.View`
    flex: 1;
    padding: 24px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0%;
    left: 0;
    right: 0;
`

export const Content = styled.View`
    width: 100%;
    height: 24%;
    padding: 23px;
    border-radius: 6px;
    opacity: 1.0;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const TitleContainer = styled.View`
    align-items: center;
    width: 100%;
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.BODY};
    `};
    margin-bottom: 8px;
`

export const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.BODY};
    `};
    width: 80%;
    text-align: center;
`
        
export const ContentButton = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

export const Button = styled.TouchableOpacity<Props>`
    width: ${({ numberOfButtons }) => numberOfButtons === 1 ? 100 : 48}%;
    height: 50px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    ${({ theme, type, typeTwo }) => css`
        background: ${type === 'DARK' || typeTwo === 'DARK' ?
        theme.COLORS.GRAY_700 : theme.COLORS.WHITE};
        border: 1px solid ${type === 'DARK' || typeTwo === 'DARK' ?
        theme.COLORS.WHITE : theme.COLORS.GRAY_700};
    `};
`

export const ButtonTitle = styled.Text<Props>`
    ${({ theme, type, typeTwo }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${type === 'DARK' || typeTwo === 'DARK' ?
        theme.COLORS.WHITE : theme.COLORS.BODY};
    `};
`

