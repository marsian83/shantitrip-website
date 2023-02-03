import NewsletterSubscription from "~~/server/models/NewsletterSubscription";

export default defineEventHandler(async (event) => {
  return NewsletterSubscription.find();
});
