<template>
  <div
    class="fixed top-0 left-0 h-screen w-screen z-[999] flex flex-col gap-6 justify-center items-center backdrop-blur-lg bg-[#0a0a0a69]"
    v-if="loading"
  >
    <div class="spinner">
      <div class="spinner-in"></div>
    </div>
    <p class="loading-text">Loading</p>
  </div>

  <Navbar />
  <slot />
  <Footer />
</template>

<script setup>
const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>

<style scoped>
.spinner {
  border: 0.5rem dotted #ffffff;
  border-radius: 50%;
  width: 20vh;
  height: 20vh;
  padding: 2rem;
  animation: spinner-anim 1500ms infinite;
}
.spinner-in {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #ffffff;
}
.loading-text {
  color: #ffffff;
  font-weight: 400;
  font-size: 1.4rem;
}
@keyframes spinner-anim {
  from {
    rotate: 0deg;
  }
  to {
    rotate: 720deg;
  }
}
</style>
