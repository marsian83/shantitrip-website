<template>
  <section
    class="hero h-screen relative bg-cover p-page flex flex-col justify-center text-secondary items-center mobile:h-[30vh] text-center"
  >
    <h4 class="text-4xl font-medium mobile:text-2xl">OUR</h4>
    <h2 class="text-8xl font-semibold mobile:text-4xl">IMAGE GALLERY</h2>
    <p class="absolute bottom-8 p-page text-center text-lg font-light widescreen-only">
      Explore the beauty of India with Shantitrip! Our image gallery takes you
      on a journey through the vibrant culture, majestic monuments, and stunning
      landscapes of India. From the snow-covered Himalayas to the golden beaches
      of Goa, you can experience India through the lens of Shantitrip. Let us
      show you why India is one of the most beautiful countries in the world.
    </p>
  </section>
  <section class="gallery flex flex-row flex-wrap p-page mt-10">
    <div class="basis-1/3 px-1 flex flex-col gap-y-2 widescreen-only">
      <img
        v-for="image in images1"
        v-bind:key="image"
        :src="image"
        :alt="image"
        class="w-full"
      />
    </div>
    <div class="basis-1/3 px-1 flex flex-col gap-y-2 widescreen-only">
      <img
        v-for="image in images2"
        v-bind:key="image"
        :src="image"
        :alt="image"
        class="w-full"
      />
    </div>
    <div class="basis-1/3 px-1 flex flex-col gap-y-2 widescreen-only">
      <img
        v-for="image in images3"
        v-bind:key="image"
        :src="image"
        :alt="image"
        class="w-full"
      />
    </div>
    <div class="basis-1/2 px-1 flex flex-col gap-y-2 mobile-only">
      <img
        v-for="image in mobileImages1"
        v-bind:key="image"
        :src="image"
        :alt="image"
        class="w-full"
      />
    </div>
    <div class="basis-1/2 px-1 flex flex-col gap-y-2 mobile-only">
      <img
        v-for="image in mobileImages2"
        v-bind:key="image"
        :src="image"
        :alt="image"
        class="w-full"
      />
    </div>
  </section>
</template>

<script setup>
const { data } = await useFetch("/api/images");
const images = data.value;
const thirdImages = images.length / 3;
const images1 = images.slice(thirdImages * 0, thirdImages * 1);
const images2 = images.slice(thirdImages * 1, thirdImages * 2);
const images3 = images.slice(thirdImages * 2, thirdImages * 3);
const secondImages = images.length / 2;
const mobileImages1 = images.slice(secondImages * 0, secondImages * 1)
const mobileImages2 = images.slice(secondImages * 1, secondImages * 2)
</script>

<style scoped>
.hero {
  @apply bg-cover bg-center bg-fixed;
  background-image: linear-gradient(to left, #00000066, transparent, #00000066),
    linear-gradient(to bottom, black, transparent, black),
    url("/images/gallery/gallery.webp");
  text-shadow: 0px 8px 1rem black;
}
.gallery img{
  @apply rounded-xl shadow-lg;
}
</style>
