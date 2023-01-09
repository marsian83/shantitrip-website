export default defineEventHandler(async (event: any): Promise<any> => {
  try {
    let { query }: { query: string } = getQuery(event);
    query = query && query.toLowerCase().split(" ");
    const trips = await $fetch("/api/trips");
    if (!query || query == "") {
      return trips;
    }
    let response: any[] = [];
    for (const q of query) {
      response = trips.filter(
        (t: any) =>
          t.tags.toLowerCase().includes(q) ||
          t.themes.join(",").toLowerCase().includes(q) ||
          t.places.join(",").toLowerCase().includes(q) ||
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q)
      );
    }
    return response;
  } catch (err) {
    console.log(err);
    return { code: 1, message: "Something went wrong", error: err };
  }
});
