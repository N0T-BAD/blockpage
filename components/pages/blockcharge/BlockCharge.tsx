import React, { use, useEffect, useState } from 'react'
import style from '@/components/pages/blockcharge/BlockCharge.module.css'
import { ChargeBlockData } from '@/types/chargeBlockData'
import { chargeBlockData } from '@/data/chargeBlockData'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function BlockCharge() {
  // const [block, setBlock] = useState<ChargeBlockData[]>(chargeBlockData)

  const handleblock = async () => {
    try {
      const block = {
        itemName: '블럭 20개',
        blockQuantity: 20,
        totalAmount: 1000,
      };

      const response = await axios.post('https://blockpage.site/block-service/v1/payments?type=kakao-ready', {
        itemName: block.itemName,
        blockQuantity: block.blockQuantity,
        totalAmount: block.totalAmount,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data.data);
      window.location.href = response.data.data.nextRedirectPcUrl;
      // useState(response.data);
    }
    catch (error) {
      console.error(error);

    }
  }

  const handleblock2 = async () => {
    try {
      const block = {
        itemName: '블럭 40개',
        blockQuantity: 40,
        totalAmount: 2000,
      };

      const response = await axios.post('https://blockpage.site/block-service/v1/payments?type=kakao-ready', {
        itemName: block.itemName,
        blockQuantity: block.blockQuantity,
        totalAmount: block.totalAmount,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data.data);
      window.location.href = response.data.data.nextRedirectPcUrl;
      // useState(response.data);
    }
    catch (error) {
      console.error(error);

    }
  }

  const handleblock3 = async () => {
    try {
      const block = {
        itemName: '블럭 (100 + 10)개',
        blockQuantity: 110,
        totalAmount: 5000,
      };

      const response = await axios.post('https://blockpage.site/block-service/v1/payments?type=kakao-ready', {
        itemName: block.itemName,
        blockQuantity: block.blockQuantity,
        totalAmount: block.totalAmount,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data.data);
      window.location.href = response.data.data.nextRedirectPcUrl;
      // useState(response.data);
    }
    catch (error) {
      console.error(error);

    }
  }

  return (
    <>
      <div className={style.ChargeBlock}>
        <div className={style.ChargeBlock__title}>
          <p>블럭 20개</p>
        </div>
        <div className={style.ChargeBlock_Button}>
          <button onClick={handleblock}>충전</button>
        </div>
      </div>
      <div className={style.ChargeBlock}>
        <div className={style.ChargeBlock__title}>
          <p>블럭 40개</p>
        </div>
        <div className={style.ChargeBlock_Button}>
          <button onClick={handleblock2}>충전</button>
        </div>
      </div>
      <div className={style.ChargeBlock}>
        <div className={style.ChargeBlock__title}>
          <p>블럭 (100 + 10)개</p>
        </div>
        <div className={style.ChargeBlock_Button}>
          <button onClick={handleblock3}>충전</button>
        </div>
      </div>
    </>
  )
}
