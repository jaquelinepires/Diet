import { ButtonIcon } from '../../components/ButtonIcon';
import { Container, Subtitle, Title, Span, ImageFeedback } from './styles';
import Illustration from '../../assets/Illustration.png'
import { useNavigation } from '@react-navigation/native';


export function NewMealFeedback() {
  const navigation = useNavigation();

  function handleBackToHome() {
    navigation.navigate('home');
  }
  return (
    <Container>
      <Title>Continue assim!</Title>
      <Subtitle>Você continua <Span>dentro da dieta. </Span>Muito bem!</Subtitle> 
       <ImageFeedback source={Illustration} />

      <ButtonIcon 
        title="Ir para a página inicial"
        onPress={handleBackToHome}
        />
    </Container>
  );
}
