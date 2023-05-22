import Image from 'next/image'
import React from 'react'

import style from '@/components/pages/webtoonepisode/WebtoonInfo.module.css'

export default function ViewsUi(props: { width: number, height: number, views: number }) {
  return (
    <div className={style.views}>
      <Image
        src={'/assets/images/icons/views.svg'}
        alt={'조회 수'}
        width={props.width}
        height={props.height}
      />
      <p className={style.viewstxt}>{props.views}</p>
    </div>
  )
}
