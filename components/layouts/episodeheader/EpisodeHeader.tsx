import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router';

import BackBtn from '@/components/ui/BackBtn'
import style from '@/components/layouts/header/TotalHeader.module.css'

interface EpisodeListProps {
    webtoonId: number;
}

export default function TotalHeader({ webtoonId }: EpisodeListProps) {

    const router = useRouter();

    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        const path = router.pathname;
        if (path === `/episodelist/${webtoonId}`) {
            setTitle('에피소드 조회')
        }
    }, [router.pathname])


    return (

        <header className={style.headerSection}>
            <div className={style.TotalHeader}>
                <div className={style.leftHead}>
                    <BackBtn
                        onClick={() => router.back()}
                    />
                </div>
                <div className={style.centerHead}>
                    <p>{title}</p>
                </div>
                <div className={style.rightHead}></div>
            </div>
        </header>
    )
}