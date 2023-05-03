import React, { useState } from 'react'
import style from '@/components/pages/blockpurchase/TransactionHistory.module.css'
import { TransactionHistoryData } from '@/data/transactionHistoryData'
import { transactionHistoryData } from '@/types/transactionHistoryData'

export default function TransectionHistory() {
  const [active, setActive] = useState('');

  const handleCategoryClick = (name: string) => {
    setActive(name);
  }

  return (
    <>
      <div className={style.HistoryCategory}>
        <nav>
          <ul>
            {TransactionHistoryData.map((data: transactionHistoryData) => (
              <li
                key={data.id}
                className={data.name === active ? `${style.active}` : ""}
                onClick={() => handleCategoryClick(data.name)}
              >
                {data.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
