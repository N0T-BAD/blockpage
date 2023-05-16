import React from 'react'
import Image from 'next/image'

import style from '@/components/ui/WebtoonList.module.css'
import { listviewDataType } from '@/types/listviewDataType'
import Separator from './Separator'
import { useRouter } from 'next/router'

export default function WebtoonList(props: { data: listviewDataType }) {

  const router = useRouter();
  const { archiveName } = router.query;

  return (
    <div>
      <div className={style.webtoonBox}>
        <div className={style.ImgWrap} >
          <Image src={props.data.imgUrl} alt={props.data.title} width={100} height={90} priority />
        </div>
        <div className={style.contentWrap} >
          <div className={style.option} >
            <div className={style.views} >
              <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} />
              <p className={style.viewstxt} >{props.data.views}</p>
            </div>
            <div className={style.likes}>
              <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} />
              <p className={style.likestxt} >{props.data.likes}</p>
            </div>
          </div>
          <p className={style.title} >{props.data.title}</p>
          <p className={style.author} >{props.data.author}</p>
          <p className={style.genre}>{props.data.genre}</p>
          {
            archiveName === "purchase" ?
              <p className={style.endDate}>유효기간 {props.data.endDate}</p>
              : ""
          }
        </div>
      </div>
      <Separator color='var(--bp-gray)' gutter={0.5} />
    </div>
  )
}
