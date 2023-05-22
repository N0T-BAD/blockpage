import React, { useEffect, useState } from 'react'
import style from '@/components/pages/main/best/BestRankingCard.module.css'
import Image from 'next/image'
import { bestRankingData } from '@/data/bestRankingData';
import { BestRankingDataType } from '@/types/bestRankingDataType';
import axios from 'axios';

export default function BestRankingCard() {

  const [data, setData] = useState<BestRankingDataType>();

  // useEffect(() => {
  //   axios('/api/v1/webtoons/best')
  //     .then(res => res.data)
  //     .then(data => setData(data))
  // }, [data])

  return (
    <>
      {
        bestRankingData && bestRankingData
          .filter((data) => parseInt(data.ranking) <= 10)
          .map((data) => (
            <div className={style.BestRankingCard} key={data.webtoonId}>
              <div className={style.contentWrap}>
                <div className={style.option}>
                  <div className={style.views}>
                    <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} priority />
                    <p className={style.viewstxt}>{data.views}</p>
                  </div>
                  <div className={style.likes}>
                    <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} priority />
                    <p className={style.likestxt}>{data.interestCount}</p>
                  </div>
                </div>
                <p className={style.title}>{data.webtoonTitle}</p>
                {data.illustrator ?
                  <p className={style.author}>{data.creator} / {data.illustrator}</p>
                  : <p className={style.author}>{data.creator}</p>
                }
                <p className={style.option2}>{data.genre}</p>
              </div>
              <div className={style.bestimg_1}>
                <div className={style.imgbox}>
                  <Image src={data.webtoonThumbnail} alt={"베스트 이미지"} width={190} height={170} priority />
                </div>
                <div className={style.bgtxt}>{data.ranking}</div>
              </div>
            </div>
          ))
      }
    </>
  )
}