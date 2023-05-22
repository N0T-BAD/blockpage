import Image from 'next/image'
import React from 'react'

import style from '@/components/layouts/header/SearchHeader.module.css'
import { useRouter } from 'next/router'

export default function SearchHeader() {

  const { push } = useRouter();

  return (
    <header className={style.searchHeader}>
      <div className={style.searchlogo}>
        <Image src={'/assets/images/logo/logo.svg'} alt="logo" width={200} height={77} onClick={() => (push('/'))} />
      </div>
    </header>
  )
}