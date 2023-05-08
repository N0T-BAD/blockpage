import React, { useState } from 'react'
import Image from 'next/image'

import style from '@/components/pages/webtoonepisode/WebtoonInfo.module.css'
import { WebtoonInfoDataType } from '@/types/webtoonDataType';
import { webtoonInfoData } from '@/data/dummy/webtoonData';
import { useRouter } from 'next/router';

import LikeButton from '@/components/ui/LikeButton';
import LikeViewSection from '@/components/ui/webtoonInfo/LikeViewSection';
import BackBtn from '@/components/ui/BackBtn';

export default function WebtoonInfo() {

  const router = useRouter();
  const [like, setLike] = useState(false);
  const infoData = useState<WebtoonInfoDataType>(webtoonInfoData);

  const handleBack = () => {
    router.back();
  }

  const handleLike = () => {
    //api 호출 db 갱신
    setLike(!like);
    console.log(like);
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
            <Image src={infoData[0].imgUrl} alt={infoData[0].title} width={600} height={600} priority />
          </div>
          <LikeViewSection
            viewHeight={20}
            viewWidth={20}
            views={infoData[0].views}
            likeHeight={15}
            likeWidth={15}
            likes={infoData[0].likes}
          />
          <h2>{infoData[0].title}</h2>
          <div className={style.info}>
            <p>{infoData[0].week}</p>
            <p>{infoData[0].genre}</p>
          </div>
          <div className={style.line}></div>
          <p className={style.author}>{infoData[0].author}</p>
        </div>
      }
    </>
  )
}
