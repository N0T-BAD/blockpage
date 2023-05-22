import BackBtn from '@/components/ui/BackBtn'
import React from 'react'
import style from '@/components/layouts/header/MypageHeader.module.css'
import Image from 'next/image'

export default function MypageHeader() {
    return (
        <header className={style.headerSection}>
            <div className={style.MypageHeader}>
                <div className={style.leftHead}>
                    <BackBtn />
                </div>
                <div className={style.centerHead}>
                    <p>마이페이지</p>
                </div>
                <div className={style.rightHead}>
                    <Image src={"/assets/images/icons/logout.svg"} alt={"로그아웃"} width={19.5} height={19.5} />
                </div>
            </div>
        </header >
    )
}
