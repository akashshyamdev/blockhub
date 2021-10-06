import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { connectDB } from "../../../middleware/database";
import User from "../../../models/User";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials: { email: string; password: string }) {
        connectDB();

        const user = await User.findOne({ email: credentials.email });
        const isPasswordValid = await user.comparePasswords(credentials.password, user.password);

        if (!user || !isPasswordValid) throw new Error("Email or password is incorrect!");

        return { id: user._id };
      },
    }),
  ],
});
