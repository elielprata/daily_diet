import { useCallback, useState } from "react";
import { SectionList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Avatar, Container, Header, Logo } from "./styles";

import logoImg from "@assets/logo.png";
import avatarImg from "@assets/avatar.png";

import { Percent } from "@components/Percent";
import { Button } from "@components/Button";
import { Meal } from "@components/Meal";
import { MealHeader } from "@components/MealHeader";

import { mealsGetSectionList } from "@storage/meal/mealsGetSectionList";

export function Home() {
  const [meals, setMeals] = useState([]);

  const { navigate } = useNavigation();

  function handleOpenStatistics() {
    navigate("statistics");
  }

  async function fetchMeals() {
    const data = await mealsGetSectionList();

    setMeals(data);
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />

        <Avatar source={avatarImg} />
      </Header>

      <Percent percentage={90.86} onPress={handleOpenStatistics} />

      <Button title="Nova Refeição" onPress={() => navigate("createMeal")} />

      <SectionList
        sections={meals}
        keyExtractor={(item, index) => item.hour + index}
        renderItem={({ item }) => (
          <Meal
            hour={item.hour}
            description={item.name}
            status={item.status}
            onPress={() => navigate("infoMeal", { meal: item })}
          />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <MealHeader date={date} />
        )}
      />
    </Container>
  );
}
