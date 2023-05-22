import React from 'react'
import style from '@/components/pages/changeepisode/ChangeEpisodeBottomSection.module.css'
import ChangeEpisodeInfoForm from '@/components/pages/changeepisode/ChangeEpisodeInfoForm'

export default function ChangeEpisodeBottomSection() {
  return (
    <section className={style.ChangeEpisodeBottomSection}>
      <ChangeEpisodeInfoForm />
    </section>
  )
}
