import React from 'react'
import GameBanner from './GameBanner'
import style from '@/components/pages/main/game/GameSection.module.css'

export default function GameSection() {
  return (
    <section className={style.GameSection}>
      <GameBanner />
    </section>
  )
}
