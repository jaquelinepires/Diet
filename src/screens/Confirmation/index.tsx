import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';
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
          <Button title="Começar" onPress={handleMoveOn}/>
        </Footer>
      </Content>
    </Container>
  );
}
