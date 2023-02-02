import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  double: boolean;
};

export const Container = styled.View<Props>`
  width: ${({ double }) => (double ? "48%" : "100%")};
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-bottom: 5px;
`;

export const InputText = styled(TextInput)`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
  border-radius: 6px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};

  padding: 10px 15px;
`;
