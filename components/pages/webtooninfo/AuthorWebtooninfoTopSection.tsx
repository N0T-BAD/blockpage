import React from 'react'
import style from '@/components/pages/webtooninfo/AuthorWebtooninfoTopSection.module.css'
import AuthorNickName from '@/components/ui/AuthorNickName'

export default function AuthorWebtooninfoTopSection() {
    return (
        <section className={style.AuthorWebtooninfoTopSection}>
            <AuthorNickName />
        </section>
    )
}
