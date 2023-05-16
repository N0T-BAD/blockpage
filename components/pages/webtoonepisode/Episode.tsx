import React from 'react'

import style from '@/components/pages/webtoonepisode/Episode.module.css'
import Image from 'next/image'

export default function Episode(props: {
  id: number,
  subject: string,
  thumbnail: string,
  rating: number,
  date: string,
}) {
  return (
    <>
      {
        <div key={props.id} className={style.episode}>
          <div className={style.episodeImg}>
            <Image
              src={props.thumbnail}
              alt='에피소드 썸네일'
              width={120}
              height={70}
              priority
            />
          </div>
          <div className={style.episodeContents}>
            <p className={style.subject}>{props.subject}</p>
            <div className={style.episodeOption}>
              <p className={style.rating}>평점 {props.rating}</p>
              <p className={style.date}>{props.date}</p>
            </div>
          </div>
        </div>
      }
    </>
  )
}
