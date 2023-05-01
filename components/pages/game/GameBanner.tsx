import Image from 'next/image'
import React from 'react'
import style from '@/components/pages/game/GameBanner.module.css'

export default function GameBanner() {
  return (
    <div className={style.gamewrap}>
      <div className={style.gameBox}>
        <div className={style.gameText}>
          <p>블럭 내놔라~!!</p>
          <p>데일리 게임으로 무료 블럭 획득하기</p>
        </div>
        <Image src="/assets/dummy/image3.png" alt="test" width={190} height={170} priority />
      </div>
      <div className={style.gameBox}>
        <div className={style.gameText}>
          <p>블럭 내놔라~!!</p>
          <p>데일리 게임으로 무료 블럭 획득하기</p>
        </div>
        <Image src="/assets/dummy/image3.png" alt="test" width={190} height={170} priority />
      </div>
    </div>
  )
}
