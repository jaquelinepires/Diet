import { ButtonSelectYesNo } from '../../components/ButtonSelectYesNo';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { 
  CreateMealContainer,
   CreateMealContent, 
   InputGroup, 
   Form, 
   Label, 
   InputGroupDate, 
   ContainerButton}
   from './styles';


export function CreateMeal() {
  
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

        <InputGroupDate>
        <InputGroup>
        <Label>Data</Label>
        <Input style={{ width: 153}}/>
      </InputGroup>

      <InputGroup>
        <Label>Hora</Label>
        <Input style={{ width: 153}}/>
      </InputGroup>
      </InputGroupDate>


      <Label>Está dentro da dieta?</Label>

      <ContainerButton>
      <ButtonSelectYesNo title="Sim" type="YES"/>
      <ButtonSelectYesNo title="Não" type="NO"/>
      </ContainerButton>
      </Form>

      </CreateMealContent>
    </CreateMealContainer>
  );
}
