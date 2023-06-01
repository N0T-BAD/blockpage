import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

import style from '@/components/layouts/header/CategoryHeader.module.css'
import BackBtn from '@/components/ui/BackBtn'
import ListviewNavSection from '@/components/pages/listview/ListviewNavSection';
import ListviewSubNav from '@/components/pages/listview/ListviewSubNav';
import { staticGenreNavData, staticWeekNavData } from '@/data/staticMenuData';
import { StaticNavData } from '@/types/staticDataType';

export default function CategoryHeader() {

  const router = useRouter();
  const { categoryName } = router.query;
  const [title, setTitle] = useState<string>('');
  const [listType, setListType] = useState<StaticNavData[]>([]);

  useEffect(() => {
    if (categoryName === 'week') {
      setTitle('요일별 웹툰')
      setListType(staticWeekNavData);
    } else if (categoryName === 'genre') {
      setTitle('장르별 웹툰')
      setListType(staticGenreNavData);
    } else if (categoryName === 'best') {
      setTitle('베스트 웹툰')
    }
  }, [categoryName])

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
      <ListviewNavSection />
      {
        categoryName === 'week' ?
          <ListviewSubNav
            listType={listType}
          />
          : ""
      }
      {
        categoryName === 'genre' ?
          <ListviewSubNav
            listType={listType}
          />
          : ""
      }
    </header>
  )
}
