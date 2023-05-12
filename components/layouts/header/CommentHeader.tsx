import React, { useEffect, useState } from 'react'

import style from '@/components/layouts/header/CommentHeader.module.css'
import BackBtn from '@/components/ui/BackBtn'
import { useRouter } from 'next/router';
import ListviewNavSection from '@/components/pages/listview/ListviewNavSection';

export default function CommentHeader() {
  
  const router = useRouter();
  const { categoryName } = router.query;
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    if(categoryName === 'week') {
      setTitle('요일별 웹툰')
    } else if(categoryName === 'genre') {
      setTitle('장르별 웹툰')
    } else if(categoryName === 'best') {
      setTitle('베스트 웹툰')
    }
  }, [categoryName])

  return (
    <header className={style.headerSection}>
      <div className={style.navHeader}>
        <div className={style.leftHead}>
          <BackBtn />
        </div>
        <div className={style.centerHead}>
          <p>{title}</p>
        </div>
        <div className={style.rightHead}></div>
      </div>
      <ListviewNavSection />
    </header>
  )
}
