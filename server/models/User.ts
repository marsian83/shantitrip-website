import mongoose from "~~/server/dbconfig";

const User = mongoose.model("User", {
  name: { type: String },
  email: { type: String, unique: true },
  password: String,
});

export default User;
