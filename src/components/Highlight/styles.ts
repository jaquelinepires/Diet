import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export type HighlightTypeStyleProps = {
  type: 'PRIMARY' | 'SECONDARY';
  screenWithHeader: boolean;
}

type Props = HighlightTypeStyleProps;

export const Container = styled.View<Props>`
    width: 100%;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    ${({ theme, type, screenWithHeader }) => css`
        height: ${screenWithHeader ? 102 : 168}px;
        padding-top: ${!screenWithHeader ? 20 : 0}px;
        background-color: ${type === 'PRIMARY' ?
        theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    `}
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.GRAY_100};
    `};
`

export const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_200};
    `};
`

export const Icon = styled(MaterialCommunityIcons).attrs<Props>(({ theme, type }) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))<Props>`
    position: absolute;
    ${({ screenWithHeader }) => screenWithHeader ?
        css`
            right: 4px;
            top: 4px;
        `
        :
        css`
            left: 10px;
            top: 50px;
        `
    };
`