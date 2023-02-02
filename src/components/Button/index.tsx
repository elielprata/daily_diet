import { TouchableOpacityProps } from "react-native";
import { Container, IconPencil, IconPlus, IconTrash, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  icon?: "PLUS" | "TRASH" | "PENCIL";
  light?: boolean;
};

export function Button({ title, icon, light, ...rest }: Props) {
  return (
    <Container {...rest} light={light}>
      {icon === "PLUS" && <IconPlus />}
      {icon === "TRASH" && <IconTrash light={light} />}
      {icon === "PENCIL" && <IconPencil />}

      <Title light={light}>{title}</Title>
    </Container>
  );
}
