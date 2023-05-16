import React from 'react'
import style from '@/components/pages/main/MainSection.module.css'
import { MainBannerType } from '@/types/mainBannerType'
import Image from 'next/image'

export default function MainSection(props:{data: MainBannerType}) {
  const data = props.data

  return (
    <section className={style.mainSection}>
      <div className={style.bannerWrap}>
      {
        data &&
        <>
          <div className={style.bannerImg}>
            <Image src={data.imgUrl} alt={data.name} width={600} height={600} priority placeholder='blur' blurDataURL='/assets/images/logo/logo.svg'/>
          </div>
          <h2>{data.eventTitle}</h2>
          <div className={style.line}></div>
          <p>{data.name}</p>
          <p className={style.option}>{data.freeOption === 24 ? '1일마다무료' : `${data.freeOption}시간마다무료`} . {data.categoryName}</p>
        </>
      }
    </div>
    </section>
  )
}
