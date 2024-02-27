// src/app/api/auth/[...nextauth]/route.ts

import bcrypt from "bcrypt";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./db";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.password || !credentials?.email) {
          return null;
        }

        const user = await db.user.findFirst({
          where: {
            email: credentials?.email,
          },
        });

        if (
          user &&
          (await bcrypt.compare(credentials.password, user.password))
        ) {
          return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    //Usally not needed
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          isAdmin: user.isAdmin,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          isAdmin: token.isAdmin,
        },
      };
      // if (session && token) {
      //   session.user.id = token.id;
      //   session.user.isAdmin = user.isAdmin;
      // }
      // return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
