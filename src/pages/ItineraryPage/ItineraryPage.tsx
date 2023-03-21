import { useEffect } from "react";
import DestinationCard from "../../common/DestinationCard";
import useCache from "../../contexts/cacheContext";
import useFetch from "../../hooks/useFetch";
import { Destination } from "../../interfaces/Data";
import Hero from "./components/Hero";

export default function ItineraryPage() {
  const cache = useCache();

  const destinations = cache.getDestinations();

  return (
    <div>
      <Hero />
      <section className="text-center p-page">
        <h2 className="text-3xl font-normal font-allura">
          Start from where you like to go
        </h2>
        <h3 className="text-4xl font-light text-primary my-2">
          Explore with us
        </h3>

        {cache.destinationsLoading ? (
          <div className="flex justify-center mt-24">
            <div className="border-[5px] border-[#00000033] border-r-primary w-48 h-48 rounded-full animate-spin" />
          </div>
        ) : (
          <div className="flex justify-around items-stretch py-6 flex-wrap gap-y-14">
            {destinations &&
              destinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))}
          </div>
        )}
      </section>
    </div>
  );
}
