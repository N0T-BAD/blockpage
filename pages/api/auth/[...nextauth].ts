import NextAuth, { DefaultSession, DefaultUser, NextAuthOptions, User } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

declare module "next-auth" {
  export interface Session extends DefaultSession {
    id: string;
    accessToken: string;
    nickname: string;
    email: string;
    gender: string;
    role: string;
  }

  export interface User extends DefaultUser {
    id: string;
    name: string;
    email: string;
    image: string;
    gender: string;
  }
}
export const authOptions: NextAuthOptions = {
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
  pages: {
    // signIn: '/auth/signin',
    // signOut: '/auth/signout',
    error: "/auth/error",
  },

  callbacks: {
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.id = token.id as string;
      session.email = token.email as string;
      session.nickname = token.name as string;
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },

};

export default NextAuth(authOptions);