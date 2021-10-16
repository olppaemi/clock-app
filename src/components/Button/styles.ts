import styled from "styled-components";
import { rem } from "styles/utils";

export const Button = styled.button<{ $rotate: boolean }>`
  width: ${rem(146)};
  height: ${rem(56)};
  border: none;
  background: white;
  font-family: inherit;
  font-size: ${rem(16)};
  font-weight: bold;
  letter-spacing: ${rem(5)};
  color: ${({ theme }) => theme.colors.thunder};
  text-transform: uppercase;
  border-radius: ${rem(28)};
  padding-left: ${rem(21)};
  padding-right: ${rem(9)};
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    justify-self: flex-end;
    transform: ${({ $rotate }) => $rotate && "rotate(180deg)"};
    transition: all 300ms ease-in;
  }
`;
