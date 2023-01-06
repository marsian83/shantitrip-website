<template>
  <section
    class="hero p-page h-screen bg-cover bg-center flex flex-col justify-center items-center"
  >
    <div class="text-secondary text-7xl self-start font-extrabold">
      <h2>Not your standardized,</h2>
      <h2>stifling tour package.</h2>
    </div>
    <p class="text-secondary text-xl self-start py-6 pr-[50%] font-medium">
      Even with our pre-made trips, there's plenty of space to play around. We
      try to accommodate all your wishes to the best of our capacity and
      know-how.
    </p>
  </section>
  <section class="trips p-page py-16">
    <div class="search flex flex-row gap-6">
        <input type="text" placeholder="Start typing to Search..." class="basis-[60%]">
        <button class="search-action">Filter</button>
        <button class="search-action">Sort</button>
    </div>
  </section>
</template>

<script setup></script>

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
.hero{
    text-shadow: 0px 0px 13px rgba(var(--text-primary),0.91);
}
input{
    @apply rounded-lg px-4 py-2 text-xl;
    border: 2px solid rgba(var(--foreground),0.69)
}
.search-action{
    @apply text-xl text-primary;
}
</style>
