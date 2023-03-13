export default function Hero() {
  return (
    <section className="h-screen p-page relative bg-cover bg-[url('/images/bg-banner1.jpg')]">
      <div className="absolute bottom-0 left-0 w-full">
        <img src="/vectors/wave-1.svg" alt="wave" className="w-full" />
        <div className="bg-background absolute left-1/2 -translate-x-1/2 bottom-5 -translate-y-1/2 px-8 rounded-full border-x-2 border-primary">
          <h1 className="font-semibold text-5xl text-primary italic">
            Plan Less, Travel More
          </h1>
        </div>
      </div>
    </section>
  );
}
