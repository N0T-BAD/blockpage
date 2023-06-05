import React, { Dispatch, KeyboardEvent, SetStateAction, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';

import style from '@/components/pages/search/SearchBar.module.css'
import BackBtn from '@/components/ui/BackBtn';

export default function SearchBar(props: { handleSearch: () => void, handleOnKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void, setValue: Dispatch<SetStateAction<string>> }) {

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        props.setValue(e.target.value)
    };

    return (
        <div className={style.SearchBar}>
            <div className={style.backBtn}>
                <BackBtn
                    onClick={() => router.back()}
                />
            </div>
            <div className={style.searchbarbg}>
                <input
                    className={style.searchinput}
                    placeholder='검색어를 입력해주세요.'
                    onChange={handleChange}
                    onKeyDown={props.handleOnKeyPress}
                />
                <Image src={"/assets/images/icons/search.svg"} alt={"search"} width={20} height={20} onClick={props.handleSearch} priority />
            </div>
        </div>
    )
}
