interface HeroProps {
  headline: string;
  // rating: number;
}

export default function Hero(props: HeroProps) {
  return (
    <section className="h-screen relative bg-cover overflow-hidden">
      <div
        className="w-screen h-screen bg-[url('/images/backgrounds/5.jpg')] bg-bottom bg-cover bg-fixed flex flex-col justify-center 
    items-center relative"
      >
        <div className="w-full h-full absolute top-0 left-0 bg-[#00000070]"></div>
        <div className="text-center z-[2] flex flex-col gap-y-6 mb-36">
          <h1 className="font-allura text-4xl text-back">
            Plan a memorable trip
          </h1>
          <h2 className="font-light text-6xl text-back bg-background bg-opacity-20 px-10 py-6">
            {props.headline}
          </h2>
          {/* <p className="text-back">({props.rating} rating)</p> */}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <img src="/vectors/wave-1.svg" alt="wave" className="w-full" />
      </div>
    </section>
  );
}
