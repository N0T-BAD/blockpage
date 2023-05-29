import React, { useEffect, useState } from 'react'
import style from '@/components/pages/blockcharge/MyBlock.module.css'
import Image from 'next/image'
import { TotalBlock } from '@/types/chargeBlockData'
import axios from 'axios'
import { useSession } from 'next-auth/react'

export default function MyBlock() {

  const { data: session } = useSession()
  // const role = sessionStorage.getItem('role');

  const [totalBlock, setTotalBlock] = useState<TotalBlock>({
    data: {
      totalBlocks: 0,
    }
  })

  useEffect(() => {
    axios.get("https://blockpage.site/block-service/v1/blocks", {
      headers: {
        'Content-Type': 'application/json',
        memberId: session?.email,
        // role: role,
      },
    })
      .then((res) => {
        setTotalBlock(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

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