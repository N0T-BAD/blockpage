import React from 'react'
import style from '@/components/pages/main/best/BestRankingImg.module.css'
import Image from 'next/image'

export default function BestRankingImg() {
    return (
        <div className={style.bestimg_1}>
            <div className={style.imgbox}>
                <Image src={"/assets/images/best/image1.png"} alt={"베스트 이미지"} width={190} height={170} />
            </div>
                <p className={style.bgtxt}>1</p>
                <div className={style.bgbox}>
                    <p className={style.rank}>+2</p>
                </div>
        </div>
    )
}
