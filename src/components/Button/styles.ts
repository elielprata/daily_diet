import { PencilLine, Plus, Trash } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  light?: boolean;
};

export const Container = styled(TouchableOpacity)<Props>`
  ${({ theme, light }) => css`
    background-color: ${light ? theme.COLORS.GRAY_700 : theme.COLORS.GRAY_200};
    border: 1px solid ${theme.COLORS.GRAY_200};
  `};

  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  min-height: 50px;
  max-height: 50px;

  padding: 10px;
  margin-bottom: 14px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, light }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${light ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
  `}
  margin-left: 10px;
`;

export const IconPlus = styled(Plus).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.WHITE,
}))``;

export const IconTrash = styled(Trash).attrs<Props>(({ theme, light }) => ({
  size: 24,
  color: light ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE,
}))<Props>``;

export const IconPencil = styled(PencilLine).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.WHITE,
}))``;
