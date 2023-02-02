import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Content, DoubleInputs, Form } from "./styles";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Diet } from "@components/Diet";
import { Button } from "@components/Button";

import { mealCreate } from "@storage/meal/mealCreate";

export function CreateMeal() {
  const [name, setName] = useState("Lanche");
  const [description, setDescription] = useState("Hamburger");
  const [date, setDate] = useState("12.01");
  const [hour, setHour] = useState("13:00");
  const [status, setStatus] = useState(false);

  const { navigate } = useNavigation();

  function handleNewMeal() {
    const meal = {
      name,
      description,
      date,
      hour,
      status,
    };
    mealCreate(meal as never);

    navigate("feedback", { feedback: status ? "POSITIVE" : "NEGATIVE" });
  }

  function handleDefineStatus(status: boolean) {
    setStatus(status);
  }

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

          <Diet defineStatus={handleDefineStatus} />

          <Button title="Cadastrar refeição" onPress={handleNewMeal} />
        </Form>
      </Content>
    </Container>
  );
}
