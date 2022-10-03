import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { TypeButton } from '../../components/TypeButton';
import { useForm } from 'react-hook-form';
import { 
  CreateMealContainer,
   CreateMealContent, 
   InputGroup, 
   Form, 
   Label, 
   ButtonTypes,
   InputGroupContainer,
   InputGroupContent
  }
   from './styles';
import { InputForm } from '../../components/InputForm';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';

interface FormData  {
  [name: string]: any;
};

export function EditMeal() {
  const [selectedType, setSelectedType] = useState('');
  const { control, handleSubmit } = useForm();

  function handleSelectType(type: 'GOOD' | 'BAD') {
    setSelectedType(type);
  }

  const navigation = useNavigation();

  function handleBackToCreateMealFeedback() {
    navigation.navigate('home');
  }

  function handleRegister(form: FormData) {
    if (!selectedType ) {
      return Alert.alert('Selecione o tipo da refeição');
    }
    
    const data = {
      name: form.name,
      description: form.description,
      hour: form.hour,
      date: new Date()
    }
    console.log(data)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <CreateMealContainer>
      <Header title='Editar refeição' type="default"/>
      <CreateMealContent>

    <Form>

      <InputGroup>
        <Label>Nome</Label>
        <InputForm
        
           control={control}
           name="name"
           autoCapitalize='sentences'  
           autoCorrect={false}
           />
      </InputGroup>

      <InputGroup>
        <Label>Descrição</Label>
        <InputForm
  
          control={control}
          name="description"
          multiline
          maxLength={60}
          style={{ height: 80}}
        />
        </InputGroup>

        <InputGroupContainer>

        <InputGroupContent>
        <Label>Data</Label>
        <InputForm 
         
          control={control}
          name="date"
          style={{ width: 153}}
          />
      </InputGroupContent>

      <InputGroupContent>
        <Label>Hora</Label>
        <InputForm
  
          control={control}
          name="hour"
          keyboardType="numeric"
          style={{ width: 153}}
          />
      </InputGroupContent>

      </InputGroupContainer>


      <Label>Está dentro da dieta?</Label>

      <ButtonTypes>
      <TypeButton 
        type="GOOD"
        title="Sim"
        onPress={() => handleSelectType('GOOD')}
        isActive={selectedType === 'GOOD'}
      />
            <TypeButton 
        type="BAD"
        title="Não"
        onPress={() => handleSelectType('BAD')}
        isActive={selectedType === 'BAD'}
      />
      </ButtonTypes>
      
      <Button
        
        title="Salvador alterações" 
        onPress={handleSubmit(handleRegister)}

        />
      </Form>
      </CreateMealContent>
    </CreateMealContainer>
    </TouchableWithoutFeedback>
  );
}
