import React from 'react'
import style from '@/components/pages/changewebtoon/ChangeWebtoonMiddleSection.module.css'
import ChangeWebtoonForm from '@/components/pages/changewebtoon/ChangeWebtoonForm'

export default function ChangeWebtoonMiddleSection() {
    return (
        <section className={style.ChangeWebtoonMiddleSection}>
            <ChangeWebtoonForm />
        </section>
    )
}
