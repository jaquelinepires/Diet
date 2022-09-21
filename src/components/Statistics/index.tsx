import { StatisticCard } from '../StatisticCard';
import {
  Container,
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

  return (
    <Container>
      <StatisticsHeader>
        <StatisticsBackButton>
          <StatisticsBackIcon />
        </StatisticsBackButton>
        <StatisticsHeaderTitle>90,86%</StatisticsHeaderTitle>
        <StatisticsHeaderSubtitle>das refeições dentro da dieta</StatisticsHeaderSubtitle>
      </StatisticsHeader>

      <StatisticsContainer>
        <StatisticsContent>
        <StatisticsContentTitle>Estatísticas gerais</StatisticsContentTitle>
        <StatisticCard number={1} description="Melhor sequências de pratos dentro da dieta" />
        <StatisticCard number={1} description="Refeiçoes registradas" />
        </StatisticsContent>

        <MealsInDietColumContainer>
          <StatisticCard number={1} description="Refeições dentro da dieta" />
          <StatisticCard number={2} description="Refeições fora da dieta" />
        </MealsInDietColumContainer>
      </StatisticsContainer>
    </Container>
  );
}
