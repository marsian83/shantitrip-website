export default defineEventHandler((event) => {
  try {
    deleteCookie(event, "STH-admin");
    return { code: 0 };
  } catch {
    return { code: -1 };
  }
});
