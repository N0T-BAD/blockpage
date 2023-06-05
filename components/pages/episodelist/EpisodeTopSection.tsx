import React from 'react'
import style from '@/components/pages/episodelist/EpisodeTopSection.module.css'
import AuthorNickName from '@/components/ui/AuthorNickName'

export default function EpisodeTopSection() {
    return (
        <section className={style.EpisodeTopSection}>
            <AuthorNickName />
        </section>
    )
}
