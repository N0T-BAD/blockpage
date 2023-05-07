import React from 'react'
import style from '@/components/pages/episodelist/EpisodeTopSection.module.css'
import UserNickName from '@/components/pages/mypage/UserNickName'
import UserIcon from '@/components/pages/mypage/UserIcon'

export default function EpisodeTopSection() {
    return (
        <section className={style.EpisodeTopSection}>
            <UserIcon />
            <UserNickName />
        </section>
    )
}
