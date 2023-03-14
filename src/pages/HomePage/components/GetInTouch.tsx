import WhatsappLink from "../../../common/WhatsappLink";

export default function GetInTouch() {
  return (
    <section className="p-page text-center flex flex-col items-center pt-24">
      <h1 className="text-4xl font-light text-primary">Let's Get In Touch</h1>
      <h2 className="font-allura text-2xl my-4 w-2/3">
        Being travelers and explorers ourselves, we are always excited to talk
        to new people and share perspectives. Call, email, or say hello
      </h2>
      <div className="flex justify-between items-end w-full my-10">
        <div className="relative basis-1/4 flex flex-col justify-end rounded-full overflow-hidden group">
          <img
            src="/images/thumbnails/contact-phone.png"
            alt="address"
            className="aspect-square w-full"
          />
          <div className="absolute-center bg-primary rounded-full p-4 aspect-square w-20 flex justify-center items-center text-back z-[1]">
            <span className="material-icons text-3xl">&#xe0b0;</span>
          </div>
          <div className="absolute bottom-0 translate-y-full bg-primary w-full py-8 text-back duration-500 group-hover:translate-y-0">
            +91 9459668084
          </div>
        </div>
        <div className="relative basis-1/3 rounded-full overflow-hidden group">
          <img
            src="/images/thumbnails/contact-address.png"
            alt="address"
            className="aspect-square w-full"
          />
          <div className="absolute-center bg-primary rounded-full p-4 aspect-square w-20 flex justify-center items-center text-back z-[1]">
            <span className="material-icons text-3xl">&#xe0c8;</span>
          </div>
          <div className="absolute bottom-0 translate-y-full bg-primary w-full pt-4 pb-8 px-20 text-back duration-500 group-hover:translate-y-0">
            511, Main Manikaran Road, Suma Ropa, Kasol, District Kullu, Himachal
            Pradesh - 175105
          </div>
        </div>
        <div className="relative basis-1/4 flex flex-col justify-end items-end rounded-full overflow-hidden group">
          <img
            src="/images/thumbnails/contact-email.png"
            alt="address"
            className="aspect-square w-full"
          />
          <div className="absolute-center bg-primary rounded-full p-4 aspect-square w-20 flex justify-center items-center text-back z-[1]">
            <span className="material-icons text-3xl">&#xe158;</span>
          </div>
          <div className="absolute bottom-0 translate-y-full bg-primary w-full pt-4 pb-10 px-2 text-back duration-500 group-hover:translate-y-0">
            travel@shantitrip.in
            <br />
            shantitrip28@gmail.com
          </div>
        </div>
      </div>
      <WhatsappLink
        className="border-2 border-primary text-primary px-8 py-3 flex items-center font-semibold rounded-full gap-x-2 mt-10
      duration-300 hover:bg-primary hover:text-back"
      >
        <img src="/icons/whatsapp.png" alt="whatsapp icon" /> Contact on
        whatsapp
      </WhatsappLink>
    </section>
  );
}
