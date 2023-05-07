import React from 'react'
import style from '@/components/pages/webtoondelete/WebtoonDeleteTopSection.module.css'
import UserIcon from '../mypage/UserIcon'
import UserNickName from '../mypage/UserNickName'

export default function WebtoonDeleteTopSection() {
    return (
        <section className={style.WebtoonDeleteTopSection}>
            <UserIcon />
            <UserNickName />
        </section>
    )
}
