import styled from "styled-components";
import media from "styles/media";

export const Details = styled.div<{ $isDayTime: boolean }>`
  width: 100%;
  height: 50vh;
  background: ${({ $isDayTime }) =>
    $isDayTime ? "rgba(255, 255, 255, 0.75)" : "rgba(0,0,0,0.75"};
  backdrop-filter: blur(40.7742px);

  @media (max-width: ${media.lg}) {
    height: ${440 / 1024}vh;
  }
`;
