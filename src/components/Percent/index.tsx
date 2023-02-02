import { TouchableOpacityProps } from "react-native";

import { Arrow, Container, PercentText, Subtitle } from "./styles";

import { BackButton } from "@components/BackButton";

type Props = TouchableOpacityProps & {
  percentage: string;
  backButton?: boolean;
};

export function Percent({ percentage, backButton = false, ...rest }: Props) {
  return (
    <Container {...rest}>
      {backButton && <BackButton />}

      {!backButton && <Arrow />}

      <PercentText>{percentage}%</PercentText>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}
