import { connectDB } from "@middleware/mongoose";
import Post from "@models/Post";
import User from "@models/User";
import { NextApiRequest, NextApiResponse } from "next";

const createPost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { title, subTitle, email, content } = req.body;


    const user = await User.findOne({ email });

    const post = await Post.create({ title, subTitle, content, user: user._id });

    console.log(post);

    res.status(201).json({ data: post });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      err,
    });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === "POST") createPost(req, res);
}
