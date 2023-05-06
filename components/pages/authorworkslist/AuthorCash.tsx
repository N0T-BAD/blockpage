import React from 'react'
import style from '@/components/pages/authorworkslist/AuthorCash.module.css'

export default function AuthorCash() {
  return (
    <div className={style.AuthorCashBox}>
      <div className={style.AuthorName}>
        <p>출금 가능 블럭 : </p>
      </div>
      <div className={style.AuthorCash}>
        <p>4500</p>
      </div>
      <div className={style.AuthorButton}>
        <button>출금</button>
      </div>
    </div>
  )
}
