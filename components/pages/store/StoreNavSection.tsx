import React from 'react'
import { useRouter } from 'next/router';

import style from '@/components/pages/store/StoreNavSection.module.css'
import { staticStoreNavData } from '@/data/staticMenuData'

interface ItemType {
  id: number;
  name: string;
  link: string;
}

export default function StoreNavSection() {

  const router = useRouter();
  const { storeName } = router.query;

  return (
    <div className={style.navSection}>
      <nav>
        <ul>
          {
            staticStoreNavData.map((item: ItemType) => (
              <li
                key={item.id}
                className={storeName === item.link ? `${style.active}` : ''}
                onClick={
                  () => router.push(`/store/${item.link}`)
                }
              >
                {item.name}
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}