import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from "styled-components/native";
import { ArrowUpRight, Plus, SignOut } from "phosphor-react-native"
import { TouchableOpacity } from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  `;
export const UserWrapper= styled.View`
  width: 100%;
  margin-top: 28px;
  margin-bottom: 28px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const UserInfo= styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Photo= styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 10px;
`;
export const User= styled.View`
  margin-left: 17px;
`;
export const UserGreeting= styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_600};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`;
export const UserName= styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_700};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;

export const Logo = styled.Image``;

export const LogoutButton = styled(TouchableOpacity)``;
export const IconSignOut = styled(SignOut)``;

export const StatisticsButton = styled(TouchableOpacity)`
  width: 100%;
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const StatisticsButtonIcon = styled(ArrowUpRight).attrs(({ theme }) => {
  return {
    size: 24,
    color: theme.COLORS.GREEN_DARK
  }
})`
  align-self: flex-end;
`

export const StatisticsButtonTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  margin-top: -24px;
`;

export const StatisticsButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const HomeContent = styled.View``;

export const HomeListHeader = styled.View`
  width: 100%;
  margin-top: 40px;
`;

export const HomeListHeaderTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
  margin-bottom: 8px;
`;

export const HomeListHeaderButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 16px 24px;
`;

export const HomeListHeaderButtonIcon = styled(Plus).attrs(({ theme }) => {
  return {
    size: 18,
    color: theme.COLORS.WHITE
  }
})``

export const HomeListHeaderButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  margin-left: 12px;
`;

export const HomeList = styled.FlatList``;