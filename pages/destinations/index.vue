<template>
  {{ destinations }}
</template>

<script setup>
const { data: destinations } = await useFetch("/api/destinations");
</script>

<style scoped></style>
