import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

export type HighlightTypeStyleProps = {
  type: 'GOOD' | 'BAD';
  sideOfIcon: 'LEFT' | 'RIGHT';
}

type Props = HighlightTypeStyleProps;

export const Container = styled(TouchableOpacity)<Props>`
    width: 100%;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    ${({ theme, type }) => css`
    background-color: ${type === 'GOOD' ?
        theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    `}
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XXL}px;
        color: ${theme.COLORS.BODY};
    `};
`

export const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.BODY};
    `};
`

export const Icon = styled(MaterialCommunityIcons).attrs<Props>(({ theme, type }) => ({
    size: 24,
    color: type === 'GOOD' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))<Props>`
    position: absolute;
    ${({ sideOfIcon }) => sideOfIcon === 'LEFT' ?
        css`
            left: 10px;
            top: 60px;
        `
        :
        css`
            right: 8px;
            top: 8px;
        `
    };
`