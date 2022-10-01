import { useNavigation } from '@react-navigation/native';
import { ViewProps } from 'react-native';
import { Highlight } from '../../components/Highlight';
import { StatisticCard } from '../../components/StatisticCard';
import {
  StatisticsContainer,
  StatisticsContentTitle,
  MealsInDietColumContainer,
  StatisticsContent,
  Images,
} from './styles';

export function Statistics() {
  const navigation = useNavigation();

  function handleBackToHome() {
    navigation.navigate('home');
  }

  return (
    <StatisticsContainer>
      <Highlight
        title={90.86}
        type='GOOD'
        icon='arrow-left'
        sideOfIcon='LEFT'
        style={{ height: 168, paddingTop: 20 }}
        onPress={handleBackToHome}
      />

      <StatisticsContent>
        <StatisticsContentTitle>Estatística Gerais</StatisticsContentTitle>
        <StatisticCard 
          number={1} 
          description="melhor sequência de pratos dentro da dieta" />
        <StatisticCard 
          number={1} 
          description="refeições registradas" />
          
        <MealsInDietColumContainer>
          <StatisticCard 
            number={1} 
            description="refeições dentro da dieta" 
            variant="good" 
            style={{ marginRight: "8%" }}/>
          <StatisticCard 
            number={2} 
            description="refeições fora da dieta" 
            variant="bad" />
        </MealsInDietColumContainer>
      </StatisticsContent>
    </StatisticsContainer>
  );
}
