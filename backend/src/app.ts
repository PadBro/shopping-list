import express from "express";
import cors from "cors";
import itemsRouter from "./routes/items.ts";

const app = express();
app.use(cors());
app.use(express.json());
app.disable("etag");

app.use((_, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  next();
});

app.use("/items", itemsRouter);

export default app;
