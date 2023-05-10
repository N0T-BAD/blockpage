import React from 'react'
import UserNickName from '@/components/pages/mypage/UserNickName'
import style from '@/components/pages/changewebtoon/ChangeWebtoonTopSection.module.css'

export default function ChangeWebtoonTopSection() {
    return (
        <section className={style.ChangeWebtoonTopSection}>
            <UserNickName />
        </section>
    )
}
