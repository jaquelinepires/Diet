import { useNavigation } from '@react-navigation/native';
import { HeaderContainer,
  BackButton,
  BackIcon,
  PageTitle, 
  ButtonTypeStyleProps
  } 
from './styles';

type HeaderProps = {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Header({ title, type = "GREEN" }: HeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <HeaderContainer type={type}>
      <BackButton onPress={handleGoBack}>
        <BackIcon  />
      </BackButton>
      <PageTitle>{title}</PageTitle>
    </HeaderContainer>
  );
}