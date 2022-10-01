import { TouchableOpacityProps } from 'react-native';
import { Container, HighlightTypeStyleProps, Icon, Subtitle, Title } from './styles';

type Props = HighlightTypeStyleProps & TouchableOpacityProps & {
  title: number;
  icon: string;
}

export function Highlight({ title,type, sideOfIcon, icon, ...rest}: Props) {
  return(
      <Container
        type={type}
        sideOfIcon={sideOfIcon}
          {...rest}
      >
          <Title>
              {title}
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

