<template>
  <div>
    <section class="top h-screen bg-cover flex flex-col">
      <div class="hero flex flex-col m-auto">
        <div class="hero-text-top">
          <div class="hero-text-item" id="tl">Plan</div>
          <div class="hero-text-item" id="tr">Less</div>
        </div>
        <div class="hero-text-bottom">
          <div class="hero-text-item" id="bl">Travel</div>
          <div class="hero-text-item" id="br">More</div>
        </div>
        <button class="btn-secondary self-center hover:scale-105">
          Let's plan something
        </button>
      </div>
      <div class="text-secondary self-center mb-5 opacity-80 text-lg">
        With curated and seamless travel experiences, we are taking the task out
        of travel — one booking at a time.
      </div>
    </section>
    <section class="destinations p-page">
      <h2 class="heading">
        <span class="color-primary">Destinations</span> to Explore
      </h2>
      <div class="destinations flex flex-row justify-between">
        <NuxtLink
          class="basis-[18%] aspect-[12/17]"
          v-for="destination in destinations"
          :to="`/destinations/${destination.name}`"
        >
          <Card1 :text="destination.name" :imageUrl="destination.imageUrl" />
        </NuxtLink>
        <NuxtLink class="basis-[18%]" to="/destinations">
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
        <div class="basis-1/2 aspect-square flex justify-center items-center">
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
        <div class="basis-1/2 aspect-square flex flex-row justify-evenly">
          <div class="basis-1/3 flex flex-col justify-evenly">
            <div class="basis-2/3 flex justify-center items-center"></div>
            <div class="basis-1/3 flex justify-center items-center"></div>
          </div>
          <div class="basis-1/3 flex flex-col justify-evenly"></div>
          <div class="basis-1/3 flex flex-col justify-evenly"></div>
        </div>
      </div>
    </section>
    <section class="why-us p-page">
      <h5 class="heading text-center">
        Why <span class="color-primary">Choose</span> Us
      </h5>
      <div class="flex flex-row flex-wrap justify-evenly">
        <div class="why-us-card">
          <div class="why-us-card-icon bg-[#f7260533]">
            <span class="material-icons">&#xf8d7;</span>
          </div>
          <h6>Powered by locals</h6>
          <p>
            With our expert's street-smarts and local know-how, you get to
            escape the middleman and experience the best places at the best
            prices.
          </p>
        </div>
        <div class="why-us-card">
          <div class="why-us-card-icon bg-[#00942626]">
            <span class="material-icons">&#xef50;</span>
          </div>
          <h6>Everything goes</h6>
          <p>
            We've helped our friends out with the most offbeat travel requests.
            We never say no and believe that with the right expertise and
            street-smarts, almost anything under the sun can be arranged.
          </p>
        </div>
        <div class="why-us-card">
          <div class="why-us-card-icon bg-[#0026f726]">
            <span class="material-icons">&#xf0e2;</span>
          </div>
          <h6>With you, at every step</h6>
          <p>
            Facilitating great travel experiences is all we care about. We go
            out of our way to make sure you travel your way, and with zero
            anxiety.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const destinations = [
  {
    name: "Manali",
    imageUrl:
      "https://images.pexels.com/photos/9605458/pexels-photo-9605458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Kasol",
    imageUrl:
      "https://images.pexels.com/photos/7846558/pexels-photo-7846558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2s",
  },
  {
    name: "Spiti",
    imageUrl:
      "https://images.pexels.com/photos/13979460/pexels-photo-13979460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Jibhi",
    imageUrl:
      "https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
</script>

<style scoped>
.top {
  background-image: linear-gradient(to bottom, #0a0a0abc, #0a0a0a55, #0a0a0abc),
    url("https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
}
.hero-text-top,
.hero-text-bottom {
  @apply flex flex-row w-full justify-center py-0.5;
}
.hero-text-item {
  color: rgb(var(--text-secondary));
  font-weight: 800;
  @apply font-extrabold px-2 text-8xl;
  text-shadow: 0px 0px 10px rgba(var(--text-primary), 0.38);
}
.heading {
  @apply pb-10 pt-20 text-3xl font-bold;
}
.why-us-card {
  box-shadow: 0px 0px 25px rgba(var(--text-primary), 0.15);
  @apply basis-[28%] text-primary flex flex-col justify-between items-center rounded-xl py-6 px-4 gap-4 hover:bg-primary hover:text-secondary;
  transition: 300ms ease;
}
.why-us-card-icon {
  @apply p-6 aspect-square flex justify-center items-center;
  border-radius: 50%;
  transition: 400ms ease;
  transition-delay: 50ms;
}
.why-us-card:hover .why-us-card-icon {
  @apply bg-background;
  border-radius: 1rem;
}
.why-us-card-icon span {
  @apply aspect-square text-6xl color-primary;
}
.why-us-card h6 {
  @apply font-bold;
}
.why-us-card p {
  @apply text-center font-medium text-sm opacity-80;
}
</style>
