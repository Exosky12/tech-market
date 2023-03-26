import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

if (!clientId || !clientSecret) {
  throw new Error('Please define clientId and clientSecret')
}

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)