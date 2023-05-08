import React from 'react'
import style from '@/components/pages/episodeinfo/EpisodeInfoTopSection.module.css'
import UserIcon from '../mypage/UserIcon'
import UserNickName from '../mypage/UserNickName'

export default function EpisodeInfoTopSection() {
  return (
    <section className={style.EpisodeInfoTopSection}>
      <UserIcon />
      <UserNickName />
    </section>
  )
}
