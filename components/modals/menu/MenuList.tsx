import React, { useState } from 'react'
import { useRouter } from 'next/router'

import style from "@/components/modals/menu/Menu.module.css"
import { StaticMenuListDataType } from '@/types/staticDataType';
import { staticMenuListData } from '@/data/staticMenuData';

export default function MenuList() {

  const router = useRouter();
  const [menuData] = useState<StaticMenuListDataType[]>(staticMenuListData);
  console.log(menuData)

  return (
    <ul className={style.menuList}>
      {
        menuData.map((data) => (
          <li key={data.link} onClick={() => router.push(data.link)}>{data.name}</li>
        ))
      }
    </ul>
  )
}