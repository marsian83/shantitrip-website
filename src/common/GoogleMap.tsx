interface GoogleMapProps {
  longitude: string;
  latitude: string;
}

export default function GoogleMap(props: GoogleMapProps) {
  return (
    <>
      <iframe
        width="300"
        height="170"
        frameBorder={0}
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={`https://maps.google.com/maps?q=${props.latitude},${props.longitude}&hl=es&z=14&amp;output=embed`}
      ></iframe>
      <br />
      <small>
        <a
          href="https://maps.google.com/maps?q='+data.lat+','+data.lon+'&hl=es;z=14&amp;output=embed"
          style={{ color: "#0000FF", textAlign: "left" }}
          target="_blank"
        >
          See map bigger
        </a>
      </small>
    </>
  );
}
