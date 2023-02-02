import styled from "styled-components/native";

import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export type BackButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type?: BackButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  position: absolute;
  top: 17px;
  left: 17px;
`;

export const Icon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color:
    type === "PRIMARY"
      ? theme.COLORS.GREEN_DARK
      : type === "SECONDARY"
      ? theme.COLORS.RED_DARK
      : theme.COLORS.GRAY_200,
}))<Props>``;
