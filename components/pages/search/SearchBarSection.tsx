import React, { Dispatch, KeyboardEvent, SetStateAction } from 'react'

import SearchBar from '@/components/pages/search/SearchBar'
import style from '@/components/pages/search/SearchBarSection.module.css'

export default function SearchBarSection(props: {
    handleSearch: () => void,
    handleOnKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void,
    handleAddKeyword: (text: string) => void,
    setValue: Dispatch<SetStateAction<string>>
}) {
    return (
        <section className={style.SearchBar}>
            <SearchBar
                handleSearch={props.handleSearch}
                handleOnKeyPress={props.handleOnKeyPress}
                handleAddKeyword={props.handleAddKeyword}
                setValue={props.setValue} />
        </section>
    )
}