export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event);

  const { adminCredentials } = useRuntimeConfig();

  if (
    username === adminCredentials.username &&
    password === adminCredentials.password
  ) {
    const cookieToken = `${username}#${password}`;

    setCookie(event, "STH-admin", cookieToken);

    return { message: "authenticated", code: 0 };
  }

  return { message: "invalid credentials", code: 1 };
});
