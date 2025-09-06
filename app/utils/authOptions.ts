
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions : NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: { label: "Phone", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // 🔹 তোমার নিজের backend এ login call
        const res = await fetch("http://localhost:5555/api/v1/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });

        const data = await res.json();

        if (data?.success) {
          return {
            id: data.data.user._id,
            name: data.data.user.name.firstName + " " + data.data.user.name.lastName,
            email: data.data.user.email,
            phone: data.data.user.phone,
            accessToken: data.data.accessToken,
            refreshToken: data.data.refreshToken,
            role: data.data.user.role,
          };
        }

        return null;
      },
    }),
  ],
  pages : {
    signIn : "/login"
  },
  secret: process.env.NEXTAUTH_SECRET,
}
