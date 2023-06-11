import React, { Dispatch, SetStateAction } from 'react'
import HistoryKeyword from '@/components/pages/search/HistoryKeyword'
import style from '@/components/pages/search/HistorySection.module.css'
import { Keyword } from '@/types/searchKeywords'

export default function HistorySection(props: {
    keywords: Keyword[],
    handleRemoveKeyword: (id: number) => void,
    handleAllRemoveKeyword: () => void,
    handleSearch: (keyword: string) => void,
    setValue: Dispatch<SetStateAction<string>>,
}) {
    return (
        <section className={style.historySection}>
            <HistoryKeyword
                keywords={props.keywords}
                handleRemoveKeyword={props.handleRemoveKeyword}
                handleAllRemoveKeyword={props.handleAllRemoveKeyword}
                handleSearch={props.handleSearch}
                setValue={props.setValue}
            />
        </section>
    )
}
