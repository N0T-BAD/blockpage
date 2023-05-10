import React from 'react'
import SearchBar from '@/components/pages/search/SearchBar'
import style from '@/components/pages/search/SearchBarSection.module.css'

export default function SearchBarSection() {
    return (
        <section className={style.SearchBar}>
            <SearchBar />
        </section>
    )
}