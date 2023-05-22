import Image from 'next/image'
import React from 'react'
import style from '@/components/pages/search/SearchBar.module.css'
import { useRouter } from 'next/router';
import BackBtn from '@/components/ui/BackBtn';


export default function SearchBar() {

    const router = useRouter();

    const handleSearch = () => {
        router.push('/searchresult');
    }

    return (
        <div className={style.SearchBar}>
            <BackBtn />
            <div className={style.searchbarbg}>
                <input className={style.searchinput} placeholder='검색어를 입력해주세요.'></input>
                <Image src={"/assets/images/icons/search.svg"} alt={"search"} width={20} height={20} onClick={handleSearch} />
            </div>
        </div>
    )
}
