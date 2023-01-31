import { Container, Description, Divider, Hour, Status } from "./styles";

type Props = {
  hour: string;
  description: string;
  status: boolean;
};

export function Meal({ hour, description, status }: Props) {
  return (
    <Container>
      <Hour>{hour}</Hour>

      <Divider />

      <Description>{description}</Description>

      <Status status={status} />
    </Container>
  );
}
