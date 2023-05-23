import Image from 'next/image'
import React from 'react'

import style from '@/components/layouts/header/SearchHeader.module.css'
import { useRouter } from 'next/router'
import SearchBarSection from '@/components/pages/search/SearchBarSection';

export default function SearchHeader() {

  const { push } = useRouter();

  return (
    <>
      <header className={style.headerTop}>
        <div className={style.searchHeader}>
          <div className={style.searchlogo} onClick={() => (push('/'))}>
            <Image src={'/assets/images/logo/logo.svg'} alt="logo" width={200} height={77} priority />
          </div>
        </div>
        <SearchBarSection />
      </header>
    </>
  )
}