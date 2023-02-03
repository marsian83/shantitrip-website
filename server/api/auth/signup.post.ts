import User from "~~/server/models/User";

export default defineEventHandler(async (event) => {
  try {
    const { email, password, name } = await readBody(event);

    const newUser = new User({ name: name, email: email, password: password });
    await newUser.save();

    setCookie(event, "STH-auth", newUser.name);

    return { code: 0, message: "success" };
  } catch (err) {
    return { code: 1, message: "failed to signup", error: err };
  }
});
