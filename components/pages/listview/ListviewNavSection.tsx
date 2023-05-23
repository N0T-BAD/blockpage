import React from 'react'
import { useRouter } from 'next/router';

import style from '@/components/pages/listview/ListviewNavSection.module.css'
import { staticTopNavData } from '@/data/staticMenuData'

interface ItemType {
  id: number;
  name: string;
  link: string;
}

export default function ListviewNavSection() {

  const router = useRouter();
  const { categoryName } = router.query;
  return (
    <div className={style.navSection}>
      <nav>
        <ul>
          {
            staticTopNavData.map((item: ItemType) => (
              item.link === categoryName ? null : <li key={item.id} onClick={() => router.push(`/category/${item.link}`)}>{item.name}</li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}