import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Container, Title } from "./styles";
import { Icon } from "../SignInSocialButton/styles";
import { ButtonComponentTypeProps } from "../../@types/button";

type Props = TouchableOpacityProps &  ButtonComponentTypeProps &{
  title: string;
}

export function Button({ title, icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} />
      <Title>{title}</Title>
    </Container>
  )
}