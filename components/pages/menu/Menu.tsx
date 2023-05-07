import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'

import style from "@/components/pages/menu/Menu.module.css"

export default function Menu() {

  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  }

  return (
    <div>
      <div className={style.closeImg}>
        <Image
          src={"/assets/images/icons/close.svg"}
          alt={"close"}
          width={20}
          height={20}
        />
      </div>
      <div className={style.menuTop} onClick={handleLogin}>
        <Image
          src={"/assets/images/mypage/userImg.png"}
          alt={"userImg"}
          width={50}
          height={50}
        />
        <p>로그인하세요.</p>
        <Image
          src={"/assets/images/icons/back.svg"}
          alt={"login"}
          width={20}
          height={20}
        />
      </div>
      <div className={style.menuContents}>
        <div>
          <p>요일별 웹툰</p>
        </div>
        <div>
          <p>장르별 웹툰</p>
        </div>
        <div>
          <p>인기순 웹툰</p>
        </div>
        <div>
          <p>게임</p>
        </div>
        <div>
          <p>스토어</p>
        </div>
        <div>
          <p>보관함</p>
        </div>
        <div>
          <p>마이페이지</p>
        </div>
      </div>
    </div>
  )
}
