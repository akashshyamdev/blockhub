import Post from "@models/Post";
import User from "@models/User";
import apiHandler from "@utils/apiHandler";
import { NextApiRequest, NextApiResponse } from "next";

const addLike = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  const { slug } = req.query;

  const user = await User.findOne({ email });

  const post = await Post.updateOne(
    { slug: slug as string },
    { $push: { likes: user._id } },
    { new: true }
  );

  res.status(200).json({ data: post });
};

export default apiHandler({ post: addLike });
