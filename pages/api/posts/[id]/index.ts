import Post from "@models/Post";
import apiHandler from "@utils/apiHandler";
import { NextApiRequest, NextApiResponse } from "next";

const getPost = async (req: NextApiRequest, res: NextApiResponse) => {
  const post = await Post.findById(req.query.id).populate("user");

  res.status(200).json({ data: post });
};

export default apiHandler({
  get: getPost,
});
