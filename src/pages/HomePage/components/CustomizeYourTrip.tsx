export default function CustomizeYourTrip() {
  return (
    <section className="py-24 flex p-page">
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-allura py-2">
          Plan your custom trip with us
        </h1>
        <h2 className="text-primary text-3xl font-light">
          Customize your trip with us
        </h2>
        <p className="my-10">
          By offering customizations, Shantitrip empowers customers to
          personalize their trips, resulting in a more fulfilling and unique
          travel experience. This adds value to their journey and creates a
          memorable adventure.
        </p>
        <button className="btn-1 w-max">
          Customize a trip{" "}
          <img
            src="/icons/chevron-right-double.svg"
            alt="chevron"
            className="w-4"
          />{" "}
        </button>
      </div>
      <img
        src="/images/manali-preanimated.png"
        alt="manali"
        className="w-1/2 p-8"
      />
    </section>
  );
}
