import express from "express";
import appRouter from "./routes/endPoint.js";
const app = express();
const port = 3000; // You can change the port number if needed

app.use(express.json());

// Define a route
app.use("/api", appRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
