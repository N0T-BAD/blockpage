import React, { useEffect, useState } from 'react'
import style from '@/components/pages/blockpurchase/TransactionHistory.module.css'
import { TransactionHistoryData } from '@/data/transactionHistoryData'
import { BlockPurchase, UseBlock } from '@/types/chargeBlockData';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const TransectionHistory = () => {

  const { data: session } = useSession()
  // const role = sessionStorage.getItem('role');
  const [active, setActive] = useState('');
  const [chargeBlock, setChargeBlock] = useState<BlockPurchase>(
    {
      data: [{
        itemName: '',
        totalAmount: 0,
        paymentTime: '',
        blockGainType: '',
      }],
    }
  )
  const [useBlock, setUseBlock] = useState<UseBlock>(
    {
      data: [{
        itemName: '',
        blockQuantity: 0,
        paymentTime: '',
        blockLossType: '',
      }],
    }
  )

  const handleCategoryClick = (name: string) => {
    setActive(name);
    if (name === '충전 내역') {
      axios.get("https://blockpage.site/block-service/v1/payments?type=gain", {
        headers: {
          'Content-Type': 'application/json',
          memberId: session?.email,
          // role: role,
        },
      })
        .then((res) => {
          console.log(res)
          setChargeBlock(res.data)
          console.log(chargeBlock)
          console.log(chargeBlock)
        })
        .catch((err) => {
          console.log(err)
        })
    } else if (name === '사용 내역') {
      axios.get("https://blockpage.site/block-service/v1/payments?type=loss", {
        headers: {
          'Content-Type': 'application/json',
          memberId: session?.email,
          // role: role,
        },
      })
        .then((res) => {
          console.log(res.data)
          setUseBlock(res.data)
          console.log(useBlock)
          console.log(useBlock.data[0])
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <>
      <div className={style.HistoryCategory}>
        <nav>
          <ul>
            {TransactionHistoryData.map((category) => (
              <li
                key={category.id}
                className={category.name === active ? `${style.active}` : ""}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {TransactionHistoryData.map((category) => (
        <div className={category.name === active ? `${style.Clickactive}` : `${style.NoClickactive}`} key={category.id}>
          {
            category.name === '충전 내역' ?
              <>
                {chargeBlock.data.map((chargeItem, index) => (
                  <div className={style.chargeBox} key={index}>
                    <div className={style.subhistorybox}>
                      <p>{chargeItem.paymentTime}</p>
                      <div className={style.chargeBlockBox}>
                        <p>상품명</p>
                        <p className={style.chargeBoxContent}>{chargeItem.itemName}</p>
                      </div>
                      <div className={style.chargeBlockBox}>
                        <p>충전 금액</p>
                        <p className={style.chargeBoxContent}>{chargeItem.totalAmount}</p>
                      </div>
                      <div className={style.chargeBlockBox}>
                        <p>충전 타입</p>
                        <p className={style.chargeBoxContent}>{chargeItem.blockGainType}</p>
                      </div>
                    </div>
                    <div className={style.refundBox}>
                      <button>환불하기</button>
                    </div>
                  </div>
                ))}
              </>
              :
              category.name === '사용 내역' ?
                <>
                  {useBlock.data.map((useItem, index) => (
                    <div className={style.UseBox} key={index}>
                      <p>{useItem.paymentTime}</p>
                      <div className={style.chargeBlockBox}>
                        <p>사용 블럭</p>
                        <p className={style.chargeBoxContent}>{useItem.blockQuantity}개</p>
                      </div>
                      <div className={style.chargeBlockBox}>
                        <p>사용 내역</p>
                        <p className={style.chargeBoxContent}>{useItem.itemName}</p>
                      </div>
                      <div className={style.chargeBlockBox}>
                        <p>블럭 사용 타입</p>
                        <p className={style.chargeBoxContent}>{useItem.blockLossType}</p>
                      </div>
                    </div>
                  ))}
                </>
                : ""
          }
        </div >
      ))}
    </>
  )
}

export default TransectionHistory;