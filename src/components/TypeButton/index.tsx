import { TouchableOpacityProps } from 'react-native';
import { Circle } from 'react-native-svg';
import { Container, MealCategoryButtonIndicator, Title } from './styles';


interface Props extends TouchableOpacityProps {
  type: 'GOOD' | 'BAD';
  title: string;
  isActive: boolean;
}

export function TypeButton({ 
  type,
  title, 
  isActive = false,
   ...rest 
  }: Props) {
  return (
    <Container 
      type={type}
      isActive={isActive} 
      {...rest} 
      >
      <MealCategoryButtonIndicator
      type={type}/>
      <Title>
        {title}
      </Title>
    </Container>
  
  );
}
