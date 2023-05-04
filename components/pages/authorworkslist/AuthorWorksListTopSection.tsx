import React from 'react'
import style from '@/components/pages/authorworkslist/AuthorWorksListTopSection.module.css'
import UserNickName from '../mypage/UserNickName'
import UserIconAuthor from './UserIconAuthor'

export default function AuthorWorksListTopSection() {
  return (
    <section className={style.AuthorWorksListTopSection}>
      <UserIconAuthor />
      <UserNickName />
    </section>
  )
}
