import React from 'react'
import TransectionHistory from '@/components/pages/blockpurchase/TransactionHistory'
import style from '@/components/pages/blockpurchase/TransactionHistorySection.module.css'


export default function TransactionHistorySection() {

  return (
    <section className={style.TransactionHistorySection}>
      <TransectionHistory />
    </section>
  )
}