
import React, { useState } from 'react'
import { Container, Header, TitleWrapper, Title, SignInTitle, Footer, FooterWrapper, Logo } from './styles';
import logoImg from '../../assets/Logo.png';
import GoogleSvg from '../../assets/google.svg';
import AppleSvg from '../../assets/apple.svg';
import { SignInSocialButton } from '../../components/SignInSocialButton';
import { useAuth } from '../../hooks/auth';
import { Icon } from '../../components/SignInSocialButton/styles';
import { Alert, Platform } from 'react-native';
import { Load } from '../../components/Load';



export function SignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const { signInWithGoogle, signInWithApple } = useAuth()

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true)
      
     return await signInWithGoogle();

    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível conectar a conta Google')
    } finally {
      setIsLoading(false)
    }
  }


  async function handleSignInWithApple() {
    try {
      setIsLoading(true)
      return await signInWithApple();

    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível conectar a conta Apple')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
        <Logo source={logoImg} />
          
          <Title>
            Controle suas {'\n'}
            finanças de forma {'\n'}
            muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça seu login com {'\n'}
          uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
      
            
          <SignInSocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
            
          />
{           Platform.OS === 'ios' &&
            <SignInSocialButton
            title="Entrar com Apple"
            svg={AppleSvg}
            onPress={handleSignInWithApple}
          />
}
        </FooterWrapper>
        {isLoading && <Load />}
      </Footer>
    </Container>
  );
}

