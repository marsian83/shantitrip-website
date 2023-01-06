<template>
  <div class="mt-7 max-w-sm mx-auto text-center">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-5 text-5xl">Ooooops!</p>
    <p class="mt-5">{{ error.message }}</p>
    <button @click="handleClearError">Go home</button>
  </div>
</template>

<script setup>
const { error } = defineProps(["error"]);

const handleClearError = () => clearError({ redirect: "/" });
</script>

<style scoped></style>
