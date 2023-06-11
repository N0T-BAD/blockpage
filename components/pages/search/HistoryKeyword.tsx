import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image';

import style from '@/components/pages/search/HistoryKeyword.module.css'
import { Keyword } from '@/types/searchKeywords';

export default function HistoryKeyword(props: {
    keywords: Keyword[],
    handleRemoveKeyword: (id: number) => void,
    handleAllRemoveKeyword: () => void,
    handleSearch: (keyword: string) => void,
    setValue: Dispatch<SetStateAction<string>>,
}) {
    const keywords = props.keywords;

    return (
        <div className={style.historyWrap}>
            <div className={style.KeyWordTitle}>
                <p>최근 검색어</p>
                {
                    keywords.length ?
                        (<div onClick={props.handleAllRemoveKeyword}>
                            <p>전체 삭제</p>
                        </div>)
                        : ""
                }
            </div>
            <div className={style.historyBoxs}>
                {
                    keywords.length ? (
                        keywords.map((item) => (
                            <div className={style.historyBox} key={item.id}>
                                <div className={style.history}>
                                    <div onClick={() => {
                                        console.log('클릭')
                                        props.setValue(item.keyword);
                                        props.handleSearch(item.keyword);
                                    }}>
                                        <p>{item.keyword}</p>
                                    </div>
                                    <div>
                                        <Image
                                            src={"/assets/images/icons/close.svg"}
                                            alt={"close"}
                                            width={20}
                                            height={20}
                                            onClick={() => props.handleRemoveKeyword(item.id)}
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : ""
                }
            </div>
        </div>
    )
}