import React from 'react'
import Image from 'next/image'

import style from '@/components/ui/WebtoonList.module.css'
import { listviewDataType } from '@/types/listviewDataType'
import Separator from './Separator'
import ViewLike from './ViewLike'
import { useRouter } from 'next/router'

export default function WebtoonList(props: { data: listviewDataType }) {
  const router = useRouter();
  const webtoonId = props.data.webtoonId;
  return (
    <div>
      <div className={style.webtoonBox} onClick={() => router.push(`/webtoon/${webtoonId}`)}>
        <div className={style.ImgWrap} >
          <Image src={props.data.webtoonThumbnail} alt={props.data.webtoonTitle} width={100} height={90} priority />
        </div>
        <div className={style.contentWrap} >
          {
            props.data.views &&
            <ViewLike
              data={props.data}
            />
          }
          <p className={style.title} >{props.data.webtoonTitle}</p>
          <p className={style.creator} >{props.data.creator} / {props.data.illustrator}</p>
          <p className={style.genre}>{props.data.genre}</p>
          {
            props.data.episodeTitle &&
            <p className={style.infoTxt}>{props.data.episodeTitle}</p>
          }
          {
            props.data.uploadDate &&
            <p className={style.infoTxt}>{props.data.uploadDate}</p>
          }
          {
            props.data.endDate &&
            <p className={style.infoTxt}>유효기간 {props.data.endDate}</p>
          }
        </div>
      </div>
      <Separator color='var(--bp-line-gray)' gutter={0.5} />
    </div>
  )
}
