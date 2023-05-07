import React from 'react'
import style from '@/components/pages/webtoondelete/WebtoonDeleteMiddleSection.module.css'
import WebtoonDeleteInfo from './WebtoonDeleteInfo'

export default function WebtoonDeleteMiddleSection() {
    return (
        <section className={style.WebtoonDeleteMiddleSection}>
            <WebtoonDeleteInfo />
        </section>
    )
}
