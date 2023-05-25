import { mainEventBannerData } from '@/data/dummy/mainEventBannerData'
import { MainBannerType } from '@/types/mainBannerType'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import style from '@/components/pages/main/MainBanner.module.css'

export default function MainBanner() {

  const [data, setData] = useState<MainBannerType>()

  // useEffect(() => {
  //   setData(mainEventBannerData[0])
  // }, [])

  return (
    <div className={style.bannerWrap}>
      <div className={style.bannerCardBox}>
        {mainEventBannerData.map((data: MainBannerType) => (
          <div className={style.bannerCard} key={data.id}>
            <div className={style.bannerImg}>
              <Image src={data.imgUrl} alt={data.name} width={200} height={200} priority />
            </div>
            <h2>{data.eventTitle}</h2>
            <div className={style.line}></div>
            <p>{data.name}</p>
            <p className={style.option}>{data.categoryName}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
