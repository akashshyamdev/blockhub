import { connectDB } from "@middleware/mongoose";
import Post from "@models/Post";
import User from "@models/User";
import { NextApiRequest, NextApiResponse } from "next";

const getAllPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const posts = Post.find();

    res.status(200).json({ data: posts });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      err,
    });
  }
};

const createPost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { title, subTitle, email, content } = req.body;

    const user = await User.findOne({ email });

    const post = await Post.create({ title, subTitle, content, user: user._id });

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

  if (req.method === "GET") await getAllPosts(req, res);
  else if (req.method === "POST") await createPost(req, res);

  res.status(404).json({ message: "There is no route here" });
}
