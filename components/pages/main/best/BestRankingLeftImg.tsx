import React from 'react'
import style from '@/components/pages/best/BestRankingLeftImg.module.css'
import Image from 'next/image'

export default function BestRankingLeftImg() {
  return (
    <div className={style.bestimg_1}>
    <div className={style.imgbox}>
      <Image src={"/assets/images/best/image2.png"} alt={"베스트 이미지"} width={150} height={150} />
    </div>
        <p className={style.bgtxt}>2</p>
        <div className={style.bgbox}>
            <p className={style.rank}>+6</p>
        </div>
</div>
  )
}
