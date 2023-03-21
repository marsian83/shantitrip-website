import DestinationCard from "../../common/DestinationCard";
import useFetch from "../../hooks/useFetch";
import { Destination } from "../../interfaces/Data";
import Hero from "./components/Hero";

export default function ItineraryPage() {
  const [destinations, destinationsLoading] = useFetch<Destination[]>(
    "/destinations.json",
    []
  );

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

        <div className="flex justify-around items-stretch py-6 flex-wrap gap-y-14">
          {destinationsLoading ? (
            <p className="py-48 text-center italic text-primary text-3xl">
              Loading...
            </p>
          ) : (
            destinations.map((destination) => (
              <DestinationCard destination={destination} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}
