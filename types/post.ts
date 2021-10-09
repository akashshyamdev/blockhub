import { IUser } from "@customTypes/user";
import { Document } from "mongoose";

export interface IPost extends Document {
  name: string;
  email: string;
  user: IUser;
}
