import React from 'react'
import style from '@/components/pages/best/BestSection2.module.css'
import BestRankingContent from '@/components/pages/main/best/BestRankingContent'
import BestRankingLeftImg from '@/components/pages/main/best/BestRankingLeftImg'

export default function BestSection2() {
    return (
        <section className={style.bestSection2}>
            <BestRankingLeftImg/>
            <BestRankingContent/>
        </section>
    )
}
