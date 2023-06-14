import React, { useEffect } from 'react'
import style from '@/components/pages/mypage/UserHoldBlock.module.css'
import { HoldingBlockData } from '@/types/holdingBlockData';
import { holdingBlockData } from '@/data/holdingBlockData';
import BlockChargeButton from '@/components/pages/mypage/BlockChargeButton';
import axios from 'axios';
import { TotalBlock } from '@/types/chargeBlockData';
import { useRecoilState } from 'recoil';
import blockAtom from '@/state/block/blockatom';
import { useSession } from 'next-auth/react';

export default function UserHoldBlock() {

  const { data: session } = useSession()
  // const role = sessionStorage.getItem('role');

  const [totalBlock, setTotalBlock] = useRecoilState<TotalBlock>(blockAtom)

  useEffect(() => {
    const fetchTotalBlock = async () => {
      try {
        const res = await axios.get("https://blockpage.site/block-service/v1/blocks", {
          headers: {
            'Content-Type': 'application/json',
            memberId: session?.email,
            // role: role,
          },
        });
        const totalBlocks = res.data.data.totalBlocks;
        setTotalBlock({
          data: {
            totalBlocks,
          },
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchTotalBlock();
  }, [session, setTotalBlock])

  return (
    <>
      {totalBlock &&
        <div className={style.HoldChargeBlock}>
          <p className={style.HoldBlock}>{totalBlock.data.totalBlocks}</p>
          <p className={style.HoldBlocktxt}>보유 블럭</p>
          <BlockChargeButton />
        </div>
      }
    </>
  )
}
