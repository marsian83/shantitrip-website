<template>
  <section
    class="hero p-page h-screen bg-cover bg-center flex flex-col justify-center items-center"
  >
    <div
      class="text-secondary text-7xl self-start font-bold flex flex-col gap-5"
    >
      <h2>Not your standardized,</h2>
      <h2>stifling tour package.</h2>
    </div>
    <p class="text-secondary text-xl self-start py-6 pr-[50%] font-medium">
      Even with our pre-made trips, there's plenty of space to play around. We
      try to accommodate all your wishes to the best of our capacity and
      know-how.
    </p>
  </section>
  <div
    class="search p-page flex flex-row gap-6 py-16 justify-center items-center"
  >
    <input
      id="searchbar"
      type="text"
      placeholder="Search by name, theme, destination, accomodation etc..."
      class="basis-2/3"
    /><span class="material-icons font-black text-3xl ml-[-4rem] opacity-70"
      >&#xe8b6;</span
    >
  </div>
  <section class="trips p-page py-10">
    <div class="trip-cards flex flex-row flex-wrap justify-evenly gap-y-10 p-0">
      <div class="basis-[45%] trip-card" v-for="trip in trips">
        <TripCard :trip="trip" />
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: tripsData } = await useFetch("/api/trips");
let trips = ref(tripsData._rawValue);
async function renderSearchResults(query) {
  trips.value = tripsData._rawValue;
  if (query && query != "") {
    trips.value = trips.value.filter(
      (t) =>
        t.themes.join(",").toLowerCase().includes(query) ||
        t.stay.join(",").toLowerCase().includes(query) ||
        t.places.join(",").toLowerCase().includes(query) ||
        t.tags.toLowerCase().includes(query) ||
        t.name.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query)
    );
  }
}

onMounted(() => {
  var searchbar = document.getElementById("searchbar");

  var searchTimer = setTimeout(function () {
    renderSearchResults(searchbar.value);
  }, 800);

  searchbar.addEventListener("input", function () {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function () {
      renderSearchResults(searchbar.value);
    }, 800);
  });
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
    url("https://cdn.pixabay.com/photo/2018/04/27/08/56/water-3354063_1280.jpg");
}
.hero {
  text-shadow: 0px 0px 13px rgba(var(--text-primary), 0.91);
}
input {
  @apply rounded-lg px-4 py-2 text-xl;
  border: 2px solid rgba(var(--foreground), 0.69);
}
.search-action {
  @apply text-xl text-primary;
}
.trip-card {
  transition: 400ms ease;
}
.trip-card:hover {
  transform: scale(1.03) translateY(-1%);
}
</style>
