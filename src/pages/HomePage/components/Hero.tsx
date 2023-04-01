import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  <div
    className="w-screen h-screen bg-[url('/images/bg-banner1.jpg')] bg-bottom bg-cover bg-fixed flex flex-col justify-center 
  items-center relative"
  >
    <div className="w-full h-full absolute top-0 left-0 bg-[#00000055]"></div>
    <div className="text-center z-[2] flex flex-col gap-y-6">
      <Link to="/it" className="self-end duration-500 hover:-rotate-full">
        <img
          src="/images/book-now.png"
          alt="book now"
          className="w-24 aspect-square"
        />
      </Link>
      <h1 className="font-allura text-4xl text-back">
        Explore The Incredible India With Us
      </h1>
      <h2 className="font-light text-6xl mb-56 text-back bg-background bg-opacity-30 px-10 py-6">
        The Beauty of Manali
      </h2>
    </div>
  </div>,
  <div className="w-screen h-screen">
    <img
      src="/images/thumbnails/manali.jpg"
      alt="book"
      className="w-full h-full object-cover"
    />
  </div>,
];

export default function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (slide < 0) {
      setSlide(slides.length - 1);
    }
    if (slide > slides.length - 1) {
      setSlide(0);
    }
  }, [slide]);

  return (
    <section className="h-screen relative bg-cover overflow-hidden">
      <div
        className="flex duration-1000"
        style={{
          transform: `translateX(-${(slide / slides.length) * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slideItem) => (
          <div key={slides.indexOf(slideItem)}>{slideItem}</div>
        ))}
      </div>
      <div className="p-page absolute w-full top-1/3 left-0 flex justify-between font-bold text-back z-[2]">
        <button
          onClick={() => {
            setSlide(slide - 1);
          }}
        >
          {" "}
          <span className="material-icons text-3xl">&#xe5e0;</span>{" "}
        </button>
        <button
          onClick={() => {
            setSlide(slide + 1);
          }}
        >
          {" "}
          <span className="material-icons text-3xl">&#xe5e1;</span>{" "}
        </button>
      </div>
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
