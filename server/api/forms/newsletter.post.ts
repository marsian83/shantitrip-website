import NewsletterSubscription from "~~/server/models/NewsletterSubscription";

export default defineEventHandler(async (event) => {
  try {
    const { email } = await readBody(event);

    const newSub = new NewsletterSubscription({ email: email });
    await newSub.save();

    return { code: 0, message: "success" };
  } catch (err) {
    return { code: 1, message: "failed to signup", error: err };
  }
});
