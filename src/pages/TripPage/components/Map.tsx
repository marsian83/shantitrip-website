import GoogleMap from "../../../common/GoogleMap";

export default function Map(props: { longitude: number; latitude: number }) {
  return (
    <section>
      <GoogleMap
        longitude={props.longitude}
        latitude={props.latitude}
        className="w-full p-page"
      />
    </section>
  );
}
