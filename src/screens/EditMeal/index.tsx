import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Container, Content, DoubleInputs, Form } from "./styles";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Diet } from "@components/Diet";
import { Button } from "@components/Button";

import { mealEdit } from "@storage/meal/mealEdit";

type RouteParams = {
  meal: any;
};

export function EditMeal() {
  const route = useRoute();
  const { meal } = route.params as RouteParams;

  const [name, setName] = useState(meal.name);
  const [description, setDescription] = useState(meal.description);
  const [date, setDate] = useState(meal.date);
  const [hour, setHour] = useState(meal.hour);
  const [status, setStatus] = useState(meal.status);

  const { navigate } = useNavigation();

  async function handleEditMeal() {
    const mealUpdate = {
      id: meal.id,
      name,
      description,
      date,
      hour,
      status,
    };
    await mealEdit(mealUpdate);

    navigate("home");
  }

  function handleDefineStatus(status: boolean) {
    return setStatus(status);
  }

  useEffect(() => {
    handleDefineStatus(meal.status);
  }, [meal]);

  return (
    <Container>
      <Content>
        <Header title="Nova Refeição" />

        <Form>
          <Input label="Nome" onChangeText={setName} value={name} />

          <Input
            label="Descrição"
            multiline
            numberOfLines={7}
            textAlignVertical="top"
            value={description}
            onChangeText={setDescription}
          />

          <DoubleInputs>
            <Input label="Data" double onChangeText={setDate} value={date} />

            <Input label="Hora" double onChangeText={setHour} value={hour} />
          </DoubleInputs>

          <Diet defineStatus={handleDefineStatus} statusProp={meal.status} />

          <Button title="Salvar alterações" onPress={handleEditMeal} />
        </Form>
      </Content>
    </Container>
  );
}
