import Image from 'next/image'
import React from 'react'
import style from '@/components/pages/mypage/UserHoldBlock.module.css'
import { useRouter } from 'next/router'
import { HoldingBlockData } from '@/types/holdingBlockData';
import { holdingBlockData } from '@/data/holdingBlockData';
import BlockChargeButton from '@/components/pages/mypage/BlockChargeButton';

export default function UserHoldBlock() {

    const router = useRouter();

    const onClickCharge = () => {
        console.log("충전하기")
        router.push("/blockcharge")
    }

    return (
        <div className={style.HoldChargeBlock}>
            {holdingBlockData.map((haveBlock: HoldingBlockData) => (
                <>
                    <div className={style.HoldBlock} key={haveBlock.id}>
                        <p>보유</p>
                        <Image src={"/assets/images/mypage/Block.png"} alt={"Block"} width={35} height={25} />
                        <p>X {haveBlock.number}</p>
                    </div>
                    <BlockChargeButton />
                </>
            ))}
        </div>
    )
}
