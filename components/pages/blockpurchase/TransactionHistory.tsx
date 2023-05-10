import React, { useState } from 'react'
import style from '@/components/pages/blockpurchase/TransactionHistory.module.css'
import { TransactionHistoryData } from '@/data/transactionHistoryData'

const TransectionHistory = () => {

  const [active, setActive] = useState('');

  const handleCategoryClick = (name: string) => {
    setActive(name);
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
                {category.chargesubcategories.map((subCategory) => (
                  <div className={style.subhistorybox} key={subCategory.subCategoryId}>
                    <p>{subCategory.date}</p>
                    <div className={style.chargeBlockBox}>
                      <p>구매</p>
                      <p className={style.chargeBoxContent}>{subCategory.purchase}</p>
                    </div>
                    <div className={style.chargeBlockBox}>
                      <p>잔여</p>
                      <p className={style.chargeBoxContent}>{subCategory.balance}</p>
                    </div>
                    <div className={style.chargeBlockBox}>
                      <p>금액</p>
                      <p className={style.chargeBoxContent}>{subCategory.amount}</p>
                    </div>
                  </div>
                ))}
              </>
              :
              category.name === '사용 내역' ?
                <>
                  {category.chargesubcategories.map((subCategory) => (
                    <div className={style.subhistorybox} key={subCategory.subCategoryId}>
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