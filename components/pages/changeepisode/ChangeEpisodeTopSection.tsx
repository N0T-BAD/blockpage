import React from 'react'
import style from '@/components/pages/episodeinfo/ChangeEpisodeTopSection.module.css'
import UserNickName from '@/components/pages/mypage/UserNickName'
import UserIcon from '@/components/pages/mypage/UserIcon'

export default function ChangeEpisodeTopSection() {
  return (
    <section className={style.ChangeEpisodeTopSection}>
      <UserIcon />
      <UserNickName />
    </section>
  )
}
