import React, { useEffect, useState } from 'react'

import style from '@/components/pages/game/GameContent.module.css'
import { GameBannerType } from '@/types/gameBanerType'
import Image from 'next/image'
import { gameEventData } from '@/data/dummy/mainGameEventData'
import { useRouter } from 'next/router'

export default function GameContent() {

  const [gameEvent, setGameEvent] = useState<GameBannerType[]>([])
  const router = useRouter()

  useEffect(() => {
    setGameEvent(gameEventData)
  }, [])

  const handleGame = (name: string) => {
    router.push(`/game/${name}`)
  }

  return (
    <section className={style.gameSection}>
      {
        gameEvent.map((data) => (
          <div className={`${style.gameBox} ${style[data.color]} `} onClick={() => handleGame(data.name)} key={data.id}>
            <div className={style.gameText}>
              <p>{data.eventTitle}</p>
              <p>{data.text}</p>
            </div>
            <Image src={data.imgUrl} alt={data.eventTitle} width={190} height={170} priority />
          </div>
        ))
      }
    </section>
  )
}