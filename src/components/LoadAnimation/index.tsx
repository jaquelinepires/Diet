
import { Container } from './styles';
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native';


export function LoadAnimation() {
  const navigation = useNavigation()
  
  return (
    <Container>
      <LottieView
        source={require('../../assets/splash3.json')}
        autoPlay
        loop
        resizeMode="contain"
        style={{backgroundColor: 'transparent', width: 200, height: 200}}
        onAnimationFinish={() => navigation.navigate('home')}
      ></LottieView>
    </Container>
  );
}
