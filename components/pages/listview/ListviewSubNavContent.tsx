import Link from 'next/link';

import { useRouter } from 'next/router';

import { StaticNavData } from '@/types/staticDataType';
import style from '@/components/pages/listview/ListviewNavContent.module.css';

export default function ListviewSubNavContent(props: { listType: StaticNavData[] }) {

  const router = useRouter();

  return (
    <div className={style.listviewContent}>
      <ul>
        {
          props.listType &&
          props.listType.map((nav) => (
            <li
              key={nav.id}
              className={
                router.query.category === nav.link.split("=")[1]
                  ? `${style.active}`
                  : ""
              }
            >
              <Link href={nav.link}>{nav.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
