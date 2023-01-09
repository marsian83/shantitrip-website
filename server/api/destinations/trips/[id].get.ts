export default defineEventHandler(async (event) => {
  const id = Number(event.context.params.id);
  const destination = await $fetch(`/api/destinations/${id}`);
  const response = await $fetch(`/api/trips/search`, {
    query: { query: destination.name },
  });
  return response;
});
