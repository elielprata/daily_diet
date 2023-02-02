import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type ButtonProps = {
  type?: ButtonIconTypeStyleProps;
};

type StatusProps = {
  status: boolean;
};

export const Container = styled.View`
  flex: 1;
  margin-top: 15px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled(TouchableOpacity)<ButtonProps>`
  margin: 5px 0;
  padding: 15px;

  width: 48%;
  border-radius: 6px;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  ${({ theme, type }) => {
    if (type === "PRIMARY") {
      return css`
        border: 1px solid ${theme.COLORS.GREEN_DARK};
        background-color: ${theme.COLORS.GREEN_LIGHT};
      `;
    } else if (type === "SECONDARY") {
      return css`
        border: 1px solid ${theme.COLORS.RED_DARK};
        background-color: ${theme.COLORS.RED_LIGHT};
      `;
    } else {
      return css`
        background-color: ${theme.COLORS.GRAY_600};
      `;
    }
  }}
`;

export const Status = styled.View<StatusProps>`
  height: 8px;
  width: 8px;
  border-radius: 8px;
  margin-right: 5px;

  background-color: ${({ theme, status }) =>
    status ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const TextButton = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
