import Post from "@models/Post";
import User from "@models/User";
import apiHandler from "@utils/apiHandler";
import { NextApiRequest, NextApiResponse } from "next";

export const getAllPosts = async () => {
  return Post.find();
};

const createPost = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, subTitle, email, content, image } = req.body;

  const user = await User.findOne({ email });

  const post = await Post.create({ title, subTitle, content, user: user._id, coverImage: image });

  res.status(201).json({ data: post });
};

export default apiHandler({
  get: async (req, res) => {
    const posts = await getAllPosts();

    res.status(200).json({ data: posts });
  },
  post: createPost,
});
