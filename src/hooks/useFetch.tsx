import { useEffect, useState } from "react";

export default function useFetch<T>(url: string, initial?: T) {
  const [data, setData] = useState<T | null>(initial || null);
  const [loading, setLoading] = useState(false);

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

  return [data as T, loading] as const;
}
