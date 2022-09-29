import { Avatar, Container, Greeting, Header, HeaderContent,Title, UserName } from './styles';
import { useNavigation } from "@react-navigation/native";
import avatar  from '../../assets/avatar.png';
import { LoadAnimation } from '../../components/LoadAnimation';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SectionList } from 'react-native';
import { MealTypeProps } from '../../@types/meal';
import { ListItem } from '../../components/ListItem';
import ListHeader from '../../components/ListHeader';
import { ListEmpty } from '../../components/ListEmpty';
import { Highlight } from '../../components/Highlight';
import { ButtonIcon } from '../../components/ButtonIcon';

type Props = {
  title: string;
  data: MealTypeProps[];
}

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [ userName, setUserName ] = useState<string>()
  const navigation = useNavigation()

  function handleNavigateToStatistics() {
    navigation.navigate('statistics')
  }
  function handleNavigateToCreateMeal() {
    navigation.navigate('newMeal')
  }

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@dietDaily:user')
      setUserName(user || '')
    }
    loadStorageUserName()
  }, [])


  const [list, setList] = useState<Props[]>([
  {
    title: '29.09.2022', 
    data: [
        {hours: '08:00', meal: 'refeição 1', isCorrect: true},
        {hours: '13:00', meal: 'refeição 2', isCorrect: true},
        {hours: '19:00', meal: 'refeição 3', isCorrect: true}
    ]
},
{
    title: '28.09.2022', 
    data: [
        {hours: '08:00', meal: 'refeição 1', isCorrect: true},
        {hours: '13:00', meal: 'refeição 2', isCorrect: true},
        {hours: '19:00', meal: 'refeição 3', isCorrect: true}
    ]
},
{
    title: '27.09.2022', 
    data: [
        {hours: '08:00', meal: 'refeição 1', isCorrect: true},
        {hours: '13:00', meal: 'refeição 2', isCorrect: true},
        {hours: '19:00', meal: 'refeição 3', isCorrect: true}
    ]
},
{
    title: '26.09.2022', 
    data: [
        {hours: '08:00', meal: 'refeição 1', isCorrect: true},
        {hours: '13:00', meal: 'refeição 2', isCorrect: true},
        {hours: '19:00', meal: 'refeição 3', isCorrect: true}
    ]
}
]);

  // if (isLoading) 
  //   return <LoadAnimation /> 
    return (
    <Container>
      <Header>
        <HeaderContent>
        <Greeting>Olá,</Greeting>
        <UserName>{userName}</UserName>
        </HeaderContent>
        <Avatar source={avatar}/>
      </Header>

        <Highlight
                title={90.86}
                type='GOOD'
                screenWithHeader={true}
                onPress={handleNavigateToStatistics}

            />
            <Title>Refeições</Title>
          <ButtonIcon
                title='Refeições'
                icon='add'
                onPress={handleNavigateToCreateMeal}
            />
        <SectionList
                sections={list}
                keyExtractor={(item, index) => item.hours + index}
                renderItem={({ item }) => (
                    <ListItem
                        meal={item.meal}
                        hours={item.hours}
                        isCorrect={item.isCorrect}
                    />
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <ListHeader
                        title={title}
                    />
                )}
                ListEmptyComponent = {() => (
                    <ListEmpty
                        message='Adicione as refeições diárias'
                    />
                )}
                stickySectionHeadersEnabled={false}
                showsVerticalScrollIndicator={false}
            />
    </Container>
  );
}

