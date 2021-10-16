import Button from "components/Button";
import * as S from "./styles";

const Clock = ({
  showDetails,
  toggleShowDetails,
}: {
  showDetails: boolean;
  toggleShowDetails(): void;
}) => {
  return (
    <S.Clock $showDetails={showDetails} $isDayTime={true}>
      <S.Center $showDetails={showDetails}>
        {!showDetails && (
          <S.Quote>
            <p>
              “The science of operations, as derived from mathematics more
              especially, is a science of itself, and has its own abstract truth
              and value.”
            </p>
            <p>
              <strong>Ada Lovelace</strong>
            </p>
          </S.Quote>
        )}
        <S.Time>
          <S.Left>
            <h4>GOOD MORNING, IT’S CURRENTLY</h4>
            <h1>11:37</h1>
            <h3>IN LONDON, UK</h3>
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
