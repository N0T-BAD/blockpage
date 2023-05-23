import React from 'react'
import style from '@/components/pages/mypage/UserTopSection.module.css'
import UserNickName from '@/components/pages/mypage/UserNickName'
export default function UserTopSection() {
  return (
    <section className={style.UserTopSection}>
      <UserNickName />
    </section>
  )
}
