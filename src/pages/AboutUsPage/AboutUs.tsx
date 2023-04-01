import { Link } from "react-router-dom";
import Hero from "./components/Hero";

const sections = [
  {
    title: "A product of Himachal",
    content:
      "Our story goes 3 years back when Pankaj, the Co-founder, started Destination Of Peace Homestays (DOP) in Kasol — a place where travelers could feel relaxed, peaceful, and free, just like at home. Travelling to new and uncharted places usually brings with it its own set of anxieties and stresses — something Pankaj aimed at alleviating with DOP.\n\nAlso, being a Himachali, Pankaj could help travelers plan their itineraries and book their transport, accomodation, food arrangements — basically everything related to travel. DOP soon became a mandatory destination for our guests whenever they were in Himachal, it soon became their Home in Himachal.",
    imageUrl: "/images/aboutus/2.png",
  },
  {
    title: "Wholesome travel, only!",
    content:
      "With 3+ years of closely interacting with guests and understanding their needs, we started ShantiTrip Holidays to replicate the experience we were providing our guests at DOP to travelers across India. This meant removing the small stresses, hassles, and inconveniences that usually go unattended when you travel with conventional tour operators.\n\nFor us, travel is not just about beautiful destinations and hotel rooms; it is also about the parts that connect these experiences together. We look at travel as a whole, and pay attention to all and everything that makes up for a fulfilling trip. ShantiTrip Holidays is our attempt at providing travelers with a wholesome, end-to-end travel experience.",
    imageUrl: "/images/aboutus/3.png",
  },
];

const teams = [
  {
    name: "Pankaj",
    position: "Founder",
    imgUrl: "/images/aboutus/pankaj.png",
    instaUrl: "",
    facebookUrl: "",
    twitterUrl: "",
  },
  {
    name: "Keshav",
    position: "Co Founder",
    imgUrl: "/images/aboutus/pankaj.png",
    instaUrl: "",
    facebookUrl: "",
    twitterUrl: "",
  },
  {
    name: "Mustafa",
    position: "Director",
    imgUrl: "/images/aboutus/pankaj.png",
    instaUrl: "",
    facebookUrl: "",
    twitterUrl: "",
  },
  {
    name: "Nitish",
    position: "Trip planner",
    imgUrl: "/images/aboutus/pankaj.png",
    instaUrl: "",
    facebookUrl: "",
    twitterUrl: "",
  },
];

export default function AboutUs() {
  return (
    <>
      <Hero />
      <section className="text-center p-page">
        <h2 className="font-allura text-4xl text-black">
          Take a tour to know more about what we provide
        </h2>
        <h3 className="text-4xl font-light text-primary my-2">Our story</h3>
        <div className="flex flex-col justify-center pt-6 mx-20">
          <img src="/images/aboutus/1.png" className="" />
          <div className="font-light mx-10">
            We founded ShantiTrip Holidays on one clear premise: use our local
            expertise and smarts to curate unique, stress-free travel
            experiences that travelers do not get from conventional tour
            operators.
          </div>
        </div>
        {sections.map((item) => (
          <AboutSection
            key={sections.indexOf(item)}
            content={item.content}
            title={item.title}
            imageUrl={item.imageUrl}
            flip={sections.indexOf(item) % 2 == 0}
          />
        ))}

        <h2 className="font-allura text-4xl text-black mt-20">
          Know about our team
        </h2>
        <h3 className="text-4xl font-light text-primary my-2">
          Get to know these amazing people
        </h3>
        <div className="flex flex-row justify-around mt-24">
          {teams.map((member) => (
            <TeamComponent
              key={teams.indexOf(member)}
              name={member.name}
              imageUrl={member.imgUrl}
              position={member.position}
              instaUrl={member.instaUrl}
              facebookUrl={member.facebookUrl}
              twitterUrl={member.twitterUrl}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function AboutSection(props: {
  title: string;
  content: string;
  imageUrl: string;
  flip?: boolean;
}) {
  return (
    <div
      className={`flex ${
        props.flip ? "" : "flex-row-reverse"
      } mt-20 gap-20 items-center mx-20`}
    >
      <img src={props.imageUrl}></img>
      <div className="flex flex-col text-left">
        <h3 className="text-3xl font-light text-primary">{props.title}</h3>
        <div className="font-light text-base mt-8 leading-7">
          {props.content}
        </div>
      </div>
    </div>
  );
}

function TeamComponent(props: {
  name: string;
  imageUrl: string;
  position: string;
  instaUrl: string;
  facebookUrl: string;
  twitterUrl: string;
}) {
  return (
    <div className="border border-primary w-[21.4%] rounded-lg relative flex flex-col items-center pt-16 pb-6">
      <img
        src={props.imageUrl}
        className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2"
      ></img>
      <div className="text-2xl font-semibold">{props.name}</div>
      <div className="pt-2">{props.position}</div>
      <div className="flex flex-row my-3 w-full px-8 justify-evenly">
        <Link to={props.instaUrl}>
          <img
            src="https://imgs.search.brave.com/WjvNqUcqPrAB5m-TBhLvSJhVsjy50TjhLjnnwaZDh6A/rs:fit:728:718:1/g:ce/aHR0cHM6Ly92ZWN0/b3JpZmllZC5jb20v/aW1hZ2VzL2luc3Rh/Z3JhbS1pY29uLWZv/ci1idXNpbmVzcy1j/YXJkLTI1LmpwZw"
            alt="instagram"
            className="w-8 aspect-square"
          />
        </Link>
        <Link to={props.facebookUrl}>
          <img
            src="https://imgs.search.brave.com/TvYXG077vUuRsl0MU6WUuK7TyJu9sL6aNMBeBwFrxAk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly90dmMu/Y28uemEvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMDEvRmFj/ZWJvb2stSWNvbi5w/bmc"
            alt="instagram"
            className="w-8 aspect-square"
          />
        </Link>
        <Link to={props.twitterUrl}>
          <img
            src="https://imgs.search.brave.com/VI_ph9m06f5LYDkBWe3fcDc4ECg62TWyTXpOxVnWRWg/rs:fit:1200:1200:1/g:ce/aHR0cDovL3BsdXNw/bmcuY29tL2ltZy1w/bmcvdHdpdHRlci1w/bmctbG9nby10d2l0/dGVyYmlyZC0xNTI4/LnBuZw"
            alt="instagram"
            className="w-8 aspect-square"
          />
        </Link>
      </div>
    </div>
  );
}
