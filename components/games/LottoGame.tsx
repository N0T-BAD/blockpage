import React from 'react'
import style from '@/components/pages/game/GameContent.module.css'
import Image from 'next/image'

export default function LottoGame() {

  return (
    <section className={style.gameSection}>
      <div className={style.sorrybox}>
        <Image src={'/assets/images/icons/Sorry.gif'} alt={'Sorry'} width={100} height={100} />
        <p>준비중인 서비스입니다.</p>
      </div>
    </section>
  )
}