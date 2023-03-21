const topDestinations = [
  {
    name: "Manali",
    imageUrl: "/images/thumbnails/manali.jpg",
    description:
      "A picturesque hill station in Himachal Pradesh known for its scenic beauty, adventure activities, and vibrant culture.",
  },
  {
    name: "Kasol",
    imageUrl: "/images/thumbnails/kasol.jpg",
    description:
      "A serene village nestled in the Parvati Valley, popular among backpackers and nature lovers for its stunning landscapes and peaceful atmosphere.",
  },
  {
    name: "Spiti",
    imageUrl: "/images/thumbnails/spiti.jpg",
    description:
      "A high-altitude desert valley located in Himachal Pradesh, known for its breathtaking scenery, ancient monasteries, and unique cultural heritage.",
  },
];

export default function TopDestinations() {
  return (
    <section className="p-page py-28 text-center">
      <h2 className="text-2xl font-normal font-allura">
        most liked places by our customers
      </h2>
      <h3 className="text-4xl font-light text-primary my-2">
        Top Destinations to Explore
      </h3>
      <div className="flex gap-x-24 justify-center my-10">
        {topDestinations.map((destination) => (
          <div
            key={destination.name}
            className="flex flex-col items-center w-72 gap-y-4 justify-between"
          >
            <div className="flex flex-col gap-y-4 justify-between items-center">
              <img
                src={destination.imageUrl}
                alt={destination.name}
                className="w-56 aspect-square object-cover rounded-full"
              />
              <h4 className="text-3xl font-medium font-allura text-primary">
                <span className="material-icons">&#xe0c8;</span>
                {destination.name}
              </h4>
            </div>
            <p className="text-center">{destination.description}</p>
            <button className="btn-2 text-sm font-semibold">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
}
