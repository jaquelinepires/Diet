import { TouchableOpacityProps } from "react-native";
import { Container,Title } from "./styles";
import { Icon } from "../SignInSocialButton/styles";
import { ButtonComponentTypeProps } from "../../@types/button";

type Props = TouchableOpacityProps &  ButtonComponentTypeProps &{
  title: string;
}

export function ButtonIcon({ title, icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} />
      <Title>{title}</Title>
    </Container>
  )
}