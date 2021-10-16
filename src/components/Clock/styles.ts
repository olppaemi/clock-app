import styled, { css } from "styled-components";
import { rem } from "styles/utils";
import media from "styles/media";

export const Clock = styled.div<{ $showDetails: boolean; $isDayTime: boolean }>`
  width: 100%;
  height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(0, 0, 0, 0.4);
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ $showDetails }) =>
    $showDetails &&
    css`
      height: 50vh;
    `}

  @media (max-width: ${media.lg}) {
    ${({ $showDetails }) =>
      $showDetails &&
      css`
        height: ${(584 / 1024) * 100}vh;
      `}
  }
`;

export const Center = styled.div<{ $showDetails: boolean }>`
  max-width: ${rem(1110)};
  width: ${(1110 / 1440) * 100}%;
  height: ${({ $showDetails }) =>
    $showDetails ? "initial" : `${(646 / 800) * 100}%`};
  margin: auto;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${media.lg}) {
    width: ${(573 / 768) * 100}%;
    height: ${({ $showDetails }) =>
      $showDetails ? "initial" : `${(880 / 1024) * 100}%`};
    padding-top: ${rem(89)};
  }
`;

export const Quote = styled.div`
  width: 50%;

  & > * + * {
    margin-top: ${rem(13)};
  }

  strong {
    font-weight: bold;
  }

  @media (max-width: ${media.lg}) {
    width: 100%;
  }
`;

export const Time = styled.div`
  width: 100%;
  height: ${rem(288)};
  display: flex;

  @media (max-width: ${media.lg}) {
    flex-direction: column;
    height: ${rem(367)};
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Right = styled.div`
  margin-left: auto;
  align-self: flex-end;

  @media (max-width: ${media.lg}) {
    margin-top: ${rem(80)};
    margin-left: 0;
    align-self: flex-start;
  }
`;
