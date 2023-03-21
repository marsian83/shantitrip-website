import { createContext, ReactNode, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Destination } from "../interfaces/Data";

interface cacheType {
  getDestinations: () => Destination[];
  destinationsLoading: boolean;
}

const CacheContext = createContext<cacheType>({} as cacheType);

export function CacheProvider({ children }: { children: ReactNode }) {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [destinationsLoading, setDestinationsLoading] = useState(true);

  function getDestinations() {
    if (!destinations || !destinations.length) {
      const [data, loading] = useFetch<Destination[]>("/destinations.json");
      setDestinations(data);
      setDestinationsLoading(loading);
    }
    return destinations;
  }

  const value = { getDestinations, destinationsLoading };

  return (
    <CacheContext.Provider value={value}>{children}</CacheContext.Provider>
  );
}

export default function useCache() {
  return useContext(CacheContext);
}
