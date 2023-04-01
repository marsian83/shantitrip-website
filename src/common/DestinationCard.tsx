import { useState } from "react";
import { Link } from "react-router-dom";
import useCache from "../contexts/cacheContext";
import { Destination } from "../interfaces/Data";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({
  destination: destination,
}: DestinationCardProps) {
  const [placesCarouselPosition, setPlacesCarouselPosition] = useState(0);

  const placesCarousel = {
    position: placesCarouselPosition,
    increment: () => {
      if (placesCarouselPosition + 3 + 1 <= destination.places.length) {
        setPlacesCarouselPosition(placesCarouselPosition + 1);
      } else {
        setPlacesCarouselPosition(0);
      }
    },
    decrement: () => {
      if (placesCarouselPosition - 1 >= 0) {
        setPlacesCarouselPosition(placesCarouselPosition - 1);
      } else {
        setPlacesCarouselPosition(placesCarouselPosition / 3);
      }
    },
    scrollNeeded: destination.places.length > 3,
  };

  const cache = useCache();

  return (
    <div
      className="flex flex-col justify-between items-center w-[32%] bg-background pb-4 rounded-lg overflow-hidden"
      style={{ boxShadow: "6px 4px 8px #00000034" }}
    >
      <div
        className="relative flex flex-col justify-between gap-y-4 bg-center bg-cover w-full aspect-[16/9]"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, #000000aa), url('${destination.imageUrl}')`,
        }}
      >
        <div />
        <div className="flex flex-col items-start pl-4 py-3">
          <h4 className="text-3xl font-medium text-white text-center">
            {destination.name}
          </h4>
          {/* <div className="text-xs text-white">
            (<span>{destination.rating} Rating )</span>
          </div> */}
        </div>
      </div>
      <div className="bg-white flex flex-col items-center gap-y-4 justify-between flex-1">
        <p className="text-sm px-8 pt-8 basis-1/3">{destination.description}</p>
        <div className="flex flex-col items-center w-full gap-y-4 justify-between">
          <h6 className="text-primary font-bold">Places to explore</h6>
          <div className="flex flex-row items-center w-full px-5 justify-between text-primary">
            {placesCarousel.scrollNeeded && (
              <span
                className="material-icons text-3xl cursor-pointer duration-500 hover:scale-150"
                onClick={placesCarousel.decrement}
              >
                &#xe5de;
              </span>
            )}
            <div className="flex flex-1 justify-between px-2">
              {destination.places
                .slice(0 + placesCarouselPosition, 3 + placesCarouselPosition)
                .map((placeId) => {
                  const place = cache.getPlace(placeId);
                  return (
                    <div
                      className="flex flex-col gap-y-3 items-center"
                      key={place.id}
                    >
                      <img
                        src={place.thumbnail || place.imageUrl}
                        className="w-20 rounded-full aspect-square bg-gray-300"
                      />
                      <p className="text-mute text-xs truncate w-16">
                        {place.alias || place.name}
                      </p>
                    </div>
                  );
                })}
            </div>

            {placesCarousel.scrollNeeded && (
              <span
                className="material-icons text-3xl cursor-pointer duration-500 hover:scale-150"
                onClick={placesCarousel.increment}
              >
                &#xe5df;
              </span>
            )}
          </div>
          <Link
            to={`/trips/${destination.id}`}
            className="py-2 my-2 px-6 btn-2 text-sm font-semibold "
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
}
