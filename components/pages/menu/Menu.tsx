import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'

import style from "@/components/pages/menu/Menu.module.css"
import CloseBtn from '@/components/ui/CloseBtn';
import BackBtn from '@/components/ui/BackBtn';

export default function Menu() {

  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  }

  return (
    <div>
      <div className={style.closeBtn} >
        <CloseBtn />
      </div>
      <div className={style.menuTop} onClick={handleLogin}>
        <Image
          src={"/assets/images/mypage/userImg.png"}
          alt={"userImg"}
          width={50}
          height={50}
        />
        <p>로그인하세요.</p>
      </div>
      <div className={style.menuContents}>
        <div onClick={() => router.push("/week")}>
          <p>요일별 웹툰</p>
        </div>
        <div onClick={() => router.push("/genre")}>
          <p>장르별 웹툰</p>
        </div>
        <div onClick={() => router.push("/best")}>
          <p>인기순 웹툰</p>
        </div>
        <div onClick={() => router.push("/")}>
          <p>게임</p>
        </div>
        <div onClick={() => router.push("/")}>
          <p>스토어</p>
        </div>
        <div onClick={() => router.push("/")}>
          <p>보관함</p>
        </div>
        <div onClick={() => router.push("/mypage")}>
          <p>마이페이지</p>
        </div>
      </div>
    </div>
  )
}
