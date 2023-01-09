export default defineEventHandler(async (event) => {
  try {
    const destinations = await $fetch("/api/destinations");
    return destinations.filter(
      (d) => d.id === Number(event.context.params.id)
    )[0];
  } catch (err) {
    console.log(err);
    return { code: 1, message: "Something went wrong", error: err };
  }
});
