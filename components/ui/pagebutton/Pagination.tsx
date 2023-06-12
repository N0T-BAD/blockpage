import React from 'react'
import style from '@/components/ui/pagebutton/Pagination.module.css'

interface Props {
  total: number;
  limit: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({ total, limit, page, setPage }: Props) {

  const numPages = Math.ceil(total / limit);

  return (
    <nav className={style.pagination}>
      {
        Array(limit)
          .fill(total, 0, numPages)
          .map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : undefined}
              className={page === i + 1 ? style.clickbtn : style.btn}
            >
              {i + 1}
            </button>
          ))}
    </nav>
  )
}