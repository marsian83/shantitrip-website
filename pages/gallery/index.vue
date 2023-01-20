<template>
  <section
    class="hero h-screen relative bg-cover p-page flex flex-col justify-center text-secondary items-center mobile:h-[30vh] text-center"
  >
    <h4 class="text-4xl font-medium">OUR</h4>
    <h2 class="text-8xl font-semibold mobile:text-6xl">IMAGE GALLERY</h2>
    <p class="absolute bottom-8 p-page text-center text-lg font-light">
      Explore the beauty of India with Shantitrip! Our image gallery takes you
      on a journey through the vibrant culture, majestic monuments, and stunning
      landscapes of India. From the snow-covered Himalayas to the golden beaches
      of Goa, you can experience India through the lens of Shantitrip. Let us
      show you why India is one of the most beautiful countries in the world.
    </p>
  </section>
</template>

<style scoped>
.hero {
  @apply bg-cover bg-center bg-fixed;
  background-image: linear-gradient(to left, #00000066, transparent, #00000066), linear-gradient(to bottom, black, transparent, black), url('/images/trips/7.webp');
  text-shadow: 0px 8px 1rem black;
}
</style>
