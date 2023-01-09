<template>
  <div class="card w-full h-full">
    <h2 class="text-secondary my-2 text-lg">{{ text }}</h2>
    <img
      :src="imageUrl"
      class="rounded-lg overflow-hidden shadow-2xl"
      :alt="`trip - ${text}`"
    />
  </div>
</template>

<script setup>
const props = defineProps(["text", "imageUrl"]);
</script>
<style scoped>
.card {
  scroll-snap-align: start;
}
</style>
