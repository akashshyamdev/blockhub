import { Model, model, models, Schema } from "mongoose";
import { IUser } from "../types/user";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User: Model<IUser> = models.User || model<IUser>("User", userSchema);

export default User;
