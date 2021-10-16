import styled, { css } from "styled-components";
import { percent, rem } from "styles/utils";
import media from "styles/media";

export const Clock = styled.div<{ $showDetails: boolean; $isDayTime: boolean }>`
  width: 100%;
  height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(0, 0, 0, 0.4);
  position: relative;
  transition: height 200ms ease-out;

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
  width: ${percent(1110, 1440)};
  height: ${({ $showDetails }) =>
    $showDetails ? "initial" : `${percent(646, 800)}`};
  margin: auto;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${media.lg}) {
    width: ${percent(539, 768)};
    height: ${({ $showDetails }) =>
      $showDetails ? "initial" : `${percent(800, 1024)}`};
  }

  @media (max-width: ${media.sm}) {
    width: ${percent(325, 375)};
    height: ${({ $showDetails }) =>
      $showDetails ? "initial" : `${percent(596, 667)}`};
    padding-top: 0;
  }
`;

export const Quote = styled.div`
  width: calc(50% + ${rem(16)});
  display: flex;

  @media (max-width: ${media.lg}) {
    width: 100%;
  }
`;

export const QuoteText = styled.div`
  & > * + * {
    margin-top: ${rem(13)};
  }
  strong {
    font-weight: bold;
  }
`;

export const RefreshIcon = styled.div`
  margin-left: ${rem(16)};
  cursor: pointer;
`;

export const Time = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: ${media.lg}) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    display: flex;
    align-items: center;

    svg {
      margin-right: ${rem(16)};
    }
  }

  & > * + * {
    margin-top: ${rem(16)};
  }
`;

export const Right = styled.div`
  margin-left: auto;
  align-self: flex-end;

  @media (max-width: ${media.lg}) {
    margin-top: ${percent(80, 1024)};
    margin-left: 0;
    align-self: flex-start;
  }

  @media (max-width: ${media.md}) {
    margin-top: ${rem(48)};
  }
`;
