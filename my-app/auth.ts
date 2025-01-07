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
          refresh_token: account.refresh_token,
        });
        console.log(token);
      }

      //if access token has expired
      if (Date.now() > (token.expires_at as number) * 1000) {
        try {
          const response = await fetch(
            "https://accounts.spotify.com/api/token",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${Buffer.from(
                  `${process.env.AUTH_SPOTIFY_ID}:${process.env.AUTH_SPOTIFY_SECRET}`
                ).toString("base64")}`,
              },
              body: new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: token.refresh_token as any,
              }),
            }
          );

          const refreshedTokens = await response.json();

          if (!response.ok) {
            throw refreshedTokens;
          }

          return {
            ...token,
            access_token: refreshedTokens.access_token,
            expires_at: Math.floor(
              Date.now() / 1000 + refreshedTokens.expires_in
            ),
          };
        } catch (error) {
          console.error("Error refreshing access token", error);
          return { ...token, error: "RefreshAccessTokenError" };
        }
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
