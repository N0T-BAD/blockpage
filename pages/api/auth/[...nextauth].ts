import { profile } from 'console';
import NextAuth, {DefaultSession, DefaultUser, NextAuthOptions, User} from 'next-auth';
import { Provider } from 'next-auth/providers';
import KakaoProvider from 'next-auth/providers/kakao';

declare module 'next-auth' {
  export interface Session extends DefaultSession {
    id: string;
    accessToken: string;
    nickname: string;
    email: string;
  }

  export interface User extends DefaultUser {
    id: string;
    name: string;
    email: string;
    image: string;
    gender: string;
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
      {
        id: "kakao",
        name: "Kakao",
        type: "oauth",
        authorization: "https://kauth.kakao.com/oauth/authorize",
        token: "https://kauth.kakao.com/oauth/token",
        userinfo: "https://kapi.kakao.com/v2/user/me",
        profile(profile) {
          return {
            id: profile.id,
            name: profile.kakao_account?.profile.nickname,
            email: profile.kakao_account?.email,
            image: profile.kakao_account?.profile.profile_image_url,
            gender: profile.kakao_account?.gender,
          }
        },
      }
    ],
    
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