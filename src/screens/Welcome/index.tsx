import { useNavigation } from '@react-navigation/native';
import ilustra from '../../assets/ilustra.png'
import { ButtonWelcome } from '../../components/ButtonWelcome';
import { Button, Container, Logo, Subtitle, Title } from './styles';


export function Welcome() {

  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('userIdentification');
  }
  return (
    <Container>
      <Title>Gerencie suas saúde de forma fácil</Title>
      <Logo source={ilustra } />
      <Subtitle>Não esqueça mais de saber o que comeu</Subtitle>
    <ButtonWelcome 
      title=">"
      onPress={handleStart}
    />    
    </Container>
  );
}

