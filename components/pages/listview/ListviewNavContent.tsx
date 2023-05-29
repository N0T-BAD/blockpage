import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

import style from '@/components/pages/listview/ListviewNavContent.module.css'
import { staticTopNavData } from '@/data/staticMenuData';
import { StaticNavData } from '@/types/staticDataType';

export default function ListviewNavContent() {

  const router = useRouter();
  const [navData] = useState<StaticNavData[]>(staticTopNavData);

  console.log(router.query)

  return (
    <div className={style.listviewContent}>
      <nav>
        <ul className={style.navContent}>
          {
            navData &&
            navData.map((nav) => (
              <li
                key={nav.id}
                className={
                  router.pathname === nav.link.split("?")[0]
                    ? `${style.active}`
                    : ""
                }
              >
                <Link href={nav.link}>{nav.name}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}
