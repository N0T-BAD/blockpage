import React from 'react'
import style from '@/components/pages/episodelist/EpisodeTopSection.module.css'
import UserNickName from '@/components/pages/mypage/UserNickName'

export default function EpisodeTopSection() {
    return (
        <section className={style.EpisodeTopSection}>
            <UserNickName />
        </section>
    )
}
