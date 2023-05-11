import React from 'react'

import style from '@/components/layouts/header/CommentHeader.module.css'
import BackBtn from '@/components/ui/BackBtn'

export default function CommentHeader() {
  return (
    <section className={style.headerSection}>
      <div className={style.leftHead}>
        <BackBtn />
      </div>
      <div className={style.centerHead}>
        <p>세화, 가는 길 6화</p>
      </div>
      <div className={style.rightHead}></div>
    </section>
  )
}
