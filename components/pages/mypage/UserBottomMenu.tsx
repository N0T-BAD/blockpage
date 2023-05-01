import Image from 'next/image'
import React from 'react'
import style from '@/components/pages/mypage/UserBottomMenu.module.css'

export default function UserBottomMenu() {
    return (
        <div className={style.UserMenu}>
            <Image src={"/assets/images/icons/jewelry.svg"} alt={"jewelry"} width={30} height={30} />
            <p>출석하기</p>
        </div>
    )
}
