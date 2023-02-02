import { useRoute } from "@react-navigation/native";
import { Alert } from "react-native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";

import {
  Container,
  Content,
  DateInfo,
  DateTitle,
  Description,
  Info,
  Name,
  Status,
  StatusText,
  StatusView,
} from "./styles";

type RouteParams = {
  meal: {
    name: string;
    description: string;
    date: string;
    hour: string;
    status: boolean;
  };
};

export function InfoMeal() {
  const route = useRoute();
  const { meal } = route.params as RouteParams;

  function handleRemoveMeal() {
    Alert.alert("", "Deseja realmente excluir o registro da refeição?", [
      {
        text: "Sim",
        onPress: () => console.log("Sim"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <Container>
      <Content>
        <Header title="Refeição" />
        <Info>
          <Name>{meal.name}</Name>
          <Description>{meal.description}</Description>

          <DateTitle>Data e hora</DateTitle>
          <DateInfo>
            {meal.date} às {meal.hour}
          </DateInfo>

          {meal.status ? (
            <StatusView>
              <Status status={meal.status} />
              <StatusText>dentro da dieta</StatusText>
            </StatusView>
          ) : (
            <StatusView>
              <Status status={meal.status} />
              <StatusText>fora da dieta</StatusText>
            </StatusView>
          )}

          <Button title="Editar refeição" icon="PENCIL" />
          <Button
            title="Excluir refeição"
            icon="TRASH"
            light
            onPress={handleRemoveMeal}
          />
        </Info>
      </Content>
    </Container>
  );
}
