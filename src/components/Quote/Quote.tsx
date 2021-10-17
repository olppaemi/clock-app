import Refresh from "icons/Refresh";
import { useEffect, useState } from "react";
import { getData } from "utils/api";
import * as S from "./styles";

type ResponseType = {
  _id: string;
  // The quotation text
  content: string;
  // The full name of the author
  author: string;
  // The `slug` of the quote author
  authorSlug: string;
  // The length of quote (number of characters)
  length: number;
  // An array of tag names for this quote
  tags: string[];
};

const Quote = () => {
  const [data, setData] = useState<ResponseType>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    await getData("https://api.quotable.io/random")
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <S.Quote>
      {data ? (
        <S.QuoteText>
          <p>“{data.content}”</p>
          <p>
            <strong>{data.author}</strong>
          </p>
        </S.QuoteText>
      ) : null}
      <S.RefreshIcon onClick={fetchQuote}>
        <Refresh />
      </S.RefreshIcon>
    </S.Quote>
  );
};

export default Quote;
