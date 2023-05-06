import React from 'react'
import style from '@/components/pages/authorworkslist/AuthorWorksListTopSection.module.css'
import UserNickName from '../mypage/UserNickName'
import UserIcon from '../mypage/UserIcon'

export default function AuthorWorksListTopSection() {
  return (
    <section className={style.AuthorWorksListTopSection}>
      <UserIcon />
      <UserNickName />
    </section>
  )
}
