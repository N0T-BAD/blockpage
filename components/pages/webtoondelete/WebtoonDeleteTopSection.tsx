import React from 'react'
import style from '@/components/pages/webtoondelete/WebtoonDeleteTopSection.module.css'
import AuthorNickName from '@/components/ui/AuthorNickName'

export default function WebtoonDeleteTopSection() {
    return (
        <section className={style.WebtoonDeleteTopSection}>
            <AuthorNickName />
        </section>
    )
}
