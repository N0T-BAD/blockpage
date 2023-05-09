import React from 'react'
import style from '@/components/pages/changeepisode/ChangeEpisodeTopSection.module.css'
import UserNickName from '@/components/pages/mypage/UserNickName'

export default function ChangeEpisodeTopSection() {
  return (
    <section className={style.ChangeEpisodeTopSection}>
      <UserNickName />
    </section>
  )
}
