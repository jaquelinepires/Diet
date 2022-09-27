import { useNavigation } from '@react-navigation/native';
import { StatisticCard } from '../../components/StatisticCard';
import {
  StatisticsHeader,
  StatisticsBackButton,
  StatisticsBackIcon,
  StatisticsHeaderTitle,
  StatisticsHeaderSubtitle,
  StatisticsContainer,
  StatisticsContentTitle,
  MealsInDietColumContainer,
  StatisticsContent,
} from './styles';

type StatisticsProps = {
variant?: 'good' | 'bad';
}

export function Statistics({variant="good"}: StatisticsProps) {
  const navigation = useNavigation();

  function handleBackToHome() {
    navigation.navigate('home');
  }

  return (
    <StatisticsContainer>
      <StatisticsHeader  variant={variant}>
        <StatisticsBackButton onPress={handleBackToHome}>
          <StatisticsBackIcon />
        </StatisticsBackButton>
        <StatisticsHeaderTitle>90,86%</StatisticsHeaderTitle>
        <StatisticsHeaderSubtitle>das refeições dentro da dieta</StatisticsHeaderSubtitle>
      </StatisticsHeader>

      <StatisticsContent>
        <StatisticsContentTitle>Estatística Gerais</StatisticsContentTitle>
        <StatisticCard number={1} description="melhor sequência de pratos dentro da dieta" />
        <StatisticCard number={1} description="refeições registradas" />
        <MealsInDietColumContainer>
          <StatisticCard number={1} description="refeições dentro da dieta" variant="good" style={{ marginRight: "8%" }}/>
          <StatisticCard number={2} description="refeições fora da dieta" variant="bad" />
        </MealsInDietColumContainer>
      </StatisticsContent>
    </StatisticsContainer>
  );
}
