import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  prviders: [
    GoogleProvider({
      clientId: "",
      ClientSecret: "",
    }),
  ],
  async session({ session }) {},

  async signin({ profile }) {},
});

export { handler as GET, handler as POST };
