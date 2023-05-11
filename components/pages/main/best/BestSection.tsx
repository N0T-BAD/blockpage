import React from 'react'
import style from '@/components/pages/main/best/BestSection.module.css'
import BestRankingCard from '@/components/pages/main/best/BestRankingCard'
import BestTotalButton from './BestTotalButton'

export default function BestSection() {
    return (
        <section className={style.bestSection}>
            <div className={style.bestItemWrap}>
                <BestRankingCard />
                <BestTotalButton />
            </div>
        </section>
    )
}
