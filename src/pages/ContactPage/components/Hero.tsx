export default function Hero() {
  return (
    <section className="h-screen relative bg-cover overflow-hidden">
      <div
        className="w-screen h-screen bg-[url('https://miro.medium.com/v2/resize:fit:1100/0*Y2H4aBfxUdtscx5y')] bg-center bg-cover bg-fixed flex flex-col justify-center 
        items-center relative"
      >
        <div className="w-full h-full absolute top-0 left-0 bg-[#00000070]"></div>
        <div className="text-center z-[2] flex flex-col gap-y-6">
          <h1 className="font-allura text-4xl text-back">
            Be in touch with us to know more
          </h1>
          <h2 className="font-light text-6xl mb-36 text-back bg-background bg-opacity-20 px-10 py-6">
            Contact Us
          </h2>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <img src="/vectors/wave-1.svg" alt="wave" className="w-full" />
      </div>
    </section>
  );
}
