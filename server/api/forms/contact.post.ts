import ContactRequest from "~~/server/models/ContactRequest";

export default defineEventHandler(async (event) => {
  try {
    const { email, name, message } = await readBody(event);

    const newContact = new ContactRequest({
      email: email,
      name: name,
      message: message,
    });
    await newContact.save();

    return { code: 0, message: "success" };
  } catch (err) {
    return { code: 1, message: "failed to signup", error: err };
  }
});
