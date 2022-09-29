import { Container, HighlightTypeStyleProps, Icon, Subtitle, Title } from './styles';

interface Props extends HighlightTypeStyleProps {
  title: number;
}

export function Highlight({ title, screenWithHeader, ...rest}: Props) {
  return(
      <Container
          screenWithHeader={screenWithHeader}
          {...rest}
      >
          <Title>
              {title}
          </Title>
          <Subtitle>
              das refeições dentro da dieta
          </Subtitle>
          <Icon
              name={screenWithHeader ? 'arrow-top-right' : 'arrow-left'}
              screenWithHeader={screenWithHeader}
              {...rest}
          />
      </Container>
  )
}

