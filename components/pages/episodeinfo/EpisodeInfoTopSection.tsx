import React from 'react'
import style from '@/components/pages/episodeinfo/EpisodeInfoTopSection.module.css'
import UserNickName from '@/components/pages/mypage/UserNickName'
import UserIcon from '@/components/pages/mypage/UserIcon'

export default function EpisodeInfoTopSection() {
  return (
    <section className={style.EpisodeInfoTopSection}>
      <UserIcon />
      <UserNickName />
    </section>
  )
}
