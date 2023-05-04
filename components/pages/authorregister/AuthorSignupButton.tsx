import React from 'react'
import style from '@/components/pages/authorregister/AuthorSignupButton.module.css'
import { useRouter } from 'next/router';

export default function AuthorSignupButton() {

  const router = useRouter();

  return (
    <div className={style.AuthorSignupButtonBox}>
      <button className={style.AuthorSignupButton}>작가 등록</button>
    </div>
  )
}
