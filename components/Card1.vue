<template>
  <div
    class="card rounded-2xl flex flex-col items-center justify-end py-2 text-secondary h-full"
    :style="`background-image:linear-gradient(to bottom, transparent, transparent, rgba(var(--text-primary),var(--gradient-opacity))), url('${imageUrl}')`"
  >
    <h5 class="text-secondary text-xl font-medium">
      {{ text }}
    </h5>
  </div>
</template>

<script setup>
const props = defineProps(["text", "imageUrl"]);
</script>

<style scoped>
.card {
  background-size: 100%;
  background-position: center;
  --gradient-opacity: 0.64;
  transition: 500ms;
}
.card:hover {
  --gradient-opacity: 0.69;
  background-size: 105%;
}
</style>
