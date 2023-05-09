import React from 'react'
import GenreTopBanner from './GenreTopBanner'
import style from '@/components/pages/main/genre/GenreSection.module.css'
import GenreTotalButton from '@/components/pages/main/genre/GenreTotalButton'

export default function GenreSection() {
    return (
        <section className={style.GenreSection}>
            <GenreTopBanner />
            <GenreTotalButton />
        </section>
    )
}
