import { useEffect, useState } from "react";
import { format } from "date-fns";

import Clock from "components/Clock";
import Details from "components/Details";
import { ResponseTime } from "types/time";
import { appActions } from "contexts/Actions";
import { useAppContext } from "contexts/AppContext";
import { getData } from "utils/api";
import * as S from "./styles";

const Home = () => {
  const { dispatch } = useAppContext();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState(false);
  const [ipAddress, setIpAddress] = useState("");

  const toggleShowDetails = () => {
    setShowDetails((show) => !show);
  };

  useEffect(() => {
    getData("http://worldtimeapi.org/api/ip")
      .then((resp: ResponseTime) => {
        const {
          client_ip,
          abbreviation,
          datetime: date,
          day_of_week: dayOfWeek,
          day_of_year: dayOfYear,
          timezone,
          week_number: weekNumber,
        } = resp;
        setIpAddress(client_ip);

        const datetime = new Date(date);
        const clockData = {
          abbreviation,
          datetime,
          dayOfWeek,
          dayOfYear,
          timezone,
          weekNumber,
        };
        const currentHour = Number(format(datetime, "HH"));
        let greeting = "";
        if (currentHour >= 5 && currentHour < 12) {
          greeting = "Good morning";
        } else if (currentHour >= 12 && currentHour < 6) {
          greeting = "Good afternoon";
        } else {
          greeting = "Good evening";
        }
        dispatch(appActions.setClock(clockData));
        dispatch(appActions.setGreeting(greeting));
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, [dispatch]);

  useEffect(() => {
    getData(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_GEOIP_API_KEY}&ipAddress=${ipAddress}`
    )
      .then((data) => {
        const {
          location: { country, region: regionName },
        } = data;
        dispatch(appActions.setGeo({ country, regionName }));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, [dispatch, ipAddress]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>There was a problem fetching data.</div>;
  }

  return (
    <S.Page $isDayTime={true}>
      <Clock showDetails={showDetails} toggleShowDetails={toggleShowDetails} />
      {showDetails && <Details />}
    </S.Page>
  );
};

export default Home;
