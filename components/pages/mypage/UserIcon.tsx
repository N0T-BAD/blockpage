import React from 'react'
import style from '@/components/pages/mypage/UserIcon.module.css'
import { useRouter } from 'next/router'

export default function UserIcon() {
    const router = useRouter();

    const RouterUrl = router.pathname === "/webtooninfo" || router.pathname === "/authorworkslist" || router.pathname === "/webtoondelete" || router.pathname === "/episodelist" || router.pathname === "/episodeinfo"
        || router.pathname === "/episodedelete";

    return (
        <div className={style.reader_box}>
            {router.pathname === "/mypage" ?
                <div className={style.reader}>
                    <p>독자</p>
                </div>
                :
                RouterUrl ?
                    <div className={style.author}>
                        <p>작가</p>
                    </div>
                    :
                    <></>
            }
        </div>
    )
}
