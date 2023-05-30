import React from 'react'
import style from '@/components/pages/blockcharge/BlockChargeMiddleSection.module.css'
import BlockCharge from '@/components/pages/blockcharge/BlockCharge'

export default function BlockChargeMiddleSection() {
  return (
    <section className={style.BlockChargeMiddleSection}>
      <BlockCharge />
    </section>
  )
}
