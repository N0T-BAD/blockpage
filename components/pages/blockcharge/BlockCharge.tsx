import React, { useEffect, useState } from 'react'
import style from '@/components/pages/blockcharge/BlockCharge.module.css'
import { ChargeBlockData } from '@/types/chargeBlockData'
import { chargeBlockData } from '@/data/chargeBlockData'
import Link from 'next/link'

export default function BlockCharge() {


    return (
        <>
            {
                chargeBlockData.map((data: ChargeBlockData) => (
                    <div className={style.ChargeBlock}>
                        <div className={style.ChargeBlock__title}>
                            <p>블럭 {data.number}개</p>
                        </div>
                        <div className={style.ChargeBlock_Button}>
                            <Link href={data.path}>
                                <p>충전</p>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
