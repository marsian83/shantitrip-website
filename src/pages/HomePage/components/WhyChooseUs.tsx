const WhyChooseUsItems = [
  {
    icon: "/vectors/charity.svg",
    title: "Powered by locals",
    description:
      "With our expert's street-smarts and local know-how, you get to escape the middleman and experience the best places at the best prices.",
  },
  {
    icon: "/vectors/team.svg",
    title: "Everything goes",
    description:
      "We've helped our friends out with the most offbeat travel requests. We never say no and believe that with the right expertise and street-smarts, almost anything under the sun can be arranged.",
  },
  {
    icon: "/vectors/customer-support.svg",
    title: "With you, at every step",
    description:
      "Facilitating great travel experiences is all we care about. We go out of our way to make sure you travel your way, and with zero anxiety",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-10 p-page flex flex-col items-center">
      <h1 className="font-light text-3xl text-primary">Why Choose Us?</h1>
      <div className="flex w-full justify-evenly py-8">
        {WhyChooseUsItems.map((item) => (
          <div
            key={WhyChooseUsItems.indexOf(item)}
            className="flex flex-col w-[27%] items-center gap-y-6"
          >
            <div className="p-5 rounded-full bg-primary">
              <img
                src={item.icon}
                alt="charity"
                className="w-16"
                draggable={false}
              />
            </div>
            <h5 className="text-3xl font-normal font-allura text-primary">
              {item.title}
            </h5>
            <p className="font-medium text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
