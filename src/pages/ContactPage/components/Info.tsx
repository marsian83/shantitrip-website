import React, { useEffect, useRef, useState } from "react";

export default function Info() {
  const mapRef = useRef() as React.MutableRefObject<HTMLIFrameElement>;

  useEffect(() => {
    mapRef.current.width = mapRef.current.clientWidth.toString();
    mapRef.current.height = mapRef.current.clientHeight.toString();
  });

  const [showingForm, setShowingForm] = useState(false);

  return (
    <section
      className="p-page flex bg-cover bg-center my-16 relative py-14 justify-between items-center overflow-hidden
    bg-[url('https://www.iucn.org/sites/default/files/styles/webp_style/public/2022-11/samuel-ferrara-1527pjeb6jg-unsplash.jpg.webp?itok=yKD63koP')]"
    >
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: "linear-gradient(to bottom, #00000023, #00000087)",
        }}
      />
      <div className="flex flex-col gap-y-8 bg-[#888] bg-opacity-40 backdrop-blur-sm rounded-xl p-8 w-[49%] relative z-[1]">
        <div className="flex gap-x-20">
          <div className="flex flex-col gap-y-2">
            <p className="flex items-center gap-x-2 text-primary font-semibold">
              <span className="material-icons">&#xe0b0;</span>
              Call Us On
            </p>
            <p className="text-back font-medium">+91 96535 94353</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="flex items-center gap-x-2 text-primary font-semibold">
              <span className="material-icons">&#xe158;</span>
              Mail Us On
            </p>
            <p className="text-back font-medium">travel@shantitrip.in</p>
            <p className="text-back font-medium">Shantitrip28@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="flex items-center gap-x-2 text-primary font-semibold">
            <span className="material-icons">&#xe56a;</span>
            Address
          </p>
          <p className="text-back font-medium">
            511, Main Manikaran Road, Suma Ropa, Kasol, District Kullu, Himachal
            Pradesh - 175105
          </p>
        </div>
        <button
          className="btn-1 w-max"
          onClick={() => {
            setShowingForm(true);
          }}
        >
          Contact Us
        </button>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.302046354721!2d77.28001181511209!3d32.006930930156706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39045ea1faa5cd69%3A0xbaaac18a31c18254!2sDestination%20Of%20Peace!5e0!3m2!1sen!2sin!4v1680530969781!5m2!1sen!2sin"
        width="600"
        height="450"
        ref={mapRef}
        allowFullScreen={false}
        loading="lazy"
        className="border-0 rounded-xl w-[49%] relative z-[1]"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div
        className={`absolute w-1/2 right-0 top-0 h-full bg-background z-[2] duration-700 flex flex-col p-10 justify-evenly items-center ${
          showingForm ? "" : "translate-x-full"
        }`}
      >
        <button
          className="w-max self-end absolute top-0"
          onClick={() => {
            setShowingForm(false);
          }}
        >
          <span className="material-icons text-6xl text-primary rounded-full duration-300 hover:bg-primary hover:text-back">
            &#xe5cd;
          </span>
        </button>
        <form
          className="bg-front rounded-xl bg-opacity-[15%] py-8 px-6 w-3/4 flex flex-col gap-y-5 items-center"
          action=""
        >
          <input
            type="text"
            name="name"
            className="border-0 outline-none bg-transparent text-front border-b border-front placeholder:text-front py-2 w-full"
            placeholder="Enter Your Name"
          />
          <input
            type="text"
            name="email"
            className="border-0 outline-none bg-transparent text-front border-b border-front placeholder:text-front py-2 w-full"
            placeholder="Enter Your Email"
          />
          <textarea
            name="message"
            rows={4}
            className="border-0 outline-none bg-transparent text-front border-b border-front placeholder:text-front py-2 w-full"
          ></textarea>
          <button className="btn-1 w-max flex items-center">
            Send Message
            <span className="material-icons">&#xe163;</span>
          </button>
        </form>
      </div>
    </section>
  );
}
