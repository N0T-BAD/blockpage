import React from 'react'
import { useRouter } from 'next/router';

import style from '@/components/pages/webtoonarchive/ArchiveNavSection.module.css'
import { staticArchiveMenuData } from '@/data/staticMenuData'

interface ItemType {
  id: number;
  name: string;
  link: string;
}

export default function ArchiveNavSection() {

  console.log(staticArchiveMenuData)
  const router = useRouter();
  const { archiveName } = router.query;
  console.log(archiveName)
  return (
    <div className={style.navSection}>
      <nav>
        <ul>
          {
            staticArchiveMenuData.map((item: ItemType) => (
              item.link === archiveName ? null : <li key={item.id} onClick={() => router.push(`/webtoonarchive/${item.link}`)}>{item.name}</li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}