import React, { useEffect, useState } from 'react'
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
        <div style={{ display: category.name === active ? 'block' : 'none' }}>
          {
            category.name === '충전 내역' ?
              <div key={category.chargesubcategories[0].subCategoryId}>
                <p>{category.chargesubcategories[0].date}</p>
                <div className={style.chargeBlockBox}>
                  <p>구매</p>
                  <p className={style.chargeBoxContent}>{category.chargesubcategories[0].purchase}</p>
                </div>
                <div className={style.chargeBlockBox}>
                  <p>잔여</p>
                  <p className={style.chargeBoxContent}>{category.chargesubcategories[0].balance}</p>
                </div>
                <div className={style.chargeBlockBox}>
                  <p>금액</p>
                  <p className={style.chargeBoxContent}>{category.chargesubcategories[0].amount}</p>
                </div>
              </div>
              :
              category.name === '사용 내역' ?
                <div key={category.chargesubcategories[1].subCategoryId}>
                  <p>{category.chargesubcategories[1].date}</p>
                  <div>
                    <p>{category.chargesubcategories[1].purchase}</p>
                  </div>
                  <div>
                    <p>{category.chargesubcategories[1].balance}</p>
                  </div>
                  <div className={style.chargeBlockBox}>
                    <p>대여</p>
                    <p className={style.chargeBoxContent}>{category.chargesubcategories[1].amount}</p>
                  </div>
                </div>
                : ""
          }
        </div>
      ))}
    </>
  )
}

export default TransectionHistory;