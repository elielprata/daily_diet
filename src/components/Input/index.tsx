import { TextInputProps } from "react-native";
import { Container, Label, InputText } from "./styles";

type Props = TextInputProps & {
  label: string;
  double?: boolean;
};

export function Input({ label, double = false, ...rest }: Props) {
  return (
    <Container double={double}>
      <Label>{label}</Label>
      <InputText {...rest} />
    </Container>
  );
}
