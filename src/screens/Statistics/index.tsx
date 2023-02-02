import { Percent } from "@components/Percent";
import { StatisticsInfo } from "@components/StatisticsInfo";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { getPercentage } from "@utils/getPercentage";
import _ from "lodash";
import { useEffect, useState } from "react";

import { Container, Content, DoubleInfo, Text } from "./styles";

type MealProps = {
  name: string;
  description: string;
  date: string;
  hour: string;
  status: boolean;
};

export function Statistics() {
  const [meals, setMeals] = useState<MealProps[]>([]);
  const [positivePercent, setPositivePercent] = useState("");

  const mealsInDiet = meals.filter((item) => item.status);
  const mealsNotInDiet = meals.filter((item) => !item.status);

  let bestSequenceInDiet = 0;

  meals.reduce((acc, meal) => {
    if (meal.status) {
      return acc + 1;
    } else {
      bestSequenceInDiet = acc > bestSequenceInDiet ? acc : bestSequenceInDiet;
      return 0;
    }
  }, 0);

  async function fetchData() {
    const data: MealProps[] = await mealsGetAll();

    setMeals(data);
  }

  useEffect(() => {
    fetchData();
  }, [meals]);

  return (
    <Container>
      <Percent
        percentage={getPercentage(meals.length, mealsInDiet.length)}
        backButton
        activeOpacity={1}
      />

      <Content>
        <Text>Estatísticas gerais</Text>

        <StatisticsInfo
          value={bestSequenceInDiet}
          subtitle="melhor sequência de pratos dentro da dieta"
        />

        <StatisticsInfo value={meals.length} subtitle="refeições registradas" />

        <DoubleInfo>
          <StatisticsInfo
            type="SUCCESS"
            value={mealsInDiet.length}
            subtitle="refeições dentro da dieta"
          />

          <StatisticsInfo
            type="FAILURE"
            value={mealsNotInDiet.length}
            subtitle="refeições fora da dieta"
          />
        </DoubleInfo>
      </Content>
    </Container>
  );
}
