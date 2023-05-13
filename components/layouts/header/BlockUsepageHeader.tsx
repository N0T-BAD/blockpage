import BackBtn from '@/components/ui/BackBtn'
import Link from 'next/link'
import React from 'react'
import style from '@/components/layouts/header/BlockUsepageHeader.module.css'

export default function BlockUsepageHeader() {
    return (
        <header className={style.headerSection}>
            <div className={style.BlockChargeBox}>
                <div className={style.leftHead}>
                    <BackBtn />
                </div>
                <div className={style.centerHead}>
                    <p>블럭 이용 내역</p>
                </div>
                <div className={style.rightHead}>
                    <div className={style.rightHeadBox}>
                        <Link href={"/blockcharge"}>
                            <p>충전</p>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
