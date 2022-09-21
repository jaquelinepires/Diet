import { Container, StatisticsButton, StatisticsButtonIcon, StatisticsButtonText, StatisticsButtonTitle} from './styles';


export function Percent() {
  return (
    <Container>
      <StatisticsButton >
        <StatisticsButtonIcon />
        <StatisticsButtonTitle>90,86%</StatisticsButtonTitle>
        <StatisticsButtonText>
          das refeições dentro da dieta
        </StatisticsButtonText>
      </StatisticsButton>
    </Container>
  );
}
