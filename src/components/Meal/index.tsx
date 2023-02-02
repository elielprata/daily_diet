import { TouchableOpacityProps } from "react-native";
import { Container, Description, Divider, Hour, Status } from "./styles";

type Props = TouchableOpacityProps & {
  hour: string;
  description: string;
  status: boolean;
};

export function Meal({ hour, description, status, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Hour>{hour}</Hour>

      <Divider />

      <Description>{description}</Description>

      <Status status={status} />
    </Container>
  );
}
