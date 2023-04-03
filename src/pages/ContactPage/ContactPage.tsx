import React from "react";
import Hero from "./components/Hero";
import Info from "./components/Info";

export default function ContactPage() {
  return (
    <>
      <Hero />
      <section className="flex flex-col items-center p-page gap-y-4">
        <h1 className="text-3xl font-allura">
          Contact us to begin your journey with us
        </h1>
        <h2 className="text-primary font-light text-4xl">
          Let's Have A Talk Together
        </h2>
        <p className="font-medium text-center">
          Need to book a trip, ask a question, or share your thoughts about
          Shantitrip? Contact us using the form below and a member of our team
          will be in touch with you. We look forward to hearing from you!
        </p>
      </section>
      <Info />
    </>
  );
}
