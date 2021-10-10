import { IPost } from "@customTypes/post";
import { Model, model, models, Schema, Types } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please specify a title"],
    },
    subTitle: {
      type: String,
      required: [true, "Please specify a sub title"],
    },
    content: {
      type: String,
      required: [true, "Please specify markdown content"],
    },
    user: {
      type: Types.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Post: Model<IPost> = models.Post || model<IPost>("Post", postSchema);

export default Post;
