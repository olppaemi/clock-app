import Clock from "components/Clock";
import Details from "components/Details";
import { useState } from "react";
import * as S from "./styles";

const Home = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleShowDetails = () => {
    setShowDetails((show) => !show);
  };

  return (
    <S.Page $isDayTime={true}>
      <Clock showDetails={showDetails} toggleShowDetails={toggleShowDetails} />
      {showDetails && (
        <Details
          timezone="Europe/London"
          dayOfWeek={5}
          dayOfYear={295}
          weekNumber={42}
        />
      )}
    </S.Page>
  );
};

export default Home;
