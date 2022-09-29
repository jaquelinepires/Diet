import { useNavigation } from '@react-navigation/native';
import { ButtonGreen } from '../../components/ButtonGreen';
import { Container, Content, Emoji, Title, Footer, Subtitle} from './styles';


export function Confirmation() {7
  const navigation = useNavigation();

  function handleMoveOn() {
    navigation.navigate('home');
  }
  return (
    <Container>
      <Content>
        <Emoji>😊</Emoji>
        <Title>Prontinho</Title>
        <Subtitle>
          Agora vamos começar a cuidar das suas 
          saúde com muito cuidado.
        </Subtitle>
        <Footer>
          <ButtonGreen title="Começar" onPress={handleMoveOn}/>
        </Footer>
      </Content>
    </Container>
  );
}
