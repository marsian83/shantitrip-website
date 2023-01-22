<template>
  <div class="all-destinations m-0 p-0 ">
    <section
      v-for="destination in destinations"
      :class="`${destination.name}-destination`"
      v-bind:key="destination.id"
      class="destination relative pl-page h-screen bg-cover bg-fixed bg-center flex flex-row widescreen:justify-center items-center mobile:flex-col mobile:p-page"
      :style="`background-image: linear-gradient(to bottom, rgba(var(--foreground),1),rgba(var(--foreground),0.38),rgba(var(--foreground),1)) , url('${destination.thumbnailUrl}'), linear-gradient(to bottom, black, black);`"
    >
      <div class="destination-info widescreen:basis-1/2 mobile:flex mobile:flex-col mobile:mt-4">
        <h1 class="text-secondary text-8xl font-bold mobile:text-5xl pr-2">
          {{ destination.name.toUpperCase() }}
        </h1>
        <p class="text-secondary opacity-80 pr-10 mobile:pr-0 widescreen:mt-8 mobile:mb-4">
          {{ destination.description }}
        </p>
      </div>
      <div class="relative widescreen:basis-1/2 widescreen:w-[50vw] h-full flex items-center mobile:w-full mobile:h-fit">
        <div
          :id="`trips-${destination.id}`"
          class="destination-trips gap-6 h-full flex items-center"
        >
          <NuxtLink
            class="destination-trip-card transition-300 widescreen-only"
            v-for="location in destination.locations"
            v-bind:key="location.name"
            :to="`/trips/${location.name}`"
          >
            <Card2 :text="location.name" :imageUrl="location.imageUrl" />
            <div
              class="destination-description absolute bottom-0 left-0 h-max w-full opacity-0"
            >
              <p class="absolute text-secondary bottom-0 bg-[linear-gradient(transparent,#000000bb,transparent)] py-8 px-1 text-center">
                {{ location.description }}
              </p>
            </div>
          </NuxtLink>
          <div
            class="destination-trip-card transition-300 relative mobile-only"
            v-for="location in destination.locations"
            v-bind:key="location.name"
            :to="`/trips/${location.name}`"
          >
            <Card2 :text="location.name" :imageUrl="location.imageUrl" />
            <div
              class="destination-description absolute bottom-0 left-0 h-max w-full widescreen:opacity-0"
            >
              <p class="absolute text-secondary bottom-0 bg-[linear-gradient(transparent,#000000bb,transparent)] py-8 px-1 text-center">
                {{ location.description }}
              </p>
            </div>
          </div>
          <div class="w-[200%]"></div>
        </div>
      </div>
      <div class="absolute bottom-[10vh] mobile:bottom-[8vh]">
        <button
          class="rounded-full aspect-square w-14 mx-4 text-xl text-secondary backdrop-blur-sm transition-300 bg-[rgba(var(--background),0.2)] hover:bg-[rgba(var(--background),0.8)] hover:text-primary active:scale-50"
          :id="destination.id"
          onclick="document.getElementById(`trips-${this.id}`).scrollBy({left:-300, behavior: 'smooth'})"
        >
          {{ "<" }}
        </button>
        <button
          class="rounded-full aspect-square w-14 mx-4 text-xl text-secondary backdrop-blur-sm transition-300 bg-[rgba(var(--background),0.2)] hover:bg-[rgba(var(--background),0.8)] hover:text-primary active:scale-50"
          :id="destination.id"
          onclick="document.getElementById(`trips-${this.id}`).scrollBy({left:+300, behavior: 'smooth'})"
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
  const { data: destinationTrips } = await useFetch(
    `/api/destinations/trips/${destination.id}`
  );
  destination["trips"] = destinationTrips.value;
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
  @apply auto-cols-[40%] mobile:auto-cols-[100%] scroll-smooth snap-x snap-mandatory relative grid grid-flow-col overflow-x-auto gap-6 ;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.destination-trips::-webkit-scrollbar {
  display: none;
}
.destination-trip-card {
  @apply aspect-[12/15] mobile:aspect-auto mobile:w-full mobile:h-fit;
  scroll-snap-align: start;
}
.destination-trips::-webkit-scrollbar {
  display: none;
}
.destination-trips:has(.destination-trip-card:hover) .destination-trip-card {
  @apply widescreen:opacity-75 widescreen:blur-sm widescreen:scale-95;
}
.destination-trips:hover .destination-trip-card:hover {
  @apply opacity-100 blur-none scale-100;
}
.destination-trips:hover .destination-trip-card:hover .destination-description {
  @apply opacity-100;
}
</style>
