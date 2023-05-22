import React from 'react'
import style from '@/components/pages/webtooninfo/AuthorWebtooninfoBottomSection.module.css'
import AuthorWebtoonInfoForm from '@/components/pages/webtooninfo/AuthorWebtoonInfoForm'

export default function AuthorWebtooninfoBottomSection() {
    return (
        <section className={style.AuthorWebtooninfoBottomSection}>
            <AuthorWebtoonInfoForm />
        </section>
    )
}
