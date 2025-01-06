import NextAuth from "next-auth";
import Spotify from "next-auth/providers/spotify";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Spotify({
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-private user-read-email user-top-read",
    }),
  ],
  secret: process.env.JWT_SECRET,

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token = Object.assign({}, token, {
          access_token: account.access_token,
        });
      }
      return token;
    },
    async session({ session, token }) {
      if (session) {
        session = Object.assign({}, session, {
          access_token: token.access_token,
        });
        //console.log(session);
      }
      return session;
    },
  },
});
