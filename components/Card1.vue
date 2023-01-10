<template>
  <div
    class="card rounded-2xl flex flex-col items-center justify-end py-2 text-secondary h-full"
    :class="cover ? 'bg-cover' : ''"
    :style="`background-image:linear-gradient(to bottom, transparent, transparent, rgba(var(--text-primary),var(--gradient-opacity))), url('${imageUrl}')`"
  >
    <h5 class="text-secondary text-xl font-medium">
      {{ text }}
    </h5>
  </div>
</template>

<script setup>
const props = defineProps(["text", "imageUrl", "cover"]);
</script>

<style scoped>
.card {
  --gradient-opacity: 0.64;
  transition: 500ms;
  background-position: center;
}
.card:hover {
  @apply cursor-pointer;
  --gradient-opacity: 0.69;
}
.card.bg-cover:hover {
  filter: contrast(1.1) brightness(0.9) saturate(1.5);
}
.card:not(.bg-cover) {
  background-size: 100%;
}
.card:not(.bg-cover):hover {
  background-size: 105%;
}
</style>
