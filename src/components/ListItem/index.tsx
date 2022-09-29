import { TouchableOpacityProps } from 'react-native';
import { MealTypeProps } from '../../@types/meal';
import { Circle, Container, Hours, Title } from './styles';


type Props = TouchableOpacityProps & MealTypeProps;

export function ListItem({hours, meal, isCorrect, ...rest}: Props) {
  return (
    <Container {...rest}>
     <Hours>{hours}</Hours>
     <Title>{meal}</Title>
     <Circle isActive={isCorrect}/>
    </Container>
  );
}