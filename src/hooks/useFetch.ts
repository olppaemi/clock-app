import { useEffect, useState } from "react";
import { getData } from "utils/api";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  useEffect(() => {
    let doUpdate = true;
    setStatus("loading");
    setData(undefined);
    setError(null);

    getData(url)
      .then((data) => {
        if (doUpdate) {
          setData(data);
          setStatus("success");
        }
      })
      .catch((error) => {
        setError(error);
        setStatus("error");
      });
    return () => {
      doUpdate = false;
    };
  }, [url]);

  return { data, status, error };
}
