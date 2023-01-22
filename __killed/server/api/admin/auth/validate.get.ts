export default defineEventHandler(async (event) => {
  const { adminCredentials } = useRuntimeConfig();

  const cookieToken = getCookie(event,'STH-admin');

  const validToken =
    `${adminCredentials.username}#${adminCredentials.password}`;
    
  return { valid: cookieToken === validToken };
});
