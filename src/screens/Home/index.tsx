import { SectionList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Avatar, Container, Header, Logo } from "./styles";

import logoImg from "@assets/logo.png";
import avatarImg from "@assets/avatar.png";

import { Percent } from "@components/Percent";
import { Button } from "@components/Button";
import { Meal } from "@components/Meal";
import { MealHeader } from "@components/MealHeader";

export function Home() {
  const { navigate } = useNavigation();

  function handleOpenStatistics() {
    navigate("statistics");
  }

  const data = [
    {
      day: "10.02.23",
      data: [
        {
          hour: "16:00",
          description: "Lanche",
          status: false,
        },
        {
          hour: "12:00",
          description: "Comida Fitness",
          status: true,
        },
      ],
    },
    {
      day: "11.02.23",
      data: [
        {
          hour: "16:00",
          description: "Comida",
          status: true,
        },
        {
          hour: "12:00",
          description: "Suplemento",
          status: true,
        },
      ],
    },
  ];
  return (
    <Container>
      <Header>
        <Logo source={logoImg} />

        <Avatar source={avatarImg} />
      </Header>

      <Percent percentage={90.86} onPress={handleOpenStatistics} />

      <Button title="Nova Refeição" onPress={() => console.log("ok")} />

      <SectionList
        sections={data}
        keyExtractor={(item, index) => item.hour + index}
        renderItem={({ item }) => (
          <Meal
            hour={item.hour}
            description={item.description}
            status={item.status}
          />
        )}
        renderSectionHeader={({ section: { day } }) => <MealHeader day={day} />}
      />
    </Container>
  );
}
