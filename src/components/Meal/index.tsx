import { Container, Description, Divider, Hour, Status } from "./styles";

export function Meal() {
  return (
    <Container>
      <Hour>16:00</Hour>

      <Divider />

      <Description>Lanche</Description>

      <Status />
    </Container>
  );
}
