import Post from "@models/Post";
import User from "@models/User";
import apiHandler from "@utils/apiHandler";
import { NextApiRequest, NextApiResponse } from "next";

const createPost = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, subTitle, email, content, image } = req.body;

  const user = await User.findOne({ email });

  const post = await Post.create({ title, subTitle, content, user: user._id, coverImage: image });

  res.status(201).json({ data: post });
};

const getAllPosts = async (req, res) => {
  let query: any = {};

  if (req.query.email) {
    const user = await User.findOne({ email: req.query.email });

    query.user = user._id;
  }

  const posts = await Post.find(query);

  res.status(200).json({ data: posts });
};

export default apiHandler({
  get: getAllPosts,
  post: createPost,
});
