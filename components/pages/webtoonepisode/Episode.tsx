import React from 'react'

import style from '@/components/pages/webtoonepisode/Episode.module.css'
import Separator from '@/components/ui/Separator'
import Image from 'next/image'

export default function Episode() {
  return (
    <section className={style.episodeSection}>
      <div className={style.episodeState}>
        <p>연재중</p>
        <Separator
          color='black'
          gutter={1}
        />
      </div>
      <div className={style.episode}>
        <div className={style.episodeImg}>
          <Image
            src={"/assets/dummy/01.png"}
            alt='에피소드 썸네일'
            width={120}
            height={70}
            priority
          />
        </div>
        <div className={style.episodeContents}>
          <p className={style.subject}>금요웹툰 세화, 가는길 제목길어지면 7화</p>
          <div className={style.episodeOption}>
            <p className={style.rating}>평점 9.99</p>
            <p className={style.date}>23.04.15</p>
          </div>
        </div>
      </div>
      <Separator
        color='var(--bp-line-gray)'
        gutter={1}
      />
    </section>
  )
}
