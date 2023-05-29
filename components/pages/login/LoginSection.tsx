import React, { useEffect, useState } from 'react'
import style from '@/components/pages/login/LoginSection.module.css'
import Image from 'next/image'
import { signIn, useSession, signOut, getCsrfToken } from 'next-auth/react'
import DataFetchingLoader from '@/components/widgets/DataFetchingLoader'
import { useRouter } from 'next/router'
import { DefaultSession, DefaultUser } from 'next-auth'

declare module 'next-auth' {
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

export default function LoginSection() {

  const router = useRouter();
  const { data: session, update } = useSession()

  const getUserData = async () => {
    const res = await fetch('https://kapi.kakao.com/v2/user/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${session?.accessToken}`,
      }
    })
    if (res.status === 401) {
      signOut()
      return
    } else if (res.status === 403) {
      console.log('403')
      router.push('/login')
      return
    }
    const kakaoData = await res.json()
    console.log(kakaoData)
    if (kakaoData.id) {
      postUser(kakaoData)
    } else {
      console.log("kakao login error")
      router.push('/login')
    }
  }

  const postUser = async (kakaoLoginData: any) => {
    console.log('kakaoLoginData', kakaoLoginData)
    console.log('now session', session)
    const res = await fetch('https://blockpage.site/member-service/v1/members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: kakaoLoginData.kakao_account.email,
        nickname: kakaoLoginData.kakao_account.profile.nickname,
        profileImage: kakaoLoginData.kakao_account.profile.profile_image_url,
        gender: kakaoLoginData.kakao_account.gender,
      })
    })
    const data = await res.json()
    console.log(data.data.role)
    update({ ...session, role: data.data.role })
    if (data.data.role) {
      sessionStorage.setItem('role', data.data.role)
      userLogIn(data.data.role).then(() => {
        console.log('userLogIn')
        router.push('/')
      })
    }
  }

  const userLogIn = async (role: string) => {
    console.log('userLogIn', role, session?.email)
    if (!session?.email) return
    const res = await fetch('https://blockpage.site/member-service/v1/members/log', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        email: session?.email,
        role: role,
      },
    })
    const data = await res.json()
    console.log('userLogIn', data)
  }

  useEffect(() => {
    if (!session) return
    getUserData()
  }, [session?.accessToken])

  if (session?.role) {
    console.log('session', session)
    return (
      <DataFetchingLoader text={'kakao login'} />
    )
  }

  return (
    <section className={style.loginSection}>
      <div className={style.logo}>

        <Image src={"/assets/images/logo/logoimg.png"} alt={"로고"} width={200} height={77} />
      </div>
      <div className={style.kakaoLogin} onClick={() => signIn("kakao")}>
        <Image src={"/assets/images/login/kakao_login.png"} alt={"카카오 로그인"} width={290} height={45} />
      </div>
      <p>계정과 비밀번호 입력없이</p>
      <p>카카오로 로그인 해 보세요.</p>

    </section>
  )
}