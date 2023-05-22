import Image from 'next/image'
import React from 'react'
import style from '@/components/pages/login/LoginBox.module.css'

export default function LoginBox() {
  return (
    <div className={style.LoginBox}>
      <div className={style.LogoSection}>
        <Image src={"/assets/images/logo/logoimg.png"} alt={"로고"} width={200} height={77} />
      </div>
      <div className={style.Logintxt}>
        <p className={style.KakaoLogin}>Kakao</p>
      </div>
      <div className={style.Logintxt}>
        <p>계정과 비밀번호 입력없이</p>
        <p>카카오톡으로 로그인 해 보세요.</p>
      </div>
      <div className={style.KakaoLogin}>
        <Image src={"/assets/images/login/kakao_login.png"} alt={"카카오 로그인"} width={290} height={45} />
      </div>
    </div>
  )
}
