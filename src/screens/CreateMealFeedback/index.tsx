import { Button } from '../../components/Button';
import { Container, Subtitle, Title, Span, ImageFeedback } from './styles';
import Illustration from '../../assets/Illustration.png'
import { useNavigation } from '@react-navigation/native';


export function CreateMealFeedback() {
  const navigation = useNavigation();

  function handleBackToHome() {
    navigation.navigate('home');
  }
  return (
    <Container>
      <Title>Continue assim!</Title>
      <Subtitle>Você continua <Span>dentro da dieta. </Span>Muito bem!</Subtitle> 
       <ImageFeedback source={Illustration} />

      <Button 
        title="Ir para a página inicial"
        onPress={handleBackToHome}
        />
    </Container>
  );
}
