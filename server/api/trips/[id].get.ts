export default defineEventHandler(async (event) => {
  try {
    const trips = await $fetch("/api/trips");
    return trips.filter((t) => t.id === Number(event.context.params.id))[0];
  } catch (err) {
    console.log(err);
    return { code: 1, message: "Something went wrong", error: err };
  }
});
