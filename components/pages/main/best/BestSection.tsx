import React from 'react'
import style from '@/components/pages/main/best/BestSection.module.css'
import BestRankingContent from '@/components/pages/main/best/BestRankingContent'
import BestRankingImg from '@/components/pages/main/best/BestRankingImg'

export default function BestSection() {
    return (
        <section className={style.bestSection}>
            <div className={style.bestItemWrap}>
                <BestRankingContent/>
                <BestRankingImg/>
            </div>
            <div className={style.bestItemWrap}>
                <BestRankingContent/>
                <BestRankingImg/>
            </div>
        </section>
    )
}
