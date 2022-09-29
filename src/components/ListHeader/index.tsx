

import { Container, Title } from './styles';


type Props = {
  title: string;
}

export function ListHeader({ title }: Props){
  return (
    <Container>
      <Title>
        {title}
      </Title>
    </Container>
  )
}

export default ListHeader;