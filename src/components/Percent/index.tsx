import { BackButton } from "@components/BackButton";
import { TouchableOpacityProps } from "react-native";
import { Arrow, Container, PercentText, Subtitle } from "./styles";

type Props = TouchableOpacityProps & {
  percentage: number;
  backButton?: boolean;
};

export function Percent({ percentage, backButton = false, ...rest }: Props) {
  return (
    <Container {...rest}>
      {backButton && <BackButton />}

      <Arrow />

      <PercentText>{percentage}%</PercentText>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}
