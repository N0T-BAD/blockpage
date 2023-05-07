import React from 'react'
import style from '@/components/pages/webtooninfo/AuthorWebtooninfoTopSection.module.css'
import UserNickName from '@/components/pages/mypage/UserNickName'
import UserIcon from '@/components/pages/mypage/UserIcon'

export default function AuthorWebtooninfoTopSection() {
    return (
        <section className={style.AuthorWebtooninfoTopSection}>
            <UserIcon />
            <UserNickName />
        </section>
    )
}
