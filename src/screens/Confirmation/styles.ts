import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;
export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
`;
export const Emoji = styled.Text`
  font-size: 78px;
`;
export const Title = styled.Text`
  font-size: 22px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  line-height: 38px;
  margin-top: 15px;
`;
export const Subtitle = styled.Text`
  font-size: 17px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 17px;
  text-align: center;
  padding: 10px 0;
  color: ${({ theme }) => theme.COLORS.BODY};

`;
export const Footer = styled.View`
  width: 100%;
  padding: 0 50px;
  margin-top: 20px;
`;
