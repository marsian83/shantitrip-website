import useCache from "../../../contexts/cacheContext";

interface ItineraryProps {
  itinerary: {
    day: string;
    places: number[];
  }[];
}

export default function Itinerary(props: ItineraryProps) {
  const cache = useCache();

  return (
    <section className="p-page flex flex-col items-center">
      {props.itinerary.map((item) => (
        <div className="w-full px-24 my-10">
          <p className="text-2xl font-medium text-primary flex items-center">
            <span className="material-icons">&#xe0c8;</span> {item.day}
          </p>
          <div className="flex flex-col gap-y-14 mt-10">
            {item.places.map((placeId) => {
              const place = cache.getPlace(placeId);
              return (
                <div className="flex">
                  <img
                    src={place.imageUrl}
                    alt={place.name}
                    className="w-1/4 aspect-square object-cover rounded-full"
                  />
                  <div className="flex-1 px-10 py-5">
                    <h1 className="text-2xl font-semibold text-primary">
                      {place.name}
                    </h1>
                    <p>{place.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
