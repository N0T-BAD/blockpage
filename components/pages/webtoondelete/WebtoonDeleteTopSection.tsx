import React from 'react'
import style from '@/components/pages/webtoondelete/WebtoonDeleteTopSection.module.css'
import UserNickName from '@/components/pages/mypage/UserNickName'

export default function WebtoonDeleteTopSection() {
    return (
        <section className={style.WebtoonDeleteTopSection}>
            <UserNickName />
        </section>
    )
}
