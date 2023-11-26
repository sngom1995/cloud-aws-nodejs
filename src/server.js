import express from "express";
import { tweetsRouter } from "./routes/tweetsRoutes.js";
import { imagesRouter } from "./routes/imageRoutes.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", tweetsRouter);
app.use("/api", imagesRouter);

app.listen(3000, () => {
  console.log("app listening on port 3000!");
});
