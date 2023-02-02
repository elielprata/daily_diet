import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Content = styled(SafeAreaView)`
  flex: 1;
`;

export const Form = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 24px;
`;

export const DoubleInputs = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
