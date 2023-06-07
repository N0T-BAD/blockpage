import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import style from '@/components/ui/WebtoonList.module.css'
import Separator from './Separator'
import ViewLike from './ViewLike'
import { listviewDataType } from '@/types/listviewDataType'

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
            props.data.views || props.data.views === 0 ?
              <ViewLike
                data={props.data}
              /> : ""
          }
          <p className={style.title} >{props.data.webtoonTitle}</p>
          <p className={style.creator} >{props.data.creator} / {props.data.illustrator}</p>
          <div className={style.genre}>
            {
              props.data.publicationDays &&
              <p>{props.data.publicationDays}</p>
            }
            <p>{props.data.genre}</p>
          </div>
          {
            props.data.episodeTitle &&
            <p className={style.infoTxt}>{props.data.episodeTitle}</p>
          }
          {
            props.data.uploadDate &&
            <p className={style.infoTxt}>{props.data.uploadDate}</p>
          }
        </div>
      </div>
      <Separator color='var(--bp-line-gray)' gutter={0.5} />
    </div>
  )
}
