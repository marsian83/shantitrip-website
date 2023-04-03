import { useState } from "react";
import { useParams } from "react-router-dom";
import useCache from "../../contexts/cacheContext";
import Hero from "./components/Hero";
import Itinerary from "./components/Itinerary";
import Map from "./components/Map";

export default function TripPage() {
  const { id } = useParams();

  const cache = useCache();

  const trip = cache.getTrip(Number(id));

  const [bodyIndex, setBodyIndex] = useState(0);
  const bodyOptions = [
    {
      id: 0,
      title: "Places to visit",
      element: <Itinerary itinerary={trip.itinerary} />,
    },
    {
      id: 1,
      title: "Map",
      element: <Map latitude={32.1024} longitude={77.5619} />,
    },
    {
      id: 2,
      title: "Pictures",
      element: <div> lolpuppu</div>,
    },
  ];

  return (
    <>
      <Hero headline={trip.name} />
      <section className="flex justify-between items-center p-page text-primary font-semibold -translate-y-full py-8">
        {[
          {
            id: 0,
            icon: <span className="material-icons text-4xl">&#xe935;</span>,
            content: `Total Days : ${trip.days}`,
          },
          {
            id: 1,
            icon: <span className="material-icons text-4xl">&#xf233;</span>,
            content: `people : ${trip.people}`,
          },
          {
            id: 2,
            icon: <span className="material-icons text-4xl">&#xe8b5;</span>,
            content: `Date : ${trip.date}`,
          },
          {
            id: 3,
            icon: <span className="material-icons text-4xl">&#xef63;</span>,
            content: `Budget : ${trip.budget}`,
          },
        ].map((item) => (
          <div key={item.id} className="flex items-center gap-x-2">
            {item.icon} {item.content}
          </div>
        ))}
      </section>
      <section className="flex flex-col items-center p-page gap-y-4">
        <h1 className="text-mute font-allura text-4xl">
          You can create your own route to your journey now
        </h1>
        <button className="btn-1 font-semibold text-xl">Customize Trip</button>
        <div className="flex gap-x-12 px-10 my-14 bg-primary bg-opacity-30 rounded-md py-4 font-medium text-mute">
          {bodyOptions.map((option) => (
            <button
              onClick={() => {
                setBodyIndex(option.id);
              }}
              className={`duration-300 ${
                bodyIndex === option.id ? "text-primary" : ""
              }`}
            >
              {option.title}
            </button>
          ))}
        </div>
      </section>
      {bodyOptions[bodyIndex].element}
      {/* {JSON.stringify(trip)} */}
    </>
  );
}
