import React, { useState } from 'react'
import Image from 'next/image'

import style from '@/components/pages/webtoonepisode/WebtoonInfo.module.css'
import { useRouter } from 'next/router';

import LikeButton from '@/components/ui/LikeButton';
import LikeViewSection from '@/components/ui/webtoonInfo/LikeViewSection';
import { WebToonListDataType } from '@/types/webtoonDataType'
import BackBtn from '@/components/ui/BackBtn';

export default function WebtoonInfo(props: { data: WebToonListDataType }) {

  const [like, setLike] = useState(false);

  const handleLike = () => {
    //api 호출 db 갱신
    setLike(!like);
  }

  return (
    <>
      <div className={style.top}>
        <BackBtn />
        <div>
          <LikeButton
            like={like}
            onClick={handleLike}
          />
        </div>
      </div>
      {
        <div className={style.bannerwrap}>
          <div className={style.bannerImg}>
            <Image src={props.data.titleImg} alt={props.data.title} width={600} height={600} priority />
          </div>
          <LikeViewSection
            viewHeight={20}
            viewWidth={20}
            views={props.data.views}
            likeHeight={15}
            likeWidth={15}
            likes={props.data.likes}
          />
          <h2>{props.data.title}</h2>
          <div className={style.info}>
            <p>{props.data.week}</p>
            <p>{props.data.genre}</p>
          </div>
          <div className={style.line}></div>
          <p className={style.author}>{props.data.author}</p>
        </div>
      }
    </>
  )
}
