import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

import style from '@/components/layouts/header/ArchiveHeader.module.css'
import BackBtn from '@/components/ui/BackBtn'
import ArchiveNavSection from '@/components/pages/webtoonarchive/ArchiveNavSection';

export default function ArchiveHeader() {

  const router = useRouter();
  const { archiveName } = router.query;
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    if (archiveName === 'history') {
      setTitle('최근 감상')
    } else if (archiveName === 'favorite') {
      setTitle('찜한 작품')
    } else if (archiveName === 'purchase') {
      setTitle('구매 작품')
    }
  }, [archiveName])

  return (
    <header className={style.headerSection}>
      <div className={style.navHeader}>
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
      <ArchiveNavSection />
    </header>
  )
}
