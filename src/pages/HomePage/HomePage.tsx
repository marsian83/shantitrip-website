import CustomizeYourTrip from "./components/CustomizeYourTrip";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import OurPartners from "./components/OurPartners";
import Testimonials from "./components/Testimonials";
import TopDestinations from "./components/TopDestinations";
import Trending from "./components/Trending";
import WhyChooseUs from "./components/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <OurPartners />
      <TopDestinations />
      <Trending />
      <CustomizeYourTrip />
      <Testimonials />
      <GetInTouch />
    </>
  );
}
