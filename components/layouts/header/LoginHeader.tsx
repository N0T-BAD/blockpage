import BackBtn from '@/components/ui/BackBtn'
import React from 'react'
import style from '@/components/layouts/header/LoginHeader.module.css'
import { useRouter } from 'next/router'

export default function LoginHeader() {

    const router = useRouter();
    return (
        <header className={style.headerSection}>
            <div className={style.LoginHeader}>
                <div className={style.leftHead}>
                    <BackBtn
                        onClick={() => router.back}
                    />
                </div>
                <div className={style.centerHead}>
                    <p>로그인</p>
                </div>
                <div className={style.rightHead}></div>
            </div>
        </header>
    )
}
