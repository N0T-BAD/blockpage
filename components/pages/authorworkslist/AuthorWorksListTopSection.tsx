import React from 'react'
import style from '@/components/pages/authorworkslist/AuthorWorksListTopSection.module.css'
import AuthorNickName from '@/components/ui/AuthorNickName'

export default function AuthorWorksListTopSection() {
  return (
    <section className={style.AuthorWorksListTopSection}>
      <AuthorNickName />
    </section>
  )
}
