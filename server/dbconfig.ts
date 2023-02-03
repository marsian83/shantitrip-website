import mongoose from "mongoose";
mongoose.set("strictQuery", false);
mongoose.connect(useRuntimeConfig().DB_CONNECTION_URI);

export default mongoose;
