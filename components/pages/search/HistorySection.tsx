import React from 'react'
import HistoryKeyword from '@/components/pages/search/HistoryKeyword'
import style from '@/components/pages/search/HistorySection.module.css'

export default function HistorySection() {
    return (
        <section className={style.historySection}>
            <HistoryKeyword />
        </section>
    )
}
