import React, { useEffect, useState } from 'react'
import style from '@/components/pages/blockcharge/MyBlock.module.css'
import Image from 'next/image'
import { TotalBlock } from '@/types/chargeBlockData'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import blockAtom from '@/state/block/blockatom'
import { useRecoilState } from 'recoil'

export default function MyBlock() {

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
    <div className={style.MyBlockbg}>
      {totalBlock &&
        <div className={style.MyBlock}>
          <Image src={'/assets/images/icons/Block.svg'} alt="block" width={30} height={25} />
          <div className={style.block}>
            <p>보유 블럭</p>
            <p>{totalBlock.data.totalBlocks}</p>
          </div>
        </div>
      }
    </div>
  )
}