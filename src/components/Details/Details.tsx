import * as S from "./styles";

const Details = ({
  timezone,
  dayOfWeek,
  dayOfYear,
  weekNumber,
}: {
  timezone: string;
  dayOfWeek: number;
  dayOfYear: number;
  weekNumber: number;
}) => {
  return (
    <S.Details $isDayTime={true}>
      <S.Grid>
        <S.Left>
          <S.Item>
            <h6>Current timezone</h6>
            <h2>{timezone}</h2>
          </S.Item>
          <S.Item>
            <h6>Day of the year</h6>
            <h2>{dayOfYear}</h2>
          </S.Item>
        </S.Left>
        <S.Right>
          <S.Item>
            <h6>Day of the week</h6>
            <h2>{dayOfWeek}</h2>
          </S.Item>
          <S.Item>
            <h6>Week number</h6>
            <h2>{weekNumber}</h2>
          </S.Item>
        </S.Right>
      </S.Grid>
    </S.Details>
  );
};

export default Details;
