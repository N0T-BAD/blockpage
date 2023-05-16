import React from 'react'
import GameBanner from './GameBanner'
import style from '@/components/pages/main/game/GameSection.module.css'
import { GameBannerType } from '@/types/gameBanerType'

export default function GameSection(props:{data: GameBannerType[]}) {
  return (
    <section className={style.GameSection}>
      <GameBanner 
        data={props.data}
      />
    </section>
  )
}
