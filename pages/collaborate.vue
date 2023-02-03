<template>
  <section
    class="hero h-screen bg-cover p-page mobile:h-max mobile:bg-left-bottom mobile:overflow-hidden"
  >
    <div class="flex flex-row h-full items-center mobile:flex-col">
      <div
        class="left basis-1/2 text-secondary flex flex-col gap-4 mobile:flex-row mobile:flex-wrap mobile:justify-center mobile:mt-4"
      >
        <h1 class="text-9xl font-black mobile:text-3xl mobile:font-semibold">
          Work
        </h1>
        <h3 class="text-7xl font-medium mobile:text-3xl mobile:font-semibold">
          Along With Us
        </h3>
        <p class="mobile:w-[90vw] mobile:text-justify mobile:mb-4">
          We are always looking to collaborate with travel service providers and
          travel influencers who share our passion for travel and providing
          wholesome and stress-free travel experiences.
        </p>
      </div>
      <div class="right basis-1/2 flex justify-center items-center">
        <div
          class="agent-form-container w-[80%] py-8 px-4 rounded-xl bg-[rgba(var(--background),0.21)] shadow-lg backdrop-blur-sm mobile:w-full mobile:mb-10"
        >
          <form
            class="flex flex-col gap-6"
          >
            <div class="flex flex-row items-center">
              <label class="basis-2/12 text-secondary mobile:basis-4/12"
                >You are a</label
              >
              <select class="basis-10/12 mobile:basis-8/12">
                <option value="0">Travel Agent</option>
                <option value="1">Transport Provider</option>
                <option value="2">Hotel/Homestay Provider</option>
                <option value="3">Travel Influencer</option>
              </select>
            </div>
            <input type="text" placeholder="Your Full Name" />
            <input type="text" placeholder="Your Email Address" />
            <input type="text" placeholder="Your Website [optional]" />
            <textarea rows="6" placeholder="Write us a Message"></textarea>
            <button
              class="btn-primary self-center flex flex-row items-center gap-1"
            >
              Let's Collab!<span class="material-icons px-2">&#xe163;</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useSeoMeta } from '@unhead/vue';

useSeoMeta({
  title: "Collaborate with ShantiTrip Holidays",
  ogTitle: "Collaborate with ShantiTrip Holidays",
  description:
    "We are always looking to collaborate with travel service providers and travel influencers who share our passion for travel and providing wholesome and stress-free travel experiences.",
  ogDescription:
    "We are always looking to collaborate with travel service providers and travel influencers who share our passion for travel and providing wholesome and stress-free travel experiences.",
  ogImage: "/shantitrip-holidays.jpg",
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
.hero {
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
    url("https://cdn.pixabay.com/photo/2018/09/05/20/27/mountains-3657034_1280.jpg");
  text-shadow: 0px 0px 8px rgba(var(--text-primary), 0.69);
}
input,
textarea,
select {
  @apply px-4 py-2 rounded-md text-lg;
}
</style>
