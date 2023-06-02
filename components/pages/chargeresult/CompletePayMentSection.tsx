import React, { use, useEffect, useState } from 'react'
import style from '@/components/pages/chargeresult/CompletePayMentSection.module.css'
import { ChargeBlockResponse } from '@/types/chargeBlockData'
import axios from 'axios'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useSession } from 'next-auth/react';


export default function CompletePayMentSection() {

  const router = useRouter();
  const { data: session } = useSession()
  // const role = sessionStorage.getItem('role');

  const [orderdata, setOrderData] = useState<ChargeBlockResponse>(
    {
      orderId: '',
      totalAmount: 0,
      itemName: '',
      approvedAt: '',
      blockQuantity: 0,
    }
  );


  console.log(orderdata)
  useEffect(() => {
    const orderlist = localStorage.getItem('orderdata') as string;
    setOrderData(JSON.parse(orderlist))
  }, [])

  const HandleSeccess = () => {
    router.push('/blockcharge')
  }

  if (!orderdata) {
    return null;
  }

  return (
    <section className={style.completepaymentsection}>
      {orderdata &&
        <div className={style.blockcomplete}>
          <div className={style.orderbox}>
            <Image src={"/assets/images/icons/love.gif"} alt={"complete"} width={50} height={50} priority />
            <p>충전이 완료 되었습니다.</p>
          </div>
          <div className={style.orderlistbox}>
            <p>입금 정보</p>
            <div className={style.orderinfo}>
              <p className={style.ordernumber}>주문 번호</p>
              <p>{orderdata.orderId}</p>
            </div>
            <div className={style.orderinfo}>
              <p className={style.ordernumber}>주문 시각</p>
              <p>{orderdata.approvedAt}</p>
            </div>
            <div className={style.orderinfo}>
              <p className={style.ordernumber}>상품명</p>
              <p>{orderdata.itemName}</p>
            </div>
            <div className={style.orderinfo}>
              <p className={style.ordernumber}>금액 </p>
              <p>{orderdata.totalAmount}원</p>
            </div>
          </div>
          <div className={style.completebtn}>
            <button onClick={HandleSeccess}>확인</button>
          </div>
        </div>
      }
    </section >
  )
}