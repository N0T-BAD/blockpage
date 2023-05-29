import Link from 'next/link';
import { useRouter } from 'next/router';

import { StaticNavData } from '@/types/staticDataType';
import style from '@/components/pages/listview/ListviewSubNav.module.css';

interface ItemType {
  id: number;
  name: string;
  link: string;
}

export default function ListviewSubNav(props: { listType: StaticNavData[] }) {

  const router = useRouter();
  const week = router.query.week;

  const name = "/category/week/0";

  return (
    <div className={style.listviewWrap}>
      <ul className={style.listviewContent}>
        {
          props.listType &&
          props.listType.map((nav: ItemType) => (
            <li
              key={nav.id}
              className={
                week === nav.link.split("/")[3]
                  ? `${style.active}`
                  : ""
              }
              onClick={() => router.push(`${nav.link}`)}
            >
              {nav.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
