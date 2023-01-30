import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: 14px 12px;
  margin: 3px 0;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Divider = styled.View`
  height: 80%;
  width: 1px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin: 0 10px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}

  flex: 1;
`;

export const Status = styled.View`
  height: 14px;
  width: 14px;
  border-radius: 14px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_MID};
`;
