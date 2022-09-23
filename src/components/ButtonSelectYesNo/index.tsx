

import { TouchableOpacityProps } from 'react-native';
import { ButtonTypeSelectProps, Container, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeSelectProps;
}


export function ButtonSelectYesNo({title, type = 'YES', ...rest}: Props ) {
  return (
    <Container type={type} {...rest}>
    <Title>{title}</Title>
  </Container>
  );
}
