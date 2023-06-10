import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router';

import BackBtn from '@/components/ui/BackBtn'
import style from '@/components/layouts/header/TotalHeader.module.css'

export default function TotalHeader() {

    const router = useRouter();

    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        const path = router.pathname;
        if (path === '/blockcharge' || path === '/chargeresult') {
            setTitle('블럭 충전')
        } else if (path === '/authorregister') {
            setTitle('작가 등록')
        } else if (path === '/authorworkslist') {
            setTitle('작품 관리')
        } else if (path === '/webtooninfo') {
            setTitle('웹툰 등록')
        } else if (path === '/episodedelete') {
            setTitle('에피소드 삭제')
        } else if (path === '/changeuserinfo') {
            setTitle('회원정보 변경')
        } else if (path === '/completepayment') {
            setTitle('결제 완료')
        } else if (path === '/game') {
            setTitle('게임')
        } else if (path === '/store') {
            setTitle('스토어')
        } else if (path === '/game/roulette') {
            setTitle('룰렛 게임')
        } else if (path === '/game/lotto') {
            setTitle('로또 게임')
        }
    }, [router.pathname])

    return (

        <header className={style.headerSection}>
            <div className={style.TotalHeader}>
                <div className={style.leftHead}>
                    {router.pathname === '/completepayment' ?
                        ""
                        :
                        <>
                            {router.pathname === '/blockcharge' || router.pathname === '/authorworkslist' || router.pathname === '/authorregister' ?
                                <BackBtn
                                    onClick={() => router.push('/mypage')}
                                />
                                :
                                <BackBtn
                                    onClick={() => router.back()}
                                />
                            }
                        </>
                    }
                </div>
                <div className={style.centerHead}>
                    <p>{title}</p>
                </div>
                <div className={style.rightHead}></div>
            </div>
        </header>
    )
}