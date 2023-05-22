import React from 'react'
import style from '@/components/pages/authorworkslist/AuthorWorksListTopSection.module.css'
import UserNickName from '@/components/pages/mypage/UserNickName'

export default function AuthorWorksListTopSection() {
  return (
    <section className={style.AuthorWorksListTopSection}>
      <UserNickName />
    </section>
  )
}
