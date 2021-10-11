import mongoose from "mongoose";

export function connectDB() {
  const formattedUrl = process.env.DB_URL.replace("<user>", process.env.DB_USER).replace(
    "<password>",
    process.env.DB_PASSWORD
  );

  if (mongoose.connection.readyState >= 1) {
    // if connection is open return the instance of the database for faster queries
    return mongoose.connection.db;
  }

  return mongoose.connect(formattedUrl);
}
