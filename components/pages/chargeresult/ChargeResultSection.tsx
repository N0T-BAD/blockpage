import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import style from '@/components/pages/chargeresult/ChargeResultSection.module.css'
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { ChargeBlock, ChargeBlockResponse } from '@/types/chargeBlockData';
import CompletePayMentSection from './CompletePayMentSection';

export default function ChargeResultSection() {

  const { data: session } = useSession()
  // const role = sessionStorage.getItem('role');

  const router = useRouter();
  const pgToken = router.query.pg_token;

  const handlego = async () => {
    axios.post('https://blockpage.site/block-service/v1/payments?type=kakao-approve', {
      pgToken: pgToken,
    }, {
      headers: {
        'Content-Type': 'application/json',
        memberId: session?.email,
        // role: role,
      },
    }
    )
      .then((res) => {
        const orderlist = res.data.data
        axios.post('https://blockpage.site/block-service/v1/blocks?type=cash', {
          orderId: orderlist.orderId,
          blockQuantity: orderlist.blockQuantity,
        }, {
          headers: {
            'Content-Type': 'application/json',
            memberId: session?.email,
            // role: role,
          },
        })
          .then((res) => {
            router.push('/completepayment')
            localStorage.setItem('orderdata', JSON.stringify(orderlist))
          })
      })
  }

  return (
    <section className={style.chargeresultsection}>
      <div className={style.chargeresult}>
        <p>충전을 계속 하려면</p>
        <p>확인 버튼을 눌러 주세요</p>
        <p><Image src={"/assets/images/icons/loading.gif"} alt={"loading"} width={20} height={20} /></p>
        <button onClick={handlego}>확인</button>
      </div>
    </section>
  )
}
