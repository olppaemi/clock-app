import Button from "components/Button";
import { appActions } from "contexts/Actions";
import { useAppContext } from "contexts/AppContext";
import { format } from "date-fns";
import Refresh from "icons/Refresh";
import Sun from "icons/Sun";
import { useEffect, useState } from "react";
import * as S from "./styles";

const Clock = ({
  showDetails,
  toggleShowDetails,
}: {
  showDetails: boolean;
  toggleShowDetails(): void;
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { clock, geo, greeting, dispatch } = useAppContext();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(appActions.timeGo());
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    const mobile = () => {
      if (window.innerWidth <= 576) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", mobile);
    return () => window.removeEventListener("resize", mobile);
  }, []);

  return (
    <S.Clock $showDetails={showDetails} $isDayTime={true}>
      <S.Center $showDetails={showDetails}>
        {!showDetails && (
          <S.Quote>
            <S.QuoteText>
              <p>
                “The science of operations, as derived from mathematics more
                especially, is a science of itself, and has its own abstract
                truth and value.”
              </p>
              <p>
                <strong>Ada Lovelace</strong>
              </p>
            </S.QuoteText>
            <S.RefreshIcon>
              <Refresh />
            </S.RefreshIcon>
          </S.Quote>
        )}
        <S.Time>
          <S.Left>
            <h4>
              <Sun />
              {greeting}
              {!isMobile && ", IT’S CURRENTLY"}
            </h4>
            <div>
              <h1>
                {format(clock.datetime, "HH:mm")}
                <span className="abbr"> {clock.abbreviation}</span>
              </h1>
            </div>
            <h3>
              IN {geo.regionName}, {geo.country}
            </h3>
          </S.Left>
          <S.Right>
            <Button showDetails={showDetails} onClick={toggleShowDetails} />
          </S.Right>
        </S.Time>
      </S.Center>
    </S.Clock>
  );
};

export default Clock;
