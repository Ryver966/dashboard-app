import { useEffect, useState } from "react";

type TArgs = {
  url: string;
};

export const useFetch = ({ url }: TArgs) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isSubscribed = true;

    const fetchData = async () => {
      setLoading(true);
      const resp = await fetch(url);
      const data = await resp.json();

      if (isSubscribed) setData(data);
      setLoading(false);
    };

    fetchData().catch(setError);

    return () => {
      isSubscribed = false;
    };
  }, [url]);

  return { data, error, loading };
};
