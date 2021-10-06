export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  comparePasswords(plainPassword: string, hashPassword: string): Promise<boolean>;
}
