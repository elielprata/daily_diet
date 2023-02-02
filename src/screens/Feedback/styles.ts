import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type FeedbackTextProps = {
  feedback: "POSITIVE" | "NEGATIVE";
};

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  justify-content: center;
  align-items: center;

  padding: 20px;
`;

export const FeedbackText = styled.Text<FeedbackTextProps>`
  ${({ theme, feedback }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${feedback === "NEGATIVE"
      ? theme.COLORS.RED_DARK
      : theme.COLORS.GREEN_DARK};
  `}
  margin-bottom: 10px
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
  text-align: center;
`;

export const Image = styled.Image`
  margin: 35px;
`;
