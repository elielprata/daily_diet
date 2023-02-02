import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type StatusProps = {
  status: boolean;
};

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const Content = styled(SafeAreaView)`
  flex: 1;
`;

export const Info = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 24px;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-top: 5px;
`;

export const DateTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-top: 20px;
`;

export const DateInfo = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-top: 5px;
`;

export const StatusView = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  margin-top: 15px;
  flex-direction: row;
  align-self: flex-start;
  align-items: center;

  padding: 5px 15px;

  border-radius: 20px;
  margin-bottom: auto;
`;

export const Status = styled.View<StatusProps>`
  height: 8px;
  width: 8px;
  border-radius: 8px;
  margin-right: 10px;

  background-color: ${({ theme, status }) =>
    status ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const StatusText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
