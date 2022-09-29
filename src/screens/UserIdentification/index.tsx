import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, View, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { useTheme } from "styled-components/native";
import { ButtonGreen } from "../../components/ButtonGreen";
import { Container, Content, Emotion, Footer, Form, Input, Title } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function UserIdentification(){
  const {COLORS} = useTheme();
  const [ isFocused, setIsFocused ] = useState(false);
  const [ isFilled, setIsFilled ] = useState(false);
  const [ name, setName ] = useState<string>();
  const navigation = useNavigation();

  function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!name);
  }
  function handleInputFocus(){
    setIsFocused(true);
  }

  function handleInputChange(value: string){
    setIsFilled(!!value);
    setName(value);
  }


  async function handleSubmit() {
    if(!name) 
    return Alert.alert('Me diz como chamar você 😢')

    await AsyncStorage.setItem('@dietDaily:user', name)
    
    navigation.navigate('confirmation');
  }
  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1, width: '100%'}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Content>
        <Form>
          <View style={{alignItems: 'center'}}>
          <Emotion> { isFilled ? '😊' : '😄'} </Emotion>
          <Title>
            Como podemos{'\n'}
            chamar você?
            </Title>
            </View>
          <Input 
            style={(isFocused || isFilled) && { borderColor: COLORS.green}}
            placeholder="Digite um nome"
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            onChangeText={handleInputChange}
            />
          <Footer>
            <ButtonGreen 
              title="Confirmar"
              onPress={handleSubmit}
              
            />
          </Footer>
        </Form>
      </Content>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  )
}