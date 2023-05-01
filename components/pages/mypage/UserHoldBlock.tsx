import Image from 'next/image'
import React from 'react'
import style from '@/components/pages/mypage/UserHoldBlock.module.css'

export default function UserHoldBlock() {
    return (
        <div className={style.HoldChargeBlock}>
            <div className={style.HoldBlock}>
                <p>보유</p>
                <Image src={"/assets/images/mypage/Block.png"} alt={"Block"} width={40} height={30} />
                <p>X 100</p>
            </div>
            <button className={style.charge}>
                충전
            </button>
        </div>
    )
}
