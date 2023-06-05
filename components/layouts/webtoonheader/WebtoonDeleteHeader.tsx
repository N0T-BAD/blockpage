import React from 'react'

import { useRouter } from 'next/router';

import BackBtn from '@/components/ui/BackBtn'
import style from '@/components/layouts/header/TotalHeader.module.css'

export default function WebtoonDeleteHeader() {

  const router = useRouter();

  return (

    <header className={style.headerSection}>
      <div className={style.TotalHeader}>
        <div className={style.leftHead}>
          <BackBtn
            onClick={() => router.back()}
          />
        </div>
        <div className={style.centerHead}>
          <p>웹툰 삭제</p>
        </div>
        <div className={style.rightHead}></div>
      </div>
    </header>
  )
}