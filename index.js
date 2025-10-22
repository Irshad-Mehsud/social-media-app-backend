import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import chalk from "chalk";
import serverless from "serverless-http";
import routes from "./src/routes/index.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // your frontend origin
    credentials: true,
  })
);

const ENV = process.env;

mongoose
  .connect(
    `mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASSWORD}@irshadcluster.w5dqwxs.mongodb.net/${ENV.DB_NAME}?retryWrites=true&w=majority&appName=IrshadCluster`
  )
  .then(() => console.log(chalk.white.bgGreen("------Connected to MongoDB----")))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// ✅ Export for Vercel serverless function
export const handler = serverless(app);

// ✅ Local server (only runs locally, not on Vercel)
if (process.env.NODE_ENV !== "production") {
  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
}
