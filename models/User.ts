import bcrypt from "bcrypt";
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

userSchema.pre("save", function () {
  this.password = bcrypt.hash(this.password, 12);
});

userSchema.methods.correctPassword = async function (plainPassword, hashedPassword) {
  console.log(this.password);
  return await bcrypt.compare(plainPassword, hashedPassword);
};

const User: Model<IUser> = models.User || model<IUser>("User", userSchema);

export default User;
