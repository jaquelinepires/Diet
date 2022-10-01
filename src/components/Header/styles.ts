import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";

export type MiniHighlightTypeStyleProps = {
    type: 'DEFAULT' | 'GOOD' | 'BAD';
}

type Props = MiniHighlightTypeStyleProps;

const padding = 44;

export const Container = styled(TouchableOpacity)<Props>`
    width: 100%;
    height: 124px;
    padding-bottom: ${padding}px;
    background-color: ${
        ({ theme, type }) => type === 'DEFAULT' ?
        theme.COLORS.GRAY_200 : type === 'GOOD' ?
        theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
    };
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.BODY};
    `}
    text-align: center;
`

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme }) => ({
    name: 'arrow-back',
    size: 24,
    color: theme.COLORS.BODY
}))`
    position: absolute;
    bottom: ${padding}px;
    left: ${padding - 20}px; /* 44 - 20 = padding of the screen's container */
`;