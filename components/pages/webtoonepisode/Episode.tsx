import React from 'react'
import Image from 'next/image'

import style from '@/components/pages/webtoonepisode/Episode.module.css'

export default function Episode(props: {
  id?: number,
  subject: string,
  thumbnail: string,
  price?: number,
  rating?: number,
  uploadDate?: string,
}) {

  return (
    <div className={style.episode}>
      <div className={style.imgWrap}>
        <div className={props.price && props.price > 0 ? `${style.brightness} ${style.episodeImg}` : `${style.episodeImg}`}>
          <Image
            src={props.thumbnail}
            alt='에피소드 썸네일'
            width={120}
            height={70}
            priority
          />
        </div>
        {
          props.price &&
            props.price > 0 ?
            <div className={style.imgLock}>
              <Image
                src={'/assets/images/icons/lock.svg'}
                alt='잠금'
                width={50}
                height={50}
                priority
              />
            </div>
            : ""
        }
      </div>
      <div className={style.episodeContents}>
        <p className={style.subject}>{props.subject}</p>
        <div className={style.episodeOption}>
          {
            props.price &&
              props.price > 0 ?
              <p className={style.priceBlock}>블럭 {props.price}개</p> :
              <>
                <p className={style.rating}>평점 {props.rating}</p>
                <p className={style.date}>{props.uploadDate}</p>
              </>
          }
        </div>
      </div>
    </div>
  )
}
