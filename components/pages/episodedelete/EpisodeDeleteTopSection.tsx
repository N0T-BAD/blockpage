import React from 'react'
import style from '@/components/pages/episodedelete/EpisodeDeleteTopSection.module.css'
import UserIcon from '../mypage/UserIcon'
import UserNickName from '../mypage/UserNickName'

export default function EpisodeDeleteTopSection() {
    return (
        <section className={style.EpisodeDeleteTopSection}>
            <UserIcon />
            <UserNickName />
        </section>
    )
}
