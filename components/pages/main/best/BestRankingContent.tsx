import React from 'react'
import style from '@/components/pages/main/best/BestRankingContent.module.css'
import Image from 'next/image'

export default function BestRankingContent() {
    return (
        <div className={style.contentWrap}>
            <div className={style.option}>
                <div className={style.views}>
                    <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} />
                    <p className={style.viewstxt}>173.3M</p>
                </div>
                <div className={style.likes}>
                    <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} />
                    <p className={style.likestxt}>173.3M</p>
                </div>
            </div>
            <p className={style.title}>이것이 법이다</p>
            <p className={style.author}>RK STUDIO, 글 쓰냐</p>
        </div>
    )
}