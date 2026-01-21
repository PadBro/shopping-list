import mongoose from "mongoose";
import app from "./app.ts";

mongoose.connect(process.env.MONGO_URI!).then(() => {
  app.listen(3000, () => console.log("API running on :3000"));
});
