import { TouchableOpacityProps } from 'react-native';
import { Container, HighlightTypeStyleProps, Icon, Subtitle, Title } from './styles';

type Props = HighlightTypeStyleProps & TouchableOpacityProps & {
  number: string;
  icon: string;
}

export function Highlight({ number,type, sideOfIcon, icon, ...rest}: Props) {
  return(
      <Container
        type={type}
        sideOfIcon={sideOfIcon}
          {...rest}
      >
          <Title>
              {number}
          </Title>
          <Subtitle>
              das refeições dentro da dieta
          </Subtitle>
          <Icon
           name={icon}
           type={type}
           sideOfIcon={sideOfIcon}
          />
      </Container>
  )
}

