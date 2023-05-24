import NextAuth, {DefaultSession, DefaultUser, NextAuthOptions, User} from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    id: string;
    accessToken: string;
  }
}

const authOptions: NextAuthOptions = {
    session: {
      strategy: 'jwt',
    },
    jwt: {
      secret: 'secret',
    },
    providers: [
      KakaoProvider({
        clientId: process.env.KAKAO_CLIENT_ID || '' as string,
        clientSecret: process.env.KAKAO_CLIENT_SECRET || '' as string,
      }),
    ],
    callbacks: {
      async session({ session, token, user }) {
        session.accessToken = token.accessToken as string;
        session.id = token.id as string;
        return session;
      },
      async jwt({ token, user, account }) {
        if (user) {
          token.id = user.id;
        }
        if (account) {
          token.accessToken = account.access_token;
        }
        return token;
      },
  },
};
export default NextAuth(authOptions);


