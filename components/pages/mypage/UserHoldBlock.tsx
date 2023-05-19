import React from 'react'
import style from '@/components/pages/mypage/UserHoldBlock.module.css'
import { HoldingBlockData } from '@/types/holdingBlockData';
import { holdingBlockData } from '@/data/holdingBlockData';
import BlockChargeButton from '@/components/pages/mypage/BlockChargeButton';

export default function UserHoldBlock() {

    return (
        <>
            {holdingBlockData.map((haveBlock: HoldingBlockData) => (
                <div className={style.HoldChargeBlock} key={haveBlock.id}>
                    <p className={style.HoldBlock}>{haveBlock.number}</p>
                    <p className={style.HoldBlocktxt}>보유 블럭</p>
                    <BlockChargeButton />
                </div>
            ))}
        </>
    )
}
