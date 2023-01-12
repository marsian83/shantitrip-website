<template>
  <section
    class="hero h-screen p-page bg-cover bg-center flex flex-col justify-center items-center bg-fixed"
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
        <h3 class="text-3xl font-medium">₹{{ trip.cost }}</h3>
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
    <!-- <button class="btn-secondary mb-[-3rem] text-xl">Customize Trip</button> -->
    <ScrollHint class="absolute bottom-4 text-shadow-xl"/>
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
        <ul class="flex px-6 text-lg flex-col list-disc">
          <li v-for="category in trip.tripFor" class="my-1">{{ category }}</li>
        </ul>
      </div>
      <div class="basis-[45%]">
        <h2 class="text-3xl font-semibold mb-4">
          <span class="color-primary">Highlights</span> of this trip
        </h2>
        <ul class="flex px-6 text-lg flex-col list-disc">
          <li v-for="highlight in trip.highlights" class="my-1">
            {{ highlight }}
          </li>
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
        <ul class="flex px-6 text-lg flex-col list-disc">
          <li v-for="s in trip.stay" class="my-1">{{ s }}</li>
        </ul>
      </div>
      <div class="basis-[30%]">
        <h2 class="text-2xl font-semibold mb-4">
          How will I <span class="color-primary">Travel</span> ?
        </h2>
        <ul class="flex px-6 text-lg flex-col list-disc">
          <li v-for="t in trip.travel" class="my-1">{{ t }}</li>
        </ul>
      </div>
      <div class="basis-[30%]">
        <h2 class="text-2xl font-semibold mb-4">
          What about <span class="color-primary">Food</span> ?
        </h2>
        <ul class="flex px-6 text-lg flex-col list-disc">
          <li v-for="f in trip.food" class="my-1">{{ f }}</li>
        </ul>
      </div>
    </div>
  </section>
  <section class="features p-page">
    <hr class="my-14" />
    <h2 class="text-center text-3xl text-primary font-bold mb-8">
      Key <span class="color-primary">Features</span> of this trip
    </h2>
    <div class="feature-cards flex flex-row flex-wrap justify-between my-20">
      <div v-for="feature in trip.features" class="basis-[45%] my-8">
        <h2 class="text-2xl font-semibold mb-4">
          <!-- <span
            class="material-icons text-3xl aspect-square rounded-full text-primary bg-background p-2"
            >{{'&#'+'ea78'}}</span
          > -->
          {{ feature.title }}
        </h2>
        <ul class="flex px-6 text-lg flex-col list-disc">
          <li class="my-1" v-for="item in feature.items">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
  <section class="faq p-page">
    <hr class="my-14" />
    <h2 class="text-center text-3xl text-primary font-bold mb-8">
      Frequently Asked <span class="color-primary">Questions</span>
    </h2>
    <div class="faqs my-8 rounded-3xl overflow-hidden shadow-xl">
      <div v-for="faq in trip.faqs">
        <button class="faq-accordion text-lg font-medium">
          {{ faq.question }}
        </button>
        <div class="faq-panel">
          <p class="py-4 pr-48">{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="faq p-page">
    <hr class="my-14" />
    <h2 class="text-center text-3xl text-primary font-bold mb-8">
      Still <span class="color-primary">Confused?</span> Let's
      <span class="color-primary">Discuss</span>
    </h2>
    <div class="flex flex-row my-16">
      <div class="basis-1/2">
        <img
          src="/images/confused.webp"
          class="w-full h-full obejct-cover"
          alt="confused? let's discuss"
        />
      </div>
      <div class="basis-1/2 flex flex-col justify-center items-center">
        <p class="px-8 text-lg opacity-70 text-center">
          Too many options to choose from? Not finding what you're looking for?
          Tell us! We've helped our traveller friends out with the most offbeat
          travel requests.
        </p>
        <NuxtLink to="/contact" class="btn-primary">Contact Us</NuxtLink>
      </div>
    </div>
  </section>
  <section class="faq p-page">
    <hr class="my-14" />
    <h2 class="text-center text-3xl text-primary font-bold mb-8">
      <span class="color-primary">Similar</span> Trips You'll
      <span class="color-primary">Love</span>
    </h2>
  </section>
</template>

<script setup>
const { id } = useRoute().params;
const { data: trip } = await useFetch(`/api/trips/${id}`);
if (!trip.value) {
  throw createError({ statusCode: 404, statusMessage: "trip not found" });
}

onMounted(() => {
  var faqs = document.getElementsByClassName("faq-accordion");
  var i;

  for (i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener("click", function () {
      this.classList.toggle("faq-acc-active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
});
</script>

<style scoped>
.hero-title {
  text-shadow: 0px 0px 13px rgba(var(--text-primary), 0.69);
}
.faq-accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}
.faq-acc-active,
.faq-accordion:hover {
  background-color: #ccc;
}
.faq-panel {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
</style>
