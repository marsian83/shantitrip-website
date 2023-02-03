import ContactRequest from "~~/server/models/ContactRequest";

export default defineEventHandler(async (event) => {
  return ContactRequest.find();
});
