import mongoose from "~~/server/dbconfig";

const ContactRequest = mongoose.model("ContactRequest", {
  name: { type: String },
  email: { type: String },
  message: { type: String },
});

export default ContactRequest;
