export default defineEventHandler(async (event) => {
  let { query }: { query: string } = getQuery(event);
  query = query && query.toLowerCase().split(" ");
  const gallery = await $fetch("/api/gallery");
  if (!query || query == "") {
    return gallery;
  }
  let response: any[] = [];
  for (const q of query) {
    response = gallery.filter((t: any) => t.tags.toLowerCase().includes(q));
  }
  return response;
});
