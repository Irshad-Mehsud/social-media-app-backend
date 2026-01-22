import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// import chalk from "chalk"; // Removed optional dependency
import routes from "./routes/index.js";

// Initialize express app FIRST
const app = express();

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://your-frontend-domain.vercel.app"], // Add your production frontend domain here
    credentials: true,
  })
);

// Define Root Route BEFORE /api to ensure it works even if DB fails
app.get("/", (req, res) => {
  res.status(200).send("Backend is running successfully! (Root Path)");
});

const ENV = process.env;

// DB Connection - async, non-blocking for server initialization
const connectDB = async () => {
    if (!ENV.DB_USER || !ENV.DB_PASSWORD || !ENV.DB_NAME) {
      console.error("ERROR: Missing MongoDB environment variables.");
      return;
    }

    try {
        await mongoose.connect(
            `mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASSWORD}@irshadcluster.w5dqwxs.mongodb.net/${ENV.DB_NAME}?retryWrites=true&w=majority&appName=IrshadCluster`
        );
        console.log("------Connected to MongoDB----");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
};

// Start DB connection
connectDB();

app.use("/api", routes);

// ✅ Export for Vercel serverless function
export default app;

// ✅ Local server (only runs locally, not on Vercel)
if (process.env.NODE_ENV !== "production") {
  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
}
