import { Handler } from "@customTypes/http";
import { connectDB } from "@middleware/mongoose";
import errorHandler from "@utils/errorHandler";
import { NextApiRequest, NextApiResponse } from "next";

export default function apiHandler(handler: Handler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const method = req.method.toLowerCase();

    // check handler supports HTTP method
    if (!handler[method])
      return res.status(405).json({ message: `Method ${req.method} Not Allowed` });

    try {
      // global middleware
      await connectDB();

      // route handler
      await handler[method](req, res);
    } catch (err) {
      // global error handler
      errorHandler(err, res);
    }
  };
}
