import { Avatar, Container, Greeting, Header, HeaderContent, HomeContent, HomeList, HomeListHeader, HomeListHeaderButton, HomeListHeaderButtonIcon, HomeListHeaderButtonText, HomeListHeaderTitle, StatisticsButton, StatisticsButtonIcon, StatisticsButtonText, StatisticsButtonTitle, UserName } from './styles';
import { useNavigation } from "@react-navigation/native";
import avatar  from '../../assets/avatar.png';
import { LoadAnimation } from '../../components/LoadAnimation';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [ userName, setUserName ] = useState<string>()
  const navigation = useNavigation()

  function handleNavigateToStatistics() {
    navigation.navigate('statistics')
  }
  function handleNavigateToCreateMeal() {
    navigation.navigate('createMeal')
  }

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@dietDaily:user')
      setUserName(user || '')
    }

    loadStorageUserName()
  }, [])

  // if (isLoading) 
  //   return <LoadAnimation /> 
  
    return (
      <>
      { isLoading ? <LoadAnimation /> :
    <Container>
      <Header>
        <HeaderContent>
        <Greeting>Olá,</Greeting>
        <UserName>{userName}</UserName>
        </HeaderContent>
        <Avatar source={avatar}/>
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
    }
    </>
  );
}

