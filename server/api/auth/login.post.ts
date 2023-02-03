import User from "~~/server/models/User";

export default defineEventHandler(async (event) => {
  try {
    const { email, password } = await readBody(event);

    const user = await User.findOne({ email: email, password: password });

    if (user) {
      setCookie(event, "STH-auth", user.name);
      return { code: 0, message: "success" };
    } else {
      deleteCookie(event, "STH-auth");
      return { code: 403, message: "Invalid credentials" };
    }
  } catch (err) {
    return { code: 1, message: "failed to login", error: err };
  }
});
