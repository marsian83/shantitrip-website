<template>
  <div class="all-destinations m-0 p-0">
    <section
      v-for="destination in destinations"
      :class="`${destination.name}-destination`"
      class="destination relative pl-page h-screen bg-cover bg-fixed bg-center flex flex-row justify-center items-center"
      :style="`background-image: linear-gradient(to bottom, rgba(var(--foreground),1),rgba(var(--foreground),0.38),rgba(var(--foreground),1)) , url('${destination.thumbnailUrl}');`"
    >
      <div class="destination-info basis-1/2">
        <h1 class="text-secondary text-8xl font-bold">
          {{ destination.name.toUpperCase() }}
        </h1>
        <p class="text-secondary opacity-80 pr-10">
          {{ destination.description }}
        </p>
      </div>
      <div class="relative basis-1/2 flex flex-col justify-center items-center">
        <div
          :id="`trips-${destination.id}`"
          class="destination-trips relative grid grid-flow-col overflow-x-auto overflow-y-hidden gap-6"
        >
          <NuxtLink
            class="destination-trip-card transition-300"
            v-for="trip in destination.trips"
            :to="`/trips/${trip.id}`"
          >
            <Card2 :text="trip.name" :imageUrl="trip.thumbnailUrl" />
          </NuxtLink>
          <div class="w-[200%]"></div>
        </div>
      </div>
      <div class="absolute bottom-[10vh]">
        <button
          class="rounded-full aspect-square w-14 mx-4 text-xl text-secondary backdrop-blur-sm transition-300 bg-[rgba(var(--background),0.2)] hover:bg-[rgba(var(--background),0.8)] hover:text-primary active:scale-50"
          :id="destination.id"
          onclick="document.getElementById(`trips-${this.id}`).scrollBy({left:-200, behavior: 'smooth'})"
        >
          {{ "<" }}
        </button>
        <button
          class="rounded-full aspect-square w-14 mx-4 text-xl text-secondary backdrop-blur-sm transition-300 bg-[rgba(var(--background),0.2)] hover:bg-[rgba(var(--background),0.8)] hover:text-primary active:scale-50"
          :id="destination.id"
          onclick="document.getElementById(`trips-${this.id}`).scrollBy({left:+200, behavior: 'smooth'})"
        >
          {{ ">" }}
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: "immersive-no-footer" });
const { data: destinations } = await useFetch("/api/destinations");
for await (const destination of destinations.value) {
  destination["trips"] = await $fetch(
    `/api/destinations/trips/${destination.id}`
  );
}

const {
  query: { destination },
} = useRoute();

if (destination && Number(destination) > destinations.value.length - 1) {
  throw createError({
    statusCode: 404,
    statusMessage: "destination not found",
  });
}

onMounted(() => {
  if (destination) {
    document
      .querySelector(".all-destinations")
      .scrollTo({ top: Number(destination) * 1000, behavior: "auto" });
  }
});
</script>

<style scoped>
.all-destinations {
  position: relative;
  width: 100%;
  height: 100vh;
  scroll-behavior: smooth;
  overflow: auto;
  scroll-snap-type: y mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.all-destinations::-webkit-scrollbar {
  display: none;
}
.destination {
  scroll-snap-align: start;
}
.destination-info {
  text-shadow: 0px 0px 13px rgba(var(--text-primary), 0.83);
}
.destination-trips {
  grid-auto-columns: 38%;
  overscroll-behavior-inline: contain;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.destination-trips::-webkit-scrollbar {
  display: none;
}
.destination-trips:has(.destination-trip-card:hover) .destination-trip-card {
  @apply opacity-75 blur-sm scale-95;
}
.destination-trips:hover .destination-trip-card:hover {
  @apply opacity-100 blur-none scale-100;
}
</style>
