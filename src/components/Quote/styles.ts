import styled from "styled-components";
import media from "styles/media";
import { rem } from "styles/utils";

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
