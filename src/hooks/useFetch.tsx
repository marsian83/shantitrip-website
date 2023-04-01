import { useEffect, useState } from "react";

export default function useFetch<T>(
  url: string,
  initial?: T,
  callback?: Function
) {
  const [data, setData] = useState<T | null>(initial || null);
  const [loading, setLoading] = useState<boolean>(false);

  async function loadData() {
    setLoading(true);
    const fetchedData = await fetch(url);
    const parsedData = await fetchedData.json();

    setData(parsedData);
    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (!loading && callback) {
      callback();
    }
  }, [loading]);

  return [data as T, loading as boolean] as const;
}
