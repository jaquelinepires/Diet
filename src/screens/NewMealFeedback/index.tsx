import { ButtonIcon } from '../../components/ButtonIcon';
import { Container, Subtitle, Title, Span, ImageFeedback } from './styles';
import happy from '../../assets/happy.png'
import sad from '../../assets/sad.png'
import { useNavigation, useRoute } from '@react-navigation/native';

type CreateMealFeedbackParams = {
  isInDiet: boolean
}

export function NewMealFeedback() {
  const navigation = useNavigation();

  function handleBackToHome() {
    navigation.navigate('home');
  }
  const route = useRoute()
  const { isInDiet } = route.params as CreateMealFeedbackParams

  return (
    <Container>
      <Title isInDiet={isInDiet}>
        {isInDiet ? "Continue assim!" : "Que pena!"}
      </Title>
        <Subtitle>
        {isInDiet ?
          "Você continua dentro da dieta. Muito bem!"
          : "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"
        }
        </Subtitle> 

       <ImageFeedback source={isInDiet ? happy : sad} />

      <ButtonIcon 
        title="Ir para a página inicial"
        onPress={handleBackToHome}
        />
    </Container>
  );
}
