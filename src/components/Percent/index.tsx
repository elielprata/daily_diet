import { BackButton } from "@components/BackButton";
import { Arrow, Container, PercentText, Subtitle } from "./styles";

export function Percent() {
  return (
    <Container>
      <BackButton />
      <Arrow />
      <PercentText>92,00%</PercentText>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}
