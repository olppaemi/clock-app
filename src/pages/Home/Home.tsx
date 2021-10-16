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
    <S.Page>
      <Clock showDetails={showDetails} toggleShowDetails={toggleShowDetails} />
      {showDetails && <Details />}
    </S.Page>
  );
};

export default Home;
