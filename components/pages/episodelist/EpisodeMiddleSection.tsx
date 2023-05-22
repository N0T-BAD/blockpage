import React from 'react'
import style from '@/components/pages/episodelist/EpisodeMiddleSection.module.css'
import EpisodelistBox from '@/components/pages/episodelist/EpisodelistBox'

export default function EpisodeMiddleSection() {
    return (
        <section className={style.EpisodeMiddleSection}>
            <EpisodelistBox />
        </section>
    )
}
