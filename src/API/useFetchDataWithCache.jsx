import { useState, useEffect, useCallback, useRef } from "react";
import debounce from "lodash/debounce";

const useFetchDataWithCache = (endpoint, options, debounceDelay = 500) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const abortControllerRef = useRef(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = useCallback(
    debounce(async (url, opts) => {
      setLoading(true);
      setError(null);

      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      const cachedData = localStorage.getItem(url);
      if (cachedData) {
        setData(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(url, opts, {
          signal: abortControllerRef?.signal,
        });
        const result = await response.json();
        localStorage.setItem(url, JSON.stringify(result));
        setData(result);
      } catch (err) {
        if (error.name === "AbortError") {
          console.log("Aborted");
          return;
        }
        setError(err);
      } finally {
        setLoading(false);
      }
    }, debounceDelay),
    [debounceDelay]
  );

  useEffect(() => {
    if (endpoint) {
      fetchData(endpoint, options);
    }
  }, [endpoint, options, fetchData]);

  return { data, loading, error };
};

export default useFetchDataWithCache;
