import { Container, Date } from "./styles";

type Props = {
  day: string;
};

export function MealHeader({ day }: Props) {
  return (
    <Container>
      <Date>{day}</Date>
    </Container>
  );
}
