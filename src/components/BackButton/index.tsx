import { useNavigation } from "@react-navigation/native";
import { Container, Icon, BackButtonTypeStyleProps } from "./styles";

type Props = {
  type?: BackButtonTypeStyleProps;
};

export function BackButton({ type }: Props) {
  const { goBack } = useNavigation();

  return (
    <Container onPress={() => goBack()}>
      <Icon type={type} />
    </Container>
  );
}
