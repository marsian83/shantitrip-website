import db from "~~/server/dbconfig";

export default defineEventHandler(async (event) => {
  try {
    const { email } = await readBody(event);
    await db.newsletterSubscription.create({ data: { email: email } });
    return { code: 0, message: "success" };
  } catch (err) {
    return { code: 1, message: "failed to store data", error: err };
  }
});
