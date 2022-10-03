import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TypeButton } from '../../components/TypeButton';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
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
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useMealsContext } from '../../Contexts/MealsContext';


export function NewMeal() {
  const { addMeal } = useMealsContext()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [time, setTime] = useState(new Date());
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [typeSelected, setTypeSelected] = useState<'GOOD' | 'BAD'>('GOOD')

  // const [selectedType, setSelectedType] = useState('');

  function handleSelectType(type: 'GOOD' | 'BAD') {
    setTypeSelected(type);
  }

  const navigation = useNavigation();

  function showDatePicker() {
    setDatePickerVisibility(true);
  };

  function hideDatePicker() {
    setDatePickerVisibility(false);
  };

  function handleConfirmDate(date: Date) {
    setDate(date)
    hideDatePicker();
  };

  function showTimePicker() {
    setTimePickerVisibility(true);
  };

  function hideTimePicker() {
    setTimePickerVisibility(false);
  };

  function handleConfirmTime(time: Date) {
    setTime(time)
    hideTimePicker();
  };

  function handleTypeSelect(type: 'GOOD' | 'BAD') {
    setTypeSelected(type)
  }

  const formattedDate = format(date, "dd/MM/yyyy", { locale: ptBR })

  const hours = String(time.getHours()).padStart(2, '0')
  const minutes = String(time.getMinutes()).padStart(2, '0')
  const formattedTime = `${hours}:${minutes}`

  function handleCreateMeal() {
    const meal = {
      id: String(new Date().getTime()),
      name,
      description,
      date: new Date(`${formattedDate} ${formattedTime}`),
      isInDiet: typeSelected === 'GOOD' ? true : false,
    }

    addMeal(meal)

    navigation.navigate("newMealFeedback", { isInDiet: meal.isInDiet })
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <CreateMealContainer>
      <Header 
        title='Nova refeição' 
        type="DEFAULT"/>
      <CreateMealContent>

    <Form>

      <InputGroup>
        <Label>Nome</Label>
        <Input
            value={name}
             onChangeText={setName}
            />
      </InputGroup>

      <InputGroup>
        <Label>Descrição</Label>
        <Input 
          multiline
          value={description}
          onChangeText={setDescription}
          numberOfLines={3}
          />
        </InputGroup>

        <InputGroupContainer>

        <InputGroupContent>
        <Label>Data</Label>
        <Input 
        onPressIn={showDatePicker}
        value={formattedDate}
        />
                <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
              />
      </InputGroupContent>

      <InputGroupContent>
        <Label>Hora</Label>
        <Input
          onPressIn={showTimePicker}
          value={formattedTime}
          />

        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleConfirmTime}
          onCancel={hideTimePicker}
              />
      </InputGroupContent>

      </InputGroupContainer>

      <Label>Está dentro da dieta?</Label>

      <ButtonTypes>
      <TypeButton 
        type="GOOD"
        title="Sim"
        onPress={() => handleSelectType('GOOD')}
        isActive={typeSelected === 'GOOD'}
      />
            <TypeButton 
        type="BAD"
        title="Não"
        onPress={() => handleSelectType('BAD')}
        isActive={typeSelected === 'BAD'}
      />
      </ButtonTypes>
      
      <Button
        title="Cadastrar Refeição" 
        onPress={handleCreateMeal}
        />
      </Form>
      </CreateMealContent>
    </CreateMealContainer>
    </TouchableWithoutFeedback>
  );
}
