import React from 'react'
import style from '@/components/pages/webtooninfo/AuthorWebtooninfoBottomSection.module.css'
import AuthorWebtoonInfoForm from './AuthorWebtoonInfoForm'

export default function AuthorWebtooninfoBottomSection() {
    return (
        <section className={style.AuthorWebtooninfoBottomSection}>
            <AuthorWebtoonInfoForm />
        </section>
    )
}
