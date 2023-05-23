import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'
import style from '@/components/layouts/webtoonlistfooter/WebtoonListFooter.module.css'

export default function WebtoonListFooter() {

  const router = useRouter();

  return (
    <footer className={style.AuthorFooterWrap}>
      <div className={style.footerBtn} onClick={() => router.push("/webtooninfo")}>
        <Image
          src={'/assets/images/icons/plus.svg'}
          alt="footerBtnIcon"
          width={50}
          height={50}
          priority
        />
      </div>
    </footer>
  )
}
