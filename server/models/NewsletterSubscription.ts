import mongoose from "~~/server/dbconfig";

const NewsletterSubscription = mongoose.model("NewsletterSubscription", {
  email: { type: String, unique: true },
});

export default NewsletterSubscription;
