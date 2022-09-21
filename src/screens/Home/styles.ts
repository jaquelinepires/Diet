import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const HomeHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
`;

export const Logo = styled.Image``;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 32px;
`;

export const Texto = styled.Text`
  color: #000;
  font-size: 18px;
`;