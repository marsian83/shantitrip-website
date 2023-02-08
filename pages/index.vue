<template>
  <div>
    <div
      class="hero-slider-navigation absolute w-full flex flex-row justify-between top-1/2 -translate-y-1/2 mobile:top-[16vh] text-secondary pointer-events-none z-[1]"
    >
      <button
        onclick="document.querySelector('.hero').scrollBy({left:-window.innerWidth,behavior:'smooth'})"
      >
        {{ "<" }}
      </button>
      <button
        onclick="document.querySelector('.hero').scrollBy({left:window.innerWidth,behavior:'smooth'})"
      >
        {{ ">" }}
      </button>
    </div>
    <section class="hero h-screen w-full mobile:h-[32vh] bg-black">
      <div
        class="hero-slide bg-[linear-gradient(#00000077,transparent,#00000077),url('/images/hero.jpg')] bg-bottom flex flex-col justify-center items-center text-center"
      >
        <h1 class="text-8xl font-black text-secondary mobile:text-5xl">
          Plan Less <br />
          Travel More
        </h1>
        <NuxtLink class="btn-primary" to="/contact"
          >Let's Plan Something</NuxtLink
        >
        <p
          class="text-secondary absolute bottom-8 font-light text-xl widescreen-only"
        >
          With curated and seamless travel experiences, we are taking the task
          out of travel — one booking at a time.
        </p>
      </div>
      <div
        class="hero-slide cursor-pointer bg-[linear-gradient(#00000077,transparent,#00000033),url('/images/promotional/parents-banner.webp')]"
        v-on:click="navigateTo('/trips/22')"
      ></div>
      <div class="w-[50vw]"></div>
    </section>
    <section class="destinations p-page">
      <h2 class="heading">
        Destinations to <span class="color-primary">Explore</span>
      </h2>
      <div
        class="handpicked flex flex-row flex-wrap justify-between mobile:gap-y-8"
      >
        <NuxtLink
          class="basis-[18%] aspect-[12/17] mobile:basis-[45%] mobile:aspect-[12/11]"
          v-for="destination in destinations"
          :key="destination.id"
          :to="`/destinations?destination=${destination.id}`"
        >
          <Card1
            :text="destination.name"
            :imageUrl="destination.thumbnailUrl"
          />
        </NuxtLink>
        <NuxtLink class="basis-[18%] mobile:basis-1/2" to="/destinations">
          <div class="view-more-card flex items-center justify-center h-full">
            <h4
              class="text-3xl text-primary hover:color-primary transition hover:scale-105"
            >
              >> View All
            </h4>
          </div>
        </NuxtLink>
      </div>
    </section>
    <section class="trending p-page">
      <h2 class="heading">
        <span class="color-primary">Trending</span> this Season
      </h2>
      <div class="trending-trips flex flex-row text-secondary">
        <div
          class="basis-1/2 aspect-square flex justify-center items-center widescreen-only"
        >
          <div
            class="h-[95%] w-[95%] object-cover bg-cover rounded-3xl flex flex-col justify-center items-center"
            :style="`background-image:linear-gradient(to bottom, rgb(var(--text-primary),0.21), transparent, rgb(var(--text-primary),0.21)),url('https://images.pexels.com/photos/45987/pexels-photo-45987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`"
          >
            <p class="text-4xl font-semibold my-4">What's hot this season</p>
            <p class="text-center text-lg opacity-90">
              Handpicked and curated trips exploring the best places to visit
              based on the weather, food, activities, and cultural events.
            </p>
          </div>
        </div>
        <div
          class="seasonal-trending-trips basis-1/2 aspect-square flex justify-center items-center mobile:basis-full"
        >
          <div
            class="w-[95%] h-[95%] flex flex-row justify-evenly mobile:w-full mobile:h-full"
          >
            <div class="basis-1/3 flex flex-col justify-between items-center">
              <NuxtLink
                :to="`/trips/${seasonalTrips[0].id}`"
                class="seasonal-trending-card h-[64%]"
              >
                <img
                  :src="seasonalTrips[0].thumbnailUrl"
                  :alt="`${seasonalTrips[0].name} - trending this season`"
                />
                <h2>{{ seasonalTrips[0].name }}</h2>
              </NuxtLink>
              <NuxtLink
                :to="`/trips/${seasonalTrips[1].id}`"
                class="seasonal-trending-card h-[32%]"
              >
                <img
                  :src="seasonalTrips[1].thumbnailUrl"
                  :alt="`${seasonalTrips[1].name} - trending this season`"
                />
                <h2>{{ seasonalTrips[1].name }}</h2>
              </NuxtLink>
            </div>
            <div class="basis-1/3 flex flex-col justify-between items-center">
              <NuxtLink
                :to="`/trips/${seasonalTrips[2].id}`"
                class="seasonal-trending-card h-[32%]"
              >
                <img
                  :src="seasonalTrips[2].thumbnailUrl"
                  :alt="`${seasonalTrips[2].name} - trending this season`"
                />
                <h2>{{ seasonalTrips[2].name }}</h2>
              </NuxtLink>
              <NuxtLink
                :to="`/trips/${seasonalTrips[3].id}`"
                class="seasonal-trending-card h-[64%]"
              >
                <img
                  :src="seasonalTrips[3].thumbnailUrl"
                  :alt="`${seasonalTrips[3].name} - trending this season`"
                />
                <h2>{{ seasonalTrips[3].name }}</h2>
              </NuxtLink>
            </div>
            <div class="basis-1/3 flex flex-col justify-between items-center">
              <NuxtLink
                :to="`/trips/${seasonalTrips[4].id}`"
                class="seasonal-trending-card h-[64%]"
              >
                <img
                  :src="seasonalTrips[4].thumbnailUrl"
                  :alt="`${seasonalTrips[4].name} - trending this season`"
                />
                <h2>{{ seasonalTrips[4].name }}</h2>
              </NuxtLink>
              <div
                class="text-primary h-[32%] flex justify-center items-center"
              >
                <h2
                  class="cursor-pointer text-3xl hover:color-primary hover:scale-105 transition"
                >
                  <NuxtLink to="/trips"> View All </NuxtLink>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="partners p-page">
      <h2 class="heading text-center">
        Our <span class="color-primary">Partners</span>
      </h2>
      <div class="flex flex-row flex-wrap justify-evenly">
        <img
          src="/images/partners/gmun.webp"
          alt="gmun travel partner"
          class="partner-icon"
        />
        <img
          src="/images/partners/communique.webp"
          alt="communique"
          class="partner-icon"
        />
      </div>
    </section>
    <section class="why-us p-page">
      <h5 class="heading text-center">
        Why <span class="color-primary">Choose</span> Us
      </h5>
      <div class="flex flex-row flex-wrap justify-evenly mobile:gap-y-7">
        <div class="why-us-card">
          <div class="why-us-card-icon bg-[#f7260533]">
            <span class="material-icons">&#xf8d7;</span>
          </div>
          <div class="why-us-card-details">
            <h6>Powered by locals</h6>
            <p>
              With our expert's street-smarts and local know-how, you get to
              escape the middleman and experience the best places at the best
              prices.
            </p>
          </div>
        </div>
        <div class="why-us-card">
          <div class="why-us-card-icon bg-[#00942626]">
            <span class="material-icons">&#xef50;</span>
          </div>
          <div class="why-us-card-details">
            <h6>Everything goes</h6>
            <p>
              We've helped our friends out with the most offbeat travel
              requests. We never say no and believe that with the right
              expertise and street-smarts, almost anything under the sun can be
              arranged.
            </p>
          </div>
        </div>
        <div class="why-us-card">
          <div class="why-us-card-icon bg-[#0026f726]">
            <span class="material-icons">&#xf0e2;</span>
          </div>
          <div class="why-us-card-details">
            <h6>With you, at every step</h6>
            <p>
              Facilitating great travel experiences is all we care about. We go
              out of our way to make sure you travel your way, and with zero
              anxiety.
            </p>
          </div>
        </div>
      </div>
    </section>
    <hr class="mt-20" />
    <section class="nature-trips p-page">
      <h5 class="heading">
        Be one with <span class="color-primary">Nature</span>
      </h5>
      <p class="mt-[-1.5rem] mb-[1rem] text-lg opacity-80 mobile:text-center">
        Explore trips related to nature
      </p>
      <div
        class="carousel relative grid grid-flow-col overflow-x-auto overflow-y-hidden gap-6"
      >
        <NuxtLink
          class="carousel-card aspect-[9/12] mobile:aspect-[12/9]"
          v-for="trip in natureTrips"
          :to="`/trips/${trip.id}`"
        >
          <Card1 :text="trip.name" :imageUrl="trip.thumbnailUrl" cover="true" />
        </NuxtLink>
      </div>
    </section>
    <section class="spirituality-trips p-page">
      <h5 class="heading">
        Experience the <span class="color-primary">Adventure</span>
      </h5>
      <p
        class="mt-[-1.5rem] mb-[1rem] text-lg opacity-80 w-full mobile:text-center"
      >
        Explore trips related to adventure
      </p>
      <div
        class="carousel relative grid grid-flow-col overflow-x-auto overflow-y-hidden gap-6"
      >
        <NuxtLink
          class="carousel-card aspect-[9/12] mobile:aspect-[12/9]"
          v-for="trip in adventureTrips"
          :to="`/trips/${trip.id}`"
        >
          <Card1 :text="trip.name" :imageUrl="trip.thumbnailUrl" cover="true" />
        </NuxtLink>
      </div>
    </section>
    <section class="instagram-feed p-page"></section>
  </div>
</template>

<script setup>
import { useSeoMeta } from "@unhead/vue";

const trending = [0, 0, 0, 0, 0];

let seasonalTrips = [];

for (const trend of trending) {
  seasonalTrips.push((await useFetch(`/api/trips/${trend}`)).data._rawValue);
}

const { data: destinations } = useFetch("/api/destinations");

const { data: natureTrips } = useFetch("/api/trips/search", {
  query: { query: "nature" },
});

const { data: adventureTrips } = useFetch("/api/trips/search", {
  query: { query: "adventure" },
});

onMounted(() => {
  setTimeout(() => {
    document
      .querySelector(".hero")
      .scrollBy({ left: window.innerWidth, behavior: "smooth" });
  }, 5000);
});

useSeoMeta({
  title: "Home - ShantiTrip Holidays",
  ogTitle: "Home - ShantiTrip Holidays",
  description:
    "Travelling shouldn't be a task. We are a young startup based in Himachal Pradesh, passionate about designing personalized trips and curating niche experiences",
  ogDescription:
    "Travelling shouldn't be a task. We are a young startup based in Himachal Pradesh, passionate about designing personalized trips and curating niche experiences",
  ogImage: "/shantitrip-holidays.jpg",
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
.hero {
  @apply auto-cols-[100%] h-screen w-full mobile:h-[35vh] scroll-smooth snap-x snap-mandatory relative grid grid-flow-col overflow-x-auto gap-0;
}
.hero::-webkit-scrollbar {
  display: none;
}
.hero-slide {
  @apply bg-cover;
  scroll-snap-align: start;
}
.hero h1 {
  text-shadow: 0px 0px 1rem #000000;
}
.hero-slider-navigation button {
  @apply p-4 mobile:p-2 text-3xl bg-[rgba(var(--foreground),0.8)] pointer-events-auto;
}
.heading {
  @apply pb-10 pt-20 text-3xl font-bold mobile:text-2xl mobile:font-semibold mobile:py-7 mobile:text-center;
}
.seasonal-trending-trips:has(.seasonal-trending-card:hover)
  .seasonal-trending-card {
  @apply opacity-75;
}
.seasonal-trending-trips:hover .seasonal-trending-card:hover {
  @apply opacity-100 blur-none;
  transform: scale(1.03) translateY(-1%);
}
.seasonal-trending-card {
  @apply w-[90%] relative cursor-pointer rounded-3xl overflow-hidden flex justify-center items-center;
  transition: 800ms;
}
.seasonal-trending-card img {
  @apply w-full h-full object-cover brightness-[69%];
  transition: 500ms;
}
.seasonal-trending-card h2 {
  @apply absolute text-center text-lg leading-5 px-2 font-semibold  text-secondary;
  letter-spacing: 0.84px;
  text-shadow: 0px 0px 5px rgba(var(--text-primary), 0.83);
}
.partner-icon {
  @apply basis-[8%] aspect-square saturate-0 brightness-0 opacity-40 mobile:w-[30vw];
}
.why-us-card {
  box-shadow: 0px 0px 25px rgba(var(--text-primary), 0.15);
  @apply basis-[28%] text-primary flex flex-col justify-between items-center rounded-xl py-6 px-4 gap-4 hover:bg-primary hover:text-secondary mobile:basis-[100%] mobile:flex-row;
  transition: 300ms ease;
}
.why-us-card-icon {
  @apply p-6 aspect-square flex justify-center items-center;
  border-radius: 50%;
  transition: 400ms ease;
  transition-delay: 50ms;
}
.why-us-card-details {
  @apply flex flex-col items-center justify-between h-full;
}
.why-us-card:hover .why-us-card-icon {
  @apply bg-background;
  border-radius: 1rem;
}
.why-us-card-icon span {
  @apply aspect-square text-6xl color-primary;
}
.why-us-card h6 {
  @apply font-bold my-2;
}
.why-us-card p {
  @apply text-center font-medium text-sm opacity-80;
}
.carousel {
  @apply auto-cols-[20%] mobile:auto-cols-[70%] scroll-smooth snap-x snap-mandatory overscroll-y-auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.carousel::-webkit-scrollbar {
  display: none;
}
.carousel-card {
  scroll-snap-align: start;
}

.slider-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  background-color: #444;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.slider {
  position: relative;
  width: 9999px;
  height: 100%;
}
.slider:before,
.slider:after {
  display: table;
  content: " ";
}
.slider:after {
  clear: both;
}
.slider__item {
  position: relative;
  float: left;
  margin: 0;
  padding: 0;
  height: 100%;
}
.slider__item img {
  display: block;
  max-width: 100%;
  height: auto;
}
.slider__switch span {
  color: #fff;
  display: block;
  width: 32px;
  height: 32px;
}
/* Arrows */
.slider__switch {
  position: absolute;
  top: 50%;
  margin-top: -20px;
  padding: 10px 5px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  border-radius: 1px;
  background: #000;
  opacity: 0.3;
  transition: opacity 0.15s ease;
  fill: #fff;
}
.slider__switch--prev {
  left: 10px;
}
.slider__switch--next {
  right: 10px;
}

.slider__switch:hover {
  opacity: 0.85;
}
.slider__switch[disabled] {
  visibility: hidden;
  opacity: 0;
}
.slider__caption {
  position: absolute;
  bottom: 30px;
  left: 30px;
  display: block;
  max-width: 500px;
  padding: 10px;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 1px;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.4);
  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#99000000', endColorstr='#99000000'); /* ie8 */
}
.slider__caption[disabled] {
  opacity: 0;
  visibility: hidden;
}
.slider-nav {
  line-height: 30px;
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 30px;
  margin: 0;
  padding: 0;
  text-align: center;
  z-index: 99999;
  filter: alpha(opacity=90); /* ie8 */
}
.slider-nav__control {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0 3px;
  -webkit-transition: background 0.5s ease;
  -moz-transition: background 0.5s ease;
  -o-transition: background 0.5s ease;
  transition: background 0.5s ease;
  border: 2px solid #fff;
  border-radius: 50%;
  background: transparent;
}

.slider-nav__control.is-active {
  width: 12px;
  height: 12px;
  background: #fff;
}
.slider.has-touch {
  cursor: move;
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
}
@media (max-width: 580px) {
  .slider__switch {
    display: none;
  }
  .slider__caption {
    display: none;
  }
}

/* Background image example */
.slider-container--hero {
  height: 100vh;
}
.slider-container--hero .slider__item {
  background-size: cover;
}
</style>
