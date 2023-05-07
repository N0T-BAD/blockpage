import React from 'react'
import style from '@/components/pages/episodedelete/EpisodeDeleteMiddleSection.module.css'
import EpisodeDeleteInfo from './EpisodeDeleteInfo'

export default function EpisodeDeleteMiddleSection() {
    return (
        <section className={style.EpisodeDeleteMiddleSection}>
            <EpisodeDeleteInfo />
        </section>
    )
}
