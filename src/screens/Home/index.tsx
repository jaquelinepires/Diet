import { Percent } from '../../components/Percent';
import { Avatar, Container, HomeHeader, Logo, Texto } from './styles';
import logoImg from '../../assets/Logo.png';
import avatarImg from '../../assets/avatar.png';
import { ButtonAddMeal } from '../../components/ButtonAddMeal';

export function Home() {
  return (
    <Container>
        <HomeHeader>
        <Logo source={logoImg} />
        <Avatar source={avatarImg} />
      </HomeHeader>

      <Percent />
      <ButtonAddMeal />

    </Container>
  );
}
