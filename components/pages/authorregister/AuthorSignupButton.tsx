import React from 'react'
import style from '@/components/pages/authorregister/AuthorSignupButton.module.css'
import { useRouter } from 'next/router';

export default function AuthorSignupButton() {

  const router = useRouter();

  const handleAuthorSignup = () => {
    router.push('/authorworkslist')
  }

  return (
    <div className={style.AuthorSignupButtonBox}>
      <button className={style.AuthorSignupButton} onClick={handleAuthorSignup}>작가 등록</button>
    </div>
  )
}
