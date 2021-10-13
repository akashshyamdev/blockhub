import { IComment } from "@customTypes/comment";
import { Model, model, models, Schema, Types } from "mongoose";

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, "A comment must have some content"],
    },
    post: {
      type: Types.ObjectId,
      required: [true, "A comment must belong to a post"],
      ref: "Post",
    },
    depth: {
      type: Number,
      default: 1,
    },
    parentId: {
      type: Types.ObjectId,
      ref: "Comment",
    },
    user: {
      type: Types.ObjectId,
      required: [true, "A comment must be written by a user"],
      ref: "User",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

const Comment: Model<IComment> = models.Comment || model<IComment>("Comment", commentSchema);

export default Comment;
