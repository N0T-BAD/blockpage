import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

import style from '@/components/layouts/header/StoreHeader.module.css'
import BackBtn from '@/components/ui/BackBtn'
import StoreNavSection from '@/components/pages/store/StoreNavSection';

export default function StoreHeader() {

  const router = useRouter();
  const { storeName } = router.query;
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    if (storeName === 'profileSkin') {
      setTitle('스토어')
    } else if (storeName === 'nft') {
      setTitle('스토어')
    }
  }, [storeName])

  return (
    <header className={style.headerSection}>
      <div className={style.storeHeader}>
        <div className={style.leftHead}>
          <BackBtn
            onClick={() => router.push('/')}
          />
        </div>
        <div className={style.centerHead}>
          <p>{title}</p>
        </div>
        <div className={style.rightHead}></div>
      </div>
      <StoreNavSection />
    </header>
  )
}
