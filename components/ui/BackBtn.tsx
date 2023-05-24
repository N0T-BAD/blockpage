import Image from 'next/image'
import React from 'react'

import style from './BackBtn.module.css'
import { useRouter } from 'next/router';

export default function BackBtn(props: { onClick: () => void }) {

  const router = useRouter();

  return (
    <div className={style.backbtn} onClick={() => router.pathname === "/mypage" || router.pathname === "/login" ? router.push("/") : router.back()}>
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