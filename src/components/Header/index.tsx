import { HeaderContainer,
  BackButton,
  BackIcon,
  PageTitle 
  } 
from './styles';

type HeaderProps = {
  title: string;
}

export function Header({ title }: HeaderProps) {

  return (
    <HeaderContainer>
      <BackButton >
        <BackIcon />
      </BackButton>
      <PageTitle>{title}</PageTitle>
    </HeaderContainer>
  );
}