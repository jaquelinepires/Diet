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

export function Statistics() {
  const navigation = useNavigation();

  function handleBackToHome() {
    navigation.navigate('home');
  }

  return (
    <StatisticsContainer>
      <StatisticsHeader>
        <StatisticsBackButton onPress={handleBackToHome}>
          <StatisticsBackIcon />
        </StatisticsBackButton>
        <StatisticsHeaderTitle>90,86%</StatisticsHeaderTitle>
        <StatisticsHeaderSubtitle>das refeições dentro da dieta</StatisticsHeaderSubtitle>
      </StatisticsHeader>

      <StatisticsContent>
        <StatisticsContentTitle>Meals in diet</StatisticsContentTitle>
        <StatisticCard number={1} description="Breakfast" />
        <StatisticCard number={1} description="Breakfast" />
        <MealsInDietColumContainer>
          <StatisticCard number={1} description="Breakfast" />
          <StatisticCard number={2} description="Lunch" />
        </MealsInDietColumContainer>
      </StatisticsContent>
    </StatisticsContainer>
  );
}
