import React from 'react'
import style from '@/components/pages/blockpurchase/BlockPurchaseTopSection.module.css'
import MyBlock from '@/components/pages/blockcharge/MyBlock'

export default function BlockPurchaseTopSection() {
  return (
    <section className={style.BlockPurchaseTopSection}>
      <MyBlock />
    </section>
  )
}
