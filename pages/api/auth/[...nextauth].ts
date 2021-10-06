import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { connectDB } from "../../../middleware/database";
import User from "../../../models/User";

const MONGODB_URI = process.env.DB_URL.replace("<user>", process.env.DB_USER).replace(
  "<password>",
  process.env.DB_PASSWORD
);

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
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

  database: MONGODB_URI,
  callbacks: {
    session: async (session, user) => {
      session.id = user.id;
      return Promise.resolve(session);
    },
  },
});
