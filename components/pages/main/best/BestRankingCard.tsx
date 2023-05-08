import React from 'react'
import style from '@/components/pages/main/best/BestRankingCard.module.css'
import Image from 'next/image'
import { bestRankingData } from '@/data/bestRankingData';

export default function BestRankingCard() {
  return (
    <>
      {
        bestRankingData.map((data) => (
          <div className={style.BestRankingCard}>
            <div className={style.contentWrap}>
              <div className={style.option}>
                <div className={style.views}>
                  <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} />
                  <p className={style.viewstxt}>{data.views}</p>
                </div>
                <div className={style.likes}>
                  <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} />
                  <p className={style.likestxt}>{data.likes}</p>
                </div>
              </div>
              <p className={style.title}>{data.title}</p>
              <p className={style.author}>{data.author}</p>
            </div>
            <div className={style.bestimg_1} key={data.id}>
              <div className={style.imgbox}>
                <Image src={data.imgUrl} alt={"베스트 이미지"} width={190} height={170} />
              </div>
              <p className={style.bgtxt}>{data.ranking}</p>
              <div className={style.bgbox}>
                <p className={style.rank}>{data.rankup}</p>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}