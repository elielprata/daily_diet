import styled, { css } from "styled-components/native";

export const Container = styled.View``;

export const Content = styled.View`
  padding: 20px;
  align-items: center;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-bottom: 20px;
`;

export const DoubleInfo = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
