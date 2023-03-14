import Hero from "./components/Hero";
const destinations = [
  {
    name: "Manali",
    imageUrl: "/images/thumbnails/manali.jpg",
    rating: 4.5,
    images: [
      "/images/thumbnails/manali.jpg",
      "/images/thumbnails/kasol.jpg",
      "/images/thumbnails/sissu.jpg",
    ],
    description:
      "A picturesque hill station in Himachal Pradesh known for its scenic beauty, adventure activities, and vibrant culture.",
  },
  {
    name: "Kasol",
    imageUrl: "/images/thumbnails/kasol.jpg",
    rating: 4.5,
    images: [
      "/images/thumbnails/manali.jpg",
      "/images/thumbnails/kasol.jpg",
      "/images/thumbnails/sissu.jpg",
    ],
    description:
      "A serene village nestled in the Parvati Valley, popular among backpackers and nature lovers for its stunning landscapes and peaceful atmosphere.",
  },
  {
    name: "Spiti",
    imageUrl: "/images/thumbnails/spiti.jpg",
    rating: 4.5,
    images: [
      "/images/thumbnails/manali.jpg",
      "/images/thumbnails/kasol.jpg",
      "/images/thumbnails/sissu.jpg",
    ],
    description:
      "A high-altitude desert valley located in Himachal Pradesh, known for its breathtaking scenery, ancient monasteries, and unique cultural heritage.",
  },
  {
    name: "Manali",
    imageUrl: "/images/thumbnails/manali.jpg",
    rating: 4.5,
    images: [
      "/images/thumbnails/manali.jpg",
      "/images/thumbnails/kasol.jpg",
      "/images/thumbnails/sissu.jpg",
    ],
    description:
      "A picturesque hill station in Himachal Pradesh known for its scenic beauty, adventure activities, and vibrant culture.",
  },
  {
    name: "Kasol",
    imageUrl: "/images/thumbnails/kasol.jpg",
    rating: 4.5,
    images: [
      "/images/thumbnails/manali.jpg",
      "/images/thumbnails/kasol.jpg",
      "/images/thumbnails/sissu.jpg",
    ],
    description:
      "A serene village nestled in the Parvati Valley, popular among backpackers and nature lovers for its stunning landscapes and peaceful atmosphere.",
  },
  {
    name: "Spiti",
    imageUrl: "/images/thumbnails/spiti.jpg",
    rating: 4.5,
    images: [
      "/images/thumbnails/manali.jpg",
      "/images/thumbnails/kasol.jpg",
      "/images/thumbnails/sissu.jpg",
    ],
    description:
      "A high-altitude desert valley located in Himachal Pradesh, known for its breathtaking scenery, ancient monasteries, and unique cultural heritage.",
  },
];

export default function ItineraryPage() {
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

        <div className="flex justify-around items-stretch py-6 flex-wrap gap-y-8">
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
              <div className="bg-white flex flex-col items-center justify-between flex-1">
                <p className="text-sm px-8 pt-8 basis-1/3">
                  {destination.description}
                </p>
                <h6 className="text-primary font-bold">Places to explore</h6>
                <div className="flex flex-row gap-x-5 justify-center">
                  {destination.images.map((image) => (
                    <img
                      src={image}
                      className="w-20 rounded-full aspect-square"
                    />
                  ))}
                </div>
                <button className="py-2 px-4 btn-2 text-sm font-semibold ">
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
