import Image from 'next/image'
import React from 'react'
import style from '@/components/pages/search/SearchBar.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link';


export default function SearchBar() {

    const router = useRouter();

    const handleBack = () => {
        router.back();
    }
    return (
        <div className={style.SearchBar}>
            <Image src={"/assets/images/icons/back.svg"} alt={"back"} width={20} height={20} onClick={handleBack} />
            <div className={style.searchbarbg}>
                <input className={style.searchinput} placeholder='검색어를 입력해주세요.'></input>
                <Image src={"/assets/images/icons/search.svg"} alt={"search"} width={20} height={20} />
            </div>
        </div>
    )
}
