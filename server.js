import mongoose from "mongoose";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config();

const { MY_MONGODB_URI, PORT = 3001 } = process.env;

mongoose
  .connect(MY_MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running. Use our API on port: ${PORT}`));
    console.log("Database connect successful");
  })
  .catch((err) => {
    console.log(`Server not running. Error message: ${err.message}`);
    process.exit(1);
  });