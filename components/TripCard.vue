<template>
  <div class="card flex flex-row h-full w-full rounded-lg overflow-hidden">
    <div class="basis-[40%]">
      <img
        :src="trip.thumbnailUrl"
        class="object-cover w-full h-full"
        :alt="`${trip.name} Thumbnail`"
        loading="lazy"
      />
    </div>
    <div class="flex flex-col basis-[60%] gap-2 justify-between">
      <div class="p-3">
        <h2 class="trip-name font-semibold text-xl opacity-75">
          {{ trip.name }}
        </h2>
        <p class="opacity-60">by <span class="font-medium">ShantiTrip</span></p>
        <h3 class="opacity-75 text-xl py-3">
          Duration :
          <span class="font-medium text-2xl">
            {{ `${trip.days}D / ${trip.days - 1}N` }}
          </span>
        </h3>
        <p class="opacity-80 my-1">Travel Themes :</p>
        <div class="flex flex-row flex-wrap">
          <p
            v-for="theme in trip.themes"
            class="m-1 py-1 px-2 rounded-full text-secondary bg-[rgba(var(--foreground),0.69)]"
            >{{ theme }}</p
          >
        </div>
      </div>
      <div
        class="bottom-0 w-full bg-[rgba(var(--foreground),0.18)] flex flex-row justify-between px-6 py-3"
      >
        <div class="flex flex-col gap-1">
          <h2 class="opacity-85 text-xl">₹{{ trip.cost }}</h2>
          <p class="text-xs opacity-80">₹{{ Math.ceil(trip.cost / trip.days) }} / day</p>
        </div>
        <NuxtLink :to="`/trips/${trip.id}`">
          <button class="btn-primary py-2 m-0">View Trip</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["trip"]);
</script>

<style scoped>
.card {
  box-shadow: 0px 0px 5px rgba(var(--text-primary), 0.32);
}
.card{
  cursor: default;
}
.card:hover .trip-name {
  transition: 200ms;
  @apply color-primary font-bold;
}
</style>
