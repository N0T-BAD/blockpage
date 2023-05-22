import Image from 'next/image'
import React from 'react'

import style from '@/components/pages/webtoonepisode/WebtoonInfo.module.css'

export default function LikesUi(props: { width: number, height: number, likes: number }) {
  return (
    <div className={style.likes}>
      <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={props.width} height={props.height} />
      <p className={style.likestxt} >{props.likes}</p>
    </div>
  )
}
