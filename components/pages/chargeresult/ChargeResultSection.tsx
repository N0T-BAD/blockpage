import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import style from '@/components/pages/chargeresult/ChargeResultSection.module.css'
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function ChargeResultSection() {

  const { data: session } = useSession()
  // const role = sessionStorage.getItem('role');

  const router = useRouter();
  const pgToken = router.query.pg_token;
  console.log(pgToken)

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
        localStorage.setItem('orderdata', JSON.stringify(res.data))
        router.push('/completepayment')
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
