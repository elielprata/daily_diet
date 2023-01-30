import styled, { css } from "styled-components/native";

export type StatisticsInfoTypeStyleProps = "SUCCESS" | "FAILURE";

type Props = {
  type?: StatisticsInfoTypeStyleProps;
};

export const Container = styled.View<Props>`
  ${({ theme, type }) => css`
    width: ${type ? `48%` : "100%"};
    background-color: ${type === "SUCCESS"
      ? theme.COLORS.GREEN_LIGHT
      : type === "FAILURE"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_600};
  `};

  padding-top: 20px;
  padding-bottom: 20px;

  align-items: center;

  border-radius: 8px;

  margin-bottom: 20px;
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-bottom: 10px
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
  text-align: center;
`;
