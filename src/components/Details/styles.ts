import styled from "styled-components";
import media from "styles/media";
import { percent, rem } from "styles/utils";

export const Details = styled.div<{ $isDayTime: boolean }>`
  width: 100%;
  height: 50vh;
  background: ${({ $isDayTime }) =>
    $isDayTime ? "rgba(255, 255, 255, 0.75)" : "rgba(0,0,0,0.75"};
  backdrop-filter: blur(${rem(40.7742)});
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${media.lg}) {
    height: ${(440 / 1024) * 100}vh;
  }
`;

export const Grid = styled.div`
  width: ${percent(1110, 1440)};
  height: ${percent(252, 400)};
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${percent(94, 1110)};

  @media (max-width: ${media.lg}) {
    height: ${percent(202, 440)};
    column-gap: ${percent(81, 768)};
  }

  @media (max-width: ${media.md}) {
    grid-template-columns: 1fr;
    height: ${percent(160, 256)};
  }
`;

export const Left = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid rgba(30, 30, 30, 0.25);

  @media (max-width: ${media.lg}) {
    border-right: none;
    & > * + * {
      margin-top: ${rem(48)};
    }
  }

  @media (max-width: ${media.md}) {
    & > * + * {
      margin-top: 0;
    }
    justify-content: space-around;
  }
`;

export const Right = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${media.md}) {
    justify-content: space-around;
  }
`;

export const Item = styled.div`
  h6 {
    color: ${({ theme }) => theme.colors.thunder};
    text-transform: uppercase;
  }

  & > * + * {
    margin-top: ${rem(9)};
  }

  @media (max-width: ${media.md}) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > * + * {
      margin-top: 0;
    }
  }
`;
