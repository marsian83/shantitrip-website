import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import useFetch from "../hooks/useFetch";
import { Destination, Place, Trip } from "../interfaces/Data";
import { fetchJson } from "../utils";

interface cacheType {
  getDestinations: () => Destination[];
  getDestination: (id: number) => Destination;
  getPlace: (id: number) => Place;
  getTrips: () => Trip[];
  getTrip: (id: number) => Trip;
  loading: boolean;
}

const CacheContext = createContext<cacheType>({} as cacheType);

export function CacheProvider({ children }: { children: ReactNode }) {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  // const [destinationsLoading, setDestinationsLoading] = useState(true);

  const [places, setPlaces] = useState<Place[]>([]);
  // const [placesLoading, setPlacesLoading] = useState(true);

  const [trips, setTrips] = useState<Trip[]>([]);
  // const [tripsLoading, setTripsLoading] = useState(true);

  const [loading, setLoading] = useState(true);

  async function loadData() {
    setDestinations(await fetchJson("/data/destinations.json"));
    setTrips(await fetchJson("/data/trips.json"));
    setPlaces(await fetchJson("/data/places.json"));
    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  function getDestinations() {
    return destinations;
  }

  function getDestination(id: number) {
    try {
      return destinations.filter((dest) => dest.id == id)[0];
    } catch (error) {
      console.log(error);
    }
    return destinations[0];
  }

  function getPlace(id: number) {
    try {
      return places.filter((place) => place.id == id)[0];
    } catch (error) {
      console.log(error);
    }
    return places[0];
  }

  function getTrips() {
    return trips;
  }

  function getTrip(id: number) {
    try {
      return trips.filter((trip) => trip.id == id)[0];
    } catch (error) {
      console.log(error);
    }
    return trips[0];
  }

  return (
    <CacheContext.Provider
      value={{
        loading,
        getDestination,
        getDestinations,
        getPlace,
        getTrips,
        getTrip,
      }}
    >
      {children}
    </CacheContext.Provider>
  );
}

export default function useCache() {
  return useContext(CacheContext);
}
