import { ButtonAddMealIcon, ButtonText, Container, Button, ListHeaderTitle } from './styles';

export function ButtonAddMeal() {
  return (
    <Container>
      <ListHeaderTitle>Refeições</ListHeaderTitle>
      <Button>
        <ButtonAddMealIcon />
        <ButtonText>Nova refeição</ButtonText>
      </Button>
    </Container>
  );
}
