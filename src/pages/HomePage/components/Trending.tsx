const trending = [
  {
    id: 0,
    name: "Sissu",
    imageUrl: "/images/thumbnails/sissu.jpg",
    rating: 4.5,
    days: 7,
    price: 10700,
    description:
      "Sissu is a scenic village in the Lahaul Valley of Himachal Pradesh, known for its natural beauty, snow-capped peaks, and apple orchards.",
  },
  {
    id: 1,
    name: "Himachal",
    imageUrl: "/images/thumbnails/manali.jpg",
    rating: 4.6,
    days: 7,
    price: 12700,
    description:
      "Himachal Pradesh is a scenic state in northern India, famous for its hill stations, adventure activities, and rich cultural heritage. It attracts tourists to popular destinations such as Manali, Shimla, and Dharamshala.",
  },
  {
    id: 2,
    name: "Kasol",
    imageUrl: "/images/thumbnails/kasol.jpg",
    rating: 4.5,
    days: 7,
    price: 10700,
    description:
      "Our travels are different from all the others! We love our business and want to see happy customers, so we always do our best for your comfort!",
  },
];

export default function Trending() {
  return (
    <section className="py-14 p-page relative bg-[url('/images/backgrounds/3.jpg')] bg-cover h-[90vh] text-center">
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
      <div className="flex justify-around items-stretch py-6">
        {trending.map((trend) => (
          <div className="flex flex-col justify-between items-center w-1/4 bg-background pb-4 rounded-lg overflow-hidden">
            <div
              className="relative flex flex-col justify-between gap-y-4 bg-center bg-cover w-full aspect-[16/9]"
              style={{
                backgroundImage: `linear-gradient(to bottom, transparent, #000000aa), url('${trend.imageUrl}')`,
              }}
            >
              <div />
              <div className="flex flex-col items-start pl-4 py-3">
                <h4 className="text-3xl font-medium text-white">
                  {trend.name}
                </h4>
                <div className="text-xs text-white">
                  (<span>{trend.rating} Rating )</span>
                </div>
              </div>
            </div>
            <div className="bg-white flex flex-col items-center justify-between flex-1">
              <div className="flex flex-row w-full border-b-2">
                <div className="basis-1/2 flex justify-center items-center border border-r">
                  <span>{trend.days}</span> Days
                </div>
                <div className="text-primary font-semibold basis-1/2 py-2 flex justify-center items-center border border-l">
                  ₹<span>{trend.price}</span> /-
                </div>
              </div>
              <p className="text-xs px-8 py-4">{trend.description}</p>
              <button className="py-2 px-4 btn-2 text-sm font-semibold ">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
