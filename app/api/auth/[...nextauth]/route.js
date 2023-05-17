import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@utils/database";
import User from "@models/user";
/* This code is setting up authentication using NextAuth and the GoogleProvider. It is defining two
functions, `session` and `signin`, which handle user sessions and sign-ins respectively. The
`session` function looks up the user in the database based on their email and sets their ID in the
session object. The `signin` function checks if the user already exists in the database and creates
a new user if they don't. Finally, the code exports the `handler` function to be used as both a GET
and POST request. */
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      ClientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  async session({ session }) {
    const sessionUser = await User.findOne({
      email: session.user.email,
    });

    session.user.id = sessionUser._id.toString();

    return session;
  },

  async signin({ profile }) {
    try {
      // existe me connecto
      const userExist = await User.findOne({
        email: profile.email,
      });
      // no existe, lo creo y lo grabo en la base de datos
      if (!userExist) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(" ", "").toLowerCase(),
          image: profile.picture,
        });
      }
      return true;
    } catch (error) {
      console.log(error);
    }
  },
});

export { handler as GET, handler as POST };
