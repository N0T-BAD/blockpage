import React from 'react'
import Image from 'next/image'

import style from '@/components/ui/WebtoonList.module.css'

export default function ViewLike(props: { data: any }) {
  return (
    <div className={style.option} >
      <div className={style.views} >
        <Image src={'/assets/images/icons/views.svg'}
          alt={'조회 수'}
          width={15}
          height={15}
          priority
        />
        <p className={style.viewstxt} >{props.data.views}</p>
      </div>
      <div className={style.likes}>
        <Image src={'/assets/images/icons/likes.svg'}
          alt={'좋아요 수'}
          width={12}
          height={12}
          priority
        />
        <p className={style.likestxt} >{props.data.likes}</p>
      </div>
    </div>
  )
}
