import express from "express";
import { tweetsRouter } from "./routes/tweetsRoutes.js";
import { imagesRouter } from "./routes/imageRoutes.js";
import authRouter from "./routes/authRoutes.js";

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", tweetsRouter);
app.use("/api", imagesRouter);
app.use("/api", authRouter);

app.listen(3000, () => {
  console.log("app listening on port 3000!");
});
