import React from 'react'
import style from '@/components/pages/episodedelete/EpisodeDeleteTopSection.module.css'
import UserNickName from '@/components/pages/mypage/UserNickName'
import UserIcon from '@/components/pages/mypage/UserIcon'

export default function EpisodeDeleteTopSection() {
    return (
        <section className={style.EpisodeDeleteTopSection}>
            <UserIcon />
            <UserNickName />
        </section>
    )
}
