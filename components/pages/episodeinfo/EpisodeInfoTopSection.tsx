import React from 'react'
import style from '@/components/pages/episodeinfo/EpisodeInfoTopSection.module.css'
import UserNickName from '@/components/pages/mypage/UserNickName'

export default function EpisodeInfoTopSection() {
  return (
    <section className={style.EpisodeInfoTopSection}>
      <UserNickName />
    </section>
  )
}
