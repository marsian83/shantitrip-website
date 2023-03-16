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
          {destinationsLoading && (
            <p className="py-48 text-center italic text-primary text-3xl">
              Loading...
            </p>
          )}
          {destinations.map((destination) => (
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
                  <h4 className="text-3xl font-medium text-white">
                    {destination.name}
                  </h4>
                  <div className="text-xs text-white">
                    (<span>{destination.rating} Rating )</span>
                  </div>
                </div>
              </div>
              <div className="bg-white flex flex-col items-center gap-y-4 justify-between flex-1">
                <p className="text-sm px-8 pt-8 basis-1/3">
                  {destination.description}
                </p>
                <h6 className="text-primary font-bold">Places to explore</h6>
                <div className="flex flex-row items-center w-full px-5 justify-between text-primary">
                  <span className="material-icons text-3xl">&#xe5de;</span>
                  {destination.images.map((image) => (
                    <div className="flex flex-col gap-y-3">
                      <img
                        src={image}
                        className="w-20 rounded-full aspect-square"
                      />
                      <p className="text-mute text-xs">Sissu Lake</p>
                    </div>
                  ))}
                  <span className="material-icons text-3xl">&#xe5df;</span>
                </div>
                <button className="py-2 my-2 px-4 btn-2 text-sm font-semibold ">
                  View All
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
