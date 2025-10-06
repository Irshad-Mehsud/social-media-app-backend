import Express from "express";
import Mongoose from "mongoose";
import Cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import chalk from "chalk";
import routes from "./src/routes/index.js";
dotenv.config();

const app = Express();

app.use(Express.json());
app.use(Cors());

const ENV = process.env;

mongoose.connect(`mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASSWORD}@irshadcluster.w5dqwxs.mongodb.net/${ENV.DB_NAME}?retryWrites=true&w=majority&appName=IrshadCluster`);
mongoose.connection.on('connected', () => {
  console.log(chalk.white.bgGreen('------Connected to MongoDB----'));
});
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

app.use("/api", routes);

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});


