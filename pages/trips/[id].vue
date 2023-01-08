<template>
  <section
    class="hero h-screen p-page bg-cover flex flex-col justify-center items-center bg-fixed"
    :style="`background-image: linear-gradient(to bottom,rgba(var(--text-primary), 0.49),rgba(var(--text-primary), 0.08),rgba(var(--text-primary), 0.49)), linear-gradient(to right,rgba(var(--text-primary), 0.38),transparent,rgba(var(--text-primary), 0.38)),url('${trip.gallery[0]}');`"
  >
    <div class="hero-title flex flex-col text-secondary text-center gap-4">
      <h2 class="text-6xl font-bold">{{ trip.name }}</h2>
      <p class="text-xl font-medium">{{ trip.description }}</p>
    </div>
    <div
      class="p-4 rounded-3xl flex flex-row justify-evenly w-full backdrop-blur-sm my-10 text-secondary bg-[rgba(var(--foreground),0.64)]"
    >
      <div class="flex flex-row items-center gap-2">
        <span
          class="material-icons text-3xl aspect-square rounded-full text-primary bg-background p-2"
          >&#xef63;</span
        >
        <h3 class="text-3xl font-medium">${{ trip.cost }}</h3>
      </div>
      <div class="flex flex-row items-center gap-2">
        <span
          class="material-icons text-3xl aspect-square rounded-full text-primary bg-background p-2"
          >&#xe0c8;</span
        >
        <div class="flex-col">
          <h3 class="text-xl font-medium">Places Covered</h3>
          <h3 class="text-md opacity-80">{{ trip.places.join(", ") }}</h3>
        </div>
      </div>
      <div class="flex flex-row items-center gap-2">
        <span
          class="material-icons text-3xl aspect-square rounded-full text-primary bg-background p-2"
          >&#xe8b5;</span
        >
        <div class="flex-col">
          <h3 class="text-xl font-medium">Duration</h3>
          <h3 class="text-lg opacity-90">
            {{ `${trip.days}D / ${trip.days - 1}N` }}
          </h3>
        </div>
      </div>
    </div>
    <button class="btn-secondary mb-[-3rem] text-xl">Customize Trip</button>
  </section>
  <section class="info p-page py-10">
    <div class="catchphrase">
      <h2 class="text-3xl font-semibold">{{ trip.punchline }}</h2>
      <p class="my-4 text-lg font-light">{{ trip.summary }}</p>
    </div>
    <div class="flex flex-row justify-between mt-16">
      <div class="basis-[45%]">
        <h2 class="text-3xl font-semibold mb-4">
          This Trip is <span class="color-primary">Perfect</span> for
        </h2>
        <ul
          v-for="category in trip.tripFor"
          class="flex px-6 text-lg flex-col list-disc"
        >
          <li class="my-1">{{ category }}</li>
        </ul>
      </div>
      <div class="basis-[45%]">
        <h2 class="text-3xl font-semibold mb-4">
          <span class="color-primary">Highlights</span> of this trip
        </h2>
        <ul
          v-for="highlight in trip.highlights"
          class="flex px-6 text-lg flex-col list-disc"
        >
          <li class="my-1">{{ highlight }}</li>
        </ul>
      </div>
    </div>
    <hr class="my-14" />
    <h2 class="text-center text-3xl text-primary font-bold mb-8">
      Spoil yourself with <span class="color-primary">Choices</span>
    </h2>
    <p class="text-center text-primary text-lg opacity-80">
      We make sure you get a choice in almost everything, here are some common
      concerns travellers have and the choices we provide as answers to them
    </p>
    <div class="flex flex-row justify-between mt-16">
      <div class="basis-[30%]">
        <h2 class="text-2xl font-semibold mb-4">
          Where will I <span class="color-primary">Stay</span> ?
        </h2>
        <ul v-for="s in trip.stay" class="flex px-6 text-lg flex-col list-disc">
          <li class="my-1">{{ s }}</li>
        </ul>
      </div>
      <div class="basis-[30%]">
        <h2 class="text-2xl font-semibold mb-4">
          How will I <span class="color-primary">Travel</span> ?
        </h2>
        <ul
          v-for="t in trip.travel"
          class="flex px-6 text-lg flex-col list-disc"
        >
          <li class="my-1">{{ t }}</li>
        </ul>
      </div>
      <div class="basis-[30%]">
        <h2 class="text-2xl font-semibold mb-4">
          What about <span class="color-primary">Food</span> ?
        </h2>
        <ul v-for="f in trip.food" class="flex px-6 text-lg flex-col list-disc">
          <li class="my-1">{{ f }}</li>
        </ul>
      </div>
    </div>
  </section>
  <section class="features">
    <hr class="my-14" />
    <h2 class="text-center text-3xl text-primary font-bold mb-8">
      Key <span class="color-primary">Features</span> of this trip
    </h2>
  </section>
  <div>
    <p>{{ trip }}</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const { data: trip } = await useFetch(`/api/trips/${id}`);
if (!trip.value) {
  throw createError({ statusCode: 404, statusMessage: "trip not found" });
}
</script>

<style scoped>
.hero-title {
  text-shadow: 0px 0px 13px rgba(var(--text-primary), 0.69);
}
</style>
