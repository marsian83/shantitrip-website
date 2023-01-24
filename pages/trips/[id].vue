<template>
  <section
    class="hero h-screen p-page bg-cover bg-center flex flex-col justify-center items-center bg-fixed mobile:justify-between mobile:py-8 mobile:h-max"
    :style="`background-image: linear-gradient(to bottom,rgba(var(--text-primary), 0.49),rgba(var(--text-primary), 0.08),rgba(var(--text-primary), 0.49)), linear-gradient(to right,rgba(var(--text-primary), 0.38),transparent,rgba(var(--text-primary), 0.38)),url('${trip.gallery[0]}');`"
  >
    <div class="hero-title flex flex-col text-secondary text-center gap-4">
      <h2 class="text-6xl font-bold mobile:text-4xl">{{ trip.name }}</h2>
      <p class="text-xl font-medium mobile:mt-8 mobile:text-sm">
        {{ trip.description }}
      </p>
    </div>
    <div
      class="p-4 rounded-3xl flex flex-row justify-evenly w-full backdrop-blur-sm my-10 text-secondary bg-[rgba(var(--foreground),0.64)] mobile:flex-col-reverse mobile:gap-y-12"
    >
      <div class="flex flex-row items-center gap-2">
        <span
          class="material-icons text-3xl aspect-square rounded-full text-primary bg-background p-2"
          >&#xef63;</span
        >
        <h3 class="text-3xl font-medium">₹{{ trip.cost }}</h3>
      </div>
      <div class="flex flex-row items-center gap-2 widescreen:max-w-[33%]">
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
    <ScrollHint class="absolute bottom-4 text-shadow-xl" />
  </section>
  <section
    class="schedule p-page"
    v-if="trip.schedule && trip.schedule.length > 0"
  >
    <div class="relative flex flex-row flex-wrap gap-3 p-2 items-center">
      <button
        v-for="day of trip.schedule"
        :class="
          day.label === showingDay
            ? 'text-secondary bg-primary'
            : 'text-primary'
        "
        @click="
          () => {
            showingDay = day.label;
          }
        "
        onclick="
              document
                .querySelector('.schedule-carousel')
                .scrollTo({left:0});"
        class="font-medium text-lg px-3 py-1 ml-4 bg-background rounded-full transition-300"
      >
        {{ day.label }}
      </button>
      <div class="schedule-carousel-navigation widescreen:absolute right-6">
        <button
          class="rounded-l-full"
          onclick="document.querySelector('.schedule-carousel').scrollBy({left:-500,behaviour:'smooth'})"
        >
          {{ "<" }}
        </button>
        <button
          class="rounded-r-full"
          onclick="document.querySelector('.schedule-carousel').scrollBy({left:500,behaviour:'smooth'})"
        >
          {{ ">" }}
        </button>
      </div>
    </div>
    <div
      class="schedule-carousel mx-3 auto-cols-[30%] mobile:auto-cols-[100%] h-[35vh] scroll-smooth snap-x snap-mandatory relative grid grid-flow-col overflow-x-auto gap-x-4 py-4"
    >
      <div
        class="schedule-carousel-card group relative transition-300 hover:saturate-150 cursor-pointer bg-cover rounded-lg overflow-hidden"
        loading="lazy"
        v-for="item in trip.schedule.filter((d) => d.label === showingDay)[0]
          .items"
        :style="`background-image:url('${item.imageUrl}')`"
        @click="showImage(item.imageUrl)"
      >
        <p
          class="color-primary w-full text-center text-3xl font-semibold absolute top-1/2 -translate-y-1/2"
          v-if="item.type === 'OR'"
        >
          OR
        </p>
        <h1 class="text-center text-secondary font-light text-xl mt-2">
          {{ item.theme }}
        </h1>
        <p
          class="absolute bottom-0 py-2 text-secondary w-full text-center group-hover:opacity-0 transition-300 bg-[rgba(var(--foreground),0.7)]"
          :class="item.type === 'OR' ? 'hidden' : ''"
        >
          {{ item.description }}
        </p>
      </div>
      <div class="w-4"></div>
    </div>
  </section>
  <section v-if="false">
    <section id="day1" class="day p-page flex flex-col gap-y-10">
      <h1 class="heading">Day 1</h1>
      <div class="flex flex-row">
        <div
          class="basis-1/2 flex flex-col relative justify-center items-center"
        >
          <h2 class="font-bold text-3xl opacity-75">Leisure</h2>
          <p class="absolute bottom-0 font-medium text-lg">
            Visit mall road to have sceneric beauty of old British
            infrastructure and church and to enjoy sun set from ridge
          </p>
        </div>
        <div class="basis-1/2">
          <img
            src="/images/trips/healing-touch/image1.webp"
            alt="British Infrastructure and Church"
            class="w-full object-cover"
          />
        </div>
      </div>
      <div class="flex flex-row-reverse">
        <div
          class="basis-1/2 flex flex-col relative justify-center items-center"
        >
          <h2 class="font-bold text-3xl opacity-75">Spiritual</h2>
          <p class="absolute bottom-0 font-medium text-lg">
            Visit kalibadi temple, to visit jakhu temple, to visit tara devi
            temple ,to visit sankat mochan temple.
          </p>
        </div>
        <div class="basis-1/2">
          <img
            src="/images/trips/healing-touch/image3.webp"
            alt="British Infrastructure and Church"
            class="w-full object-cover object-top"
          />
        </div>
      </div>
      <div class="flex flex-row">
        <div
          class="basis-1/2 flex flex-col relative justify-center items-center"
        >
          <h2 class="font-bold text-3xl opacity-75">Heritage</h2>
          <p class="absolute bottom-0 font-medium text-lg">
            Visit advance studies of old heritage study center, anadaile army
            museum
          </p>
        </div>
        <div class="basis-1/2">
          <img
            src="/images/trips/healing-touch/image2.webp"
            alt="British Infrastructure and Church"
            class="w-full object-cover"
          />
        </div>
      </div>
    </section>
    <section id="day2" class="day p-page flex flex-col gap-y-10">
      <h1 class="heading">Day 2</h1>
      <div class="flex flex-row">
        <div
          class="basis-1/2 flex flex-col relative justify-center items-center"
        >
          <h2 class="font-bold text-3xl opacity-75">Adventure</h2>
          <p class="absolute bottom-0 font-medium text-lg">
            Adventure activities to visit kuffri for horse riding and indoor
            park actiivites and Zoo to see snow leopard and black bear and this
            is one such place and it is also known as shimla's sports capital
            due to the same reason.(stay in hotel naldehra/mashobra
          </p>
        </div>
        <div class="basis-1/2">
          <img
            src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/7/2017/02/18064741/180217_HorseRiding01.jpg"
            alt="British Infrastructure and Church"
            class="w-full object-cover"
          />
        </div>
      </div>
      <h5 class="color-primary text-center font-medium text-3xl">OR</h5>
      <div class="flex flex-row-reverse">
        <div
          class="basis-1/2 flex flex-col relative justify-center items-center"
        >
          <h2 class="font-bold text-3xl opacity-75">Nature</h2>
          <p class="absolute bottom-0 font-medium text-lg">
            short drive to naldhera ,mashobra ,koti chail, , hot spring
            tattapani and visit shilaroo(netaji subhash high altitude training
            centre) (stay in hotel at naldehra
          </p>
        </div>
        <div class="basis-1/2">
          <img
            src="/images/trips/healing-touch/image20.webp"
            alt="British Infrastructure and Church"
            class="w-full object-cover object-top"
          />
        </div>
      </div>
    </section>
    <section id="day3" class="day p-page flex flex-col gap-y-10">
      <h1 class="heading">Day 3</h1>
      <div class="flex flex-row">
        <div
          class="basis-1/2 flex flex-col relative justify-center items-center"
        >
          <h2 class="font-bold text-3xl opacity-75">Leisure</h2>
          <p class="absolute bottom-0 font-medium text-lg">
            Visit sirolsar lake and the head towards jibhi and tirthan and then
            reach by evening at kasol.(homestay jibhi/tirthan at muud and wood
            traditional houses )
          </p>
        </div>
        <div class="basis-1/2">
          <img
            src="/images/trips/healing-touch/image20.webp"
            alt="British Infrastructure and Church"
            class="w-full object-cover"
          />
        </div>
      </div>
    </section>
    <section id="day4" class="day p-page flex flex-col gap-y-10">
      <h1 class="heading">Day 4</h1>
      <div class="flex flex-row-reverse">
        <div
          class="basis-1/2 flex flex-col relative justify-center items-center"
        >
          <h2 class="font-bold text-3xl opacity-75">Art & Culture</h2>
          <p class="absolute bottom-0 font-medium text-lg">
            Visit great himalayan national park which is under UNESCO world
            heritage site and do bird watching.
          </p>
        </div>
        <div class="basis-1/2">
          <img
            src="/images/trips/healing-touch/image4.webp"
            alt="British Infrastructure and Church"
            class="w-full object-cover"
          />
        </div>
      </div>
    </section>
    <section id="day5" class="day p-page flex flex-col gap-y-10">
      <h1 class="heading">Day 5</h1>
      <div class="flex flex-col">
        <h2 class="font-bold text-3xl opacity-75">Leisure</h2>
        <p class="font-medium text-lg">Relax at tirthan valley</p>
      </div>
    </section>
    <section id="day6" class="day p-page flex flex-col gap-y-10">
      <h1 class="heading">Day 6</h1>
      <div class="flex flex-col">
        <h2 class="font-bold text-3xl opacity-75">Homestay</h2>
        <p class="font-medium text-lg">
          sissu stay in cold weather with snow capped mountain view
        </p>
      </div>
    </section>
    <section id="day7" class="day p-page flex flex-col gap-y-10">
      <h1 class="heading">Day 7</h1>
      <div class="flex flex-col">
        <h2 class="font-bold text-3xl opacity-75">End</h2>
        <p class="font-medium text-lg">Leave back to Chandigarh</p>
      </div>
    </section>
    <section class="stay p-page">
      <h1 class="mt-8 text-center font-bold text-3xl">
        Concered about <span class="color-primary"> Stay </span> options?
      </h1>
      <p class="text-center my-5 text-lg">
        Here are all the stays we provide :
      </p>
      <hr />
      <hr class="my-5" />
      <p class="text-center font-semibold text-lg">Mashobra Shimla</p>
      <div class="flex flex-row flex-wrap justify-center gap-2">
        <img
          src="/images/trips/healing-touch/image6.webp"
          alt="mashobra shimla"
        />
        <img
          src="/images/trips/healing-touch/image8.webp"
          alt="mashobra shimla"
        />
        <img
          src="/images/trips/healing-touch/image10.webp"
          alt="mashobra shimla"
        />
        <img
          src="/images/trips/healing-touch/image11.webp"
          alt="mashobra shimla"
        />
        <img
          src="/images/trips/healing-touch/image12.webp"
          alt="mashobra shimla"
        />
        <img
          src="/images/trips/healing-touch/image13.webp"
          alt="mashobra shimla"
        />
      </div>
      <hr class="my-5" />
      <p class="text-center font-semibold text-lg">Sissu atal tunnel lahaul</p>
      <div class="stay-images flex flex-row flex-wrap justify-center gap-2">
        <img
          src="/images/trips/healing-touch/image14.webp"
          alt="sissu atal tunnel lahaul"
        />
        <img
          src="/images/trips/healing-touch/image15.webp"
          alt="sissu atal tunnel lahaul"
        />
        <img
          src="/images/trips/healing-touch/image16.webp"
          alt="sissu atal tunnel lahaul"
        />
        <img
          src="/images/trips/healing-touch/image17.webp"
          alt="sissu atal tunnel lahaul"
        />
      </div>
      <hr class="my-5" />
      <p class="text-center font-semibold text-lg">Tirthan Valley</p>
      <div class="stay-images flex flex-row flex-wrap justify-center gap-2">
        <img
          src="/images/trips/healing-touch/image18.webp"
          alt="sissu atal tunnel lahaul"
        />
        <img
          src="/images/trips/healing-touch/image19.webp"
          alt="sissu atal tunnel lahaul"
        />
        <img
          src="/images/trips/healing-touch/image20.webp"
          alt="sissu atal tunnel lahaul"
        />
        <img
          src="/images/trips/healing-touch/image21.webp"
          alt="sissu atal tunnel lahaul"
        />
      </div>
    </section>
  </section>
  <section class="info p-page py-10">
    <div class="catchphrase">
      <h2 class="text-3xl font-semibold mobile:text-center mobile:pb-5">
        {{ trip.punchline }}
      </h2>
      <p class="my-4 text-lg font-light mobile:text-justify">
        {{ trip.summary }}
      </p>
    </div>
    <div id="gallery-carousel" class="flex flex-row overflow-x-scroll gap-x-8">
      <img
        class="h-[30vh] object-cover rounded-xl cursor-pointer transition-300 hover:scale-[98%] hover:shadow-2xl mobile:h-[20vh]"
        loading="lazy"
        v-for="image in trip.gallery"
        :src="image"
        :alt="`${trip.name}_gallery-${trip.gallery.indexOf(image)}`"
        @click="showImage(image)"
      />
    </div>
    <div
      class="flex flex-row justify-between mt-16 mobile:flex-col mobile:gap-y-10"
    >
      <div class="basis-[45%] mobile:basis-auto">
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
    <p class="text-center text-primary text-lg opacity-80 mobile:text-justify">
      We make sure you get a choice in almost everything, here are some common
      concerns travellers have and the choices we provide as answers to them
    </p>
    <div
      class="flex flex-row justify-between mt-16 mobile:flex-col mobile:gap-y-8"
    >
      <div class="basis-[30%] mobile:basis-full">
        <h2 class="text-2xl font-semibold mb-4 mobile:text-center">
          Where will I <span class="color-primary">Stay</span> ?
        </h2>
        <ul class="flex px-6 text-lg flex-col list-disc mobile:text-justify">
          <li v-for="s in trip.stay" class="my-1">{{ s }}</li>
        </ul>
      </div>
      <div class="basis-[30%]">
        <h2 class="text-2xl font-semibold mb-4 mobile:text-center">
          How will I <span class="color-primary">Travel</span> ?
        </h2>
        <ul class="flex px-6 text-lg flex-col list-disc mobile:text-justify">
          <li v-for="t in trip.travel" class="my-1">{{ t }}</li>
        </ul>
      </div>
      <div class="basis-[30%] mobile:text-center">
        <h2 class="text-2xl font-semibold mb-4">
          What about <span class="color-primary">Food</span> ?
        </h2>
        <ul class="flex px-6 text-lg flex-col list-disc mobile:text-justify">
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
    <div
      class="feature-cards flex flex-row flex-wrap justify-between my-20 mobile:flex-col"
    >
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
          <p class="py-4 pr-48 mobile:px-0">{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="contact p-page">
    <hr class="my-14" />
    <h2 class="text-center text-3xl text-primary font-bold mb-8">
      Still <span class="color-primary">Confused?</span>
      <br class="mobile-only" />
      Let's
      <span class="color-primary">Discuss</span>
    </h2>
    <div class="flex flex-row my-16 mobile:flex-col">
      <div class="basis-1/2">
        <img
          src="/images/confused.webp"
          class="w-full h-full obejct-cover"
          alt="confused? let's discuss"
        />
      </div>
      <div class="basis-1/2 flex flex-col justify-center items-center">
        <p
          class="px-8 text-lg opacity-70 text-center mobile:text-justify mobile:my-5"
        >
          Too many options to choose from? Not finding what you're looking for?
          Tell us! We've helped our traveller friends out with the most offbeat
          travel requests.
        </p>
        <NuxtLink to="/contact" class="btn-primary">Contact Us</NuxtLink>
      </div>
    </div>
  </section>
  <section
    v-if="similarTrips && similarTrips.length"
    class="similar-trips p-page"
  >
    <hr class="my-14" />
    <h2 class="text-center text-3xl text-primary font-bold mb-8">
      <span class="color-primary">Similar</span> Trips You'll
      <span class="color-primary">Love</span>
    </h2>
    <div
      class="similar-trips-carousel auto-cols-[20%] mobile:auto-cols-[70%] overscroll-auto scroll-smooth snap-x snap-mandatory relative grid grid-flow-col overflow-x-auto overflow-y-hidden gap-6"
    >
      <NuxtLink
        class="basis-[18%] aspect-[12/17] mobile:basis-[45%] mobile:aspect-[12/11] my-4"
        v-for="trip in similarTrips"
        :key="trip.id"
        :to="`/trips/${trip.id}`"
      >
        <Card1 :text="trip.name" :imageUrl="trip.thumbnailUrl" cover="true" />
      </NuxtLink>
    </div>
  </section>
  <section
    class="modal cursor-pointer fixed z-[999] top-0 left-0 h-screen w-full hidden justify-center items-center bg-[rgba(var(--foreground),0.8)]"
    @click="hideImage()"
  >
    <img
      :src="modalImage"
      class="rounded-2xl max-h-[80vh] max-w-[80vw]"
      :alt="modalImage"
    />
  </section>
</template>

<script setup>
import { useSeoMeta } from '@unhead/vue';

const { id } = useRoute().params;
const { data: trip } = await useFetch(`/api/trips/${id}`);
const { data: similarTrips } = await useFetch(
  `/api/trips/search?query=${trip._rawValue.themes.join(" ")}`
);

let showingDay = ref(
  trip._rawValue.schedule && trip._rawValue.schedule.length > 0
    ? trip._rawValue.schedule[0].label
    : ""
);

if (!trip.value) {
  throw createError({ statusCode: 404, statusMessage: "trip not found" });
}

let modalImage = ref(trip._rawValue.gallery[0]);
let showImage = () => {},
  hideImage = () => {};

onMounted(() => {
  const imageModal = document.querySelector(".modal");
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

  const galleryCarousel = document.getElementById("gallery-carousel");

  function startGalleryAutoScroll() {
    setInterval(() => {
      galleryCarousel.scrollBy({ left: 1 }); // behavior: "smooth" });
    }, 40);

    showImage = (image) => {
      modalImage.value = image;
      imageModal.classList.remove("hidden");
      imageModal.classList.add("flex");
    };

    hideImage = () => {
      imageModal.classList.remove("flex");
      imageModal.classList.add("hidden");
    };
  }
  startGalleryAutoScroll();
});

useSeoMeta({
  title: ()=>`${trip.value.name} - ShantiTrip Holidays`,
  ogTitle: ()=>`${trip.value.name} - ShantiTrip Holidays`,
  description:
  ()=>`${trip.value.description}`,
  ogDescription:()=>`${trip.value.description} - ShantiTrip Holidays`,
  ogImage: ()=>`${trip.value.thumbnailUrl}`,
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
.hero-title {
  text-shadow: 0px 0px 13px rgba(var(--text-primary), 0.69);
}
.schedule-carousel::-webkit-scrollbar {
  display: none;
}
.schedule-carousel-card {
  scroll-snap-align: start;
}
.schedule-carousel-card h1 {
  text-shadow: 0px -1px 3px rgb(var(--text-primary)),
    -1px 0px 3px rgb(var(--text-primary)), 1px 0px 3px rgb(var(--text-primary)),
    0px 1px 3px rgb(var(--text-primary));
}
.schedule-carousel-navigation button {
  @apply bg-background border border-black px-6 color-primary text-2xl transition-300 hover:bg-primary hover:text-secondary active:opacity-30;
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
.modal img {
  box-shadow: 0px 0px 1rem rgba(var(--text-secondary), 0.3);
}
</style>
