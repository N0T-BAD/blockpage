import React from 'react'
import { useRouter } from 'next/router'

import BackBtn from '@/components/ui/BackBtn'
import style from '@/components/layouts/header/LoginHeader.module.css'

export default function LoginHeader() {

    const { push } = useRouter();

    return (
        <header className={style.headerSection}>
            <div className={style.LoginHeader}>
                <div className={style.leftHead}>
                    <BackBtn
                        onClick={() => push("/")}
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
