const partners = [
  { name: "GMUN", imageUrl: "/images/partners/gmun.webp" },
  { name: "Communique", imageUrl: "/images/partners/communique.webp" },
];

export default function OurPartners() {
  return (
    <section className="relative bg-[url('/images/backgrounds/2.jpg')] bg-cover bg-center h-screen">
      <img
        src="/vectors/wave-1.svg"
        className="absolute -top-1 left-0 w-full rotate-180"
      />
      <div className="flex flex-col text-center justify-center h-full text-back">
        <div className="mt-24">
          <p className="font-allura text-2xl font-normal">
            Supported by recognized organizations
          </p>
          <p className="text-3xl font-light">Our Partners</p>
        </div>
        <div className="flex mt-16 justify-evenly">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="p-9 flex justify-center items-center bg-background rounded-full"
            >
              <img
                src={partner.imageUrl}
                alt={partner.name}
                draggable={false}
                className="w-36 aspect-square object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <img
        src="/vectors/mountain-divider.svg"
        className="absolute -bottom-1 left-0 w-full"
      />
    </section>
  );
}
