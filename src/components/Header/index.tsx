import { useNavigation } from '@react-navigation/native';
import { TouchableOpacityProps } from 'react-native';
import { 
  Container,
  Icon,
  Title,
  MiniHighlightTypeStyleProps
  } 
from './styles';

type Props = MiniHighlightTypeStyleProps & TouchableOpacityProps & {
  title: string;
}

export function Header({ title, type, ...rest }: Props) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Container type={type} {...rest}>     
     <Icon onPress={handleGoBack}/>
     <Title>
        {title}
     </Title>
    </Container>
  );
}