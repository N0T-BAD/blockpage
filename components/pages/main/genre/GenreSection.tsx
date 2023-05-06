import React from 'react'
import GenreTopBanner from './GenreTopBanner'
import style from '@/components/pages/genre/GenreSection.module.css'
import GenreTotalButton from './GenreTotalButton'

export default function GenreSection() {
    return (
        <section className={style.GenreSection}>
            <GenreTopBanner />
            <GenreTotalButton />
        </section>
    )
}
