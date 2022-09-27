import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  width: 100%;
  height: 70%;
  /* background-color: ${({ theme }) => theme.COLORS.GRAY_200}; */
  background-color: #764134;
  justify-content: flex-end;
  align-items: center;
`;
export const TitleWrapper = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 30px;
  /* color: ${({ theme }) => theme.COLORS.GREEN_DARK}; */
  color: #AD8350;
  text-align: center;
  margin-top: 45px;
`;
export const SignInTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  /* color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
   */
  color: #AFA060;
  
  font-size: 16px;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 67px;
`;
export const Footer = styled.View`
  width: 100%;
  height: 30%;
  /* background-color: ${({ theme }) => theme.COLORS.GRAY_100}; */
  background-color: #2A1A1F;
`;

export const FooterWrapper = styled.View`
  margin-top: -20px;
  padding: 0 32px;
  justify-content: space-between;
`;
export const Logo = styled.Image``;