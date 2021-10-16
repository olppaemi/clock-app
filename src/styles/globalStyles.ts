import { createGlobalStyle, css } from "styled-components";
import { reset } from "styled-reset";
import media from "./media";
import { rem } from "./utils";

const typography = css`
  h1 {
    font-size: ${rem(200)};
    font-weight: bold;
    line-height: ${rem(200)};
    letter-spacing: -${rem(5)};

    @media (max-width: ${media.lg}) {
      font-size: ${rem(175)};
      line-height: ${rem(175)};
      letter-spacing: -${rem(4.38)};
    }

    @media (max-width: ${media.md}) {
      font-size: ${rem(100)};
      line-height: ${rem(100)};
      letter-spacing: -${rem(2.5)};
    }
  }

  h2 {
    font-size: ${rem(56)};
    font-weight: bold;
    line-height: ${rem(68)};

    @media (max-width: ${media.lg}) {
      font-size: ${rem(40)};
      line-height: ${rem(48)};
      letter-spacing: 0;
    }

    @media (max-width: ${media.md}) {
      font-size: ${rem(20)};
      line-height: ${rem(24)};
      letter-spacing: 0;
    }
  }

  h3 {
    font-size: ${rem(24)};
    font-weight: bold;
    line-height: ${rem(28)};
    letter-spacing: ${rem(4.8)};
    text-transform: uppercase;

    @media (max-width: ${media.lg}) {
      font-size: ${rem(18)};
      line-height: ${rem(28)};
      letter-spacing: ${rem(3.6)};
    }

    @media (max-width: ${media.md}) {
      font-size: ${rem(15)};
      line-height: ${rem(28)};
      letter-spacing: ${rem(3)};
    }
  }

  h4 {
    font-size: ${rem(20)};
    line-height: ${rem(28)};
    letter-spacing: ${rem(4)};

    @media (max-width: ${media.lg}) {
      font-size: ${rem(18)};
      line-height: ${rem(28)};
      letter-spacing: ${rem(3.6)};
    }

    @media (max-width: ${media.md}) {
      font-size: ${rem(15)};
      line-height: ${rem(25)};
      letter-spacing: ${rem(3)};
    }
  }

  h5 {
    font-size: ${rem(18)};
    font-weight: bold;
    line-height: ${rem(28)};
  }

  h6 {
    font-size: ${rem(15)};
    font-weight: bold;
    line-height: ${rem(28)};
    letter-spacing: ${rem(3)};

    @media (max-width: ${media.lg}) {
      font-size: ${rem(13)};
      line-height: ${rem(28)};
      letter-spacing: ${rem(2.6)};
    }

    @media (max-width: ${media.md}) {
      font-size: ${rem(10)};
      line-height: ${rem(28)};
      letter-spacing: ${rem(2)};
    }
  }

  body {
    font-family: ${({ theme }) => theme.font};
    font-size: ${rem(18)};
    line-height: ${rem(28)};

    @media (max-width: ${media.md}) {
      font-size: ${rem(12)};
      line-height: ${rem(22)};
      letter-spacing: 0;
    }
  }

  .abbr {
    font-size: ${rem(40)};
    font-weight: 300;
    line-height: ${rem(28)};
    letter-spacing: 0;

    @media (max-width: ${media.lg}) {
      font-size: ${rem(32)};
    }

    @media (max-width: ${media.md}) {
      font-size: ${rem(15)};
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  *, 
  *::before, 
  *::after {
    box-sizing: border-box;    
  }

  ${typography}
`;

export default GlobalStyle;
