import React, { useEffect, useState } from 'react'
import style from '@/components/pages/blockpurchase/TransactionHistory.module.css'
import { TransactionHistoryData } from '@/data/transactionHistoryData'
import { BlockPurchase } from '@/types/chargeBlockData';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const TransectionHistory = () => {

  const { data: session } = useSession()
  // const role = sessionStorage.getItem('role');
  const [active, setActive] = useState('');
  const [chargeBlock, setChargeBlock] = useState<BlockPurchase>(
    {
      data: {
        itemName: '',
        totalAmount: 0,
        paymentTime: '',
        blockGainType: '',
      },
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
          console.log(res.data)
          setChargeBlock(res.data)
          console.log(chargeBlock.data)
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
                {chargeBlock &&
                  <div className={style.chargeBox} key={chargeBlock.data.paymentTime}>
                    <div className={style.subhistorybox}>
                      <p>{chargeBlock.data.paymentTime}</p>
                      <div className={style.chargeBlockBox}>
                        <p>구매</p>
                        <p className={style.chargeBoxContent}>{chargeBlock.data.itemName}</p>
                      </div>
                      <div className={style.chargeBlockBox}>
                        <p>금액</p>
                        <p className={style.chargeBoxContent}>{chargeBlock.data.totalAmount}</p>
                      </div>
                    </div>
                    <div className={style.refundBox}>
                      <button>환불하기</button>
                    </div>
                  </div>
                }
              </>
              :
              category.name === '사용 내역' ?
                <>
                  {category.expensesubcategories && category.expensesubcategories.map((subCategory) => (
                    <div className={style.UseBox} key={subCategory.subCategoryId}>
                      <p>{subCategory.date}</p>
                      <div>
                        <p>{subCategory.purchase}</p>
                      </div>
                      <div>
                        <p>{subCategory.balance}</p>
                      </div>
                      <div className={style.chargeBlockBox}>
                        <p>대여</p>
                        <p className={style.chargeBoxContent}>{subCategory.amount}</p>
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