<template>
  <div>
    <p>{{trip}}</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const { data } = (await useFetch("/trips.json"));
// console.log(data._rawValue);
const trip = data._rawValue.filter((t) => t.id == id);
</script>

<style scoped></style>
