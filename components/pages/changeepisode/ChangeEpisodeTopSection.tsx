import React from 'react'
import style from '@/components/pages/changeepisode/ChangeEpisodeTopSection.module.css'
import AuthorNickname from '@/components/ui/AuthorNickName'

export default function ChangeEpisodeTopSection() {
  return (
    <section className={style.ChangeEpisodeTopSection}>
      <AuthorNickname />
    </section>
  )
}
