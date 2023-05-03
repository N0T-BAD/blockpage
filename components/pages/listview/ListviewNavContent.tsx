import React, { useState } from 'react'
import style from '@/components/pages/listview/ListviewNavContent.module.css'
import { topNavData } from '@/data/dummy/navData';
import { StaticNavData } from '@/types/staticDataType';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ListviewNavContent() {

  const router = useRouter();
  const [navData] = useState<StaticNavData[]>(topNavData);

  return (
    <div className={style.listviewContent}>
      <nav>
        <ul>
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
