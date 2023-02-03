export default defineEventHandler((event) => {
  deleteCookie(event, "STH-auth");
  return { message: "Success" };
});
