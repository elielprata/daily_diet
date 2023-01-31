import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  padding: 10px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

  border-radius: 6px;

  align-items: center;
  justify-content: center;

  min-height: 50px;
  max-height: 50px;

  margin-bottom: 14px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;
