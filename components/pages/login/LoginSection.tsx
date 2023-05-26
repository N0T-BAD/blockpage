import React, { useEffect, useState } from 'react'
import style from '@/components/pages/login/LoginSection.module.css'
import Image from 'next/image'
import { signIn, useSession, signOut, getCsrfToken } from 'next-auth/react'
import DataFetchingLoader from '@/components/widgets/DataFetchingLoader'
import { useRouter } from 'next/router'
import axios from 'axios'
export default function LoginSection() {

  const router = useRouter();
  const { data: session, update } = useSession()
  const [kakaoLoginData, setKakaoLoginData] = useState<any>(null)
  const [user, setUser] = useState<any>(null);

  const getUserData = async () => {
    const res = await fetch('https://kapi.kakao.com/v2/user/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${session?.accessToken}`,
      }
    })
    const kakaoData = await res.json()
    console.log(kakaoData)
    setKakaoLoginData(kakaoData)
    triggerJwtCallback(kakaoData.kakao_account.profile.nickname)
  }

  useEffect(() => {
    if (!session) return
    getUserData()
  }, [session?.accessToken])


  useEffect(() => {
    if (!kakaoLoginData?.id) return
    try {
      const postUser = async () => {
        const res = await fetch('http://10.10.10.27:9000/v1/members', {
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
        console.log(data)
        setUser(data)
      }
      postUser()
    } catch (error) {
      console.log(error)
    }
  }, [kakaoLoginData?.id])

  useEffect(() => {
    if (user) {
      console.log(user);
      userRoleCallback(user.data.role);

      axios
        .get('http://10.10.10.27:9000/v1/members/log', {
          headers: {
            'Content-Type': 'application/json',
            email: kakaoLoginData.kakao_account.email,
            role: user.data.role,
          },
        })
        .then((res) => {
          console.log(res);
          router.push('/');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);

  const triggerJwtCallback = async (name: string) => {
    const updatedSession = {
      ...session,
      nickname: name,
    };
    await update(updatedSession);
  };

  const userRoleCallback = async (role: string) => {
    const updatedSession = {
      ...session,
      role: role,
    };
    await update(updatedSession);
  };

  if (kakaoLoginData?.id) {

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