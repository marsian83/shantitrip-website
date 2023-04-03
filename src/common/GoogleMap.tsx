import React, { useEffect, useRef } from "react";

interface GoogleMapProps {
  longitude: number | string;
  latitude: number | string;
  className?: string;
}

export default function GoogleMap(props: GoogleMapProps) {
  const iframeRef = useRef() as React.MutableRefObject<HTMLIFrameElement>;

  useEffect(() => {
    const iframe = iframeRef.current;
    iframeRef.current.width = `${iframe.offsetWidth}px`;
    iframeRef.current.height = `${iframe.offsetHeight}px`;
  }, []);

  return (
    <>
      <iframe
        frameBorder={0}
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        ref={iframeRef}
        className={props.className}
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
