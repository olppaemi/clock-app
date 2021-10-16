import styled from "styled-components";
import bgDesktopDaytime from "assets/desktop/bg-image-daytime.jpg";
import bgDesktopNighttime from "assets/desktop/bg-image-nighttime.jpg";
import bgTabletDaytime from "assets/tablet/bg-image-daytime.jpg";
import bgTabletNighttime from "assets/tablet/bg-image-nighttime.jpg";
import bgMobileDaytime from "assets/mobile/bg-image-daytime.jpg";
import bgMobileNighttime from "assets/mobile/bg-image-nighttime.jpg";
import media from "styles/media";

export const Page = styled.div<{ $isDayTime: boolean }>`
  width: 100%;
  min-height: 100vh;
  background: center / cover no-repeat
    ${({ $isDayTime }) =>
      $isDayTime ? `url(${bgDesktopDaytime})` : `url(${bgDesktopNighttime})`};

  @media (max-width: ${media.md}) {
    background: center / cover no-repeat
      ${({ $isDayTime }) =>
        $isDayTime ? `url(${bgTabletDaytime})` : `url(${bgTabletNighttime})`};
  }

  @media (max-width: ${media.sm}) {
    background: center / cover no-repeat
      ${({ $isDayTime }) =>
        $isDayTime ? `url(${bgMobileDaytime})` : `url(${bgMobileNighttime})`};
  }
`;
