import NextAuth from "next-auth";
import Spotify from "next-auth/providers/spotify";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Spotify({
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-private user-read-email user-top-read playlist-read-private playlist-read-collaborative",
      clientId: process.env.AUTH_SPOTIFY_ID,
      clientSecret: process.env.AUTH_SPOTIFY_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 45 * 60, // 30 minutes in seconds
  },

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        return {
          ...token,
          access_token: account.access_token,
          refresh_token: account.refresh_token,
          expires_at: account.expires_at,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        access_token: token.access_token,
        refesh_token: token.refresh_token,
      };
    },
  },
});
