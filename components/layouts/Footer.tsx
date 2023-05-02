import React from 'react'
import Image from 'next/image'
import style from '@/components/layouts/Footer.module.css'

export default function Footer() {
  return (
    <footer className={style.mainFooterWrap}>
      <div className={style.footerBtn}>
        <Image 
          src={'/assets/images/icons/search.svg'} 
          alt="footerBtnIcon" 
          width={50} 
          height={50} 
          priority 
        />
      </div>
    </footer>
  )
}
