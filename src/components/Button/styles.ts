import styled from "styled-components";
import media from "styles/media";
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

    &:hover {
      circle {
        fill: #999999;
      }
    }
  }

  @media (max-width: ${media.sm}) {
    width: ${rem(115)};
    height: ${rem(39)};
    font-size: ${rem(12)};
    letter-spacing: ${rem(3.75)};
    padding-left: ${rem(17)};
    padding-right: ${rem(4)};

    svg {
      transform: scale(0.8) ${({ $rotate }) => $rotate && "rotate(180deg)"};
    }
  }
`;
