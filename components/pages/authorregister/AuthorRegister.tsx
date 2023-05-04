import React from 'react'
import style from '@/components/pages/authorregister/AuthorRegister.module.css'

export default function AuthorRegister() {
  return (
    <div className={style.AuthorRegister}>
      <div className={style.AuthorName}>
        <p>작가명</p>
      </div>
      <div className={style.AuthorInput}>
        <input type='text' placeholder='작가명을 입력해주세요.' />
      </div>
      <div className={style.AuthorButton}>
        <button>작가 등록</button>
      </div>
    </div>
  )
}
