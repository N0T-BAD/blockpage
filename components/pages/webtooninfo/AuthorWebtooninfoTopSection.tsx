import React from 'react'
import style from '@/components/pages/webtooninfo/AuthorWebtooninfoTopSection.module.css'
import UserNickName from '@/components/pages/mypage/UserNickName'

export default function AuthorWebtooninfoTopSection() {
    return (
        <section className={style.AuthorWebtooninfoTopSection}>
            <UserNickName />
        </section>
    )
}
