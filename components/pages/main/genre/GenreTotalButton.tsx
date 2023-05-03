import React from 'react'
import style from '@/components/pages/genre/GenreTotalButton.module.css'

export default function GenreTotalButton() {
  return (
    <div className={style.GenreTotal}>
      <button>전체보기 &gt;</button>
    </div>
  )
}
