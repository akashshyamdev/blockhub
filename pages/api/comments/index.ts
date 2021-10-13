import Comment from "@models/Comment";
import apiHandler from "@utils/apiHandler";
import { NextApiRequest, NextApiResponse } from "next";

const createComment = async (req: NextApiRequest, res: NextApiResponse) => {
  const { content, depth, parentId, postId, userId } = req.body;

  const comment = await Comment.create({
    content,
    depth,
    post: postId,
    user: userId,
    parent: parentId,
  });

  res.status(201).json({ data: comment });
};

export default apiHandler({
  post: createComment,
});
