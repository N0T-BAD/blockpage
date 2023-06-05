import React from 'react'
import style from '@/components/pages/episodeinfo/EpisodeInfoTopSection.module.css'
import AuthorNickName from '@/components/ui/AuthorNickName'

export default function EpisodeInfoTopSection() {
  return (
    <section className={style.EpisodeInfoTopSection}>
      <AuthorNickName />
    </section>
  )
}
