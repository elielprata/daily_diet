import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  padding: 24px;
`;

export const Header = styled.View`
  width: 100%;

  padding-bottom: 20px;
  padding-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  height: 40px;
  width: 80px;
`;

export const Avatar = styled.Image`
  height: 40px;
  width: 40px;

  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
`;
