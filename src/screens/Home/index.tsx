import { Avatar, Container, Header, Logo } from "./styles";

import { Percent } from "@components/Percent";

import logoImg from "@assets/logo.png";
import avatarImg from "@assets/avatar.png";
import { Button } from "@components/Button";
import { Meal } from "@components/Meal";
import { MealHeader } from "@components/MealHeader";

export function Home() {
  return (
    <Container>
      <Header>
        <Logo source={logoImg} />

        <Avatar source={avatarImg} />
      </Header>

      <Percent />

      <Button />

      <MealHeader />
      <Meal />
    </Container>
  );
}
