import { TouchableOpacityProps } from "react-native";
import { Container,Icon,Title } from "./styles";
import { ButtonComponentTypeProps } from "../../@types/button";

type Props = TouchableOpacityProps & ButtonComponentTypeProps 

export function ButtonIcon({ title, icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} />
      <Title>{title}</Title>
    </Container>
  )
}