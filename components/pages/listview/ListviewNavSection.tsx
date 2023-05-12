import React from 'react'
import style from '@/components/pages/listview/ListviewNavSection.module.css'
import { staticTopNavData } from '@/data/staticMenuData'
import { useRouter } from 'next/router';

interface ItemType {
  id: number;
  name: string;
  link: string;
}

export default function ListviewNavSection() {

  console.log(staticTopNavData)
  const router = useRouter();
  const { categoryName } = router.query;
  console.log(categoryName)
  return (
    <div className={style.navSection}>
      <nav>
        <ul>
          {
            staticTopNavData.map((item:ItemType) => (
              item.link === categoryName ? null :<li key={item.id} onClick={()=>router.push(`/category/${item.link}`)}>{item.name}</li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}