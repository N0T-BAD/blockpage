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
  const { categoryName } = router.query;
  const { typeId } = router.query;

  return (
    <div className={style.listviewWrap}>
      <ul className={categoryName === 'genre' ? `${style.listviewContent} ${style.listviewGenreContent}` : style.listviewContent}>
        {
          props.listType &&
          props.listType.map((nav: ItemType) => (
            <li
              key={nav.id}
              className={
                typeId === nav.link.split("/")[3]
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
