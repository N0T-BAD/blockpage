import React from 'react'
import style from '@/components/pages/webtoondelete/WebtoonDeleteTopSection.module.css'
import UserNickName from '@/components/pages/mypage/UserNickName'
import UserIcon from '@/components/pages/mypage/UserIcon'

export default function WebtoonDeleteTopSection() {
    return (
        <section className={style.WebtoonDeleteTopSection}>
            <UserIcon />
            <UserNickName />
        </section>
    )
}
