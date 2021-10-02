import { connect } from "mongoose";

export function connectDB() {
  const formattedUrl = process.env.DB_URL.replace(
    "<user>",
    process.env.DB_USER
  ).replace("<password>", process.env.DB_PASSWORD);

  return connect(formattedUrl, {});
}
