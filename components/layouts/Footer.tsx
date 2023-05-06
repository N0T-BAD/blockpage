import React from 'react'
import Image from 'next/image'
import style from '@/components/layouts/Footer.module.css'
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();

  const handleSearch = () => {
    router.push("/search");
  }

  return (
    <footer className={style.mainFooterWrap}>
      <div className={style.footerBtn}>
        <Image
          src={'/assets/images/icons/search.svg'}
          alt="footerBtnIcon"
          width={50}
          height={50}
          priority
          onClick={handleSearch}
        />
      </div>
    </footer>
  )
}
