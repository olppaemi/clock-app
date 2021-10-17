import Button from "components/Button";
import Quote from "components/Quote";
import { appActions } from "contexts/Actions";
import { useAppContext } from "contexts/AppContext";
import { format } from "date-fns";
import Moon from "icons/Moon";
import Sun from "icons/Sun";
import { useEffect, useState } from "react";
import { getGreeting, isDayTime } from "utils/time-utils";
import * as S from "./styles";

const Clock = ({
  showDetails,
  toggleShowDetails,
}: {
  showDetails: boolean;
  toggleShowDetails(): void;
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { clock, geo, dispatch } = useAppContext();

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
    <S.Clock $showDetails={showDetails}>
      <S.Center $showDetails={showDetails}>
        {!showDetails && <Quote />}
        <S.Time>
          <S.Left>
            <h4>
              {isDayTime(clock.datetime) ? <Sun /> : <Moon />}
              {getGreeting(clock.datetime)}
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
