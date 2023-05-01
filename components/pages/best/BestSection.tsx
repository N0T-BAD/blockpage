import React from 'react'
import style from '@/components/pages/best/BestSection.module.css'
import BestRankingContent from './BestRankingContent'
import BestRankingRightImg from './BestRankingRightImg'

export default function BestSection() {
    return (
        <section className={style.bestSection}>
            <BestRankingContent/>
            <BestRankingRightImg/>
        </section>
    )
}
