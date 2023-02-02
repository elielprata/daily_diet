import { Container, Date } from "./styles";

type Props = {
  date: string;
};

export function MealHeader({ date }: Props) {
  return (
    <Container>
      <Date>{date}</Date>
    </Container>
  );
}
