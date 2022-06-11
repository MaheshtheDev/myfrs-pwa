import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your Email",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const user = await prisma.users.findFirst({
          where: {
            email: credentials.email,
            password: credentials.password,
          },
        });
        if (user) {
          console.log("User is authorized");
          return user;
        } else {
          return new Error("Email Id and Password are Incorrect");
        }
      },
    }),
  ],
  jwt: {
    secret: "HAkgK8robvqlDKereJOpph0YX5/4KzmtEoidS36FrGA=",
  },
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    redirect: ({ url, baseUrl }) => {
      return baseUrl;
    },
    jwt: ({ token, user }) => {
      if (typeof user !== typeof undefined) token.user = user;
      return token;
    },
    session: ({ session, token }) => {
      token?.user && (session.user = token.user);

      return session;
    },
  },
  secret: "HAkgK8robvqlDKereJOpX5/4KzmtEoidS36FrGA=",
});
