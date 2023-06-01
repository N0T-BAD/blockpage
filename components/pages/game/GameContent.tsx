import React from 'react'

import style from '@/components/pages/game/GameContent.module.css'

export default function GameContent() {
  return (
    <section className={style.gameSection}>
      <div>
        <div className={style.nameTxt}>
          <p>게임 이름</p>
        </div>
        <div className={style.gameDiv}>
          game
        </div>
        <div className={style.btnDiv}>
          <button className={style.btn}>실행</button>
        </div>
      </div>
    </section>
  )
}
