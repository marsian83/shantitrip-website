<template>
  <div class="body">
    <section
      class="hero h-screen bg-cover p-page flex flex-col justify-center text-secondary mobile:h-[30vh]"
    >
      <h4 class="text-3xl font-light">OUR AIM</h4>
      <h2 class="text-8xl font-semibold mobile:text-6xl">Is to simplify travel</h2>
    </section>
    <section class="p-page">
      <h5 class="pt-16 pb-6 text-4xl font-bold text-center">Our Story</h5>
      <p class="px-10 text-center text-xl mobile:px-0">
        We founded ShantiTrip Holidays on one clear premise: use our local
        expertise and smarts to curate unique, stress-free travel experiences
        that travelers do not get from conventional tour operators.
      </p>
      <ScrollHint class="absolute bottom-4 left-[47%]" />
    </section>
    <section class="p-page mt-20">
      <div class="flex flex-row items-center justify-center py-24 mobile:flex-col">
        <img
          src="/images/product-of-himachal.webp"
          class="h-full w-1/2 basis-1/2 mobile:w-full"
          alt="product-of-himachal"
        />
        <div class="basis-1/2 flex flex-col justify-center px-10 mobile:px-0 mobile:text-justify">
          <h5 class="pb-6 text-2xl font-black color-primary mobile:text-center">
            A product of Himachal
          </h5>
          <p class="text-lg">
            Our story goes 3 years back when Pankaj, the Co-founder, started
            Destination Of Peace Homestays (DOP) in Kasol — a place where
            travelers could feel relaxed, peaceful, and free, just like at home.
            Travelling to new and uncharted places usually brings with it its
            own set of anxieties and stresses — something Pankaj aimed at
            alleviating with DOP.
            <br />
            <br />
            Also, being a Himachali, Pankaj could help travelers plan their
            itineraries and book their transport, accomodation, food
            arrangements — basically everything related to travel. DOP soon
            became a mandatory destination for our guests whenever they were in
            Himachal, it soon became their Home in Himachal.
          </p>
        </div>
      </div>
      <div class="flex flex-row-reverse items-center justify-center py-24 mobile:flex-col">
        <img
          src="/images/wholesome-travel.webp"
          class="h-full w-1/2 basis-1/2 mobile:w-full"
          alt="product-of-himachal"
        />
        <div class="basis-1/2 flex flex-col justify-center px-10 mobile:px-0 mobile:text-justify">
          <h5 class="pb-6 text-2xl font-black color-primary mobile:text-center">
            Wholesome travel, only!
          </h5>
          <p class="text-lg">
            With 3+ years of closely interacting with guests and understanding
            their needs, we started ShantiTrip Holidays to replicate the
            experience we were providing our guests at DOP to travelers across
            India. This meant removing the small stresses, hassles, and
            inconveniences that usually go unattended when you travel with
            conventional tour operators.
            <br /><br />
            For us, travel is not just about beautiful destinations and hotel
            rooms; it is also about the parts that connect these experiences
            together. We look at travel as a whole, and pay attention to all and
            everything that makes up for a fulfilling trip. ShantiTrip Holidays
            is our attempt at providing travelers with a wholesome, end-to-end
            travel experience.
          </p>
        </div>
      </div>
    </section>
    <section class="p-page">
      <h5 class="pt-16 pb-6 text-4xl font-bold text-center mobile:pt-0">Our Team</h5>
      <div class="team mt-12 flex flex-row justify-evenly mobile:flex-wrap mobile:gap-y-8">
        <div class="team-card">
          <img src="/images/pankaj.webp" alt="pankaj-founder" />
          <h3>Pankaj</h3>
          <h4>Founder</h4>
        </div>
        <div class="team-card">
          <img src="/images/keshav.webp" alt="lakshay-cofounder" />
          <h3>Keshav</h3>
          <h4>Co Founder</h4>
        </div>
        <div class="team-card">
          <img src="/images/mustafa.webp" alt="mustafa-director" />
          <h3>Mustafa</h3>
          <h4>Director</h4>
        </div>
        <div class="team-card">
          <img src="/images/nitish.webp" alt="nitish-planner" />
          <h3>Nitish</h3>
          <h4>Trip Planner</h4>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

useSeoMeta({
  title: "About - ShantiTrip Holidays",
  ogTitle: "About - ShantiTrip Holidays",
  description:
    "We founded ShantiTrip Holidays on one clear premise: use our local expertise and smarts to curate unique, stress-free travel experiences that travelers do not get from conventional tour operators.",
  ogDescription:
    "We founded ShantiTrip Holidays on one clear premise: use our local expertise and smarts to curate unique, stress-free travel experiences that travelers do not get from conventional tour operators.",
  ogImage: "/shantitrip-holidays.jpg",
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
.hero {
  background-position: center;
  background-image: linear-gradient(
      to bottom,
      rgba(var(--text-primary), 0.49),
      transparent,
      rgba(var(--text-primary), 0.49)
    ),
    linear-gradient(
      to right,
      rgba(var(--text-primary), 0.83),
      transparent,
      rgba(var(--text-primary), 0.83)
    ),
    url("/images/gallery/about.webp");
  text-shadow: 0px 0px 8px rgba(var(--text-primary), 0.83);
}
.team-card {
  @apply flex flex-col justify-between items-center gap-4 basis-[18%] mobile:basis-1/2;
}
.team-card img {
  @apply aspect-square w-[80%];
  border-radius: 50%;
}
.team-card h3 {
  @apply text-xl font-bold;
}
.team-card h4 {
  @apply text-lg font-semibold opacity-60;
}
</style>
