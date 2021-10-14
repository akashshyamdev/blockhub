import { IPost } from "@customTypes/post";
import { Model, model, models, Schema, Types } from "mongoose";
import slugify from "slugify";

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
    coverImage: String,
    user: {
      type: Types.ObjectId,
      ref: "User",
    },
    comments: [
      {
        type: Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

postSchema.virtual("slug").get(function () {
  return slugify(this.title, { replacement: "-", lower: true });
});

const Post: Model<IPost> = models.Post || model<IPost>("Post", postSchema);

export default Post;
