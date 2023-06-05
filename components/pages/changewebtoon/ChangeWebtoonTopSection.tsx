import React from 'react'
import style from '@/components/pages/changewebtoon/ChangeWebtoonTopSection.module.css'
import AuthorNickName from '@/components/ui/AuthorNickName'

export default function ChangeWebtoonTopSection() {
    return (
        <section className={style.ChangeWebtoonTopSection}>
            <AuthorNickName />
        </section>
    )
}
