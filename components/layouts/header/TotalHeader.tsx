import BackBtn from '@/components/ui/BackBtn'
import React, { useEffect, useState } from 'react'
import style from '@/components/layouts/header/TotalHeader.module.css'
import { useRouter } from 'next/router';

export default function TotalHeader() {

    const router = useRouter();

    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        const path = router.pathname;
        if (path === '/blockcharge') {
            setTitle('블럭 충전')
        } else if (path === '/authorregister') {
            setTitle('작가 등록')
        } else if (path === '/authorworkslist') {
            setTitle('작품 관리')
        } else if (path === '/webtooninfo') {
            setTitle('웹툰 등록')
        } else if (path === '/webtoondelete') {
            setTitle('웹툰 삭제')
        } else if (path === '/changewebtoon') {
            setTitle('웹툰 수정')
        } else if (path === '/episodelist') {
            setTitle('에피소드 조회')
        } else if (path === '/episodedelete') {
            setTitle('에피소드 삭제')
        } else if (path === '/changeuserinfo') {
            setTitle('회원정보 변경')
        } else if (path === '/episodeinfo') {
            setTitle('에피소드 등록')
        } else if (path === '/changeepisode') {
            setTitle('에피소드 수정')
        }
    })


    return (

        <header className={style.headerSection}>
            <div className={style.TotalHeader}>
                <div className={style.leftHead}>
                    <BackBtn />
                </div>
                <div className={style.centerHead}>
                    <p>{title}</p>
                </div>
                <div className={style.rightHead}></div>
            </div>
        </header>
    )
}
