import { Container, Header, HomeContent, HomeList, HomeListHeader, HomeListHeaderButton, HomeListHeaderButtonIcon, HomeListHeaderButtonText, HomeListHeaderTitle, IconSignOut, Logo, LogoutButton, Photo, StatisticsButton, StatisticsButtonIcon, StatisticsButtonText, StatisticsButtonTitle, User, UserGreeting, UserInfo, UserName, UserWrapper } from './styles';
import logoImg from '../../assets/Logo.png';
import { useNavigation } from "@react-navigation/native";
import { useAuth } from '../../hooks/auth';

export function Home() {
  const { signOut, user } = useAuth();
  
  const navigation = useNavigation()

  function handleNavigateToStatistics() {
    navigation.navigate('statistics')
  }
  function handleNavigateToCreateMeal() {
    navigation.navigate('createMeal')
  }

  return (
    <Container>
        <Header>
          <UserWrapper>
          <UserInfo>
          <Photo
              source={{ uri: user.photo}}
            />
          <User>
            <UserGreeting>Olá,</UserGreeting>
            <UserName>{user.name}</UserName>
          </User>
          </UserInfo>
        {/* <Logo source={logoImg} /> */}

          <LogoutButton  onPress={signOut}>
          <IconSignOut 
          />
          </LogoutButton> 
          </UserWrapper>
      </Header>

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
