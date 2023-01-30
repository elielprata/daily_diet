import { Percent } from "@components/Percent";
import { StatisticsInfo } from "@components/StatisticsInfo";

import { Container, Content, DoubleInfo, Text } from "./styles";

export function Statistics() {
  return (
    <Container>
      <Percent />

      <Content>
        <Text>Estatísticas gerais</Text>

        <StatisticsInfo
          value={22}
          subtitle="melhor sequência de pratos dentro da dieta"
        />

        <StatisticsInfo value={109} subtitle="refeições registradas" />

        <DoubleInfo>
          <StatisticsInfo
            type="SUCCESS"
            value={99}
            subtitle="refeições dentro da dieta"
          />

          <StatisticsInfo
            type="FAILURE"
            value={22}
            subtitle="refeições fora da dieta"
          />
        </DoubleInfo>
      </Content>
    </Container>
  );
}
