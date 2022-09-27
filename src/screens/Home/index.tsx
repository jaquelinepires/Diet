import { Container, HomeContent, HomeList, HomeListHeader, HomeListHeaderButton, HomeListHeaderButtonIcon, HomeListHeaderButtonText, HomeListHeaderTitle,  StatisticsButton, StatisticsButtonIcon, StatisticsButtonText, StatisticsButtonTitle } from './styles';
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation()

  function handleNavigateToStatistics() {
    navigation.navigate('statistics')
  }
  function handleNavigateToCreateMeal() {
    navigation.navigate('createMeal')
  }

  return (
    <Container>

      <StatisticsButton onPress={handleNavigateToStatistics}>
        <StatisticsButtonIcon />
        <StatisticsButtonTitle>90,86%</StatisticsButtonTitle>
        <StatisticsButtonText>
          das refeições dentro da dieta
        </StatisticsButtonText>
      </StatisticsButton>

      <HomeContent>
        <HomeListHeader>
          <HomeListHeaderTitle>Refeições</HomeListHeaderTitle>
          <HomeListHeaderButton onPress={handleNavigateToCreateMeal}>
            <HomeListHeaderButtonIcon />
            <HomeListHeaderButtonText>Nova refeição</HomeListHeaderButtonText>
          </HomeListHeaderButton>
        </HomeListHeader>
        <HomeList />
      </HomeContent>
    </Container>
  );
}
