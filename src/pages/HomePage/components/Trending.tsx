const trending = [
  {
    id: 0,
    name: "Sissu",
    rating: 4.5,
    days: 7,
    price: 10700,
    description:
      "Sissu is a scenic village in the Lahaul Valley of Himachal Pradesh, known for its natural beauty, snow-capped peaks, and apple orchards.",
  },
  {
    id: 1,
    name: "Himachal",
    rating: 4.6,
    days: 7,
    price: 12700,
    description:
      "Himachal Pradesh is a scenic state in northern India, famous for its hill stations, adventure activities, and rich cultural heritage. It attracts tourists to popular destinations such as Manali, Shimla, and Dharamshala.",
  },
  {
    id: 0,
    name: "Sissu",
    rating: 4.5,
    days: 7,
    price: 10700,
    description:
      "Sissu is a scenic village in the Lahaul Valley of Himachal Pradesh, known for its natural beauty, snow-capped peaks, and apple orchards.",
  },
];

export default function Trending() {
  return (
    <section className="py-14 relative bg-[url('/images/backgrounds/3.jpg')] bg-cover h-[90vh] text-center">
      <div className="text-center text-back flex flex-col gap-y-2">
        <h1 className="text-2xl font-allura">
          Explore trending places of this season
        </h1>
        <h2 className="font-light text-3xl">Trending This Season</h2>
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <div className="bg-[url('/images/thumbnails/')]"></div>
        </div>
      </div>
      <img
        src="/vectors/mountain-divider.svg"
        alt="wave-1"
        className="absolute -bottom-1 left-0 w-full"
      />
    </section>
  );
}
