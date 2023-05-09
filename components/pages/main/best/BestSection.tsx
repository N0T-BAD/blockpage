import React from 'react'
import style from '@/components/pages/main/best/BestSection.module.css'
import BestRankingCard from './BestRankingCard'

export default function BestSection() {
    return (
        <section className={style.bestSection}>
            <div className={style.bestItemWrap}>
                <BestRankingCard />
            </div>
        </section>
    )
}
