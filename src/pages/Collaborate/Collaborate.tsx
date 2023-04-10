import WhatsappLink from "../../common/WhatsappLink";

const reviews = [
  {
    name: "Jay Mishra",
    imageUrl:
      "https://static.toiimg.com/thumb/msid-79723608,imgsize-127190,width-400,resizemode-4/79723608.jpg",
    content:
      "Shantitrip provided an exceptional travel experience. The team was responsive, accommodating and professional.",
  },
];

function Collaborate() {
  return (
    <>
      <Hero />
      <section className="p-page flex flex-row justify-around items-center mb-20">
        <div className="flex flex-row gap-x-6">
          <div className="flex flex-col gap-y-6 mt-20">
            <img src="/images/collaborate/1.png" alt="1.png" />
            <img src="/images/collaborate/2.png" alt="2.png" />
          </div>
          <div className="flex flex-col gap-y-6">
            <img src="/images/collaborate/3.png" alt="3.png" />
            <img src="/images/collaborate/4.png" alt="4.png" />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 basis-[40%]">
          <h3 className="font-allura text-4xl text-black">
            Let's grow together
          </h3>

          <h2 className="text-4xl font-light text-primary">
            Why Collaborate with us
          </h2>
          <div className="flex flex-col gap-y-4 mt-4">
            <p className="font-light">
              Lorem ipsum dolor sit amet. Ex nostrum repudiandae non similique
              pariatur ut omnis autem ut velit recusandae et tenetur itaque et
              quas repellendus vel commodi libero. Est quam rerum est illum
              aperiam aut corrupti magnam qui galisum assumenda et sint
              voluptatibus aut laudantium deleniti. Est dignissimos provident id
              alias similique hic quia quasi.
            </p>
            <p className="font-light">
              Et expedita vero 33 dolore quam et iure reiciendis est impedit
              praesentium. Id atque voluptas 33 rerum minima qui voluptas autem
              in quaerat veritatis et blanditiis omnis. Est dolores officia et
              fugiat quidem cum sint tempore 33 obcaecati distinctio? Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              voluptates facilis molestias minus magni tempore consequatur
              voluptatem facere obcaecati recusandae iusto dolorum reprehenderit
              sed deleniti repellendus, esse ad hic, nemo totam laudantium.
              Saepe, error eum quis mollitia labore eveniet voluptatibus!
            </p>
          </div>
        </div>
      </section>

      <Reviews />

      <section className="p-page mt-24 text-center flex flex-col gap-y-6">
        <h3 className="font-allura text-4xl text-black">
          Know how we can benefit you with collaboration
        </h3>
        <h2 className="text-4xl font-light text-primary">
          How we can help you grow
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
          quisquam nobis neque omnis assumenda nisi officia sed illo, aut magnam
          explicabo, incidunt laudantium, molestias tempora ullam facilis. Iste
          veritatis consequuntur voluptate, reprehenderit voluptates doloribus
          obcaecati dolor cum voluptatum molestiae assumenda. Soluta laudantium
          voluptatum similique labore quasi quas in, ratione natus. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Delectus doloremque sequi
          perferendis exercitationem distinctio eos omnis optio laborum dolores
          iste corporis, cupiditate ullam molestias! Qui velit vero ea totam
          nobis. Vitae eum enim sapiente in deleniti reprehenderit fugit, totam
          possimus provident eaque hic. Ipsam minima tempore, neque dignissimos
          facere vitae?
        </p>
      </section>
      <section className="p-page mt-24 flex flex-col item">
        <div className="flex flex-col items-center gap-y-6 w-[60vw] border border-front border-opacity-30  rounded-3xl self-center text-center p-8 ">
          <h2 className="text-4xl font-light text-primary">
            Get in touch with us to collaborate
          </h2>
          <WhatsappLink>
            <button className="flex flex-row p-4 border-2 border-primary rounded-full items-center gap-x-2 text-primary font-bold hover:text-white hover:bg-primary transition ease-in duration-300">
              <img src="/icons/whatsapp.png" alt="whatsapp" />
              Contact us on whatsapp
            </button>
          </WhatsappLink>
        </div>
      </section>
    </>
  );
}

export default Collaborate;

function Reviews() {
  return (
    <section className="bg-[url('/images/backgrounds/4.jpg')] bg-cover pt-5">
      <div className="text-center text-back">
        <h1 className="text-2xl font-allura">
          Know what our collaborators says about us
        </h1>
        <h2 className="text-3xl font-light py-2">Collaborators Review</h2>
      </div>
      <div className="flex justify-center my-7">
        {reviews.map((review) => (
          <div
            key={reviews.indexOf(review)}
            className="h-56 rounded-full w-[46%] p-8 flex gap-x-3 bg-background"
          >
            <img
              src={review.imageUrl}
              alt={review.name}
              className="w-40 aspect-square object-cover rounded-full"
            />
            <div className="flex-1 p-4 flex flex-col justify-between">
              <h5 className="text-2xl font-medium">{review.name}</h5>
              <p>{review.content}</p>
            </div>
          </div>
        ))}
      </div>
      <img
        src="/vectors/mountain-divider.svg"
        alt="mountains"
        className="w-full translate-y-1"
      />
    </section>
  );
}

function Hero() {
  return (
    <section className="h-screen relative bg-cover overflow-hidden">
      <div
        className="w-screen h-screen bg-[url('/images/backgrounds/7.png')] bg-bottom bg-cover bg-fixed flex flex-col justify-center 
        items-center relative"
      >
        <div className="w-full h-full absolute top-0 left-0 bg-[#00000070]"></div>
        <div className="text-center z-[2] flex flex-col gap-y-6">
          <h1 className="font-allura text-4xl text-back">
            Get a chance to work with us
          </h1>
          <h2 className="font-light text-6xl mb-36 text-back bg-background bg-opacity-20 px-10 py-6">
            Collaborate
          </h2>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <img src="/vectors/wave-1.svg" alt="wave" className="w-full" />
      </div>
    </section>
  );
}
