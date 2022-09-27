import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TypeButton } from '../../components/TypeButton';
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


export function CreateMeal() {
  const [selectedType, setSelectedType] = useState('');
  
  function handleSelectType(type: 'GOOD' | 'BAD') {
    setSelectedType(type);
  }

  const navigation = useNavigation();

  function handleBackToCreateMealFeedback() {
    navigation.navigate('createMealFeedback');
  }

  return (
    <CreateMealContainer>
      <Header title='Nova refeição' type="GRAY"/>
      <CreateMealContent>

    <Form>

      <InputGroup>
        <Label>Nome</Label>
        <Input  style={{ }}/>
      </InputGroup>

      <InputGroup>
        <Label>Descrição</Label>
        <Input 
          multiline
          maxLength={60}
          style={{ height: 80}}
        />
        </InputGroup>

        <InputGroupContainer>

        <InputGroupContent>
        <Label>Data</Label>
        <Input style={{ width: 153}}/>
      </InputGroupContent>

      <InputGroupContent>
        <Label>Hora</Label>
        <Input style={{ width: 153}}/>
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
      </Form>
      <Button 
        title="Cadastrar Refeição" 
        onPress={handleBackToCreateMealFeedback}
        />
      </CreateMealContent>
    </CreateMealContainer>
  );
}
