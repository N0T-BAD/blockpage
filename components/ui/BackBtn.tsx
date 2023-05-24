import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import style from './BackBtn.module.css'

export default function BackBtn() {

  const router = useRouter();

  return (
    <div className={style.backbtn} onClick={() => router.pathname === "/mypage" ? router.push("/") : router.back()}>
      <Image
        src={'/assets/images/icons/back.svg'}
        alt="backBtnIcon"
        width={20}
        height={20}
        priority
      />
    </div>
  )
}
