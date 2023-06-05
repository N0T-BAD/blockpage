import React from 'react'

import { useRouter } from 'next/router';

import BackBtn from '@/components/ui/BackBtn'
import style from '@/components/layouts/header/TotalHeader.module.css'

export default function EpisodeChangeHeader() {

    const router = useRouter();

    return (

        <header className={style.headerSection}>
            <div className={style.TotalHeader}>
                <div className={style.leftHead}>
                    <BackBtn
                        onClick={() => router.back()}
                    />
                </div>
                <div className={style.centerHead}>
                    <p>에피소드 수정</p>
                </div>
                <div className={style.rightHead}></div>
            </div>
        </header>
    )
}