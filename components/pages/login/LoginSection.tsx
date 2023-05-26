import React, { useEffect } from 'react'
import style from '@/components/pages/login/LoginSection.module.css'
import Image from 'next/image'
import { signIn, useSession, signOut, getCsrfToken } from 'next-auth/react'
import DataFetchingLoader from '@/components/widgets/DataFetchingLoader'

export default function LoginSection() {

  const { data } = useSession()
  console.log(data)
  console.log(data?.id)

  useEffect(() => {
    console.log(data)
    if (data) {
      console.log(data.accessToken)
      // 카카오 유저 정보 받아오기
      fetch('https://kapi.kakao.com/v2/user/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${data.accessToken}`,
        }
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        // fetch('/api/auth/login', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     email: res.kakao_acount.email,
        //     nickname: res.kakao_account.profile.nickname,
        //     profileImage: res.kakao_account.profile.profile_image_url,
        //   })
        // })
      })

      // server login
      
    }
  }, [data])

  if(data) {
    return (
      <DataFetchingLoader text={'loading'} />
    )
  }



  return (
    <section className={style.loginSection}>
        <div className={style.logo} onClick={()=> signOut()}>
          <Image src={"/assets/images/logo/logoimg.png"} alt={"로고"} width={200} height={77} />
        </div>
        <div className={style.kakaoLogin} onClick={()=> signIn("kakao")}>
          <Image src={"/assets/images/login/kakao_login.png"} alt={"카카오 로그인"} width={290} height={45} />
        </div>
        <p>계정과 비밀번호 입력없이</p>
        <p>카카오로 로그인 해 보세요.</p>
      
    </section>
  )
}
