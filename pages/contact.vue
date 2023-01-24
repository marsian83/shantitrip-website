<template>
  <div class="body">
    <section
      class="hero p-page h-screen bg-cover bg-fixed flex flex-col justify-center items-center mobile:justify-evenly mobile:h-max mobile:py-20"
    >
      <h1
        class="text-secondary text-7xl font-semibold mobile:text-4xl mobile:text-center"
      >
        Let's Get in Touch
      </h1>
      <p
        class="text-secondary text-2xl my-4 text-center mobile:text-justify mobile:px-3 mobile:text-lg mobile:font-light"
      >
        Being travellers and explorers ourselves, we are always excited to talk
        to new people and share perspectives. Call, email, or say hello
      </p>
      <div
        class="bg-[rgba(var(--background),0.21)] backdrop-blur-md rounded-xl h-1/6 w-5/6 flex flex-row items-center justify-evenly mobile:flex-col mobile:gap-y-8 mobile:h-auto mobile:py-8 mobile:items-start"
      >
        <div class="basis-[25%] text-secondary flex flex-row items-center">
          <span class="material-icons px-2">&#xe0b0;</span>
          <h4>+91 9459668084</h4>
        </div>
        <div class="basis-[25%] text-secondary flex flex-row items-center">
          <span class="material-icons px-2">&#xe158;</span>
          <h4>
            travel@shantitrip.in <br />
            shantitrip28@gmail.com
          </h4>
        </div>
        <div class="basis-[25%] text-secondary flex flex-row items-center">
          <span class="material-icons px-2">&#xe0c8;</span>
          <h4>
            511, Main Manikaran Road, Suma Ropa, Kasol, District Kullu, Himachal
            Pradesh - 175105
          </h4>
        </div>
      </div>
      <ScrollHint class="absolute bottom-4" />
    </section>
    <section
      class="contact-form-section p-page flex flex-row mt-20 mobile:flex-col"
    >
      <div class="basis-1/2 flex flex-col gap-4 justify-center">
        <h2 class="text-4xl font-black text-primary">Contact Us</h2>
        <h5 class="text-2xl font-black text-primary opacity-90">
          We are here to help!
        </h5>
        <p class="text-primary opacity-75 text-lg">
          Need to book a trip, ask a question, or share your thoughts about
          Shantitrip? Contact us using the form below and a member of our team
          will be in touch with you. We look forward to hearing from you!
        </p>
      </div>
      <div class="basis-1/2">
        <form
          class="flex flex-col items-center gap-5"
          action="https://formspree.io/f/xayznann"
          method="POST"
        >
          <input
            type="text"
            autocomplete="name"
            placeholder="Enter your full name"
            class="px-5 py-2 w-10/12 text-lg"
          />
          <input
            type="text"
            autocomplete="email"
            placeholder="Enter your email"
            class="px-5 py-2 w-10/12 text-lg"
          />
          <textarea
            rows="8"
            class="px-4 py-1 w-10/12 resize-none"
            placeholder="Your message"
          ></textarea>
          <button class="flex flex-row btn-primary">
            Send Message <span class="material-icons px-2">&#xe163;</span>
          </button>
        </form>
      </div>
    </section>
    <section class="flex justify-center items-center mt-28">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.3020463547327!2d77.28001181532227!3d32.00693093015638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39045ea1faa5cd69%3A0xbaaac18a31c18254!2sDestination%20Of%20Peace!5e0!3m2!1sen!2sin!4v1672947597236!5m2!1sen!2sin"
        width="800"
        height="600"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        class="map"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Contact - ShantiTrip Holidays",
  ogTitle: "Contact - ShantiTrip Holidays",
  description:
    "Contact Us at ShantiTrip. 511, Main Manikaran Road, Suma Ropa, Kasol, District Kullu, Himachal Pradesh - 175105 +91 9459668084 travel@shantitrip.in",
  ogDescription:
    "Contact Us at ShantiTrip. 511, Main Manikaran Road, Suma Ropa, Kasol, District Kullu, Himachal Pradesh - 175105 +91 9459668084 travel@shantitrip.in",
  ogImage: "/shantitrip-holidays.jpg",
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
.hero {
  background-image: linear-gradient(
      to bottom,
      rgba(var(--text-primary), 0.49),
      rgba(var(--text-primary), 0.38),
      rgba(var(--text-primary), 0.49)
    ),
    linear-gradient(
      to right,
      rgba(var(--text-primary), 0.83),
      transparent,
      rgba(var(--text-primary), 0.83)
    ),
    url("/images/gallery/contact.webp");
  text-shadow: 0px 0px 8px rgba(var(--text-primary), 0.69);
}
input,
textarea {
  border: 1px solid rgba(var(--foreground), 0.69);
  border-radius: 5px;
}
.map {
  box-shadow: 0px 0px 15px rgba(var(--foreground), 0.21);
  border-radius: 1rem;
}
</style>
