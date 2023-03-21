const testimonials = [
  {
    name: "Jay Mishra",
    imageUrl:
      "https://static.toiimg.com/thumb/msid-79723608,imgsize-127190,width-400,resizemode-4/79723608.jpg",
    content:
      "Shantitrip provided an exceptional travel experience. The team was responsive, accommodating and professional.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[url('/images/backgrounds/4.jpg')] bg-cover pt-5">
      <div className="text-center text-back">
        <h1 className="text-2xl font-allura">
          Reviews by our satisfied customers
        </h1>
        <h2 className="text-3xl font-light py-2">Testimonials</h2>
      </div>
      <div className="flex justify-center my-7">
        {testimonials.map((testimonial) => (
          <div
            key={testimonials.indexOf(testimonial)}
            className="h-56 rounded-full w-[46%] p-8 flex gap-x-3 bg-background"
          >
            <img
              src={testimonial.imageUrl}
              alt={testimonial.name}
              className="w-40 aspect-square object-cover rounded-full"
            />
            <div className="flex-1 p-4 flex flex-col justify-between">
              <h5 className="text-2xl font-medium">{testimonial.name}</h5>
              <p>{testimonial.content}</p>
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
