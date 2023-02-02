import { BackButton } from "@components/BackButton";
import { Container, Title } from "./styles";

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  return (
    <Container>
      <BackButton />

      <Title>{title}</Title>
    </Container>
  );
}
