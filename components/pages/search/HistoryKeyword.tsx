import React, { useState } from 'react'
import Image from 'next/image';

import style from '@/components/pages/search/HistoryKeyword.module.css'
import { Keyword } from '@/types/searchKeywords';

export default function HistoryKeyword() {
    const [keywords, setKeywords] = useState<Keyword[]>([]);

    const handleRemoveKeyword = (id: number) => {
        const updatedKeywords = keywords.filter((keyword) => keyword.id !== id);
        setKeywords(updatedKeywords);
        localStorage.setItem('keyword', JSON.stringify(updatedKeywords));
    };

    const handleAllRemoveKeyword = () => {
        setKeywords([]);
        localStorage.removeItem('keyword');
    };

    return (
        <div className={style.historyWrap}>
            <div className={style.KeyWordTitle}>
                <p>최근 검색어</p>
                <p>전체 삭제</p>
            </div>
            <div className={style.historyBoxs}>
                <div className={style.historyBox}>
                    <div className={style.history}>
                        <p>이것이 법이다</p>
                        <Image src={"/assets/images/icons/close.svg"} alt={"close"} width={20} height={20} />
                    </div>
                </div>
                <div className={style.historyBox}>
                    <div className={style.history}>
                        <p>이것이</p>
                        <Image src={"/assets/images/icons/close.svg"} alt={"close"} width={20} height={20} />
                    </div>
                </div>
                <div className={style.historyBox}>
                    <div className={style.history}>
                        <p>이</p>
                        <Image src={"/assets/images/icons/close.svg"} alt={"close"} width={20} height={20} />
                    </div>
                </div>
                <div className={style.historyBox}>
                    <div className={style.history}>
                        <p>이</p>
                        <Image src={"/assets/images/icons/close.svg"} alt={"close"} width={20} height={20} />
                    </div>
                </div>
                <div className={style.historyBox}>
                    <div className={style.history}>
                        <p>이것이 법이다</p>
                        <Image src={"/assets/images/icons/close.svg"} alt={"close"} width={20} height={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}