import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import appRouter from "./routes/endPoint.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({ status: "OK" });
});

// Define a route
app.use("/api", appRouter);

const port = process.env.PORT || 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
