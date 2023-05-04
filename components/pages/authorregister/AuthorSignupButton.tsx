import React from 'react'
import style from '@/components/pages/authorregister/AuthorSignupButton.module.css'

export default function AuthorSignupButton() {
  return (
    <div className={style.AuthorSignupButtonBox}>
      <button className={style.AuthorSignupButton}>작가 등록</button>
    </div>
  )
}
