import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../middleware/database";
import User from "../../../models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  const { email, password } = req.body;

  const newUser = await User.create({ email, password });

  return res.status(201).json({
    data: newUser,
  });
}
