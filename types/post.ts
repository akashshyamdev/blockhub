import { IUser } from "@customTypes/user";
import { Document } from "mongoose";

export interface IPost extends Document {
  title: string;
  subTitle: string;
  content: string;
  name: string;
  email: string;
  user: IUser;
}
