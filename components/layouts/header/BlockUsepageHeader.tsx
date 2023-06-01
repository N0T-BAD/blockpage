import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import style from '@/components/layouts/header/BlockUsepageHeader.module.css'
import BackBtn from '@/components/ui/BackBtn'

export default function BlockUsepageHeader() {

  const router = useRouter();

  return (
    <header className={style.headerSection}>
      <div className={style.BlockChargeBox}>
        <div className={style.leftHead}>
          <BackBtn
            onClick={() => router.push("/mypage")}
          />
        </div>
        <div className={style.centerHead}>
          <p>블럭 이용 내역</p>
        </div>
        <div className={style.rightHead}>
          <div className={style.rightHeadBox}>
            <Link href={"/blockcharge"}>
              <p>충전</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
